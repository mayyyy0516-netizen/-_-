import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "./Navbar";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";
import SideRays from "./SideRays";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 180]);
  const opacity = useTransform(scrollY, [0, 650], [1, 0]);
  return <section id="home" className="hero">
    <Navbar />
    <video
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={`${import.meta.env.BASE_URL}assets/hero-galaxy-poster.png`}
      aria-hidden="true"
    >
      <source src={`${import.meta.env.BASE_URL}assets/hero-galaxy-background.mp4`} type="video/mp4" />
    </video>
    <div className="hero-scrim" />
    <div className="hero-grid" />
    <SideRays
      className="hero-side-rays"
      speed={0.55}
      rayColor1="#203b5c"
      rayColor2="#8ad7ea"
      intensity={0.72}
      spread={1.35}
      origin="top-right"
      tilt={-4}
      saturation={0.75}
      blend={0.74}
      falloff={2.1}
      opacity={0.3}
    />
    <div className="hero-bottom-fade" aria-hidden="true" />
    <motion.div style={{ y, opacity }} className="hero-content">
      <p className="eyebrow"><span /> PS · AI · AE · AIGC</p>
      <h1 className="hero-title" aria-label="创造有商业价值的运营设计">
        <span className="hero-title-line hero-title-first">
          <ShinyText
            text="创造有商业价值的"
            className="hero-title-shiny"
            speed={2.2}
            delay={0}
            color="#f3f8ff"
            shineColor="#aff3ff"
            spread={108}
          />
        </span>
        <SplitText
          tag="span"
          text="运营设计"
          className="hero-title-line hero-title-outline"
          delay={75}
          duration={1}
          ease="power4.out"
          from={{ opacity: 0, y: 55, rotateX: -45 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
          rootMargin="0px"
        />
      </h1>
      <div className="hero-meta"><p>将设计、技术与商业目标连接起来，<br />让每一次视觉表达都更有价值。</p><span>SHENZHEN · CHINA<br />AVAILABLE FOR WORK</span></div>
    </motion.div>
    <a href="#about" className="scroll-hint"><ArrowDown size={17} /><span>SCROLL TO EXPLORE</span></a>
    <a href="#contact" className="floating-cta"><span>开始合作</span><ArrowUpRight size={19} /></a>
  </section>;
}
