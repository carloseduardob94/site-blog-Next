import { CallToAction, CustomerHistorySection, FeatureSection, HeroSection, SupportSection } from "@/templates/landing-page/section";

export function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerHistorySection />
      <CallToAction />
    </article>
  )
}