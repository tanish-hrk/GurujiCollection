import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import BestSellers from "@/components/home/BestSellers";
import CollectionsSection from "@/components/home/CollectionsSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InstagramSection from "@/components/home/InstagramSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <BestSellers />
      <CollectionsSection />
      <AboutSection />
      <TestimonialsSection />
      <InstagramSection />
      <NewsletterSection />
    </>
  );
}
