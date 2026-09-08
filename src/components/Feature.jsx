import { storyblokEditable } from "@storyblok/react/rsc";

export default function Feature({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="feature">
      <span>{blok.name}</span>
    </div>
  );
}