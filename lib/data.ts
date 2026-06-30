export type ServiceItem = {
  title: string;
  description: string;
  icon: "Bot" | "Workflow" | "MessageCircle" | "Globe";
  price?: string;
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
    title: "レシート・帳票のAI自動データ化",
    description:
      "レシート・領収書・請求書を撮って送るだけ。AIが日付・取引先・金額・勘定科目を読み取り、スプレッドシートへ自動で記帳・仕分けします。閉店後の手入力をほぼゼロに。",
    icon: "Workflow",
    price: "5万円〜（まずは無料サンプル）",
  },
  {
    title: "業務自動化・効率化",
    description:
      "手作業の集計・データ転記・通知などの繰り返し業務を自動化し、ミス削減と工数削減を同時に実現します。",
    icon: "Workflow",
    price: "5万円〜",
  },
  {
    title: "AIチャットボット構築",
    description:
      "24時間対応のチャットボットで、予約・変更・問い合わせの一次対応を自動化し、機会損失を防ぎます。",
    icon: "MessageCircle",
    price: "10万円〜",
  },
  {
    title: "AIエージェント構築",
    description:
      "リサーチ・情報整理・投稿企画などをこなすAIエージェントを設計します。定型業務を任せて、店主が本業に集中できる体制をつくります。",
    icon: "Bot",
    price: "ご相談",
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
      "個人経営カフェ向けに、競合リサーチとSNS投稿企画を自律化するAIエージェントのデモです。店舗ナレッジに基づき、投稿案を月30本自動生成します。",
    image: "/images/work-ai-agent.png",
    video: "/videos/cafe-ai-agent-demo.mp4",
  },
  {
    title: "カフェ経費処理 業務自動化システム",
    category: "デモ作品 / 業務自動化",
    description:
      "レシート・請求書（画像・PDF）をフォルダに置くだけで、AIが日付・取引先・金額・勘定科目を抽出して出納帳へ追記するデモです。経費入力を大幅に効率化できる構成を再現しています。",
    image: "/images/work-automation.png",
    video: "/videos/cafe-automation-demo.mp4",
  },
  {
    title: "ヘアサロン AIコンシェルジュBot",
    category: "デモ作品 / チャットボット",
    description:
      "24時間365日で予約・変更・キャンセル案内に対応する導線をまとめた、チャットボットのデモです。",
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
    question: "費用の目安を教えてください。",
    answer:
      "レシート・帳票のデータ化や業務自動化の仕組みは5万円〜、AIチャットボットは10万円〜が目安です（内容により相談）。まずはレシート数枚を無料でサンプル作成し、精度と使い勝手をご確認いただいてからご判断いただけます。",
  },
  {
    question: "依頼前に品質を確認できますか？",
    answer:
      "はい。実際に動くデモを自作して公開しており、現物で品質をご確認いただけます。さらに、ご依頼前にレシート数枚を無料でサンプル作成しますので、精度と使い勝手を見てからご判断いただけます。",
  },
  {
    question: "対応時間や連絡のスピードはどれくらいですか？",
    answer:
      "平日夜と土日を中心に対応し、原則当日〜翌営業日中にご返信します。着手前に進行スケジュールを共有し、こまめに連絡を取りながら進めます。",
  },
];

export const profile = {
  name: "安田 慶一",
  photo: "/images/profile.jpg",
  heading: "飲食店・カフェの「レシート入力」を、AIでまるごと自動化します",
  career:
    "2026年6月より、個人でAIを活用した業務効率化に取り組んでいます。会社員として日々の実務にAIを取り入れ、データ入力や資料作成を効率化してきた経験を活かし、レシート・帳票のデータ化や業務自動化の仕組みを自作・運用しています。カフェ経費を軸に、業種を問わず『地味で時間のかかる作業』を仕組みでなくします。",
  skills: [
    "生成AI（Claude / Gemini / ChatGPT）",
    "AI-OCR（Gemini Vision / Google Vision API）",
    "自動化（GAS / Python）",
    "データ・表計算（スプレッドシート / Excel）",
    "Web（Next.js / TypeScript）",
  ],
  message:
    "私自身、もともとは手入力のデータ作業にあきあきしていた一人でした。AIに出会って面倒な作業がぐっと減り、本来やりたい仕事や、家族との時間を取り戻すことができました。同じ悩みを抱えている方の力になりたくて、この仕事をしています。ちなみに喫茶店めぐりと、おいしいチーズケーキ屋さん探しが大好きです。素敵なお店があったら、ぜひ教えてください。",
};

export const contact = {
  email: "keiichi.yasuda.biz@gmail.com",
  instagram: "https://www.instagram.com/keiichi.yasuda.biz",
};

export const contactHearing = {
  title: "初回ヒアリング無料",
  description:
    "レシート・帳票のデータ化、業務自動化、AIチャットボットなど、お店や業務のお困りごとをお気軽にお聞かせください。まずはレシート数枚を無料でサンプル作成し、現状に合わせて最適なご提案をします。",
  highlights: [
    "まずはレシート数枚を無料でサンプル作成",
    "原則当日〜翌営業日にご返信",
    "秘密厳守・NDA対応可",
    "オンライン対応・全国OK",
  ],
};
