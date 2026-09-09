import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function Hero({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="relative h-96 flex items-center justify-center">
      {blok.image?.filename && (
        <Image
          src={blok.image.filename}
          alt={blok.heading || "Hero image"}
          fill
          className="object-cover -z-10"
        />
      )}
      <h1 className="text-white text-4xl font-bold">{blok.heading}</h1>
    </section>
  );
}