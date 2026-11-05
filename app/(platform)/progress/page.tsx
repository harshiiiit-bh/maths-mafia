import { Activity, ChartNoAxesCombined, Clock3, Target, Trophy } from "lucide-react";
import { PageHeading, SectionHeading } from "@/components/section-heading";

export const metadata = { title: "Progress centre" };

export default function ProgressPage() {
 return <>
  <PageHeading eyebrow="YOUR LEARNING JOURNEY" title="Progress centre." description="The analytics interface is ready, but it will stay empty until real learning activity exists." action={<span className="status-pill">NO ACTIVITY DATA</span>}/>
  <div className="progress-empty-banner"><span><ChartNoAxesCombined size={24}/></span><div><strong>Your progress starts here.</strong><p>No sessions, streaks, scores or completion records have been created. This space will visualise your activity when you begin using the platform with real content.</p></div></div>
  <div className="progress-empty-grid"><section className="surface-card"><SectionHeading title="Learning activity" description="A future view of time and consistency."/><div className="empty-chart"><div className="empty-chart-guides"><i/><i/><i/><i/></div><div className="empty-chart-caption"><Activity size={19}/><span>No activity to chart yet</span></div></div></section><section className="surface-card"><SectionHeading title="Learning goals" description="A future view of your chosen targets."/><div className="empty-metric-list"><div><Clock3 size={18}/><span><strong>Study time</strong><small>Waiting for activity</small></span></div><div><Target size={18}/><span><strong>Goal completion</strong><small>No goals set</small></span></div><div><Trophy size={18}/><span><strong>Achievements</strong><small>No achievements earned</small></span></div></div></section></div>
 </>;
}
