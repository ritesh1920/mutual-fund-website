// src/pages/Funds.tsx
import FundFilter from "../components/FundFilter";
import FundCard from "../components/FundCard";

export default function Funds() {
  // Simulated fund data
  const funds = [
    { title: "Bluechip Equity Fund", category: "Equity" },
    { title: "Dynamic Bond Fund", category: "Debt" },
    // ...more
  ];
  // Filtering logic can be added here

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">All Mutual Funds</h1>
      <FundFilter />
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {funds.map((f, i) => <FundCard key={i} title={f.title} />)}
      </div>
    </div>
  );
}
