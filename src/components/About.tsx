import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const stats = [["5年", "大厂实战经验"], ["2200W", "服务产品 DAU"], ["200%", "AIGC 效率提升"], ["700W+", "广告物料消耗"]];

export default function About() {
  return <section id="about" className="section about wrap">
    <SectionLabel index="01">ABOUT ME / 关于我</SectionLabel>
    <div className="about-layout">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="portrait-wrap">
        {/* 头像来自个人作品集 PDF，可继续替换为更高分辨率原图 */}
        <img src="/assets/portfolio/portrait.webp" alt="窦桐个人头像" />
        <div className="portrait-tag"><span>DOU TONG</span><small>OPERATION DESIGNER</small></div>
      </motion.div>
      <div className="about-copy">
        <p className="kicker">HELLO, I'M DOU TONG.</p>
        <h2>业务导向<em>做设计</em>，<br />利用 AIGC 实现<br /><em>高效落地</em></h2>
        <div className="bio-grid"><p>5 年金融科技运营设计经验，曾服务于度小满。专注运营视觉、产品体验、AIGC 与动效设计，擅长在复杂业务里找到清晰、有力的表达。</p><div><a href="tel:13910972362">139 109 72362</a><a href="mailto:mayyyy0516@gmail.com">mayyyy0516@gmail.com</a><span>深圳 · 中国</span></div></div>
        <div className="stats">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </div>
    </div>
  </section>;
}
