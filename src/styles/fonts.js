import { Outfit } from "next/font/google";
// import { Inder as Be_Vietnam_Pro } from "next/font/google";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  MainFont: outfit.className,
};
export default fonts;
