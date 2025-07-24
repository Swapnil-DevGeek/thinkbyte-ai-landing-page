import "../App.css"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const clientLogos = [
    { src: 'https://i0.wp.com/thinkbyte.ai/wp-content/uploads/2025/01/SuperK-New-Logo-red-1.png?w=780&ssl=1', alt: 'SuperK' },
    { src: 'https://i0.wp.com/thinkbyte.ai/wp-content/uploads/2025/01/3-1-6.png?w=3000&ssl=1', alt: 'Iira' },
    { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/4-1-2.png', alt: 'Samaro' },
    { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/10-4.png', alt: 'Lustral Water' },
    { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/2-2-1.png', alt: 'Millet Maagic' },
    { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/6-1-3.png', alt: 'ISTTM Business School' },
    { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/8-1.png', alt: 'ZigRidez' },
    { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/5-1-1.png', alt: 'Good Deeds' },
    { src: 'https://thinkbyte.ai/wp-content/uploads/2025/01/7-1-6.png', alt: 'Anvayaa' },
];

const ClientMarquee = () => {
    return (
        <div className="app overflow-hidden">
            <section className="py-12 overflow-hidden">
                <h2 className="text-white text-3xl text-center mb-12 font-semibold">
                    Clients We've Helped Grow
                </h2>
               
                <InfiniteMovingCards items={clientLogos} />
            </section>
        </div>
    );
};

export default ClientMarquee;
