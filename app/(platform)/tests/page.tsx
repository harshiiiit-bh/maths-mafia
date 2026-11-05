import Link from "next/link";
import { ArrowUpRight, Award, Clock3, FileCheck2, LockKeyhole, Sparkles, Target } from "lucide-react";
import { PageHeading } from "@/components/section-heading";
const tests = [
 {title:"Chapter warm-up",subtitle:"A quick check across core concepts",questions:10,duration:"15 min",tag:"QUICK TEST",tone:"violet",ready:true},
 {title:"Algebra checkpoint",subtitle:"Polynomials, equations and progressions",questions:20,duration:"30 min",tag:"CHAPTER TEST",tone:"mint",ready:true},
 {title:"Full syllabus mock",subtitle:"A complete exam-style experience",questions:40,duration:"90 min",tag:"MOCK EXAM",tone:"orange",ready:false}
];
export const metadata = { title: "Test centre" };
export default function TestsPage() {
 return <><PageHeading eyebrow="CHECK WHAT YOU KNOW" title="The test centre." description="A calm place to check your understanding, practise under time, and see what to revisit." action={<span className="status-pill">SAMPLE TESTS</span>}/>
  <div className="test-intro"><div><span><Award size={21}/></span><div><strong>Progress, not pressure.</strong><p>These sample test cards preview the future exam experience. Real question sets will be added later.</p></div></div><small><Sparkles size={14}/> FRONTEND PREVIEW</small></div>
  <div className="test-grid">{tests.map((item,i)=><article className="test-card" key={item.title}><div className={"test-card-art test-"+item.tone}><span>{String(i+1).padStart(2,"0")}</span><Target size={42}/></div><div className="test-card-body"><span className={"test-tag test-tag-"+item.tone}>{item.tag}</span><h2>{item.title}</h2><p>{item.subtitle}</p><div className="test-meta"><span><FileCheck2 size={14}/>{item.questions} questions</span><span><Clock3 size={14}/>{item.duration}</span></div>{item.ready?<Link href="/practice" className="button button-primary button-full">Preview this test <ArrowUpRight size={15}/></Link>:<button className="button button-disabled button-full" disabled><LockKeyhole size={15}/> Coming later</button>}</div></article>)}</div>
 </>;
}
