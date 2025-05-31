// src/pages/Home.tsx
import FundCard from "../components/FundCard";
import SIPCalculator from "../components/SIPCalculator";

export default function Home() {
  return (
    <div className="bg-white text-blue-900 min-h-screen">
      <section className="hero py-12 text-center bg-blue-50">
        <h1 className="text-4xl font-bold">Welcome to Mutual Fund Provider</h1>
        <p className="mt-2 text-lg">Find the best funds for your goals.</p>
      </section>
      <section className="categories py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Fund Categories</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <FundCard title="Equity" />
          <FundCard title="Debt" />
          <FundCard title="Hybrid" />
          <FundCard title="Others" />
        </div>
      </section>
      <section className="sip-calculator py-8 bg-blue-100">
        <h2 className="text-xl font-semibold text-center mb-4">SIP Calculator</h2>
        <SIPCalculator />
      </section>
      <section className="login-area py-8 text-center">
        <a href="/login" className="btn bg-blue-600 text-white px-6 py-2 rounded">Investor Login</a>
      </section>
    </div>
  );
}
