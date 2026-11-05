import Link from "next/link";
import { Calculator } from "lucide-react";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" className={"brand" + (inverse ? " brand-inverse" : "")} aria-label="Maths Mafia home">
    <span className="brand-symbol"><Calculator size={21} /></span>
    <span className="brand-copy"><strong>maths<span>mafia</span></strong><small>THE MATH CLUB</small></span>
  </Link>;
}
