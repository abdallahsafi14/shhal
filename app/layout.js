import "./globals.css";
import Providers from "@/components/shared/Providers";

export const metadata = {
  title: "Shhal | شحال",
  description: "Community pricing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}