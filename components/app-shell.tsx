"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Bell, BookOpen, Brain, Calculator, BarChart3, ChevronDown, ChevronRight, Command, Flame, Home, Library, Menu, Moon, Search, Settings, Sun, Target, Trophy, UserRound, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Brand } from "@/components/brand";

type NavItem = { href:string; label:string; icon:LucideIcon };
const groups:{title:string;items:NavItem[]}[]=[
 {title:"Workspace",items:[{href:"/dashboard",label:"Overview",icon:Home}]},
 {title:"Learn & practise",items:[{href:"/learn",label:"Learning space",icon:BookOpen},{href:"/practice",label:"Practice studio",icon:Brain},{href:"/tests",label:"Test workspace",icon:Target},{href:"/library",label:"Study library",icon:Library}]},
 {title:"Tools & insights",items:[{href:"/math-lab",label:"Math Lab",icon:Calculator},{href:"/progress",label:"Progress centre",icon:BarChart3},{href:"/leaderboard",label:"Leaderboard",icon:Trophy}]},
 {title:"Workspace settings",items:[{href:"/profile",label:"Preferences",icon:UserRound}]}
];
const allItems=groups.flatMap(group=>group.items);

export function AppShell({children}:{children:ReactNode}){
 const pathname=usePathname()||"/dashboard";
 const [mobileNav,setMobileNav]=useState(false);
 const [searchOpen,setSearchOpen]=useState(false);
 const [query,setQuery]=useState("");
 const [noticeOpen,setNoticeOpen]=useState(false);
 const [dark,setDark]=useState(false);
 const active=allItems.find(item=>pathname===item.href||(item.href!=="/dashboard"&&pathname.startsWith(item.href+"/")));
 const results=useMemo(()=>allItems.filter(item=>!query.trim()||item.label.toLowerCase().includes(query.trim().toLowerCase())),[query]);
 useEffect(()=>{
  function handleKeys(event:KeyboardEvent){
   if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();setSearchOpen(true);}
   if(event.key==="Escape"){setSearchOpen(false);setNoticeOpen(false);setMobileNav(false);}
  }
  window.addEventListener("keydown",handleKeys);
  return()=>window.removeEventListener("keydown",handleKeys);
 },[]);
 function toggleTheme(){const next=!dark;setDark(next);document.documentElement.dataset.theme=next?"dark":"light";}
 return <div className="workspace">
  {mobileNav?<button className="mobile-scrim" aria-label="Close navigation" onClick={()=>setMobileNav(false)}/>:null}
  <aside className={"sidebar"+(mobileNav?" sidebar-open":"")}><div className="sidebar-brand"><Brand inverse/></div><div className="sidebar-overline">YOUR SPACE</div><nav className="sidebar-nav" aria-label="Main navigation">
   {groups.map(group=><div className="nav-group" key={group.title}><span className="nav-group-label">{group.title}</span>{group.items.map(item=>{const Icon=item.icon;const on=pathname===item.href||(item.href!=="/dashboard"&&pathname.startsWith(item.href+"/"));return <Link key={item.href} href={item.href} className={"nav-item"+(on?" nav-item-active":"")} aria-current={on?"page":undefined} onClick={()=>setMobileNav(false)}><Icon size={18}/><span>{item.label}</span>{on?<i/>:null}</Link>;})}</div>)}
  </nav><div className="sidebar-spacer"/><div className="sidebar-quest"><span><Flame size={17}/></span><div><strong>Build your own rhythm</strong><small>Use the focus timer in Math Lab</small></div><ChevronRight size={15}/></div><div className="sidebar-bottom"><Link href="/profile"><Settings size={16}/> Preferences</Link><div className="sidebar-user"><span className="avatar avatar-lilac">∑</span><div><strong>Maths Mafia</strong><small>Learning workspace</small></div><ChevronDown size={14}/></div></div></aside>
  <div className="workspace-main"><header className="topbar"><div className="topbar-left"><button className="mobile-menu icon-button" aria-label="Open navigation" onClick={()=>setMobileNav(true)}><Menu size={20}/></button><div className="breadcrumbs"><span>Maths Mafia</span><ChevronRight size={14}/><strong>{active?.label??"Overview"}</strong></div></div>
   <div className="topbar-actions"><button className="search-button" onClick={()=>setSearchOpen(true)}><Search size={16}/><span>Search your space</span><kbd><Command size={10}/> K</kbd></button><button className="icon-button" onClick={toggleTheme} aria-label="Toggle theme">{dark?<Sun size={18}/>:<Moon size={18}/>}</button><div className="notification-wrap"><button className="icon-button" onClick={()=>setNoticeOpen(value=>!value)} aria-label="Notifications" aria-expanded={noticeOpen}><Bell size={18}/></button>{noticeOpen?<div className="notification-popover"><strong>No notifications.</strong><button onClick={()=>setNoticeOpen(false)} aria-label="Close"><X size={14}/></button><p>Notification preferences will be available when account features are added.</p></div>:null}</div></div>
  </header><main className="workspace-content">{children}</main><footer className="workspace-footer"><span>© 2026 Maths Mafia</span><span>Made for curious minds <b>✳</b></span></footer></div>
  {searchOpen?<div className="dialog-backdrop" onMouseDown={event=>{if(event.target===event.currentTarget)setSearchOpen(false);}}><section className="command-dialog" role="dialog" aria-modal="true" aria-label="Search pages"><div className="command-input"><Search size={18}/><input autoFocus value={query} onChange={event=>setQuery(event.target.value)} placeholder="Find a workspace…"/><button onClick={()=>setSearchOpen(false)} aria-label="Close"><X size={17}/></button></div><span className="command-label">NAVIGATE</span>{results.map(item=>{const Icon=item.icon;return <Link href={item.href} key={item.href} className="command-result" onClick={()=>{setSearchOpen(false);setQuery("");}}><Icon size={17}/><span>{item.label}</span><ChevronRight size={15}/></Link>;})}{!results.length?<p className="command-empty">No matching workspace.</p>:null}</section></div>:null}
 </div>;
}
