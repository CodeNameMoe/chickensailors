import { ChevronRight, Egg } from "lucide-react";
import { Button } from "../components/ui/button";

import HeroSlice from "../components/hero/HeroSlice";
import FeaturesSlice from "../components/FeaturesSlice";
import TestimonialsSlice from "../components/testimonials/TestimonialsSlice";
import PricingSlice from "../components/pricing/PricingSlice";

const HomePage = () => {
  return (
    <>
      <HeroSlice />
      <FeaturesSlice />
      <PricingSlice />
      <TestimonialsSlice />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Set Sail?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to order a custom sailing dinghy for your
                chicken. Our expert craftspeople will ensure your feathered
                friend gets the nautical experience they deserve and can
                transport eggs safely.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Contact Us</Button>
                <Button variant="outline" size="lg">
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
              <img
                alt="Happy chickens sailing in their dinghies"
                className="object-cover w-full h-full"
                src="/chicken-dinghy-5.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
