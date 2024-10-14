import "./css/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: 'white' }}>
        {children}
      </body>
    </html>
  );
}
