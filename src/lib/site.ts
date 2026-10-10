export const site = {
  name: "ZenSys Solutions",
  url: "https://zensys.lk",
  email: "founder@zensys.lk",
  phoneDisplay: "075 558 9764",
  phoneInternational: "+94755589764",
  whatsappNumber: "94755589764",
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const productImages = {
  pos: {
    billingLight: "/images/pos/billing-light-safe.png",
    billingDark: "/images/pos/billing-dark-safe.png",
    billingSidebar: "/images/pos/billing-light-safe.png",
    dashboard: "/images/pos/dashboard-safe.png",
    report: "/images/pos/report-safe.png",
  },
  gms: {
    dashboard: "/images/gms/dashboard-safe.png",
    activeJobs: "/images/gms/active-jobs-safe.png",
    jobCard: "/images/gms/job-card-safe.png",
  },
} as const;
