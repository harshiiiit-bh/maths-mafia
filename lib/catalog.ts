import data from "@/data/chapters.json";

export type Chapter = (typeof data)[number];

export const chapters = data;

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}

export function filterChapters(query: string, category = "All") {
  const q = query.trim().toLowerCase();
  return chapters.filter((chapter) => {
    const categoryMatches = category === "All" || chapter.category === category;
    const queryMatches = !q || [chapter.title, chapter.subtitle, chapter.category].some((item) => item.toLowerCase().includes(q));
    return categoryMatches && queryMatches;
  });
}
