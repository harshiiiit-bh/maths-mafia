import { BookOpen, Clock3, Layers3, Sparkles } from "lucide-react";
import { PageHeading } from "@/components/section-heading";
import { ChapterExplorer } from "@/components/chapter-explorer";
import { chapters } from "@/lib/catalog";
export const metadata = { title: "Explore chapters" };
export default function LearnPage() {
 const done = chapters.filter((c) => c.progress === 100).length;
 const active = chapters.filter((c) => c.progress > 0 && c.progress < 100).length;
 return <><PageHeading eyebrow="THE CLASS 10 PLAYBOOK" title="Explore mathematics." description="Fourteen chapters, organised into a clear path. Start anywhere, or pick up right where you left off."/><div className="learning-summary">
  <div><span className="summary-icon summary-violet"><BookOpen size={19}/></span><span><strong>14 chapters</strong><small>The full learning journey</small></span></div>
  <div><span className="summary-icon summary-mint"><Sparkles size={19}/></span><span><strong>{done} completed</strong><small>Foundations in place</small></span></div>
  <div><span className="summary-icon summary-orange"><Clock3 size={19}/></span><span><strong>{active} in progress</strong><small>Keep building momentum</small></span></div>
  <div><span className="summary-icon summary-blue"><Layers3 size={19}/></span><span><strong>6 topic areas</strong><small>Explore by concept</small></span></div>
 </div><ChapterExplorer/></>;
}
