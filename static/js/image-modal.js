(() => {
    const dialog = document.querySelector("[data-image-modal]");

    if (!dialog || typeof dialog.showModal !== "function") {
        return;
    }

    const modalImage = dialog.querySelector("[data-image-modal-image]");
    const modalHeader = dialog.querySelector("[data-image-modal-header]");
    const modalTitle = dialog.querySelector("[data-image-modal-title]");
    const closeButton = dialog.querySelector("[data-image-modal-close]");
    const previousButton = dialog.querySelector("[data-image-modal-previous]");
    const nextButton = dialog.querySelector("[data-image-modal-next]");
    const dotsContainer = dialog.querySelector("[data-image-modal-dots]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let gallery = [];
    let currentIndex = 0;
    let returnFocus = null;

    const syncHeroSlider = (trigger) => {
        const slider = trigger.closest(".hero--slider");
        const track = slider?.querySelector(".hero__slides");
        const slide = trigger.closest(".hero__slide");

        if (!track || !slide) {
            return;
        }

        track.scrollTo({
            left: slide.offsetLeft,
            behavior: reducedMotion.matches ? "auto" : "smooth",
        });
    };

    const updateDots = () => {
        [...dotsContainer.querySelectorAll("button")].forEach((dot, index) => {
            dot.setAttribute(
                "aria-current",
                index === currentIndex ? "true" : "false"
            );
        });
    };

    const buildDots = () => {
        dotsContainer.replaceChildren();

        if (gallery.length < 2) {
            dotsContainer.hidden = true;
            return;
        }

        gallery.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.setAttribute("aria-label", `Show image ${index + 1}`);
            dot.setAttribute("aria-current", "false");

            const marker = document.createElement("span");
            marker.setAttribute("aria-hidden", "true");
            dot.append(marker);
            dot.addEventListener("click", () => showImage(index));
            dotsContainer.append(dot);
        });

        dotsContainer.hidden = false;
    };

    const showImage = (index) => {
        if (gallery.length === 0) {
            return;
        }

        currentIndex = (index + gallery.length) % gallery.length;
        const trigger = gallery[currentIndex];
        const source = trigger.dataset.imageModalSrc || trigger.href;
        const sliderLabel = trigger.dataset.imageModalLabel?.trim() || "";

        modalImage.src = source;
        modalImage.alt = trigger.dataset.imageModalAlt || "";
        modalTitle.textContent = sliderLabel;
        modalHeader.hidden = !sliderLabel;
        if (sliderLabel) {
            dialog.setAttribute("aria-labelledby", "image-modal-title");
        } else {
            dialog.removeAttribute("aria-labelledby");
        }

        const hasNavigation = gallery.length > 1;
        previousButton.hidden = !hasNavigation;
        nextButton.hidden = !hasNavigation;
        dotsContainer.hidden = !hasNavigation;
        updateDots();

        syncHeroSlider(trigger);
    };

    const openModal = (trigger) => {
        const slider = trigger.closest(".hero--slider");
        gallery = slider
            ? [...slider.querySelectorAll("[data-image-modal-trigger]")]
            : [trigger];
        currentIndex = Math.max(0, gallery.indexOf(trigger));
        returnFocus = trigger;

        buildDots();
        showImage(currentIndex);
        dialog.showModal();
        closeButton.focus({ preventScroll: true });
    };

    document.addEventListener("click", (event) => {
        const target = event.target instanceof Element
            ? event.target
            : event.target.parentElement;
        const trigger = target?.closest("[data-image-modal-trigger]");

        if (
            !trigger
            || event.defaultPrevented
            || event.button !== 0
            || event.metaKey
            || event.ctrlKey
            || event.shiftKey
            || event.altKey
        ) {
            return;
        }

        event.preventDefault();
        openModal(trigger);
    });

    previousButton.addEventListener("click", () => {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        showImage(currentIndex + 1);
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    dialog.addEventListener("keydown", (event) => {
        if (gallery.length < 2) {
            return;
        }

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            showImage(currentIndex - 1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            showImage(currentIndex + 1);
        }
    });

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    dialog.addEventListener("close", () => {
        modalImage.removeAttribute("src");
        modalImage.alt = "";
        modalTitle.textContent = "";
        modalHeader.hidden = true;
        dialog.removeAttribute("aria-labelledby");
        dotsContainer.replaceChildren();
        dotsContainer.hidden = true;
        previousButton.hidden = true;
        nextButton.hidden = true;
        gallery = [];
        currentIndex = 0;

        if (returnFocus?.isConnected) {
            returnFocus.focus({ preventScroll: true });
        }

        returnFocus = null;
    });
})();
