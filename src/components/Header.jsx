import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import Image from "next/image";

export default function Header({ blok }) {
    return (
        <header {...storyblokEditable(blok)} className="flex items-center justify-between px-8 py-4">
            {blok.logo?.filename && (
                <Image src={blok.logo.filename} alt="Logo" width={120} height={40} />
            )}
            <nav className="flex gap-6">
                {blok.nav_items?.map((nestedBlok) => (
                    <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
            </nav>
        </header>
    )
}