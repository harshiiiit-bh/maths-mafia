import { Brain, CheckCircle2, CircleHelp, SlidersHorizontal, Sparkles } from "lucide-react";
import { PageHeading } from "@/components/section-heading";
import { PracticeSetup } from "@/components/feature-workspaces";

export const metadata = { title: "Practice studio" };

export default function PracticePage() {
  return <>
    <PageHeading eyebrow="BUILD A PRACTICE SESSION" title="Practice studio." description="Configure how a future question session should feel. The question bank is intentionally empty." action={<span className="status-pill">NO QUESTION DATA</span>} />
    <div className="practice-summary"><div><span className="summary-icon summary-violet"><SlidersHorizontal size={18}/></span><span><strong>Session controls</strong><small>Choose a practice format</small></span></div><div><span className="summary-icon summary-mint"><CheckCircle2 size={18}/></span><span><strong>Feedback layout</strong><small>Designed for explanations</small></span></div><div><span className="summary-icon summary-orange"><CircleHelp size={18}/></span><span><strong>Question canvas</strong><small>Waiting for your questions</small></span></div></div>
    <div className="practice-layout"><section className="surface-card practice-main"><div className="section-heading"><div><span className="eyebrow">SESSION CONFIGURATION</span><h2>Set up your practice space.</h2><p>These choices change the workspace preview only. No questions are included.</p></div></div><PracticeSetup/></section><aside className="practice-sidebar"><div className="practice-message"><span><Brain size={21}/></span><small>DESIGNED FOR FOCUS</small><h3>Build a routine that works for you.</h3><p>Practice sessions will support different question formats, review states, marking and explanation layouts once content is connected.</p></div><div className="practice-note"><Sparkles size={17}/><p>Nothing is preloaded. This is a clean practice interface, not a sample quiz.</p></div></aside></div>
  </>;
}
