import { Aperture, Bot, Boxes, Film, Sparkles, TrendingUp } from "lucide-react";
import SectionLabel from "./SectionLabel";

const skills = [
  [Aperture, "视觉与品牌", "VISUAL DESIGN", "建立清晰统一的视觉语言，让品牌在复杂场景中依然保持辨识度。"],
  [Boxes, "产品与 UI", "UI / UX", "从业务目标与用户路径出发，构建兼具效率、体验与美感的界面。"],
  [Bot, "AIGC 创作", "GENERATIVE AI", "熟练运用 Midjourney、Stable Diffusion 与 LoRA，重塑创意工作流。"],
  [Film, "动态设计", "MOTION", "用克制且准确的动态语言强化信息层级、节奏与品牌感受。"],
  [TrendingUp, "增长设计", "GROWTH DESIGN", "理解渠道与转化数据，以可验证的设计推动真实业务增长。"],
  [Sparkles, "创意策划", "CREATIVE", "在策略、内容和执行之间建立连接，把抽象命题变成可感知体验。"],
];
export default function Skills() {
  return <section id="skills" className="section skills wrap"><SectionLabel index="03">CAPABILITIES / 专业能力</SectionLabel>
    <div className="section-heading"><h2 data-display-reveal>设计能力</h2><p>跨越策略、视觉与技术，<br />提供完整而敏捷的设计解决方案。</p></div>
    <div className="skill-grid">{skills.map(([Icon, title, en, desc], i) => <div key={String(title)} className="skill-card"><Icon /><span>0{i + 1}</span><p>{en as string}</p><h3>{title as string}</h3><small>{desc as string}</small></div>)}</div>
  </section>;
}
