import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroVideo = () => {
  return (
    <section className="hero hero--video">
      <div className="hero__media">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay"></div>
      </div>
      <div className="hero__content container">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Lift Your Energy. Quiet Your Mind.
          </h1>
          <p className="lead mb-8 max-w-xl mx-auto">
            Beat-driven Pilates. Breath-led Yoga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" variant="primary">
              <Link to="/schedule">See Schedule</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/membership">Membership & Rates</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 justify-center" aria-hidden="true">
            <span className="tag">You Belong Here</span>
            <span className="tag">Start where you are</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;