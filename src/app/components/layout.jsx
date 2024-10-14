"use client"
import AdminPanel from "./adminPanel/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: 'white' }}>
          {children}
          <AdminPanel />
      </body>
    </html>
  );
}
