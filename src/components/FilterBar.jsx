import { storyblokEditable } from "@storyblok/react";

export default function FilterBar({ blok, searchParams }) {
  const params = searchParams || {};
  const currentDepartment = params.department || "";
  const currentQuery = params.q || "";

  return (
    <div
      {...storyblokEditable(blok)}
      className="filter-bar flex gap-4 items-center mb-6"
    >
      <form method="get" className="flex gap-2 items-center">
        <select name="department" defaultValue={currentDepartment}>
          <option value="">All departments</option>
          <option value="hr-rep">Human Rezourcez</option>
          <option value="ux-designer">UX-Designer</option>
          <option value="fontend-developer">Frontend developer</option>
        </select>
        <input type="hidden" name="q" value={currentQuery} />
        <button type="submit">Filter jobs</button>
      </form>

      <form method="get" className="flex gap-2 items-center">
        <input
          type="text"
          name="q"
          defaultValue={currentQuery}
          placeholder="Search jobs.."
        />
        <input type="hidden" name="department" value={currentDepartment} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
