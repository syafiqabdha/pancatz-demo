import './globals.css';

export const metadata = {
  title: 'Pancatz – Creative, IT, Photography',
  description: 'Sleek minimal site for Pancatz services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="service-creative">
      <body className="bg-[var(--c-bg)] text-[var(--c-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
