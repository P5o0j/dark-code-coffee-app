import { Orbitron } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | DarkCode Coffee",
    default: "Welcome | DarkCode Coffee",
  },
  description:
    "DarkCode Coffee, coffee for IT professionals with sense of humour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.className} antialiased min-h-screen flex flex-col relative lg:mx-12 lg:px-0 sm:mx-8 sm:px-6`}
      >
        <Header />
        <div className="flex-1 py-3 px-3 ">
          <main className=" mx-auto w-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
