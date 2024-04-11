import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { ScrollParallax } from "react-just-parallax";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <ScrollParallax isAbsolutelyPositioned>
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="Stars"
              />
            </div>
          </ScrollParallax>
        </div>

        <Heading tag="Get started with Synapse" title="Pay once, use forever" />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <Link
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            to="/chat"
          >
            See the full details
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
