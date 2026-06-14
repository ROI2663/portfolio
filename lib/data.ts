export type ServiceItem = {
  title: string;
  description: string;
  icon: "Bot" | "Workflow" | "MessageCircle" | "Globe";
};

export type StatItem = {
  label: string;
  value: string;
  note: string;
};

export type CaseStudy = {
  industry: string;
  challenge: string;
  outcome: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  description?: string;
  image: string;
  href: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  comment: string;
};

export type ProcessStep = {
  title: string;
  detail: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const navItems = [
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#stats" },
  { label: "導入事例", href: "#case-studies" },
  { label: "制作実績", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "プロフィール", href: "#profile" },
  { label: "お問い合わせ", href: "#contact" },
] as const;

export const services: ServiceItem[] = [
  {
    title: "AIエージェント構築",
    description:
      "現場の業務フローに合わせ、問い合わせ対応・情報整理・提案作成を行うAIエージェントを設計します。",
    icon: "Bot",
  },
  {
    title: "業務自動化",
    description:
      "手作業の集計、データ転記、通知業務を自動化し、ミス削減と工数削減を同時に実現します。",
    icon: "Workflow",
  },
  {
    title: "チャットボット構築",
    description:
      "24時間対応のチャットボットを導入し、一次対応や予約受付を効率化して機会損失を防ぎます。",
    icon: "MessageCircle",
  },
  {
    title: "ホームページ作成",
    description:
      "信頼感と問い合わせ導線を重視したWebサイトを制作し、集客と成約率の向上を支援します。",
    icon: "Globe",
  },
];

export const stats: StatItem[] = [
  { label: "導入社数", value: "15社+", note: "中小企業・個人事業主へ導入" },
  { label: "コスト削減率", value: "平均40%", note: "定型業務の自動化による削減" },
  { label: "対応時間短縮", value: "60%", note: "問い合わせ一次対応を高速化" },
  { label: "顧客満足度", value: "98%", note: "導入後アンケート結果" },
];

export const caseStudies: CaseStudy[] = [
  {
    industry: "製造業",
    challenge: "在庫報告の入力と集計に毎月20時間以上かかっていた。",
    outcome: "AI連携の自動集計により、作業時間を月4時間まで短縮。",
  },
  {
    industry: "士業",
    challenge: "問い合わせ対応が属人化し、初回返信が遅れていた。",
    outcome: "チャットボット導入で即時回答率が向上し、商談化率が1.4倍に。",
  },
  {
    industry: "小売業",
    challenge: "複数媒体の売上集計に手間がかかり、意思決定が遅れていた。",
    outcome: "業務自動化で日次レポートを自動生成し、分析時間を70%削減。",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "ヘアサロン AIコンシェルジュBot",
    category: "チャットボット",
    description:
      "24時間365日、丁寧に予約・変更・キャンセルを案内し、落ち着いて各種問い合わせに対応するAIコンシェルジュ。",
    image: "/images/work-02.svg",
    href: "https://udify.app/chat/y5XMIg2Dvp3AsVF4",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "山田 太郎",
    role: "代表取締役",
    company: "株式会社サンプル製作所",
    comment:
      "業務フローを丁寧に理解した上で提案してくれるので、導入後すぐに効果を実感できました。",
  },
  {
    name: "佐藤 花子",
    role: "オーナー",
    company: "Hanako Design",
    comment:
      "問い合わせ対応の負担が大幅に減り、本来のクリエイティブ業務に集中できる時間が増えました。",
  },
  {
    name: "高橋 一郎",
    role: "営業責任者",
    company: "タカハシ商事",
    comment:
      "数字で成果を確認できる改善提案が分かりやすく、社内への説明もしやすかったです。",
  },
];

export const processSteps: ProcessStep[] = [
  { title: "無料ヒアリング", detail: "現状の課題と目標を整理します。" },
  { title: "課題分析", detail: "業務フローを確認し、改善ポイントを特定します。" },
  { title: "提案・見積", detail: "実装内容と費用感を明確に提案します。" },
  { title: "開発・導入", detail: "要件に合わせて開発し、運用開始まで伴走します。" },
  { title: "運用サポート", detail: "改善提案とチューニングを継続的に行います。" },
];

export const faqs: FaqItem[] = [
  {
    question: "相談だけでも可能ですか？",
    answer: "はい、可能です。現状の課題整理や導入優先度の相談だけでも歓迎しています。",
  },
  {
    question: "導入までの期間はどれくらいですか？",
    answer: "内容によりますが、短いもので2週間、標準的には1〜2か月で導入可能です。",
  },
  {
    question: "ITに詳しくなくても依頼できますか？",
    answer:
      "もちろんです。専門用語をできるだけ使わず、運用イメージが湧く形でご説明します。",
  },
  {
    question: "対応エリアはどこですか？",
    answer: "オンライン対応が中心のため、全国どこからでもご依頼いただけます。",
  },
  {
    question: "導入後の保守・改善もお願いできますか？",
    answer: "はい。運用状況を見ながら、継続的な改善と追加開発に対応しています。",
  },
];

export const profile = {
  name: "鳥居 幹広",
  heading: "生成AIを実務で使える価値に変えるパートナー",
  career:
    "業務改善とWeb制作を軸に、個人事業主から中小企業まで幅広い支援を実施。現場で使われる仕組みを重視し、導入後の定着まで伴走しています。",
  skills: ["生成AI", "Python", "TypeScript", "Next.js", "業務分析", "UI/UX設計"],
  message:
    "AIは導入することが目的ではなく、日々の仕事が楽になり成果につながることが目的です。実務に根付く仕組みを、一緒に作っていきます。",
};

export const contact = {
  email: "contact@example.com",
  phone: "090-1234-5678",
  sns: [
    { name: "X", href: "https://x.com/" },
    { name: "GitHub", href: "https://github.com/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
};
