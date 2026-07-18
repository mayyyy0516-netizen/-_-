import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "./Navbar";
import SplitText from "./SplitText";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 180]);
  const opacity = useTransform(scrollY, [0, 650], [1, 0]);
  return <section id="home" className="hero">
    <Navbar />
    {/* 素材替换：将 public/assets/hero-placeholder.mp4 替换为你的背景视频 */}
    <video className="hero-video" autoPlay muted loop playsInline poster="https://picsum.photos/seed/dark-fluid/1920/1080"><source src={`${import.meta.env.BASE_URL}assets/hero-placeholder.mp4`} type="video/mp4" /></video>
    <div className="hero-scrim" />
    <div className="hero-grid" />
    <motion.div style={{ y, opacity }} className="hero-content">
      <p className="eyebrow"><span /> PS · AI · AE · AIGC</p>
      <h1 className="hero-title" aria-label="创造有商业价值的运营设计">
        <SplitText
          tag="span"
          text="创造有商业价值的"
          className="hero-title-line"
          delay={55}
          duration={0.9}
          ease="power4.out"
          from={{ opacity: 0, y: 70, rotateX: -55 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
          rootMargin="0px"
        />
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
