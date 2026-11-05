import Link from "next/link";
import { ArrowLeft, Calculator } from "lucide-react";
export default function NotFound(){return <div className="not-found"><span><Calculator size={25}/></span><div className="eyebrow">PAGE NOT FOUND</div><h1>This page isn't in the workspace yet.</h1><p>Check the address or return to your dashboard.</p><Link href="/dashboard" className="button button-primary"><ArrowLeft size={15}/> Back to dashboard</Link></div>;}
