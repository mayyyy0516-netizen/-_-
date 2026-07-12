import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return <footer id="contact" className="contact"><div className="wrap contact-inner">
    <SectionLabel index="04">CONTACT / 联系我</SectionLabel>
    <div className="contact-main"><div><p className="kicker">HAVE A PROJECT IN MIND?</p><h2>一起创造<br /><em>值得记住的体验。</em></h2></div>
      <form onSubmit={(e) => e.preventDefault()}>{/* 表单占位：后续可连接邮件或表单服务 */}<label>你的称呼<input placeholder="NAME" /></label><label>联系方式<input type="email" placeholder="EMAIL" /></label><label>项目简述<textarea placeholder="TELL ME ABOUT YOUR PROJECT" rows={3} /></label><button type="submit">发送留言 <ArrowUpRight size={18} /></button></form>
    </div>
    <div className="contact-bottom"><div><a href="mailto:mayyyy0516@gmail.com">MAYYYY0516@GMAIL.COM <ArrowUpRight size={14} /></a><a href="tel:13910972362">+86 139 1097 2362 <ArrowUpRight size={14} /></a></div><div className="socials">{/* 链接占位：替换为你的真实社交账号 */}<a href="#contact">BEHANCE</a><a href="#contact">DRIBBBLE</a><a href="#contact">XIAOHONGSHU</a></div><small>© 2026 DOU TONG DESIGN</small></div>
  </div></footer>;
}
