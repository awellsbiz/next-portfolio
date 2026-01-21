// pages/index.js
import Head from "next/head";
import AboutCard from "../components/home/AboutCard";
import CtaCard from "../components/home/CtaCard";
import HeroCard from "../components/home/HeroCard";
import NewsletterCard from "../components/home/NewsletterCard";
import PortraitCard from "../components/home/PortraitCard";
import PrimaryWorkImageCard from "../components/home/PrimaryWorkImageCard";
import ResourcesCard from "../components/home/ResourcesCard";
import SecondaryWorkImageCardOne from "../components/home/SecondaryWorkImageCardOne";
import SecondaryWorkImageCardTwo from "../components/home/SecondaryWorkImageCardTwo";
import SocialLinksCard from "../components/home/SocialLinksCard";
import StackCard from "../components/home/StackCard";
import ToggleCard from "../components/home/ToggleCard";

export default function Home() {
  const mobileCardPadding = "p-[var(--space-card-padding-mobile)]";

  return (
    <div className="min-h-screen bg-[var(--bg-root)] text-[var(--text-primary)]">
      <Head>
        <title>Anthony Wells - Portfolio</title>
        <meta name="description" content="Anthony Wells' portfolio" />
      </Head>

      <main className="mx-auto max-w-[var(--grid-max-width)] px-[var(--grid-side-padding)] py-[var(--space-card-padding)]">
        <div className="flex flex-col gap-[var(--space-mobile-gap)] md:hidden">
          <HeroCard className={mobileCardPadding} />
          <AboutCard className={mobileCardPadding} />
          <PrimaryWorkImageCard />
          <SecondaryWorkImageCardOne />
          <SecondaryWorkImageCardTwo />
          <ResourcesCard className={mobileCardPadding} />
          <StackCard className={mobileCardPadding} />
          <ToggleCard className={mobileCardPadding} />
          <CtaCard className={mobileCardPadding} />
          <SocialLinksCard className={mobileCardPadding} />
        </div>

        <div className="hidden md:flex md:items-start md:gap-[var(--grid-gap)]">
          <div className="w-[var(--grid-primary-width)]">
            <div className="grid grid-cols-4 grid-rows-[repeat(3,var(--grid-row-height))] gap-[var(--grid-gap)]">
              <HeroCard className="col-span-2 row-start-1 h-full" />
              <SecondaryWorkImageCardOne className="col-span-1 row-start-1 h-full" />
              <SecondaryWorkImageCardTwo className="col-span-1 row-start-1 h-full" />
              <PortraitCard className="col-span-1 row-start-2 h-full" />
              <AboutCard className="col-span-2 row-start-2 h-full" />
              <PrimaryWorkImageCard className="col-span-1 row-start-2 h-full" />
              <NewsletterCard className="col-span-2 row-start-3 h-full" />
              <StackCard className="col-span-1 row-start-3 h-full" />
              <ToggleCard className="col-span-1 row-start-3 h-full" />
            </div>
          </div>

          <div className="flex w-[var(--grid-rail-width)] flex-col gap-[var(--rail-gap)]">
            <ResourcesCard className="h-[var(--rail-resources-height)]" />
            <CtaCard className="h-[var(--rail-cta-height)]" />
            <SocialLinksCard />
          </div>
        </div>
      </main>
    </div>
  );
}