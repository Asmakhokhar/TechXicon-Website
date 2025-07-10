// layout.js
import { Geist, Geist_Mono, Pattaya } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const pattaya = Pattaya({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pattaya",
});

export const metadata = {
  title: "TechXicon | Modern Web Solutions",
  description: "Where Technology Meets Your Business Vision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Destine&display=swap"
          rel="stylesheet"
        /> 
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={
          `overflow-x-hidden ${geistSans.variable} ${geistMono.variable} ${pattaya.variable} antialiased transition-colors duration-300`
        }
      >
        <ThemeProvider>
          <ThemeToggle />
          <div className="w-full mx-auto bg-white text-black dark:bg-[#0f172a] dark:text-white">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
