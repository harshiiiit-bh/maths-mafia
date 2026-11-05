import { Calculator, ChartSpline, Clock3, PencilLine, Sparkles } from "lucide-react";
import { PageHeading } from "@/components/section-heading";
import { MathLab } from "@/components/feature-workspaces";

export const metadata = { title: "Math Lab" };

export default function MathLabPage() {
 return <>
  <PageHeading eyebrow="YOUR INTERACTIVE TOOLKIT" title="Welcome to Math Lab." description="Work with expressions, explore functions, manage a focus session or use a blank scratchpad. Everything runs locally in your browser."/>
  <div className="mathlab-feature-strip"><span><Calculator size={16}/> Scientific calculator</span><span><ChartSpline size={16}/> Function plotter</span><span><Clock3 size={16}/> Focus timer</span><span><PencilLine size={16}/> Scratchpad</span></div>
  <MathLab/>
  <div className="demo-disclaimer"><Sparkles size={15}/> No calculations or scratchpad text are sent to a server or saved.</div>
 </>;
}
