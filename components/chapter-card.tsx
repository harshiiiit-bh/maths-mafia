import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import { ProgressBar } from "@/components/progress-bar";
import type { Chapter } from "@/lib/catalog";

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  return <article className="chapter-card">
    <Link href={"/learn/" + chapter.slug} className={"chapter-art chapter-art-" + chapter.accent}>
      <span className="chapter-art-index">{String(chapter.number).padStart(2, "0")}</span>
      <span className="chapter-art-formula">{chapter.formula}</span>
      <i className="chapter-art-orbit" />
      <span className="chapter-art-open"><ArrowUpRight size={16} /></span>
    </Link>
    <div className="chapter-card-body">
      <div className="chapter-card-meta"><span>CHAPTER {String(chapter.number).padStart(2, "0")}</span><span>{chapter.category}</span></div>
      <h3><Link href={"/learn/" + chapter.slug}>{chapter.title}</Link></h3>
      <p>{chapter.subtitle}</p>
      <div className="chapter-card-stats"><span><BookOpen size={13} /> {chapter.topics} topics</span><span><Clock3 size={13} /> {chapter.minutes} min</span></div>
      <ProgressBar value={chapter.progress} tone={chapter.progress === 100 ? "mint" : "violet"} label={chapter.title + " progress"} />
      <div className="chapter-card-bottom"><span>{chapter.progress ? chapter.progress + "% complete" : "Ready when you are"}</span><Link href={"/learn/" + chapter.slug} aria-label={"Open " + chapter.title}><ArrowUpRight size={16} /></Link></div>
    </div>
  </article>;
}
