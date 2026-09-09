import { getStoryblokApi } from "@/lib/storyblok"
import { StoryblokServerComponent } from "@storyblok/react/rsc"

export default async function JobsPage({ searchParams }) {
    const params = await searchParams
    const { data } = await fetchData()

    return (
        <div className="jobs-page">
            <StoryblokServerComponent
                blok={data.story.content}
                department={params.department}
                q={params.q}
            />
        </div>
    )
}

async function fetchData() {
    const storyblokApi = getStoryblokApi()
    return await storyblokApi.get("cdn/stories/jobs", { version: "draft" })
}