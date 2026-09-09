import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Footer({ blok }) {
  return (
    <footer {...storyblokEditable(blok)} className="px-8 py-6 mt-auto border-t">
      <nav className="flex gap-4 mb-4">
        {blok.essential_links?.map((nestedBlok) => (
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </nav>
      <div>
        <p>{blok.newsletter_heading}</p>
        <form className="flex gap-2 mt-2">
          <input type="email" placeholder="Your email" className="border px-2 py-1" />
          <button type="submit" className="bg-black text-white px-4 py-1">Sign up</button>
        </form>
      </div>
    </footer>
  );
}