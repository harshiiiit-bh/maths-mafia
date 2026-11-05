import { Crown, Medal, Trophy, Users } from "lucide-react";
import { PageHeading } from "@/components/section-heading";

export const metadata = { title: "Leaderboard" };

export default function LeaderboardPage() {
 return <>
  <PageHeading eyebrow="COMMUNITY SPACE" title="Leaderboard." description="A future community ranking interface. No student accounts, names, XP or ranking records are included." action={<span className="status-pill">NO USER DATA</span>}/>
  <section className="leaderboard-banner"><div><span className="eyebrow">CELEBRATE THE EFFORT</span><h2>Make progress your own.</h2><p>The podium and ranking list will appear when real participants and consent-based activity are connected.</p></div><Trophy size={49}/></section>
  <section className="surface-card leaderboard-empty"><div className="leaderboard-empty-podium"><span><Medal size={23}/></span><span><Crown size={28}/></span><span><Medal size={23}/></span></div><span className="eyebrow">RANKINGS NOT AVAILABLE</span><h2>No rankings yet.</h2><p>There are no users or scores in this project. This screen is only the leaderboard design.</p><div className="leaderboard-empty-foot"><Users size={15}/> Waiting for a real community</div></section>
 </>;
}
