import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Star } from 'lucide-react';

const Membership = () => {
  const pricingPlans = [
    {
      name: "Drop-In",
      price: "$35",
      duration: "per class",
      description: "Perfect for trying us out or occasional visits",
      features: [
        "Access to all class formats",
        "Premium props and amenities",
        "Community lounge access",
        "No commitment required"
      ],
      popular: false
    },
    {
      name: "Class Pack - 10",
      price: "$290",
      duration: "10 classes",
      description: "Great value for regular practitioners",
      features: [
        "Save $60 over drop-in rates",
        "3-month expiration",
        "Access to all class formats",
        "Premium props and amenities",
        "Community lounge access",
        "Priority booking"
      ],
      popular: true
    },
    {
      name: "Class Pack - 20",
      price: "$520",
      duration: "20 classes",
      description: "Best value for dedicated practice",
      features: [
        "Save $180 over drop-in rates",
        "6-month expiration",
        "Access to all class formats",
        "Premium props and amenities",
        "Community lounge access",
        "Priority booking",
        "Guest pass included"
      ],
      popular: false
    },
    {
      name: "Unlimited Monthly",
      price: "$189",
      duration: "per month",
      description: "For those who want unlimited access",
      features: [
        "Unlimited classes",
        "Access to all class formats",
        "Premium props and amenities",
        "Community lounge access",
        "Priority booking",
        "2 guest passes per month",
        "Workshop discounts",
        "Retail discounts"
      ],
      popular: false
    }
  ];

  const introOffers = [
    {
      title: "New Student Special",
      price: "$89",
      description: "3 classes within 2 weeks",
      note: "First-time students only"
    },
    {
      title: "First Month",
      price: "$99",
      description: "Unlimited classes for 30 days",
      note: "New students only, auto-renews at regular rate"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section bg-secondary/20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Membership & Class Rates</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Choose the perfect option for your practice. All memberships include access to our full range of classes and community amenities.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="tag">You Belong Here</span>
            <span className="tag">Start where you are</span>
          </div>
        </div>
      </section>

      {/* Intro Offers */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">New Student Offers</h2>
            <p className="text-lg text-foreground/80">Start your journey with special pricing</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {introOffers.map((offer) => (
              <Card key={offer.title} className="border-2 border-accent bg-accent/5">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{offer.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{offer.price}</div>
                  <p className="text-foreground/80">{offer.description}</p>
                  <p className="text-sm text-foreground/60">{offer.note}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/schedule">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="section section--secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Membership Options</h2>
            <p className="text-lg text-foreground/80">Flexible pricing for every practice</p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative ${
                  plan.popular 
                    ? 'border-2 border-primary shadow-lg scale-105' 
                    : 'border border-accent/20'
                } bg-background/80`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <p className="text-sm text-foreground/60">{plan.duration}</p>
                  <p className="text-foreground/80 text-sm">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild size="lg" className="w-full" variant={plan.popular ? "primary" : "outline"}>
                    <Link to="/schedule">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fine Print */}
      <section className="section">
        <div className="container max-w-4xl">
          <Card className="bg-secondary/20 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6">Important Information</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-foreground/80">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Class Packs & Expiration</h4>
                  <ul className="space-y-1">
                    <li>• 10-class packs expire 3 months from purchase</li>
                    <li>• 20-class packs expire 6 months from purchase</li>
                    <li>• No extensions or refunds on expired classes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Cancellation Policy</h4>
                  <ul className="space-y-1">
                    <li>• Cancel 12+ hours in advance for full credit</li>
                    <li>• Late cancellation fee may apply</li>
                    <li>• No-shows forfeit the class</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Monthly Memberships</h4>
                  <ul className="space-y-1">
                    <li>• Auto-renewal monthly billing</li>
                    <li>• 30-day notice required to cancel</li>
                    <li>• Freeze options available for extended absence</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Questions?</h4>
                  <p>Visit our <Link to="/faq" className="text-primary hover:underline">FAQ page</Link> or email us at hello@templepilates.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Membership;