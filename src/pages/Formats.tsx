import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Music, Users } from 'lucide-react';

const Formats = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section bg-secondary/20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Class Formats</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Beat-driven Pilates. Breath-led Yoga. Two practices designed to work together for your nervous system.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="tag">You Belong Here</span>
            <span className="tag">Start where you are</span>
          </div>
        </div>
      </section>

      {/* Main Formats */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mat Pilates */}
            <Card className="bg-gradient-to-br from-secondary/20 to-accent/10 border-accent/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary to-accent/30 flex items-center justify-center">
                  <Sparkles className="h-24 w-24 text-foreground" />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">Mat Pilates</h2>
                  <p className="text-lg text-foreground/80 mb-6">
                    Fast-paced and beat-driven to lift energy and sharpen focus. 
                    Crisp flows, curated playlists, confident finish.
                  </p>
                  
                  <div className="bg-background/50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold mb-3 text-lg">How it feels:</h3>
                    <blockquote className="text-xl font-medium text-primary italic">
                      "My energy feels lifted after Pilates."
                    </blockquote>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold">What to expect:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span>50-minute energizing flow</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span>Beat-driven music to match movement</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span>Core-focused strength building</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span>Precise, controlled movements</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span>All levels with modifications</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button asChild size="lg" className="w-full">
                    <Link to="/schedule">Book Pilates</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Yoga */}
            <Card className="bg-gradient-to-br from-secondary/20 to-accent/10 border-accent/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary to-accent/30 flex items-center justify-center">
                  <Heart className="h-24 w-24 text-foreground" />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">Yoga</h2>
                  <p className="text-lg text-foreground/80 mb-6">
                    Breath-led, slower tempo for nervous system calm. 
                    Spacious pacing, grounding music, quieter mind.
                  </p>
                  
                  <div className="bg-background/50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold mb-3 text-lg">How it feels:</h3>
                    <blockquote className="text-xl font-medium text-primary italic">
                      "My mind feels quiet after yoga."
                    </blockquote>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold">What to expect:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span>60-minute calming flow</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span>Breath-paced, grounding music</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span>Stress-releasing sequences</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span>Mindful breathing techniques</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span>Restorative elements</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button asChild size="lg" className="w-full" variant="outline">
                    <Link to="/schedule">Book Yoga</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Playlists With Purpose */}
      <section className="section section--secondary">
        <div className="container">
          <div className="text-center mb-12">
            <Music className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Playlists With Purpose</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Music is an intentional tool in every class. Our culturally rotating themes celebrate 
              diverse artists while serving your nervous system's needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-background/50 border-accent/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Energizing Beats</h3>
                <p className="text-foreground/80 mb-4">
                  Pilates classes feature high-energy, rhythmic tracks that sync with your movement 
                  to build focus and confidence.
                </p>
                <p className="text-sm text-foreground/60">
                  Hip-hop, electronic, pop, and world music that lifts your spirit
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-background/50 border-accent/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Grounding Sounds</h3>
                <p className="text-foreground/80 mb-4">
                  Yoga classes flow to calming, breath-paced melodies that soothe your 
                  nervous system and quiet mental chatter.
                </p>
                <p className="text-sm text-foreground/60">
                  Ambient, acoustic, indie, and healing frequencies for inner peace
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-background/50 border-accent/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cultural Celebration</h3>
                <p className="text-foreground/80 mb-4">
                  Rotating monthly themes honor diverse musical traditions, centering 
                  AAPI artists and women-led musical movements.
                </p>
                <p className="text-sm text-foreground/60">
                  Inclusive playlists that reflect our community's rich diversity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Both?</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Discover how these complementary practices work together to support your whole self.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/schedule">View Schedule</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/membership">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Formats;