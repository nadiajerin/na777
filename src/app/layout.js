
import "./globals.css";
import AuthProvider from "./lib/AuthProvider";


export const metadata = {
  title: "NA 777",
  description: "na777",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className="bg-black"
      >
        <AuthProvider>
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
