import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default async function JobsPage({ searchParams }) {
  const params = await searchParams;
  const { data } = await fetchData();

  return (
    <div className="jobs-page">
      <StoryblokServerComponent
        blok={data.story.content}
        searchParams={params}
      />
    </div>
  );
}

async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/jobs", { version: "draft" });
}
