// components/Experience.js
import Education from "./Education";
import Card from "./Card";
const Experience = () => (
  <Card as="section" className="mb-3 card">
    <h2 className="text-3xl font-bold mb-4">Experience</h2>
    <div className="mb-2">
      <h3 className="text-xl font-semibold text-[var(--accent-primary)]">
        Software Engineer | Self-Employed
      </h3>
      <p className="text-sm text-[var(--text-muted)]">
        Jan 2025 - Present | Remote - Los Angeles, CA
      </p>
      <p className="mt-4 text-[var(--text-secondary)]">
        Built full-stack applications for legal and service-based clients,
        owning everything from requirements to deployment. Designed ETL
        workflows, multi-stage validation pipelines, and event-driven payment
        systems so that business workflows run reliably and data stays clean
        from input to output.
      </p>
      <div className="flex flex-wrap mt-4">
        <span className="badge badge-outline badge-error m-1">React</span>
        <span className="badge badge-outline badge-error m-1">TypeScript</span>
        <span className="badge badge-outline badge-error m-1">Python</span>
        <span className="badge badge-outline badge-error m-1">ETL</span>
        <span className="badge badge-outline badge-error m-1">Node.js</span>
        <span className="badge badge-outline badge-error m-1">Express</span>
        <span className="badge badge-outline badge-error m-1">
          System Design
        </span>
        <span className="badge badge-outline badge-error m-1">
          Event-Driven Architecture
        </span>
        <span className="badge badge-outline badge-error m-1">
          Payment Systems
        </span>
        <span className="badge badge-outline badge-error m-1">
          Data Pipelines
        </span>
        {/* Add more technologies as needed */}
      </div>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-[var(--accent-primary)]">
        Web Developer | Max Market Pros
      </h3>
      <p className="text-sm text-[var(--text-muted)]">
        Dec 2023 - Dec 2024 | Ivine, CA - Hybrid
      </p>
      <p className="mt-4 text-[var(--text-secondary)]">
        Translated client requirements into system architectures, defining data
        flows between forms and CRM integrations so that leads moved reliably
        from capture to sales. Built reusable templates and front-end systems to
        ensure consistent quick delivery across clients increasing productivity
        by 20%.
      </p>
      <div className="flex flex-wrap mt-4">
        <span className="badge badge-outline badge-error m-1">HTML</span>
        <span className="badge badge-outline badge-error m-1">CSS</span>
        <span className="badge badge-outline badge-error m-1">Webflow</span>
        <span className="badge badge-outline badge-error m-1">SEO</span>
        {/* Add more technologies as needed */}
      </div>
    </div>
    <div className="">
      <h3 className="text-xl font-semibold text-[var(--accent-primary)]">
        Frontend Engineer | Expunge Assist (Open Source)
      </h3>
      <p className="text-sm text-[var(--text-muted)]">
        Jun 2023 - Dec 2023 | Remote - Los Angeles, CA
      </p>
      <p className="mt-4 text-[var(--text-secondary)]">
        Contributed to a cross-functional team building a React-based legal
        document generator. Implemented features and resolved bugs through a
        Kanban workflow to help users generate expungement letters reliably.
      </p>
      <div className="flex flex-wrap mt-4">
        <span className="badge badge-outline badge-error m-1">React</span>
        <span className="badge badge-outline badge-error m-1">Typescript</span>
        <span className="badge badge-outline badge-error m-1">Tailwind</span>
        <span className="badge badge-outline badge-error m-1">Git</span>

        {/* Add more technologies as needed */}
      </div>
    </div>
  </Card>
);

export default Experience;
