import Link from "next/link";
import { ArrowLeft, Calculator } from "lucide-react";
export default function NotFound() {
 return <div className="not-found"><span><Calculator size={25}/></span><div className="eyebrow">PAGE NOT FOUND</div><h1>Looks like this equation doesn't balance.</h1><p>The page you're looking for may have moved or may not exist.</p><Link href="/dashboard" className="button button-primary"><ArrowLeft size={15}/> Back to dashboard</Link></div>;
}
