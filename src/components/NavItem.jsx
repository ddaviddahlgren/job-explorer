import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function NavItem({ blok }) {
    const href = blok.link?.cached_url ? `/${blok.link.cached_url}` : "#"
    return (
        <Link href={href} {...storyblokEditable(blok)}>
            {blok.label}
        </Link>
    )
}