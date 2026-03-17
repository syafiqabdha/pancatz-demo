export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-6">Welcome to Pancatz</h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        Creative hub, IT solutions, and photography – all under one sleek, minimalist brand.
      </p>
      <div className="grid gap-6 md:grid-cols-3 max-w-4xl">
        <a href="/creative" className="p-6 border rounded-lg hover:border-[var(--c-accent)] transition">
          <h2 className="text-2xl font-semibold mb-2" style={{color: "var(--c-accent)"}}>Creative Hub</h2>
          <p>Design, branding, content creation.</p>
        </a>
        <a href="/it" className="p-6 border rounded-lg hover:border-[var(--c-accent)] transition">
          <h2 className="text-2xl font-semibold mb-2" style={{color: "var(--c-accent)"}}>IT Solutions</h2>
          <p>Consulting, support, custom development.</p>
        </a>
        <a href="/photography" className="p-6 border rounded-lg hover:border-[var(--c-accent)] transition">
          <h2 className="text-2xl font-semibold mb-2" style={{color: "var(--c-accent)"}}>Photography</h2>
          <p>Portfolio, prints, booking.</p>
        </a>
      </div>
    </main>
  );
}
