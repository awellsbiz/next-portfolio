import Card from '../Card';

  // 	•	AI-first sprint model
	// •	Weekly commits + reports
	// •	Agile rhythm
    // •	Transparent backlog
  // create an array to display the delivery methods in a list
  const deliveryMethods = [
    'Sprint model',
    'Git Commits and Reports',
    'Agile Rhythm',
    'Transparent Backlog',
  ];

export default function ToggleCard({ className = '' }) {
  return (
    <Card className={`flex flex-col gap-3 ${className}`.trim()}>
      <h2 className="text-xl font-semibold">How I Deliver</h2>
      <ul className="list-disc list-inside">
        {deliveryMethods.map((method) => (
          <li key={method} className="text-[var(--text-secondary)]">{method}</li>
        ))}
      </ul>
    </Card>
  );
}
