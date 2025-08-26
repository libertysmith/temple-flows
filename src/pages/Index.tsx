import Layout from '@/components/Layout';
import HeroVideo from '@/components/HeroVideo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Music, Heart, Users, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Video Section */}
      <HeroVideo />

      {/* Two Practices Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Two Practices. One Nervous System.</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Discover the perfect balance between energizing movement and calming practice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mat Pilates */}
            <Card className="bg-secondary/30 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Sparkles className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Mat Pilates</h3>
                  <p className="text-foreground/80 mb-6">
                    Fast-paced, beat-driven music to stimulate focus, confidence, and engagement. 
                    Experience crisp flows with curated playlists for a confident finish.
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>Builds core strength and stability</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>Improves posture and alignment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>Enhances focus and mental clarity</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>Energizing beat-driven experience</span>
                  </li>
                </ul>
                <blockquote className="text-lg font-medium text-primary border-l-4 border-accent pl-4">
                  "My energy feels lifted after Pilates."
                </blockquote>
              </CardContent>
            </Card>

            {/* Yoga */}
            <Card className="bg-secondary/30 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Yoga</h3>
                  <p className="text-foreground/80 mb-6">
                    Slow, breath-led practice with grounding music to release stress and calm anxiety. 
                    Spacious pacing for a quieter mind.
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>Reduces stress and anxiety</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>Improves flexibility and mobility</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>Promotes deep relaxation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>Breath-led nervous system reset</span>
                  </li>
                </ul>
                <blockquote className="text-lg font-medium text-primary border-l-4 border-accent pl-4">
                  "My mind feels quiet after yoga."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Music is a Wellness Tool Section */}
      <section className="section section--secondary">
        <div className="container">
          <div className="text-center mb-12">
            <Music className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Music is a Wellness Tool</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Our culturally rotating playlists are intentionally curated for each practice. 
              Energizing beats for Pilates to stimulate focus, calming melodies for Yoga to soothe the nervous system.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-background/50 border-accent/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Pilates Playlists</h4>
                <p className="text-sm text-foreground/80">
                  High-energy, beat-driven tracks to match your movement and elevate your practice.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-background/50 border-accent/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Yoga Soundscapes</h4>
                <p className="text-sm text-foreground/80">
                  Grounding, breath-paced music designed to calm your nervous system and center your mind.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-background/50 border-accent/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Cultural Rotation</h4>
                <p className="text-sm text-foreground/80">
                  Celebrating diverse artists and musical traditions that honor our inclusive community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Designed to Belong Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Designed to Belong</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Our modern sanctuary welcomes every body and every story. Experience thoughtful design 
              that centers community, inclusivity, and authentic wellness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">A Space That Holds You</h3>
              <div className="space-y-4 mb-8">
                <p className="text-foreground/80">
                  Soft eggshell walls meet sage green accents and warm gold details. Natural light filters 
                  through thoughtfully placed windows, creating an atmosphere of calm and clarity.
                </p>
                <p className="text-foreground/80">
                  Every element—from the sustainably sourced props to the carefully curated scents—is 
                  chosen to support your practice and honor your presence.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="tag">You Belong Here</span>
                <span className="tag">Start where you are</span>
              </div>
              
              <Button asChild variant="outline">
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-secondary/30 border-accent/20 p-6">
                <h4 className="font-semibold mb-2">Women-Forward</h4>
                <p className="text-sm text-foreground/80">
                  Created by women, for all bodies seeking authentic wellness and community.
                </p>
              </Card>
              
              <Card className="bg-secondary/30 border-accent/20 p-6">
                <h4 className="font-semibold mb-2">AAPI-Inclusive</h4>
                <p className="text-sm text-foreground/80">
                  Celebrating and centering Asian American Pacific Islander voices and traditions.
                </p>
              </Card>
              
              <Card className="bg-secondary/30 border-accent/20 p-6">
                <h4 className="font-semibold mb-2">Fragrance-Light</h4>
                <p className="text-sm text-foreground/80">
                  Mindful of chemical sensitivities, creating a space for all to breathe freely.
                </p>
              </Card>
              
              <Card className="bg-secondary/30 border-accent/20 p-6">
                <h4 className="font-semibold mb-2">Accessible Design</h4>
                <p className="text-sm text-foreground/80">
                  Thoughtful modifications and clear pathways welcome every body and ability.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
