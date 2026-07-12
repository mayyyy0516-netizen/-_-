import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [["首页", "#home"], ["作品", "#work"], ["关于我", "#about"], ["能力", "#skills"], ["联系我", "#contact"]];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(scrollY > 40); addEventListener("scroll", onScroll); return () => removeEventListener("scroll", onScroll); }, []);
  return <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
    <a className="logo" href="#home" aria-label="返回首页"><span>DT</span><small>DESIGN / 2026</small></a>
    <nav>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
  </motion.header>;
}
