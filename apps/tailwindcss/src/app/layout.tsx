import "../styles/global.css";
import ClientLayout from "./ClientLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
