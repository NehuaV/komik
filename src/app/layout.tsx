import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Komik",
  description: "Komik",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <div className="container mx-auto px-4">
          <header className="navbar bg-base-100 border-base-200 border-b py-4">
            <div className="navbar-start">
              <div className="text-primary text-2xl font-bold">Komik</div>
            </div>
            <div className="navbar-center hidden md:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a className="text-primary font-medium">Originals</a>
                </li>
                <li>
                  <a className="font-medium">Canvas</a>
                </li>
                <li>
                  <a className="font-medium">Daily</a>
                </li>
                <li>
                  <a className="font-medium">Genres</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end flex items-center justify-center">
              <button className="btn btn-ghost btn-circle" aria-label="Search">
                <span className="flex items-center justify-center text-xl">🔍</span>
              </button>
              <button className="btn btn-ghost btn-circle" aria-label="Search">
                <span className="flex items-center justify-center text-xl">👤</span>
              </button>
            </div>
          </header>

          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
