import { ArrowUpRight, Bookmark, BookOpen, Calculator, FileText, Layers3, NotebookPen, StickyNote } from "lucide-react";
import { PageHeading } from "@/components/section-heading";

const spaces = [
 {icon:NotebookPen,title:"Chapter notes",description:"A structured space for your own chapter notes.",tone:"violet"},
 {icon:FileText,title:"Previous year questions",description:"An organised home for board-style question sets.",tone:"mint"},
 {icon:Calculator,title:"Formula handbook",description:"A reference layout for formulas and identities.",tone:"orange"},
 {icon:StickyNote,title:"Revision sheets",description:"A compact format for later revision material.",tone:"blue"},
 {icon:Bookmark,title:"Saved resources",description:"A place for resources you choose to keep.",tone:"pink"},
 {icon:Layers3,title:"Visual learning",description:"A space for diagrams and interactive visual models.",tone:"yellow"}
];

export const metadata = { title: "Study library" };

export default function LibraryPage() {
 return <>
  <PageHeading eyebrow="YOUR STUDY DESK" title="The study library." description="A clean structure for the resources you will provide. Every collection is empty by design." action={<span className="status-pill">NO CONTENT ADDED</span>}/>
  <div className="library-feature"><div className="library-feature-art"><span>∑</span><i/><b>π</b><em>√x</em></div><div><span className="eyebrow">A PLACE FOR YOUR MATERIAL</span><h2>Organised when you're ready.</h2><p>No notes, questions, formulas or documents are stored here yet. The library layouts are ready for your content.</p></div></div>
  <div className="library-grid">{spaces.map((space)=>{const Icon=space.icon;return <article className="resource-card resource-empty" key={space.title}><span className={"resource-icon resource-"+space.tone}><Icon size={21}/></span><span className="resource-arrow"><ArrowUpRight size={17}/></span><h3>{space.title}</h3><p>{space.description}</p><small>EMPTY COLLECTION</small></article>;})}</div>
 </>;
}
