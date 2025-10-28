import "./globals.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";

export const metadata = {
  title: "Terrene - Spaces made simple, thoughtful, lasting.",
  description: "Spaces made simple, thoughtful, lasting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <TopBar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
