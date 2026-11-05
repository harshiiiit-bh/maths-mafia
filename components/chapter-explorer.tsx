"use client";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ChapterCard } from "@/components/chapter-card";
import { chapters, filterChapters } from "@/lib/catalog";

const categories = ["All", "Number systems", "Algebra", "Geometry", "Trigonometry", "Mensuration", "Data handling"];

export function ChapterExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => filterChapters(query, category), [query, category]);
  return <div className="explorer">
    <div className="explorer-toolbar"><label className="explorer-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a chapter or topic" /><kbd>⌘ K</kbd></label><span className="explorer-count">{filtered.length} of {chapters.length} chapters</span></div>
    <div className="category-row" aria-label="Filter by chapter category"><SlidersHorizontal size={15} />{categories.map((item) => <button key={item} className={"category-chip" + (category === item ? " category-chip-active" : "")} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    {filtered.length ? <div className="chapter-grid">{filtered.map((chapter) => <ChapterCard key={chapter.slug} chapter={chapter} />)}</div> : <div className="empty-state"><span><Search size={22} /></span><h3>No chapters found</h3><p>Try another search term or clear your filters.</p><button className="button button-outline" onClick={() => { setQuery(""); setCategory("All"); }}><X size={15} /> Clear filters</button></div>}
  </div>;
}
