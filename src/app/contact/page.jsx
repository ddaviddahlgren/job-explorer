export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-4">Kontakta oss</h1>
      <p className="text-gray-700 mb-6">
        Har du frågor om en annons eller vill du komma i kontakt med oss?
        Hör gärna av dig via något av alternativen nedan.
      </p>
      <ul className="text-gray-700 space-y-2">
        <li>Email: hej@jobbportal.se</li>
        <li>Telefon: 08-123 456 78</li>
        <li>Adress: Exempelgatan 1, 111 22 Stockholm</li>
      </ul>
    </div>
  );
}