"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Crown, DollarSign, HelpCircle, Quote, Rocket, Sparkles, Target, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="medium"
      background="radialGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="RedBlack Agency"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Drive Results with Bold Marketing"
          description="We create powerful marketing campaigns that amplify your brand and deliver measurable growth. From strategy to execution, we're your partners in success."
          tag="Marketing Agency"
          tagIcon={Zap}
          buttons={[
            {
              text: "Start Your Project",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "portfolio"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763138766365-waqqmfei.jpg"
          imageAlt="Marketing team collaborating on creative campaigns"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We don't just create campaigns – we craft experiences that resonate, convert, and build lasting connections between your brand and your audience."
          buttons={[
            {
              text: "Learn More",
              href: "about"
            },
            {
              text: "Get Started",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Our Services"
          description="Comprehensive marketing solutions tailored to your business needs"
          tag="What We Do"
          tagIcon={Target}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              id: "01",
              title: "Brand Strategy",
              description: "Build a powerful brand identity that stands out in the market and resonates with your target audience",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763139216681-a8z5cr0q.jpg",
              imageAlt: "Brand strategy development"
            },
            {
              id: "02",
              title: "Digital Marketing",
              description: "Drive growth through data-driven digital campaigns across all major platforms and channels",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763139216681-a8z5cr0q.jpg",
              imageAlt: "Digital marketing campaigns"
            },
            {
              id: "03",
              title: "Content Creation",
              description: "Engage your audience with compelling content that tells your story and drives action",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763139216681-a8z5cr0q.jpg",
              imageAlt: "Content creation process"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="Join hundreds of successful companies that trust us with their marketing"
          tag="Clients"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763138770385-pkfs3iiv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763138771415-6cy3cs57.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763138772098-08n5r6yc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763138772787-qcgh8izk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763138773483-cmfrfeu4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763138774172-tnxqiwxh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763138775174-odgsxlcv.jpg"
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real results from real clients who've transformed their business with us"
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechFlow Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763138767431-z1awp0jg.jpg",
              imageAlt: "Sarah Johnson CEO portrait"
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Marketing Director",
              company: "GrowthLab",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763138768101-ywh5xzya.jpg",
              imageAlt: "Marcus Chen Marketing Director"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Founder",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763138768821-cwhrmdbk.jpg",
              imageAlt: "Emily Rodriguez Founder"
            },
            {
              id: "4",
              name: "David Kim",
              role: "VP Marketing",
              company: "InnovateCorp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1763138769544-8l25vg7u.jpg",
              imageAlt: "David Kim VP Marketing"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Package"
          description="Flexible pricing options designed to scale with your business"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$2,500/mo",
              subtitle: "Perfect for growing businesses",
              features: [
                "Brand strategy development",
                "Social media management",
                "Monthly performance reports",
                "Email marketing campaigns"
              ]
            },
            {
              id: "professional",
              badge: "Enterprise",
              badgeIcon: Crown,
              price: "$5,000/mo",
              subtitle: "For established companies",
              features: [
                "Comprehensive marketing strategy",
                "Multi-channel campaigns",
                "Advanced analytics & insights",
                "Dedicated account manager",
                "Custom content creation"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about working with our marketing agency"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes your agency different?",
              content: "We focus on data-driven strategies and measurable results. Our team combines creativity with analytics to deliver campaigns that not only look great but drive real business growth."
            },
            {
              id: "2",
              title: "How long does it take to see results?",
              content: "Most clients see initial improvements within 30-60 days, with significant growth typically occurring within 3-6 months. Timeline varies based on your industry and current marketing maturity."
            },
            {
              id: "3",
              title: "Do you work with small businesses?",
              content: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our packages are designed to scale with your business needs and budget."
            },
            {
              id: "4",
              title: "What's included in your monthly reports?",
              content: "Our reports include campaign performance metrics, ROI analysis, audience insights, competitor analysis, and actionable recommendations for optimization."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Rocket}
          title="Ready to Transform Your Marketing?"
          description="Let's discuss how we can help your business grow. Get a free consultation and see the RedBlack Agency difference."
          inputPlaceholder="Enter your business email"
          buttonText="Get Free Consultation"
          termsText="By submitting, you agree to our Terms of Service and Privacy Policy. We respect your privacy and will never spam you."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="RedBlack Agency"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Services", href: "services" },
                { label: "Portfolio", href: "portfolio" },
                { label: "Case Studies", href: "case-studies" }
              ]
            },
            {
              items: [
                { label: "Pricing", href: "pricing" },
                { label: "Contact", href: "contact" },
                { label: "Get Quote", href: "quote" },
                { label: "Free Consultation", href: "consultation" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" },
                { label: "Careers", href: "careers" },
                { label: "Blog", href: "blog" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}