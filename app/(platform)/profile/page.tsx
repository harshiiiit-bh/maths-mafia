"use client";
import { useState } from "react";
import { Bell, Check, Globe2, Moon, Palette, Settings2, ShieldCheck, Sun } from "lucide-react";
import { PageHeading } from "@/components/section-heading";

export default function ProfilePage() {
 const [theme,setTheme] = useState("light");
 const [reminders,setReminders] = useState(false);
 const [language,setLanguage] = useState("English");
 function changeTheme(value:string){setTheme(value);document.documentElement.dataset.theme=value;}
 return <>
  <PageHeading eyebrow="WORKSPACE PREFERENCES" title="Settings and preferences." description="Choose how the interface behaves. These preferences are local to this page and are not saved to an account."/>
  <div className="settings-layout"><section className="surface-card"><div className="section-heading"><div><span className="eyebrow">APPEARANCE</span><h2>Make the workspace comfortable.</h2><p>Preview interface preferences without creating a profile.</p></div></div>
   <div className="settings-control-row"><span className="settings-control-icon"><Palette size={18}/></span><div><strong>Theme</strong><small>Choose the visual appearance.</small></div><div className="theme-choice"><button className={theme==="light"?"selected":""} onClick={()=>changeTheme("light")}><Sun size={14}/> Light</button><button className={theme==="dark"?"selected":""} onClick={()=>changeTheme("dark")}><Moon size={14}/> Dark</button></div></div>
   <div className="settings-control-row"><span className="settings-control-icon"><Bell size={18}/></span><div><strong>Study reminders</strong><small>UI preference only; no notifications are sent.</small></div><button className={"toggle-switch"+(reminders?" toggle-on":"")} role="switch" aria-checked={reminders} onClick={()=>setReminders(!reminders)}><i/></button></div>
   <div className="settings-control-row"><span className="settings-control-icon"><Globe2 size={18}/></span><div><strong>Interface language</strong><small>Choose the language label for this preview.</small></div><select value={language} onChange={event=>setLanguage(event.target.value)}><option>English</option><option>Hindi</option></select></div>
  </section><aside className="settings-info-card"><ShieldCheck size={22}/><h3>No account is connected.</h3><p>This screen does not collect a name, email, profile image or personal learning record. Preferences remain temporary in the current page state.</p><div><Settings2 size={15}/> Frontend-only settings</div></aside></div>
 </>;
}
