// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10 text-center text-sm">
      <div>© 2025 Mutual Fund Provider. All rights reserved.</div>
      <div className="mt-2">
        <a href="/privacy" className="underline mr-4">Privacy Policy</a>
        <a href="/terms" className="underline">Terms & Conditions</a>
      </div>
      <div className="mt-2">Mutual fund investments are subject to market risks. Please read the scheme documents carefully before investing.</div>
    </footer>
  );
}
