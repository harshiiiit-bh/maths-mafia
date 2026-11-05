import Link from "next/link";
import { ArrowUpRight, BookOpen, FolderPlus, Search, Sparkles } from "lucide-react";
import { PageHeading } from "@/components/section-heading";

export const metadata = { title: "Learning space" };

export default function LearnPage() {
  return <>
    <PageHeading eyebrow="LEARN AT YOUR OWN PACE" title="Your learning space." description="The chapter browser and lesson structure are ready. The actual chapters and study material will be added later." />
    <section className="empty-content-panel">
      <div className="empty-content-art"><BookOpen size={35}/><span>∑</span><i/></div>
      <span className="eyebrow">CHAPTER LIBRARY</span>
      <h2>Ready for your first chapter.</h2>
      <p>No chapters or lesson data have been added. When you provide your notes and chapter structure, this space will become your searchable learning library.</p>
      <div className="empty-feature-row"><span><Search size={15}/> Chapter search</span><span><FolderPlus size={15}/> Topic folders</span><span><Sparkles size={15}/> Lesson layouts</span></div>
      <Link href="/math-lab" className="button button-primary">Explore Math Lab <ArrowUpRight size={15}/></Link>
    </section>
    <div className="empty-skeleton-grid" aria-hidden="true"><div/><div/><div/></div>
  </>;
}
