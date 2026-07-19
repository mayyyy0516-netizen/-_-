import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionLabel from "./SectionLabel";
import BorderGlow from "./BorderGlow";
import { projects } from "../data/projects";

export default function Projects() {
  return <section id="work" className="section work wrap">
    <SectionLabel index="02">SELECTED WORK / 精选项目</SectionLabel>
    <div className="section-heading"><h2>CATALOG</h2><p>从品牌营销到智能设计系统，<br />探索创意与增长之间的更多可能。</p></div>
    <div className="project-grid">{projects.map((project, i) => <motion.article key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * .08 }} viewport={{ once: true, amount: .2 }} className="project-card">
      <Link to={`/project/${project.id}`} aria-label={`查看${project.title}项目详情`}>
        <BorderGlow className="project-border-glow" edgeSensitivity={24} glowColor="187 70 78" borderRadius={20} glowRadius={28} glowIntensity={0.6} coneSpread={20} colors={["#7dd3fc", "#a5f3fc", "#60a5fa"]} fillOpacity={0.12}>
          <div className="project-image"><img src={project.image} alt={`${project.title}项目占位图`} /><i><ArrowUpRight /></i></div>
        </BorderGlow>
        <div className="project-info"><div><p>{project.category}</p><h3>{project.title}</h3></div><small>{project.desc}</small></div>
      </Link>
    </motion.article>)}</div>
  </section>;
}
