// src/app/jobs/[slug]/page.jsx
import { notFound } from "next/navigation";
import { getStoryblokApi } from "@/lib/storyblok";
import { renderRichText } from "@storyblok/react/rsc";

export default async function JobDetailPage({ params }) {
  const { slug } = await params;
  const story = await fetchJob(slug);

  if (!story) {
    notFound();
  }

  const content = story.content;
  const htmlContent = renderRichText(content.content);

  return (
    <article className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
      <p className="text-gray-600 mb-1">{content.summary}</p>
      <div className="flex gap-3 text-sm text-gray-500 mb-6">
        <span>{content.location}</span>
        <span>{content.department}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
}

async function fetchJob(slug) {
  const storyblokApi = getStoryblokApi();
  try {
    const { data } = await storyblokApi.get(`cdn/stories/jobs/${slug}`, {
      version: "draft",
    });
    return data.story;
  } catch (error) {
    return null;
  }
}