import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Grid({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="grid">
      {blok.columns?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}