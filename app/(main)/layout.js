'use client';

import "../globals.css";
import GlobalHeader from "@/components/shared/GlobalHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="min-h-screen bg-white">
          <div className="max-w-[1400px] mx-auto px-6 py-8">
            {/* Global Header */}
            <GlobalHeader />
            
            {/* Page Content */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}