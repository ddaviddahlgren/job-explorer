import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

export default function NavItem({ blok }) {
  let href = "#";
  if (blok.link?.cached_url) {
    href = blok.link.linktype === "url"
      ? blok.link.cached_url
      : `/${blok.link.cached_url}`;
  }

  return (
    <Link href={href} {...storyblokEditable(blok)}>
      {blok.label}
    </Link>
  );
}