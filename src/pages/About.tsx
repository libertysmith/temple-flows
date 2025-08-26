import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Users, Leaf, Sparkles, Coffee, ShoppingBag } from 'lucide-react';

const About = () => {
  const instructors = [
    {
      name: "Maya Chen",
      title: "Founder & Lead Instructor",
      bio: "Certified Pilates instructor with 8+ years of experience. Believes movement should feel like medicine for the soul.",
      specialties: ["Mat Pilates", "Prenatal", "Reformer"]
    },
    {
      name: "Aria Nakamura", 
      title: "Yoga Instructor",
      bio: "Registered yoga teacher specializing in nervous system healing. Creates space for all bodies to find their breath.",
      specialties: ["Vinyasa", "Yin", "Meditation"]
    },
    {
      name: "Priya Patel",
      title: "Pilates Instructor", 
      bio: "Former dancer turned movement educator. Passionate about building strength with joy and community connection.",
      specialties: ["Mat Pilates", "Barre", "Movement Therapy"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section bg-secondary/20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">About Temple Pilates</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            A modern sanctuary for movement, community, and authentic wellness. 
            Created by women, for all bodies seeking belonging.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="tag">You Belong Here</span>
            <span className="tag">Start where you are</span>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  Temple Pilates was born from a simple belief: movement should feel like medicine, 
                  and wellness spaces should welcome every body and every story.
                </p>
                <p>
                  Founded by women who understand the power of inclusive community, we created a 
                  modern sanctuary that honors both the science of movement and the art of belonging. 
                  Our practices are designed to work together—energizing Pilates to lift your spirit, 
                  calming yoga to quiet your mind.
                </p>
                <p>
                  We center AAPI voices and women-led wellness, celebrating the rich traditions 
                  that have shaped healing arts for generations. Every detail, from our carefully 
                  curated music to our thoughtful design, reflects our commitment to authentic, 
                  accessible wellness.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-secondary/30 border-accent/20 p-6">
                <Heart className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2">Women-Forward</h4>
                <p className="text-sm text-foreground/80">
                  Created by women who understand the unique wellness needs of our community.
                </p>
              </Card>
              <Card className="bg-secondary/30 border-accent/20 p-6">
                <Users className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2">AAPI-Inclusive</h4>
                <p className="text-sm text-foreground/80">
                  Celebrating and centering Asian American Pacific Islander traditions and voices.
                </p>
              </Card>
              <Card className="bg-secondary/30 border-accent/20 p-6">
                <Leaf className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2">Thoughtful Design</h4>
                <p className="text-sm text-foreground/80">
                  Every element chosen to support your practice and honor your presence.
                </p>
              </Card>
              <Card className="bg-secondary/30 border-accent/20 p-6">
                <Sparkles className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2">Accessible Wellness</h4>
                <p className="text-sm text-foreground/80">
                  Modifications and clear pathways welcome every body and ability level.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Design */}
      <section className="section section--secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">A Space That Holds You</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Our modern sanctuary design reflects our values: soft eggshell base with sage green, 
              warm gold, and gentle pink accents create an atmosphere of calm and clarity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-background/50 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Natural Elements</h3>
                <p className="text-sm text-foreground/80">
                  Sustainably sourced props, living plants, and natural light create a connection to earth and breath.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-background/50 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Fragrance-Light</h3>
                <p className="text-sm text-foreground/80">
                  Mindful of chemical sensitivities, we maintain a clean, breathable environment for all bodies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-background/50 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Thoughtful Details</h3>
                <p className="text-sm text-foreground/80">
                  From curated scents to accessible pathways, every detail supports your practice and comfort.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lounge & Events */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-secondary/30 border-accent/20 p-6">
                  <Coffee className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Photo Nook</h4>
                  <p className="text-sm text-foreground/80">
                    Beautiful natural lighting perfect for celebrating your practice journey.
                  </p>
                </Card>
                <Card className="bg-secondary/30 border-accent/20 p-6">
                  <Heart className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Intention Board</h4>
                  <p className="text-sm text-foreground/80">
                    Seasonal themes for setting and sharing your wellness intentions with community.
                  </p>
                </Card>
                <Card className="bg-secondary/30 border-accent/20 p-6">
                  <ShoppingBag className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Retail Corner</h4>
                  <p className="text-sm text-foreground/80">
                    Curated wellness products from local AAPI and women-owned brands.
                  </p>
                </Card>
                <Card className="bg-secondary/30 border-accent/20 p-6">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Pop-Up Events</h4>
                  <p className="text-sm text-foreground/80">
                    Regular collaborations with local wellness and AAPI community leaders.
                  </p>
                </Card>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Lounge & Events</h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  Beyond movement, Temple Pilates is a community hub. Our thoughtfully designed 
                  lounge space encourages connection and celebrates the local wellness ecosystem.
                </p>
                <p>
                  We regularly host pop-up events with local AAPI and women-owned wellness brands, 
                  creating opportunities for community members to discover new products and connect 
                  with like-minded entrepreneurs.
                </p>
                <p>
                  Our seasonal intention board invites you to set and share your wellness goals, 
                  fostering a sense of collective growth and support.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link to="/schedule">Visit Our Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="section section--secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Meet Our Instructors</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Experienced, compassionate teachers who create space for authentic movement and community connection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <Card key={instructor.name} className="bg-background/80 border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                  <p className="text-primary font-medium mb-4">{instructor.title}</p>
                  <p className="text-foreground/80 text-sm mb-4">{instructor.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {instructor.specialties.map((specialty) => (
                      <span key={specialty} className="px-3 py-1 bg-accent/20 text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin?</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our community of movers, breathers, and seekers. Your practice, your pace, your belonging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/schedule">Book Your First Class</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/membership">View New Student Offers</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;