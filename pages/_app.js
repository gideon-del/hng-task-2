import FavouriteMovie from "@/context/context";
import "@/styles/globals.css";
import { DM_Sans, Poppins } from "next/font/google";
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: ["--font-dm-sans"],
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: ["--font-poppins"],
  weight: ["700", "400", "500", "600"],
});
export default function App({ Component, pageProps }) {
  return (
    <FavouriteMovie>
      <div className={`${dmSans.variable} ${poppins.variable}`}>
        <Component {...pageProps} />
      </div>
    </FavouriteMovie>
  );
}
