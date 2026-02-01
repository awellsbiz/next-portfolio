// pages/index.js
import Head from "next/head";
import { useState } from "react";
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
import Experience from "../components/Experience";
import Education from "../components/Education";
import Modal from "../components/Modal";
import ServicesModal from "../components/services/ServicesModal";
import CaseStudyModal from "../components/case-studies/CaseStudyModal";
import caseStudies from "../components/case-studies/caseStudies";

export default function Home() {
  const mobileCardPadding = "p-[var(--space-card-padding-mobile)]";
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(null);

  const activeCaseStudy = caseStudies.find(
    (study) => study.id === activeCaseStudyId,
  );

  const handleCaseStudyOpen = (caseStudyId) => {
    setActiveCaseStudyId(caseStudyId);
    setIsCaseStudyOpen(true);
  };

  return (
    <div className="bg-[var(--bg-root)] text-[var(--text-primary)]">
      <Head>
        <title>Anthony Wells - Portfolio</title>
        <meta name="description" content="Anthony Wells' portfolio" />

        {/* Open Graph */}
        <meta property="og:title" content="Anthony Wells - Portfolio" />
        <meta property="og:description" content="Anthony Wells' portfolio" />
        <meta
          property="og:image"
          content="https://anthonywells.codes/Awells.jpg"
        />
        <meta property="og:url" content="https://anthonywells.codes" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="mx-auto max-w-[var(--grid-max-width)] px-[var(--grid-side-padding)] py-[var(--space-card-padding)]">
        <div className="flex flex-col md:hidden">
          <div className="flex flex-col gap-[var(--space-mobile-gap)]">
            <HeroCard
              className={mobileCardPadding}
              onResumeOpen={() => setIsResumeOpen(true)}
              onServicesOpen={() => setIsServicesOpen(true)}
            />
            <AboutCard className={mobileCardPadding} />
          </div>
          <div className="mt-[var(--space-section-break)] flex flex-col gap-[var(--space-mobile-gap)]">
            <PrimaryWorkImageCard
              caseStudyId="cinesearch"
              onOpenCaseStudy={handleCaseStudyOpen}
            />
            <SecondaryWorkImageCardOne
              caseStudyId="peaky-blinds"
              onOpenCaseStudy={handleCaseStudyOpen}
            />
            <SecondaryWorkImageCardTwo
              caseStudyId="game"
              onOpenCaseStudy={handleCaseStudyOpen}
            />
          </div>
          <div className="mt-[var(--space-section-break)] flex flex-col gap-[var(--space-mobile-gap)]">
            <ResourcesCard className={mobileCardPadding} />
            <StackCard className={mobileCardPadding} />
            <ToggleCard className={mobileCardPadding} />
            <CtaCard className={mobileCardPadding} />
            <SocialLinksCard className={mobileCardPadding} />
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-[var(--grid-primary-width)_var(--grid-rail-width)] md:items-start md:gap-[var(--grid-gap)]">
          <div>
            {/* Primary grid — Row 1: Hero | Image 1 | Image 2 */}
            <div className="grid grid-cols-4 grid-rows-[repeat(3,var(--grid-row-height))] items-stretch gap-x-[var(--grid-gap-x)] gap-y-[var(--grid-gap-y)]">
              {/* Row 1 */}
              <HeroCard
                className="col-span-2 row-start-1 h-full"
                onResumeOpen={() => setIsResumeOpen(true)}
                onServicesOpen={() => setIsServicesOpen(true)}
              />
              <SecondaryWorkImageCardOne
                className="col-span-1 row-start-1 h-full"
                caseStudyId="peaky-blinds"
                onOpenCaseStudy={handleCaseStudyOpen}
              />
              <SecondaryWorkImageCardTwo
                className="col-span-1 row-start-1 h-full"
                caseStudyId="game"
                onOpenCaseStudy={handleCaseStudyOpen}
              />

              {/* Row 2: Portrait | About | Feature image */}
              <PortraitCard className="col-span-1 row-start-2 h-full" />
              <AboutCard className="col-span-2 row-start-2 h-full" />
              <PrimaryWorkImageCard
                className="col-span-1 row-start-2 h-full"
                caseStudyId="cinesearch"
                onOpenCaseStudy={handleCaseStudyOpen}
              />

              {/* Row 3: Newsletter | Stack | Toggle */}
              <NewsletterCard className="col-span-2 row-start-3 h-full" />
              <StackCard className="col-span-1 row-start-3 h-full" />
              <ToggleCard className="col-span-1 row-start-3 h-full" />
            </div>
          </div>

          {/* Utility rail — Resources | CTA | Social */}
          <div className="flex flex-col gap-[var(--rail-gap)]">
            <CtaCard className="h-[var(--rail-cta-height)]" />
            <SocialLinksCard />
            <ResourcesCard className="h-[var(--rail-resources-height)]" />
          </div>
        </div>
        <Modal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          title="Resume"
        >
          <div className="flex flex-col gap-[var(--space-section-break)]">
            <Experience />
            <Education />
          </div>
        </Modal>
        <ServicesModal
          isOpen={isServicesOpen}
          onClose={() => setIsServicesOpen(false)}
        />
        <CaseStudyModal
          isOpen={isCaseStudyOpen}
          onClose={() => setIsCaseStudyOpen(false)}
          caseStudy={activeCaseStudy}
        />
      </main>
    </div>
  );
}
