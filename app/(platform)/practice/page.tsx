import { Brain, CheckCircle2, Flame, Sparkles, Target } from "lucide-react";
import { PageHeading } from "@/components/section-heading";
import { PracticeQuiz } from "@/components/practice-quiz";
export const metadata = { title: "Practice zone" };
export default function PracticePage() {
 return <><PageHeading eyebrow="TRAIN YOUR THINKING" title="Practice with purpose." description="Short, focused questions that help you turn what you know into what you can solve." action={<span className="status-pill">DEMO MODE</span>}/>
  <div className="practice-summary"><div><span className="summary-icon summary-violet"><Target size={18}/></span><span><strong>5 sample questions</strong><small>Across core topics</small></span></div><div><span className="summary-icon summary-mint"><CheckCircle2 size={18}/></span><span><strong>Instant feedback</strong><small>Understand each answer</small></span></div><div><span className="summary-icon summary-orange"><Flame size={18}/></span><span><strong>One round at a time</strong><small>Consistency beats cramming</small></span></div></div>
  <div className="practice-layout"><section className="surface-card practice-main"><div className="section-heading"><div><span className="eyebrow">QUICK CONCEPT CHECK</span><h2>Let's warm up your brain.</h2><p>Choose an answer, check your reasoning, and move at your own pace.</p></div></div><PracticeQuiz/></section><aside className="practice-sidebar"><div className="practice-message"><span><Brain size={21}/></span><small>A SMALL REMINDER</small><h3>Don't rush to the answer. Understand the reason.</h3><p>Each question is a chance to notice a pattern, connect an idea, or strengthen a foundation.</p></div><div className="practice-note"><Sparkles size={17}/><p>This interactive set is demo content. Your own questions will be added later.</p></div></aside></div>
 </>;
}
