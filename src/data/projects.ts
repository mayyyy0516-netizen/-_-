export type Project = {
  id: string; index: string; title: string; category: string; image: string;
  detailImage: string; desc: string; year: string; role: string;
  challenge: string; strategy: string; metrics: string[];
};

export const projects: Project[] = [
  { id: "spring-festival", index: "01", title: "SS级支付春节活动", category: "BRAND CAMPAIGN / AIGC", image: "/assets/portfolio/spring-festival-cover-v2.webp", detailImage: "/assets/portfolio/spring-festival-detail.webp", desc: "7 天完成全链路视觉设计，支付额同比增长 300%。", year: "2025", role: "运营视觉 / AIGC / 项目推进", challenge: "在春节高峰期快速完成活动视觉、会场页面与多场景传播物料，并保证金融业务信息准确清晰。", strategy: "以红包、年货与小微商户为视觉关键词，借助 AIGC 快速发散创意，再统一收敛为完整的春节营销视觉体系。", metrics: ["816.5 万营销物料消耗", "支付额同比 +300%", "APP 活跃度 +28.6%"] },
  { id: "growth-ads", index: "02", title: "商业广告获客", category: "GROWTH / SOCIAL ADVERTISING", image: "/assets/portfolio/growth-ads-cover.webp", detailImage: "/assets/portfolio/growth-ads-detail.webp", desc: "覆盖视频贴片与小红书，累计消耗 700 万+。", year: "2025", role: "商业广告 / 内容视觉 / 数据复盘", challenge: "在短时间内传递金融产品核心价值，并兼顾不同媒体平台的内容语境与转化效率。", strategy: "围绕信息准确、品牌清晰和情绪共鸣三条路径，持续挖掘创意方向并通过数据反馈迭代视觉表达。", metrics: ["单条物料消耗 120 万+", "有效申请占比 +24%", "当日借款 +118%"] },
  { id: "training-event", index: "03", title: "线下信贷管理培训", category: "EVENT VISUAL / AIGC", image: "/assets/portfolio/training-event-cover.webp", detailImage: "/assets/portfolio/training-event-detail.webp", desc: "为双年度管理启航活动构建统一的沉浸式空间视觉。", year: "2024", role: "活动主视觉 / 空间延展 / AI 辅助", challenge: "将严谨的信贷管理主题转化为具有未来感、方向感与现场沉浸感的活动视觉。", strategy: "使用光轨、星际与地平线意象承载“前行、引领、未来”，并统一延展至签到、导视和主会场物料。", metrics: ["2 套年度活动视觉", "覆盖主会场与全套导视", "AIGC 提升创意探索效率"] },
  { id: "aigc-lab", index: "04", title: "AIGC 视觉创作实验", category: "GENERATIVE AI / VISUAL LAB", image: "/assets/portfolio/aigc-lab-cover.webp", detailImage: "/assets/portfolio/aigc-lab-detail.webp", desc: "围绕角色、配色和版式进行持续的 AI 视觉训练。", year: "2025", role: "AI 创意 / 角色设计 / 视觉排版", challenge: "在生成式工具的高随机性中维持角色一致、视觉可控和可落地的商业完成度。", strategy: "以明确提示词、角色特征与配色规则约束生成结果，再通过传统设计工具完成细节优化与版式表达。", metrics: ["角色形象全流程训练", "多风格海报实践", "Midjourney + Photoshop"] },
];
