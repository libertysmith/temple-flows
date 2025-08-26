import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      id: "what-to-bring",
      question: "What should I bring to class?",
      answer: "Just bring yourself and water! We provide high-quality mats, props, and towels. Wear comfortable, stretchy clothing that you can move freely in. Grippy socks are recommended for Pilates classes."
    },
    {
      id: "new-to-class",
      question: "I'm new to Pilates/Yoga. Can I still attend?",
      answer: "Absolutely! All of our classes welcome beginners. Our instructors provide modifications for every exercise, and we encourage you to listen to your body and work at your own pace. Consider starting with our New Student Special to ease into your practice."
    },
    {
      id: "music-volume",
      question: "How loud is the music?",
      answer: "Our music is thoughtfully calibrated for each practice. Pilates classes feature energizing beats at a moderate volume to support focus, while yoga classes use softer, grounding soundscapes. If you have hearing sensitivities, please let your instructor know—we're happy to accommodate."
    },
    {
      id: "pregnancy-postpartum",
      question: "Can I attend classes if I'm pregnant or postpartum?",
      answer: "We welcome pregnant and postpartum bodies! However, we recommend consulting with your healthcare provider before beginning or continuing any exercise program. Our instructors can provide modifications, but medical clearance is always advised for your safety."
    },
    {
      id: "booking-cancellation",
      question: "How do I book classes and what's the cancellation policy?",
      answer: "Book through our online scheduling system. We require 12+ hours notice for cancellations to receive full credit. Late cancellations may incur a fee, and no-shows forfeit the class. This policy helps us manage our small class sizes fairly."
    },
    {
      id: "late-arrival",
      question: "What if I'm running late?",
      answer: "We understand life happens! However, for safety and to avoid disrupting the class flow, we may not be able to accommodate arrivals more than 10 minutes late. We recommend arriving 10-15 minutes early to settle in and connect with your intention."
    },
    {
      id: "membership-options",
      question: "What membership and class pack options do you offer?",
      answer: "We offer flexible options: drop-in classes ($35), 10-class packs ($290, 3-month expiry), 20-class packs ($520, 6-month expiry), and unlimited monthly memberships ($189). New students can try our special introductory offers."
    },
    {
      id: "community-events",
      question: "Do you host community events?",
      answer: "Yes! We regularly host pop-up events featuring local AAPI and women-owned wellness brands, seasonal intention-setting workshops, and community celebrations. Follow us on social media or ask at the front desk for upcoming events."
    },
    {
      id: "fragrance-policy",
      question: "What's your fragrance policy?",
      answer: "We maintain a fragrance-light environment to accommodate chemical sensitivities and ensure everyone can breathe comfortably. We kindly ask that you avoid wearing strong perfumes, colognes, or scented products to class."
    },
    {
      id: "accessibility",
      question: "Is your studio accessible?",
      answer: "Yes! Our studio features accessible pathways, and our instructors are trained to provide modifications for different abilities and mobility levels. If you have specific accessibility needs, please contact us in advance so we can ensure your comfort."
    },
    {
      id: "inclusivity",
      question: "What does 'designed to belong' mean?",
      answer: "We believe wellness should be accessible to every body and every story. Our studio centers women and AAPI voices while welcoming all identities. We're committed to creating a brave space where you can show up authentically, start where you are, and grow at your own pace."
    },
    {
      id: "first-time-tips",
      question: "Any tips for my first visit?",
      answer: "Arrive 15 minutes early to check in and get oriented. Don't eat a large meal 2 hours before class. Bring water and let your instructor know it's your first time—we love welcoming new community members! Most importantly, remember that everyone was a beginner once."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section bg-secondary/20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Everything you need to know about practicing at Temple Pilates. 
            Your questions help us create a more welcoming space for everyone.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="tag">You Belong Here</span>
            <span className="tag">Start where you are</span>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section">
        <div className="container max-w-4xl">
          <Card className="bg-background/80 border-accent/20">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="border border-accent/20 rounded-lg px-6 py-2"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 pt-4 pb-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section section--secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              We're here to help you feel prepared and excited for your practice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-background/50 border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Explore Pricing</h3>
                <p className="text-foreground/80 text-sm mb-4">
                  Learn about our flexible membership options, class packs, and special new student offers.
                </p>
                <Link 
                  to="/membership" 
                  className="text-primary hover:text-accent transition-colors font-medium"
                >
                  View Membership Options →
                </Link>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-background/50 border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Book Your Visit</h3>
                <p className="text-foreground/80 text-sm mb-4">
                  Ready to experience our community? Check our schedule and reserve your spot.
                </p>
                <Link 
                  to="/schedule" 
                  className="text-primary hover:text-accent transition-colors font-medium"
                >
                  See Class Schedule →
                </Link>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-background/50 border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-foreground/80 text-sm mb-4">
                  Have a specific question? We'd love to hear from you and help however we can.
                </p>
                <a 
                  href="mailto:hello@templepilates.com"
                  className="text-primary hover:text-accent transition-colors font-medium"
                >
                  hello@templepilates.com →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="section">
        <div className="container max-w-4xl">
          <Card className="bg-secondary/20 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Community Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Respect & Inclusion</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Honor all bodies, identities, and experience levels</li>
                    <li>• Use inclusive language and avoid assumptions</li>
                    <li>• Give others space to practice authentically</li>
                    <li>• Ask before offering unsolicited advice</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Studio Etiquette</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Arrive 10-15 minutes early to settle in</li>
                    <li>• Keep phones on silent and avoid usage during class</li>
                    <li>• Clean props and equipment after use</li>
                    <li>• Practice mindful conversation in shared spaces</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Wellness First</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Listen to your body and modify as needed</li>
                    <li>• Communicate injuries or concerns to instructors</li>
                    <li>• Avoid fragrant products to support sensitive community members</li>
                    <li>• Stay home if you're feeling unwell</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Community Care</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Support local and AAPI-owned businesses we feature</li>
                    <li>• Share the space mindfully during busy times</li>
                    <li>• Celebrate others' growth and achievements</li>
                    <li>• Help maintain our welcoming environment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;