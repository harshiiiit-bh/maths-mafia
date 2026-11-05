import Link from "next/link";
import { ArrowUpRight, BookOpen, Brain, Calculator, Clock3, Library, LineChart, Sparkles, Target } from "lucide-react";
import { PageHeading } from "@/components/section-heading";

const spaces = [
  { href:"/learn", icon:BookOpen, title:"Learning space", detail:"A clear home for chapters and lessons.", label:"CONTENT NOT ADDED", tone:"violet" },
  { href:"/practice", icon:Brain, title:"Practice studio", detail:"Choose a practice format and prepare a session.", label:"READY FOR QUESTIONS", tone:"mint" },
  { href:"/tests", icon:Target, title:"Exam workspace", detail:"Configure an exam layout before adding a paper.", label:"NO PAPERS ADDED", tone:"orange" },
  { href:"/library", icon:Library, title:"Study library", detail:"A home for notes, formulas and resources.", label:"LIBRARY EMPTY", tone:"blue" },
  { href:"/progress", icon:LineChart, title:"Progress centre", detail:"A future view of learning activity and goals.", label:"NO ACTIVITY YET", tone:"pink" }
];

export default function DashboardPage() {
  return <>
    <PageHeading eyebrow="YOUR MATHEMATICS WORKSPACE" title="Make room for big ideas." description="Your study space is ready. Add learning material later; for now, explore the tools and shape your workflow." />
    <section className="dashboard-hero">
      <div className="dashboard-hero-content">
        <span className="hero-label"><Sparkles size={14}/> MATHS MAFIA · WORKSPACE</span>
        <h2>Think clearly.<br/><span>Work it out.</span></h2>
        <p>A focused space for learning, practice and mathematical exploration. No sample content has been loaded.</p>
        <Link href="/math-lab" className="button button-lime">Open Math Lab <ArrowUpRight size={16}/></Link>
      </div>
      <div className="dashboard-hero-art" aria-hidden="true"><span className="hero-orbit hero-orbit-one"/><span className="hero-orbit hero-orbit-two"/><span className="hero-sigma">∑</span><span className="hero-pi">π</span><span className="hero-root">√x</span></div>
      <div className="hero-card-note"><span>✳</span><div><strong>Your space, your pace</strong><small>Start with a tool. Add content when ready.</small></div></div>
    </section>

    <div className="dashboard-tools">
      <Link href="/math-lab" className="tool-launch-card tool-launch-featured"><span className="tool-launch-icon"><Calculator size={21}/></span><span className="eyebrow">INTERACTIVE TOOLKIT</span><strong>Math Lab</strong><small>Calculator · Graph plotter · Focus timer · Scratchpad</small><span className="tool-launch-link">Explore tools <ArrowUpRight size={15}/></span></Link>
      <Link href="/practice" className="tool-launch-card"><span className="tool-launch-icon tool-icon-mint"><Brain size={20}/></span><span className="eyebrow">SESSION SETUP</span><strong>Practice studio</strong><small>Choose a format and prepare your workspace.</small><span className="tool-launch-link">Open setup <ArrowUpRight size={15}/></span></Link>
      <Link href="/tests" className="tool-launch-card"><span className="tool-launch-icon tool-icon-orange"><Target size={20}/></span><span className="eyebrow">EXAM BUILDER</span><strong>Test workspace</strong><small>Configure a timed or untimed exam layout.</small><span className="tool-launch-link">Open builder <ArrowUpRight size={15}/></span></Link>
    </div>

    <div className="section-heading dashboard-section-heading"><div><span className="eyebrow">YOUR PRODUCT AREAS</span><h2>Everything has a place.</h2><p>These spaces are designed and ready for your material.</p></div></div>
    <div className="dashboard-space-grid">{spaces.map((space)=>{const Icon=space.icon;return <Link href={space.href} className="dashboard-space-card" key={space.href}><span className={"space-icon space-"+space.tone}><Icon size={19}/></span><span className="space-label">{space.label}</span><strong>{space.title}</strong><p>{space.detail}</p><span className="space-open">Open space <ArrowUpRight size={14}/></span></Link>;})}</div>
    <div className="no-data-note"><Sparkles size={16}/><span><strong>Clean foundation.</strong> No sample questions, chapter content, students, scores or progress records are included. Your material will be added when you provide it.</span></div>
  </>;
}
