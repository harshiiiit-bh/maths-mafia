import Link from "next/link";
import { ArrowUpRight, Bookmark, Calculator, FileText, Layers3, NotebookPen, Sparkles, StickyNote } from "lucide-react";
import { PageHeading } from "@/components/section-heading";
const resources = [
 {icon:NotebookPen,title:"Chapter notes",text:"Structured notes and concept summaries for every chapter.",count:"14 chapter spaces",tone:"violet",href:"/learn"},
 {icon:FileText,title:"Previous year questions",text:"A future home for carefully organised board questions.",count:"Collection space",tone:"mint",href:"/practice"},
 {icon:Calculator,title:"Formula handbook",text:"A quick reference for important formulas and relationships.",count:"Formula collection",tone:"orange",href:"/learn"},
 {icon:StickyNote,title:"Revision sheets",text:"Compact recap material for focused revision sessions.",count:"Revision space",tone:"blue",href:"/learn"},
 {icon:Bookmark,title:"Saved resources",text:"A place to keep concepts you want to revisit.",count:"Personal collection preview",tone:"pink",href:"/progress"},
 {icon:Layers3,title:"Visual learning",text:"Diagrams, geometric models and interactive explanations.",count:"Visual collection",tone:"yellow",href:"/learn"}
];
export const metadata = { title: "Study library" };
export default function LibraryPage() {
 return <><PageHeading eyebrow="YOUR STUDY DESK" title="A library for curious minds." description="A tidy home for notes, formulas, PYQs, revision sheets and the resources that make concepts click." action={<span className="status-pill">CONTENT COMING LATER</span>}/>
  <div className="library-feature"><div className="library-feature-art"><span>∑</span><i/><b>π</b><em>√x</em></div><div><span className="eyebrow">THE STUDY LIBRARY</span><h2>Everything in its right place.</h2><p>The structure is ready. We'll add your notes, questions, diagrams and study material when you share them.</p><Link href="/learn" className="text-link">Explore chapter spaces <ArrowUpRight size={15}/></Link></div></div>
  <div className="library-grid">{resources.map((item)=>{const Icon=item.icon;return <Link href={item.href} className="resource-card" key={item.title}><span className={"resource-icon resource-"+item.tone}><Icon size={21}/></span><span className="resource-arrow"><ArrowUpRight size={17}/></span><h3>{item.title}</h3><p>{item.text}</p><small>{item.count}</small></Link>;})}</div>
  <div className="library-note"><Sparkles size={16}/> These are frontend spaces ready for your study material; no notes database is connected yet.</div>
 </>;
}
