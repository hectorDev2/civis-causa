import "./globals.css";
export const metadata = {
  title: "Portfolio Hector",
  description:
    "Hector Barazorda, desarrollador de software con más de 2 años de experiencia en el diseño y desarrollo de aplicaciones web y móviles. Aquí puedes encontrar mis proyectos más destacados y ponerse en contacto conmigo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
