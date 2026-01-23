// components/Education.js
import Card from './Card';

const Education = () => (
    <Card as="section" className="card">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <Card className="card">
        <h3 className="text-xl font-semibold">General Assembly</h3>
        <p className="text-sm text-[var(--text-muted)]">Software Engineering Fellow, March 2023-June 2023</p>
      </Card>
      <Card className="card">
        <h3 className="text-xl font-semibold">AMDA College for Performing Arts</h3>
        <p className="text-sm text-[var(--text-muted)]">BA Program for Filmmaking & Acting, June 2011- October 2015
        </p>
      </Card>
    </Card>
  );
  
  export default Education;