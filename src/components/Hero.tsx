import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 180]);
  const opacity = useTransform(scrollY, [0, 650], [1, 0]);
  return <section id="home" className="hero">
    <Navbar />
    {/* 素材替换：将 /assets/hero-placeholder.mp4 替换为你的背景视频 */}
    <video className="hero-video" autoPlay muted loop playsInline poster="https://picsum.photos/seed/dark-fluid/1920/1080"><source src="/assets/hero-placeholder.mp4" type="video/mp4" /></video>
    <div className="hero-scrim" />
    <div className="hero-grid" />
    <motion.div style={{ y, opacity }} className="hero-content">
      <p className="eyebrow"><span /> PS · AI · AE · AIGC</p>
      <h1>创造有商业价值的<br /><em>运营设计</em></h1>
      <div className="hero-meta"><p>将设计、技术与商业目标连接起来，<br />让每一次视觉表达都更有价值。</p><span>SHENZHEN · CHINA<br />AVAILABLE FOR WORK</span></div>
    </motion.div>
    <a href="#about" className="scroll-hint"><ArrowDown size={17} /><span>SCROLL TO EXPLORE</span></a>
    <a href="#contact" className="floating-cta"><span>开始合作</span><ArrowUpRight size={19} /></a>
  </section>;
}
