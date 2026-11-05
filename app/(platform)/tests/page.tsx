import { Clock3, FileCheck2, LayoutGrid, ShieldCheck, Target } from "lucide-react";
import { PageHeading } from "@/components/section-heading";
import { ExamSetup } from "@/components/feature-workspaces";

export const metadata = { title: "Test workspace" };

export default function TestsPage() {
  return <>
    <PageHeading eyebrow="EXAM EXPERIENCE BUILDER" title="Test workspace." description="Shape the exam interface now. Real question papers and answer keys will be connected later." action={<span className="status-pill">EMPTY EXAM BANK</span>} />
    <div className="test-intro"><div><span><ShieldCheck size={21}/></span><div><strong>Exam-ready interface.</strong><p>Timer, question palette, review flags and submission states are designed as frontend features. No exam questions are loaded.</p></div></div><small><FileCheck2 size={14}/> UI PREVIEW</small></div>
    <section className="surface-card exam-setup-card"><div className="section-heading"><div><span className="eyebrow">CONFIGURE YOUR EXAM</span><h2>Choose the test experience.</h2><p>Open a blank exam canvas with your selected settings.</p></div></div><ExamSetup/></section>
    <div className="exam-feature-strip"><span><Clock3 size={17}/> Timed or untimed</span><span><LayoutGrid size={17}/> Question palette</span><span><Target size={17}/> Review marking</span></div>
  </>;
}
