// src/components/SIPCalculator.tsx
import { useState } from "react";
export default function SIPCalculator() {
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const months = years * 12;
  const monthlyRate = rate / 12 / 100;
  const maturity = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
      <div className="mb-2">
        <label>Monthly Investment (₹)</label>
        <input type="number" value={amount} onChange={e => setAmount(+e.target.value)} className="border p-1 w-full" />
      </div>
      <div className="mb-2">
        <label>Expected Annual Return (%)</label>
        <input type="number" value={rate} onChange={e => setRate(+e.target.value)} className="border p-1 w-full" />
      </div>
      <div className="mb-2">
        <label>Investment Period (years)</label>
        <input type="number" value={years} onChange={e => setYears(+e.target.value)} className="border p-1 w-full" />
      </div>
      <div className="mt-4 font-bold text-blue-700">
        Maturity Amount: ₹{maturity.toLocaleString(undefined, { maximumFractionDigits: 0 })}
      </div>
    </div>
  );
}
