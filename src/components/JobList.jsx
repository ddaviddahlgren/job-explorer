import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function JobList({ blok, searchParams }) {
  const params = (await searchParams) || {};
  const jobs = await fetchJobs(params);

  return (
    <div {...storyblokEditable(blok)} className="job-list flex flex-col gap-4">
      {jobs.length === 0 && <p>No available jobs.</p>}
      {jobs.map((job) => (
        <Link
          key={job.uuid}
          href={`/jobs/${job.slug}`}
          className="border p-4 rounded hover:bg-gray-50"
        >
          <h2 className="font-semibold text-lg">{job.content.title}</h2>
          <p className="text-gray-600">{job.content.summary}</p>
          <div className="flex gap-3 text-sm text-gray-500 mt-2">
            <span>{job.content.location}</span>
            <span>{job.content.department}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

async function fetchJobs(params) {
    const storyblokApi = getStoryblokApi()
    const query = {
        version: "draft",
        starts_with: "jobs/",
        content_type: "job-post"
    }

    if (params.department) {
        query.filter_query = {
            department: { in: params.department },
        }
    }

    if (params.q) {
        query.search_term = params.q
    }

    const { data } = await storyblokApi.get("cdn/stories", query)
    return data.stories
}