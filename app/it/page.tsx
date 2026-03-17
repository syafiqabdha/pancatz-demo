export default function IT() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[var(--c-bg)] p-8">
      <h1 className="text-4xl font-bold mb-4" style={{color: "var(--c-primary)"}}>IT Solutions</h1>
      <p className="max-w-2xl text-center mb-6">Consulting, support, custom development – done with clean, trustworthy design.</p>
      <button className="px-6 py-3 bg-[var(--c-accent)] text-white rounded-md hover:bg-[var(--c-accent)]/90">Contact Us</button>
    </section>
  );
}
