export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-green-800 text-white p-4">
        {/* Your Sidebar content goes here */}
        <h1>شحّال</h1>
        <nav className="mt-8">
           <ul>
             <li>الرئيسية</li>
             <li>الملف الشخصي</li>
           </ul>
        </nav>
      </aside>
      
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}