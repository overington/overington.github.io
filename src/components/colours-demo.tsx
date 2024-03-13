export default function ColourDemo() {
  const colour_options_list = [
    "primary",
    "secondary",
    "destructive",
    "muted",
    "accent",
    "popover",
    "card",
    "border",
    "input",
    "ring",
    "background",
    "foreground",
  ];
  return (
    <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
      <div className="aspect-video items-center">
        <p>
          <b>Unstyled</b> Here is some text Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quae cupiditate ipsum non aliquid
          blanditiis esse illum explicabo assumenda error qui, debitis veritatis
          dicta, accusantium beatae velit sit excepturi aspernatur
          reprehenderit.
        </p>
      </div>

      <div className="bg-primary text-primary-foreground aspect-video items-center">
        <p>
          <b>Primary</b> Here is some text Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quae cupiditate ipsum non aliquid
          blanditiis esse illum explicabo assumenda error qui, debitis veritatis
          dicta, accusantium beatae velit sit excepturi aspernatur
          reprehenderit.
        </p>
      </div>

      <div className="bg-secondary text-secondary-foreground aspect-video items-center">
        <p>
          <b>Secondary</b> Here is some text Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quae cupiditate ipsum non aliquid
          blanditiis esse illum explicabo assumenda error qui, debitis veritatis
          dicta, accusantium beatae velit sit excepturi aspernatur
          reprehenderit.
        </p>
      </div>

      <div className="bg-destructive text-destructive-foreground aspect-video items-center">
        <p>
          <b>Destructive</b> Here is some text Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quae cupiditate ipsum non aliquid
          blanditiis esse illum explicabo assumenda error qui, debitis veritatis
          dicta, accusantium beatae velit sit excepturi aspernatur
          reprehenderit.
        </p>
      </div>

      <div className="bg-muted text-muted-foreground aspect-video items-center">
        <p>
          <b>Muted</b> Here is some text Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quae cupiditate ipsum non aliquid blanditiis esse
          illum explicabo assumenda error qui, debitis veritatis dicta,
          accusantium beatae velit sit excepturi aspernatur reprehenderit.
        </p>
      </div>

      <div className="bg-accent text-accent-foreground aspect-video items-center">
        <p>
          <b>Accent</b> Here is some text Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quae cupiditate ipsum non aliquid
          blanditiis esse illum explicabo assumenda error qui, debitis veritatis
          dicta, accusantium beatae velit sit excepturi aspernatur
          reprehenderit.
        </p>
      </div>

      <div className="bg-popover text-popover-foreground aspect-video items-center">
        <p>
          <b>Popover</b> Here is some text Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quae cupiditate ipsum non aliquid
          blanditiis esse illum explicabo assumenda error qui, debitis veritatis
          dicta, accusantium beatae velit sit excepturi aspernatur
          reprehenderit.
        </p>
      </div>

      <div className="bg-card text-card-foreground aspect-video items-center">
        <p>
          <b>Card</b> Here is some text Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quae cupiditate ipsum non aliquid blanditiis esse
          illum explicabo assumenda error qui, debitis veritatis dicta,
          accusantium beatae velit sit excepturi aspernatur reprehenderit.
        </p>
      </div>

      <div className="bg-border text-border-foreground aspect-video items-center">
        <p>
          <b>Border</b> Here is some text Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quae cupiditate ipsum non aliquid
          blanditiis esse illum explicabo assumenda error qui, debitis veritatis
          dicta, accusantium beatae velit sit excepturi aspernatur
          reprehenderit.
        </p>
      </div>

      <div className="bg-input text-input-foreground aspect-video items-center">
        <p>
          <b>Input</b> Here is some text Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quae cupiditate ipsum non aliquid blanditiis esse
          illum explicabo assumenda error qui, debitis veritatis dicta,
          accusantium beatae velit sit excepturi aspernatur reprehenderit.
        </p>
      </div>
    </div>
  );
}
