import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function Hero({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="relative h-96 flex flex-col items-center justify-center gap-4">
      {blok.image?.filename && (
        <Image
          src={blok.image.filename}
          alt={blok.heading || "Hero image"}
          fill
          className="object-cover -z-10"
        />
      )}
      <h1 className="text-white text-4xl font-bold">{blok.heading}</h1>

      <form action="/jobs" method="get" className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          name="q"
          placeholder="Sök jobb..."
          className="flex-1 px-4 py-2 rounded"
        />
        <button type="submit" className="bg-black text-white px-6 py-2 rounded">
          Sök
        </button>
      </form>
    </section>
  );
}