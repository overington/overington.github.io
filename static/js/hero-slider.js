(() => {
    const sliders = document.querySelectorAll(".hero--slider");

    sliders.forEach((slider) => {
        const track = slider.querySelector(".hero__slides");
        const slides = [...slider.querySelectorAll(".hero__slide")];
        const dots = [...slider.querySelectorAll("[data-hero-slide-control]")];
        const previous = slider.querySelector("[data-hero-previous]");
        const next = slider.querySelector("[data-hero-next]");

        if (!track || slides.length < 2) {
            return;
        }

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        let currentIndex = 0;
        let scrollFrame = null;

        const updateControls = (index) => {
            currentIndex = index;

            dots.forEach((dot, dotIndex) => {
                dot.setAttribute(
                    "aria-current",
                    dotIndex === index ? "true" : "false"
                );
            });
        };

        const goTo = (index) => {
            const nextIndex =
                (index + slides.length) % slides.length;

            track.scrollTo({
                left: slides[nextIndex].offsetLeft,
                behavior: reducedMotion.matches ? "auto" : "smooth",
            });

            updateControls(nextIndex);
        };

        previous?.addEventListener("click", () => {
            goTo(currentIndex - 1);
        });

        next?.addEventListener("click", () => {
            goTo(currentIndex + 1);
        });

        dots.forEach((dot) => {
            dot.addEventListener("click", () => {
                goTo(Number(dot.dataset.heroSlideControl));
            });
        });

        track.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                goTo(currentIndex - 1);
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                goTo(currentIndex + 1);
            }
        });

        track.addEventListener(
            "scroll",
            () => {
                if (scrollFrame !== null) {
                    return;
                }

                scrollFrame = window.requestAnimationFrame(() => {
                    const index = Math.round(
                        track.scrollLeft / track.clientWidth
                    );

                    updateControls(index);
                    scrollFrame = null;
                });
            },
            { passive: true }
        );
    });
})();
