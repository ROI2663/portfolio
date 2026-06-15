export type ServiceItem = {
  title: string;
  description: string;
  icon: "Bot" | "Workflow" | "MessageCircle" | "Globe";
};

export type StatItem = {
  title: string;
  detail: string;
};

export type CaseStudy = {
  title: string;
  challenge: string;
  support: string;
};

type GalleryItemBase = {
  title: string;
  category: string;
  description?: string;
  image: string;
};

export type GalleryItem =
  | (GalleryItemBase & { href: string; video?: never })
  | (GalleryItemBase & { video: string; href?: never });

export type Testimonial = {
  title: string;
  description: string;
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
  { label: "選ばれる理由", href: "#stats" },
  { label: "課題別サポート", href: "#case-studies" },
  { label: "制作デモ", href: "#gallery" },
  { label: "おすすめの方", href: "#testimonials" },
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
  {
    title: "現場目線の設計",
    detail: "導入が目的にならないよう、実際の業務フローに合わせて仕組みを設計します。",
  },
  {
    title: "小さく始めて改善",
    detail: "いきなり大規模化せず、効果を確認しながら段階的に育てる進め方を重視します。",
  },
  {
    title: "わかりやすい説明",
    detail: "専門用語をできるだけ使わず、運用イメージが持てる形で丁寧に共有します。",
  },
  {
    title: "オンライン完結",
    detail: "ヒアリングから納品後のフォローまで、オンラインで全国対応しています。",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "経費入力の手間を減らしたい",
    challenge: "レシートや請求書の転記に時間がかかり、月末作業が負担になっている。",
    support:
      "画像・PDFから必要項目を抽出し、スプレッドシートへ自動反映する仕組みをご提案できます。",
  },
  {
    title: "問い合わせ対応を効率化したい",
    challenge: "よくある質問への返信が手作業で、対応品質とスピードにばらつきが出ている。",
    support:
      "チャットボットの一次対応を整備し、予約・変更・基本案内の負担を軽減する構成を検討できます。",
  },
  {
    title: "ホームページ経由の相談を増やしたい",
    challenge: "サイトはあるが導線が弱く、サービスの魅力が伝わりにくい状態になっている。",
    support:
      "信頼感のある構成と問い合わせ導線を設計し、集客につながるページ制作をサポートできます。",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "カフェ SNS企画 AIエージェント",
    category: "デモ作品 / AIエージェント",
    description:
      "個人経営カフェ向けに、競合リサーチとSNS投稿企画を自律化するAIエージェントの自主制作デモです。店舗ナレッジに基づき、投稿案を月30本自動生成します。",
    image: "/images/work-ai-agent.svg",
    video: "/videos/cafe-ai-agent-demo.mp4",
  },
  {
    title: "カフェ経費処理 業務自動化システム",
    category: "デモ作品 / 業務自動化",
    description:
      "レシート・請求書（画像・PDF）をフォルダに置くだけで、AIが日付・取引先・金額・勘定科目を抽出して出納帳へ追記する、自主制作デモです。経費入力を大幅に効率化できる構成を再現しています。",
    image: "/images/work-automation.svg",
    video: "/videos/cafe-automation-demo.mp4",
  },
  {
    title: "ヘアサロン AIコンシェルジュBot",
    category: "デモ作品 / チャットボット",
    description:
      "24時間365日で予約・変更・キャンセル案内に対応する導線をまとめた、自主制作チャットボットのデモです。",
    image: "/images/work-02.svg",
    href: "https://udify.app/chat/y5XMIg2Dvp3AsVF4",
  },
];

export const testimonials: Testimonial[] = [
  {
    title: "個人事業主・小規模店舗の方",
    description:
      "少人数で日々の業務を回しており、定型作業の負担を減らして本業に集中したい方におすすめです。",
  },
  {
    title: "中小企業のご担当者さま",
    description:
      "AI活用を進めたいが何から着手すべきか迷っている場合に、課題整理から伴走できます。",
  },
  {
    title: "IT専任がいないチーム",
    description:
      "外注先へ丸投げせず、運用を見据えて一緒に考えながら仕組みを整えたい方に向いています。",
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
  {
    question: "実績が少ない段階でも相談できますか？",
    answer:
      "はい。現在は副業として活動を始めた段階ですが、自主制作デモをベースに課題整理から丁寧にご提案します。",
  },
  {
    question: "副業での対応体制はどのようになっていますか？",
    answer:
      "平日夜と土日を中心に対応しています。事前に進行スケジュールを共有し、メッセージ連絡は迅速に行います。",
  },
];

export const profile = {
  name: "安田 慶一",
  heading: "生成AIを実務で使える価値に変えるパートナー",
  career:
    "業務改善とWeb制作を学びながら、AI活用の仕組みづくりに取り組んでいます。副業として活動を開始し、デモ制作で検証した内容をもとに、小さな改善から伴走します。",
  skills: ["生成AI", "Python", "TypeScript", "Next.js", "業務分析", "UI/UX設計"],
  message:
    "AIは導入することが目的ではなく、日々の仕事が楽になり成果につながることが目的です。実務に根付く仕組みを、一緒に作っていきます。",
};

export const contact = {
  email: "keiichi.yasuda.biz@gmail.com",
};

export const contactHearing = {
  title: "初回ヒアリング無料",
  description:
    "AIエージェント構築・業務自動化・チャットボット・ホームページ制作など、ご提供サービスに関するお悩みをお気軽にお聞かせください。現状の課題に合わせ、最適なソリューションをご提案します。",
  highlights: [
    "2営業日以内にご返信",
    "秘密厳守・NDA対応可",
    "オンラインミーティング対応",
  ],
};
