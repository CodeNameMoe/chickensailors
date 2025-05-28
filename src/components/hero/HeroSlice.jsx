import { ChevronRight, Egg } from "lucide-react";
import { Button } from "../ui/button";

import "./HeroSlice.scss";

const HeroSlice = () => {
  const eggCount = Math.floor(Math.random() * 1000);

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1>
            Sailing Dinghies for the{" "}
            <span className="hero__highlight">Modern Chicken</span>
          </h1>
          <p>
            Give your feathered friends the nautical adventure they deserve. Our
            custom-built sailing dinghies are designed specifically for chickens
            who dream of the open water.
          </p>
          <div className="hero__cta">
            <Button size="lg">
              Get Started
              <ChevronRight />
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        <div className="hero__stats">
          <div className="hero__egg-card-stack">
            <div className="hero__egg-card-bg"></div>
            <div className="hero__egg-card">
              <Egg className="hero__egg-card-icon" />
              <div className="hero__egg-card-count">
                {eggCount.toLocaleString()}
              </div>
              <div className="hero__egg-card-label">
                eggs transported and counting!
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="Chicken sailing in a custom dinghy"
        src="/chicken-dinghy-7.jpg"
      />
      <div className="hero__wave">
        <svg
          viewBox="0 0 1440 120"
          width="100%"
          height="80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 C360,120 720,0 1080,64 C1260,96 1440,32 1440,32 L1440,120 L0,120 Z"
            fill="#fffbeb"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSlice;
