import "./globals.css";
// import Providers from "./providers"; // If you created this earlier

export const metadata = {
  title: "Shhal",
  description: "Community pricing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
         {/* <Providers> */}
          {children}
         {/* </Providers> */}
      </body>
    </html>
  );
}