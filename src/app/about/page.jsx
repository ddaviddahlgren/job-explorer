export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-4">Om oss</h1>
      <p className="text-gray-700 mb-4">
        Vi är en jobbportal som hjälper arbetssökande att hitta sitt nästa
        jobb på ett enkelt och smidigt sätt. Vårt mål är att koppla ihop
        talangfulla kandidater med företag som söker nya medarbetare inom
        utveckling, design och marknadsföring.
      </p>
      <p className="text-gray-700">
        Plattformen byggdes som en del av ett skolprojekt med Next.js och
        Storyblok, och visar hur ett headless CMS kan användas för att driva
        en modern, innehållsdriven webbplats.
      </p>
    </div>
  );
}