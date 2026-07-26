import { useEffect, useState } from "react";

const links = [["首页", "#home"], ["关于我", "#about"], ["精选项目", "#work"], ["专业能力", "#skills"], ["请联系我", "#contact"]];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(scrollY > 40); addEventListener("scroll", onScroll); return () => removeEventListener("scroll", onScroll); }, []);
  return <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
    <a className="logo" href="#home" aria-label="返回首页"><span>:)</span><small>DESIGN / 2026</small></a>
    <nav>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
  </header>;
}
