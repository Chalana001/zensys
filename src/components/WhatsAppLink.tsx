import { site, whatsappHref } from "@/lib/site";
import type { ReactNode } from "react";

export function WhatsAppLink({ message, children }: { message: string; children: ReactNode }) {
  return <a className="button button-outline" href={whatsappHref(message)} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

export function PhoneLink() {
  return <a href={`tel:${site.phoneInternational}`}>{site.phoneDisplay}</a>;
}
