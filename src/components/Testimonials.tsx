import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "ThinkByte has been instrumental in elevating our brand presence to the next level. Their creative social media strategies, and impactful paid marketing campaigns have significantly boosted our engagement and reach. They excel in aligning with our brand ethos and achieving results.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Millet Maagic Meal",
    role: "Co-Founder, Millet Maagic Meal",
  },
  {
    text: "ThinkByte has been an incredible partner in our journey. Their expertise in app development helped us bring our vision to life, and their continuous support has been instrumental in making our app user-friendly and impactful. We couldn't have asked for a better collaborator.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Anvayaa",
    role: "Founder, Anvayaa",
  },
  {
    text: "ThinkByte laid the foundation of our brand, aligning our website, branding, and social media with our vision. Their content and blog strategies added value, fostering authentic audience connections.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lustral Water",
    role: "Marketing Manager, Lustral Water",
  },
  {
    text: "ThinkByte's strategies for paid and social media marketing have been a game-changer for us. Their creative approach to influencer partnerships has significantly increased our reach and engagement. They've truly become an extension of our team.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Super K",
    role: "Marketing Lead, Super K",
  },
  {
    text: "As a new skincare brand, we needed a marketing team that could handle everything from paid ads to influencer collaborations. ThinkByte delivered beyond our expectations, helping us establish a strong online presence and connect authentically with our target audience. They've been with us every step of the way.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "IIRA",
    role: "Founder, Iira",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 5);

const Testimonials = () => {
  return (
    <section className="bg-black text-white my-20 relative overflow-hidden">
      <div className="container z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-white/20 py-1 px-4 rounded-lg text-white/80">
              Testimonials
            </div>
          </div>

          <h2 className="text-4xl font-bold tracking-tighter mt-5 text-white">
            What our clients say
          </h2>
          <p className="text-center mt-5 text-white/70">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="grid ml-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 max-h-[740px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;