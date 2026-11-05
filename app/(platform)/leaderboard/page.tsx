import ranking from "@/data/leaderboard.json";
import { Crown, Flame, Medal, Sparkles, Trophy, Zap } from "lucide-react";
import { PageHeading } from "@/components/section-heading";
type Entry = (typeof ranking)[number];
const entries = ranking as Entry[];
export const metadata = { title: "Leaderboard" };
export default function LeaderboardPage() {
 return <><PageHeading eyebrow="A LITTLE FRIENDLY COMPETITION" title="The hall of progress." description="A celebration of consistency, curiosity and the effort behind every solved problem." action={<span className="status-pill">SAMPLE RANKINGS</span>}/>
  <div className="leaderboard-banner"><div><span className="eyebrow">THIS WEEK'S TOP LEARNERS</span><h2>Progress looks good on everyone.</h2><p>These sample rankings preview a future community feature.</p></div><Trophy size={48}/></div>
  <div className="leaderboard-layout"><section className="surface-card"><div className="leaderboard-heading"><div><strong>Weekly leaderboard</strong><small>Fictional student activity · Preview</small></div><span>THIS WEEK</span></div><div className="leaderboard-podium">{entries.slice(0,3).map((item,i)=><div className={"podium-person podium-"+(i+1)} key={item.rank}><div className={"avatar avatar-"+item.tone}>{item.initials}</div><span className="podium-medal">{i===0?<Crown size={16}/>:<Medal size={16}/>}</span><strong>{item.name}</strong><small>{item.xp.toLocaleString("en-IN")} XP</small><div className="podium-step">{item.rank}</div></div>)}</div><div className="rank-list">{entries.slice(3).map((item)=><div className="rank-row" key={item.rank}><span>{item.rank}</span><span className={"avatar avatar-"+item.tone}>{item.initials}</span><span className="rank-name"><strong>{item.name}</strong><small>{item.handle}</small></span><strong>{item.xp.toLocaleString("en-IN")} XP</strong></div>)}</div></section>
   <aside className="leaderboard-aside"><div><Flame size={20}/><strong>Consistency wins.</strong><p>Small study sessions, repeated over time, add up to something powerful.</p></div><div><Zap size={20}/><strong>Earn experience.</strong><p>Future XP will come from lessons, practice and learning milestones.</p></div></aside></div>
  <div className="demo-disclaimer"><Sparkles size={15}/> Names and scores are fictional preview data, not live rankings.</div>
 </>;
}
