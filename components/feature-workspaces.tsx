"use client";
import { useEffect, useMemo, useState } from "react";
import { evaluateExpression } from "@/lib/math-engine";
import { ArrowLeft, ArrowRight, Check, ChevronDown, CircleHelp, Clock3, Copy, Eraser, Pause, Play, RotateCcw, Square, Trash2 } from "lucide-react";

type LabTab = "calculator" | "graph" | "timer" | "scratchpad";

export function MathLab() {
 const [tab,setTab]=useState<LabTab>("calculator");
 return <div className="mathlab">
  <div className="mathlab-tabs" role="tablist" aria-label="Math Lab tools">
   <button role="tab" aria-selected={tab==="calculator"} className={tab==="calculator"?"active":""} onClick={()=>setTab("calculator")}>Calculator</button>
   <button role="tab" aria-selected={tab==="graph"} className={tab==="graph"?"active":""} onClick={()=>setTab("graph")}>Graph plotter</button>
   <button role="tab" aria-selected={tab==="timer"} className={tab==="timer"?"active":""} onClick={()=>setTab("timer")}>Focus timer</button>
   <button role="tab" aria-selected={tab==="scratchpad"} className={tab==="scratchpad"?"active":""} onClick={()=>setTab("scratchpad")}>Scratchpad</button>
  </div>
  {tab==="calculator"?<ScientificCalculator/>:tab==="graph"?<FunctionPlotter/>:tab==="timer"?<FocusTimer/>:<Scratchpad/>}
 </div>;
}

function ScientificCalculator(){
 const [expression,setExpression]=useState("");
 const [result,setResult]=useState("");
 const [error,setError]=useState("");
 const [angleMode,setAngleMode]=useState<"deg"|"rad">("deg");
 function append(value:string){setExpression(old=>old+value);setError("");}
 function clear(){setExpression("");setResult("");setError("");}
 function calculate(){try{const value=evaluateExpression(expression,{},angleMode);setResult(String(Number(value.toPrecision(12))));setError("");}catch(reason){setResult("");setError(reason instanceof Error?reason.message:"Unable to evaluate expression.");}}
 function press(key:string){if(key==="AC"){clear();return;}if(key==="DEL"){setExpression(old=>old.slice(0,-1));setError("");return;}if(key==="="){calculate();return;}append(key);}
 return <div className="lab-panel calculator-layout">
  <div className="calculator-main">
   <div className="lab-panel-heading"><div><span className="eyebrow">SCIENTIFIC CALCULATOR</span><h2>Work it out.</h2><p>Enter an expression or use the keypad.</p></div><div className="angle-switch"><button className={angleMode==="deg"?"selected":""} onClick={()=>setAngleMode("deg")}>DEG</button><button className={angleMode==="rad"?"selected":""} onClick={()=>setAngleMode("rad")}>RAD</button></div></div>
   <label className="calculator-display"><span>EXPRESSION</span><input aria-label="Math expression" value={expression} onChange={event=>{setExpression(event.target.value);setError("");}} onKeyDown={event=>{if(event.key==="Enter")calculate();if(event.key==="Escape")clear();}} placeholder="Type an expression…"/><div className="calculator-result">{error?<span className="calculator-error">{error}</span>:result?<><small>RESULT</small><strong>{result}</strong></>:<small>Result will appear here</small>}</div></label>
   <div className="calculator-keys">{["AC","(",")","DEL","7","8","9","÷","4","5","6","×","1","2","3","−","0",".","^","+","sin(","cos(","tan(","sqrt(","π","e","%","="].map(key=><button key={key} className={(key==="="?"key-equals":key==="AC"||key==="DEL"?"key-utility":["÷","×","−","+","^"].includes(key)?"key-operator":"")} onClick={()=>press(key==="÷"?"/":key==="×"?"*":key==="−"?"-":key)}>{key}</button>)}</div>
   <div className="calculator-foot"><span><CircleHelp size={14}/> Parentheses and standard math functions supported.</span><button onClick={clear}><Eraser size={14}/> Clear all</button></div>
  </div>
  <aside className="calculator-side"><span className="eyebrow">SUPPORTED OPERATIONS</span><h3>Keep the thinking yours.</h3><p>This calculator evaluates arithmetic, powers, roots, trigonometric functions and common constants.</p><div className="supported-list"><span>+ − × ÷</span><span>powers and modulo</span><span>sqrt · abs · log · ln</span><span>sin · cos · tan</span><span>π and e</span></div><small>Trigonometry follows the selected angle mode.</small></aside>
 </div>;
}

function FunctionPlotter(){
 const [expression,setExpression]=useState("");
 const [error,setError]=useState("");
 const path=useMemo(()=>{
  if(!expression.trim())return "";
  const segments:string[]=[];let drawing=false;
  for(let index=0;index<=160;index++){
   const x=-10+index/8;
   try{const y=evaluateExpression(expression,{x},"rad");if(!Number.isFinite(y)||Math.abs(y)>10){drawing=false;continue;}const px=((x+10)/20)*600;const py=220-((y+10)/20)*200;segments.push((drawing?"L":"M")+px.toFixed(2)+" "+py.toFixed(2));drawing=true;}
   catch{return "";}
  }
  return segments.join(" ");
 },[expression]);
 function validate(){try{evaluateExpression(expression,{x:1},"rad");setError("");}catch(reason){setError(reason instanceof Error?reason.message:"Expression is not valid.");}}
 return <div className="lab-panel plotter-panel">
  <div className="lab-panel-heading"><div><span className="eyebrow">FUNCTION PLOTTER</span><h2>See the shape of a function.</h2><p>Enter an expression in x. The graph is generated from your input.</p></div></div>
  <div className="plotter-controls"><label><span>y =</span><input value={expression} onChange={event=>{setExpression(event.target.value);setError("");}} onKeyDown={event=>{if(event.key==="Enter")validate();}} placeholder="Enter an expression using x"/></label><button className="button button-primary" onClick={validate}>Plot function <ChartSplineIcon/></button><button className="button button-outline" onClick={()=>{setExpression("");setError("");}}>Clear</button></div>
  {error?<p className="plotter-error">{error}</p>:null}
  <div className="plotter-graph"><svg viewBox="0 0 600 420" role="img" aria-label="Function graph area"><defs><pattern id="math-grid" width="30" height="20" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity=".09" strokeWidth="1"/></pattern></defs><rect width="600" height="420" fill="url(#math-grid)"/><path d="M0 210 H600 M300 0 V420" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.4"/><path d="M300 0 l-5 8 m5-8 l5 8 M600 210 l-8 -5 m8 5 l-8 5" fill="none" stroke="currentColor" strokeOpacity=".5"/>{path?<path d={path} fill="none" stroke="#8273ef" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>:null}<text x="586" y="199" fill="currentColor" opacity=".6" fontSize="12">x</text><text x="311" y="14" fill="currentColor" opacity=".6" fontSize="12">y</text></svg>{!expression.trim()?<div className="plotter-empty"><ChartSplineIcon/><strong>Your graph will appear here.</strong><span>Nothing is plotted until you enter a function.</span></div>:null}</div>
  <div className="plotter-foot"><span>View window: −10 to 10 on both axes</span><span>Expression parser · No data storage</span></div>
 </div>;
}
function ChartSplineIcon(){return <span className="chart-spline-mark">⌁</span>;}

function FocusTimer(){
 const [minutes,setMinutes]=useState(25);
 const [remaining,setRemaining]=useState(25*60);
 const [running,setRunning]=useState(false);
 useEffect(()=>{if(!running)return;const timer=window.setInterval(()=>setRemaining(value=>Math.max(0,value-1)),1000);return()=>window.clearInterval(timer);},[running]);
 useEffect(()=>{if(remaining===0)setRunning(false);},[remaining]);
 const elapsed=minutes*60-remaining;const progress=minutes?Math.max(0,Math.min(100,elapsed/(minutes*60)*100)):0;
 function choose(value:number){setMinutes(value);setRemaining(value*60);setRunning(false);}
 function reset(){setRemaining(minutes*60);setRunning(false);}
 const clock=String(Math.floor(remaining/60)).padStart(2,"0")+":"+String(remaining%60).padStart(2,"0");
 return <div className="lab-panel timer-panel"><div className="lab-panel-heading"><div><span className="eyebrow">FOCUS TIMER</span><h2>Give an idea your full attention.</h2><p>A simple timer for a focused study session. It does not log or save your time.</p></div></div>
  <div className="timer-presets">{[15,25,45].map(value=><button key={value} className={minutes===value?"selected":""} onClick={()=>choose(value)} disabled={running}>{value} minutes</button>)}</div>
  <div className="timer-face"><div className="timer-ring" style={{background:"conic-gradient(#8273ef "+progress+"%, var(--line) "+progress+"%)"}}><div><strong>{clock}</strong><span>{remaining===0?"SESSION COMPLETE":running?"FOCUS SESSION":"READY WHEN YOU ARE"}</span></div></div></div>
  <div className="timer-actions"><button className="button button-primary" onClick={()=>setRunning(value=>!value)} disabled={remaining===0}>{running?<><Pause size={16}/> Pause</>:<><Play size={16}/> Start focus</>}</button><button className="button button-outline" onClick={reset}><RotateCcw size={15}/> Reset</button></div>
  {remaining===0?<div className="timer-complete"><Check size={16}/> Session complete. Take a moment before your next one.</div>:null}
 </div>;
}

function Scratchpad(){
 const [text,setText]=useState("");
 const [fontSize,setFontSize]=useState("normal");
 return <div className="lab-panel scratchpad-panel"><div className="lab-panel-heading"><div><span className="eyebrow">QUICK SCRATCHPAD</span><h2>Think on the page.</h2><p>A temporary writing area for working through your own ideas.</p></div><button className="button button-outline" onClick={()=>setText("")}><Trash2 size={14}/> Clear page</button></div>
  <div className="scratchpad-toolbar"><span><PencilLineIcon/> Untitled scratchpad</span><div><button className={fontSize==="normal"?"selected":""} onClick={()=>setFontSize("normal")}>A</button><button className={fontSize==="large"?"selected":""} onClick={()=>setFontSize("large")}>A+</button></div></div>
  <textarea className={"scratchpad-input scratchpad-"+fontSize} value={text} onChange={event=>setText(event.target.value)} placeholder="Write, calculate, sketch out a proof in words…"/>
  <div className="scratchpad-footer"><span>{text.length} characters · Current session only</span><span>Not saved or uploaded</span></div>
 </div>;
}
function PencilLineIcon(){return <span className="pencil-mark">✎</span>;}

export function PracticeSetup(){
 const [format,setFormat]=useState("Multiple choice");
 const [pace,setPace]=useState("Untimed");
 const [opened,setOpened]=useState(false);
 return <div className="setup-workspace"><div className="setup-controls"><label><span>Question format</span><select value={format} onChange={event=>{setFormat(event.target.value);setOpened(false);}}><option>Multiple choice</option><option>Short answer</option><option>Long answer</option><option>Mixed format</option></select></label><label><span>Session pace</span><select value={pace} onChange={event=>{setPace(event.target.value);setOpened(false);}}><option>Untimed</option><option>Gentle timer</option><option>Timed practice</option></select></label></div><button className="button button-primary" onClick={()=>setOpened(true)}>Open practice canvas <ArrowRight size={15}/></button>{opened?<div className="blank-question-canvas"><div><span className="eyebrow">PRACTICE CANVAS · {format.toUpperCase()}</span><strong>Your question area is empty.</strong><p>Selected pace: {pace}. Add question content later to activate this session layout.</p></div><div className="blank-question-lines"><i/><i/><i/></div></div>:<div className="setup-preview"><span><CircleHelp size={17}/></span><div><strong>Practice session preview</strong><small>Choose your format and open a blank question canvas.</small></div></div>}</div>;
}

export function ExamSetup(){
 const [duration,setDuration]=useState("60 minutes");
 const [mode,setMode]=useState("Timed exam");
 const [opened,setOpened]=useState(false);
 return <div className="setup-workspace"><div className="setup-controls"><label><span>Time limit</span><select value={duration} onChange={event=>{setDuration(event.target.value);setOpened(false);}}><option>30 minutes</option><option>60 minutes</option><option>90 minutes</option><option>No time limit</option></select></label><label><span>Exam mode</span><select value={mode} onChange={event=>{setMode(event.target.value);setOpened(false);}}><option>Timed exam</option><option>Practice exam</option><option>Review mode</option></select></label></div><button className="button button-primary" onClick={()=>setOpened(true)}>Open blank exam <ArrowRight size={15}/></button>{opened?<div className="exam-canvas"><div className="exam-canvas-top"><span>{mode.toUpperCase()}</span><span>{duration}</span></div><div className="exam-empty-body"><div className="exam-question-placeholder">—</div><strong>No questions have been added.</strong><p>The timer, navigation palette and answer review UI will activate when a real paper is connected.</p></div><div className="exam-canvas-foot"><button disabled><ArrowLeft size={14}/> Previous</button><span>Question palette unavailable</span><button disabled>Next <ArrowRight size={14}/></button></div></div>:null}</div>;
}
