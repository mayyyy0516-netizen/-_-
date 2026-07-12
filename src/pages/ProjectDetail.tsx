import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams(); const project = projects.find((p) => p.id === id);
  if (!project) return <Navigate to="/" replace />;
  return <main className="detail wrap"><Link className="back" to="/"><ArrowLeft size={16} /> 返回作品集</Link><p className="eyebrow"><span /> {project.category}</p><h1>{project.title}</h1><div className="detail-meta"><p>{project.desc}</p><span>ROLE / VISUAL & MOTION<br />YEAR / 2025</span></div><img src={project.image} alt={`${project.title}项目主视觉占位图`} />
    {/* 内容占位：在此替换为项目背景、策略、过程和结果 */}<section><h2>从挑战到结果</h2><p>这里是项目详情内容占位。你可以在该独立路由中加入项目背景、设计策略、过程稿、动态视频与结果数据，完整讲述这个项目如何从问题走向成果。</p><a href="mailto:mayyyy0516@gmail.com">讨论类似项目 <ArrowUpRight size={16} /></a></section></main>;
}
