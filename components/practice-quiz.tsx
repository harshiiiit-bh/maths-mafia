"use client";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CircleHelp, RotateCcw, X } from "lucide-react";

const questions = [
  { chapter: "Polynomials", prompt: "If α and β are the zeroes of x² − 5x + 6, what is α + β?", options: ["6", "5", "−5", "−6"], answer: "5", explanation: "For ax² + bx + c, the sum of zeroes is −b/a. Here, −(−5)/1 = 5." },
  { chapter: "Real Numbers", prompt: "The HCF of 18 and 24 is:", options: ["3", "4", "6", "12"], answer: "6", explanation: "The common factors are 1, 2, 3 and 6. The highest common factor is 6." },
  { chapter: "Arithmetic Progressions", prompt: "What is the common difference of 7, 11, 15, 19, …?", options: ["2", "3", "4", "5"], answer: "4", explanation: "Subtract consecutive terms: 11 − 7 = 4." },
  { chapter: "Trigonometry", prompt: "What is the value of sin 30°?", options: ["0", "1/2", "√3/2", "1"], answer: "1/2", explanation: "The standard trigonometric value of sin 30° is 1/2." },
  { chapter: "Coordinate Geometry", prompt: "The distance between (0, 0) and (3, 4) is:", options: ["4", "5", "6", "7"], answer: "5", explanation: "Using the distance formula: √(3² + 4²) = √25 = 5." }
];

export function PracticeQuiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [explanationOpen, setExplanationOpen] = useState(false);
  const current = questions[index];
  const selected = answers[index];
  const correct = useMemo(() => questions.filter((question, i) => answers[i] === question.answer).length, [answers]);

  function reset() { setIndex(0); setAnswers({}); setSubmitted(false); setExplanationOpen(false); }
  function next() {
    if (index === questions.length - 1) setSubmitted(true);
    else { setIndex((value) => value + 1); setExplanationOpen(false); }
  }

  return <div className="quiz">
    <div className="quiz-topline"><span><CircleHelp size={15} /> SAMPLE PRACTICE SET</span><span>{Object.keys(answers).length} / {questions.length} answered</span></div>
    <div className="quiz-progress"><span style={{ width: ((index + 1) / questions.length * 100) + "%" }} /></div>
    {submitted ? <div className="quiz-results"><div className="quiz-result-icon"><Check size={27} /></div><span className="eyebrow">ROUND COMPLETE</span><h2>{correct} out of {questions.length}</h2><p>{correct === questions.length ? "A perfect round. Your concepts are clicking." : "Every attempt teaches you something. Review the explanations and try again."}</p><div className="quiz-result-stats"><div><strong>{Math.round(correct / questions.length * 100)}%</strong><span>Accuracy</span></div><div><strong>{Object.keys(answers).length}</strong><span>Attempted</span></div><div><strong>{questions.length - correct}</strong><span>To revisit</span></div></div><button className="button button-primary" onClick={reset}><RotateCcw size={16} /> Try another round</button></div> : <>
      <div className="quiz-question-meta"><span>QUESTION {String(index + 1).padStart(2, "0")}</span><span>{current.chapter}</span></div><h2 className="quiz-question">{current.prompt}</h2>
      <div className="quiz-options">{current.options.map((option, i) => {
        const chosen = selected === option;
        const right = option === current.answer;
        let state = chosen ? " option-selected" : "";
        if (explanationOpen && right) state = " option-correct";
        if (explanationOpen && chosen && !right) state = " option-wrong";
        return <button type="button" key={option} className={"quiz-option" + state} disabled={explanationOpen} onClick={() => setAnswers((old) => ({ ...old, [index]: option }))}><span className="option-key">{String.fromCharCode(65 + i)}</span><span>{option}</span>{explanationOpen && right ? <Check size={17} /> : explanationOpen && chosen ? <X size={17} /> : null}</button>;
      })}</div>
      {explanationOpen ? <div className={"quiz-explanation" + (selected === current.answer ? " explanation-correct" : " explanation-review")}><strong>{selected === current.answer ? "That's correct." : "Not quite — here's why."}</strong><p>{current.explanation}</p></div> : null}
      <div className="quiz-footer"><button className="button button-quiet" disabled={index === 0} onClick={() => { setIndex((value) => Math.max(0, value - 1)); setExplanationOpen(false); }}><ArrowLeft size={15} /> Previous</button><div>{explanationOpen ? <button className="button button-primary" onClick={next}>{index === questions.length - 1 ? "See results" : "Next question"} <ArrowRight size={15} /></button> : selected ? <button className="button button-primary" onClick={() => setExplanationOpen(true)}>Check answer <Check size={15} /></button> : <span className="quiz-hint">Select an answer to continue</span>}</div></div>
      <div className="quiz-question-nav"><span>JUMP TO</span>{questions.map((question, i) => <button type="button" key={i} aria-label={"Go to question " + (i + 1)} className={(index === i ? "current " : "") + (answers[i] ? "answered" : "")} onClick={() => { setIndex(i); setExplanationOpen(false); }}>{i + 1}</button>)}</div>
    </>}
  </div>;
}
