import Link from "next/link";
import { ArrowLeft, FilePlus2, Lightbulb, ListTree, Sparkles } from "lucide-react";

// GitHub Pages serves a static export, so the blank chapter template is
// generated explicitly. Real chapter slugs can be added when study material
// is supplied; no sample chapter content is created here.
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: "chapter-template" }];
}

export default async function ChapterTemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapterLabel = decodeURIComponent(slug).replace(/[-_]/g, " ").replace(/\\b\\w/g, (letter) => letter.toUpperCase());
  return <>
    <Link href="/learn" className="back-link"><ArrowLeft size={15}/> Learning space</Link>
    <section className="chapter-template-hero"><div className="chapter-template-symbol">∑</div><div><span className="eyebrow">CHAPTER WORKSPACE TEMPLATE</span><h1>{chapterLabel || "New chapter"}</h1><p>This is a blank chapter template. No lesson text, formulas, examples or questions are attached.</p></div></section>
    <div className="chapter-template-grid">
      <section className="surface-card"><span className="eyebrow">LESSON STRUCTURE</span><h2>Topic outline</h2><p className="muted-copy">The lesson list will appear here after chapter material is supplied.</p><div className="empty-inline"><ListTree size={22}/><strong>No topics added</strong><span>Topic cards and lesson navigation are ready for content.</span></div></section>
      <aside className="chapter-aside"><div className="tip-card"><Lightbulb size={19}/><h3>Designed for understanding</h3><p>Future lessons can combine explanations, diagrams, interactive examples and practice activities.</p></div><div className="empty-tool-card"><FilePlus2 size={20}/><strong>Material slot</strong><span>Notes and questions will be connected here later.</span><Sparkles size={16}/></div></aside>
    </div>
  </>;
}
