import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

import Nav from "./Nav";

export default function SiteHeader() {
  return (
    <header className={cn("bg-primary text-primary-foreground text-center md:text-left relative")}>
      <div className={cn("container flex-grid md:flex md:flex-row items-center gap-6 py-6")}>
        <div>
        <Avatar className={cn("flex-none m-auto my-6 w-40 md:w-32 lg:w-40")}>
          <AvatarImage src="https://github.com/overington-ds.png" />
          <AvatarFallback>SO</AvatarFallback>
        </Avatar>

        </div>

        <div className={cn("flex-grow")}>
          <h1 className={cn("text-2xl font-bold lg:text-3xl")}>
            Samuel Overington
          </h1>
          <h3 className={cn("text-lg font-semibold lg:text-xl")}>
            Machine Learning Research Engineer
          </h3>
        </div>
        <div className={cn("flex-row flex lg:flex-none gap-6")}>
          <Nav className="flex gap-6 content-center flex-row mx-auto" />
          <div className="absolute top-6 right-6 md:static">
            <ModeToggle  />
          </div>
        </div>
      </div>
    </header>
  );
}
