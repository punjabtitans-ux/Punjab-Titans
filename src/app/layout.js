import localFont from "next/font/local";
import "./globals.css";
import CursorBall from "./Components/CursorBall";
import Header from "./Components/Uiux/Header";
import Footer from "./Components/Uiux/Footer";
import Provider from "./providers/SessionProvider"; // <-- Correct import

const primaryfont = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export const metadata = {
  title:
    "Punjab Titans – Official Cricket Team Website | Match Updates, Players & Stats",
  description:
    "Welcome to the official Punjab Titans website. Get live match updates, team squad details, player stats, fixtures, latest news, and exclusive behind-the-scenes content from the Punjab Titans cricket team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${primaryfont.variable} antialiased`}>
        <Provider>
          <div className="max-w-[1980px] m-auto relative">
            {/* <div className="absolute top-0 w-full"> */}
              <Header />
            {/* </div> */}

            <CursorBall />

            {children}

            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
