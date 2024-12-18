import { Orbitron } from "next/font/google";
import "@/app/_styles/globals.css";
import Menu from "./_components/Menu";

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
      <body className={`${orbitron.className} antialiased`}>
      <Menu />
      {children}</body>
    </html>
  );
}
