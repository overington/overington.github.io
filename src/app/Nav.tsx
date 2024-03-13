import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Nav({className}: {className?: string}) {
    return (
        <nav className={cn("prose-a prose-a:hover prose-slate", className)}>
            <Link href="/">Home</Link>
            <Link href="/page">Page</Link>
        </nav>
    );
}