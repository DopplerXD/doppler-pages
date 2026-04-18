import { redirect } from "next/navigation";

const staticDocSlugs = [
  "index",
  "algorithm/index",
  "tech/index",
  "dev/index",
  "dev/tree-command",
  "leetcode/index",
  "resource/index",
  "resource/good-web",
  "notes/clean-code",
] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return staticDocSlugs.map((slug) => ({
    slug: slug.split("/"),
  }));
}

export default function DocSlugPage() {
  redirect("/");
}
