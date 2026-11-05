export function ProgressBar({ value, tone = "violet", label = "Progress" }: { value: number; tone?: "violet" | "mint"; label?: string }) {
  const safe = Math.max(0, Math.min(100, value));
  return <div className="progress-track" role="progressbar" aria-label={label} aria-valuenow={safe} aria-valuemin={0} aria-valuemax={100}><span className={"progress-fill progress-" + tone} style={{ width: safe + "%" }} /></div>;
}
