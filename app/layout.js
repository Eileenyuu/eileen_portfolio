import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - Eileen",
  description: "",
};

export default function RootLayout({ children }) {
  const isServer = typeof window === "undefined";
  const initialClassName = isServer ? "scroll-smooth" : "";

  return (
    <html lang="en" className={initialClassName}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    (function() {
                      try {
                        var isDarkMode = localStorage.theme === 'dark'
                          
                        
                        if (isDarkMode) {
                          document.documentElement.classList.add('dark');
                        } else {
                          document.documentElement.classList.remove('dark');
                        }
                      } catch (e) {}
                    })();
                  `,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 
        overflow-x-hidden dark:bg-dark-theme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
