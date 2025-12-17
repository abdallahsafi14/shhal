import "../globals.css";

export const metadata = { title: "Shhal", dir: "rtl" };

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
           {children}
      </body>
    </html>
  );
}