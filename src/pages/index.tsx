import { LandingPage } from "@/templates/landing-page";
import { Post, allPosts } from "contentlayer/generated";

export default function Home() {
  console.log(allPosts);
  return (
    <LandingPage />
  );
}
