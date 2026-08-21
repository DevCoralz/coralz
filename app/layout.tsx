import { Footer } from '@/components/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Coralz — Digital Studio</title>
        <meta name="description" content="Coralz is a personal digital studio for thoughtful products." />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
