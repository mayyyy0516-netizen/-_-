import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  if (!project) return <Navigate to="/" replace />;

  return <main className="detail wrap">
    <Link className="back" to="/#work"><ArrowLeft size={16} /> 返回作品集</Link>
    <p className="eyebrow"><span /> {project.category}</p>
    <h1>{project.title}</h1>
    <div className="detail-meta"><p>{project.desc}</p><span>ROLE / {project.role}<br />YEAR / {project.year}</span></div>
    <img className="detail-cover" src={project.image} alt={`${project.title}项目封面`} />
    <section className="case-intro"><div><p className="kicker">PROJECT CHALLENGE</p><h2>从挑战到结果</h2></div><div><h3>项目挑战</h3><p>{project.challenge}</p><h3>设计策略</h3><p>{project.strategy}</p></div></section>
    <div className="case-metrics">{project.metrics.map((metric, index) => <div key={metric}><span>0{index + 1}</span><strong>{metric}</strong></div>)}</div>
    <div className="case-study"><p className="kicker">FULL CASE STUDY / 完整项目长图</p><img src={project.detailImage} alt={`${project.title}完整项目展示`} /></div>
    <section className="detail-cta"><h2>想了解更多项目细节？</h2><a href="mailto:mayyyy0516@gmail.com">与我联系 <ArrowUpRight size={16} /></a></section>
  </main>;
}
