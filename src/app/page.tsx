import { Metadata } from "next";
import HomeOnePage from "./(dmw)/home/page";

export const metadata: Metadata = {
  title: "Dream MeDia WorKs  - Home Page",
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
