export type Locale = "ja" | "en";

export const translations = {
  // ===== Header =====
  header: {
    nav: {
      problem: { ja: "課題", en: "Challenges" },
      solution: { ja: "ソリューション", en: "Solution" },
      features: { ja: "機能", en: "Features" },
      insurance: { ja: "Active Insurance", en: "Active Insurance" },
      benefits: { ja: "導入メリット", en: "Benefits" },
      useCases: { ja: "ユースケース", en: "Use Cases" },
    },
    cta: { ja: "デモを申し込む", en: "Get a Demo" },
    language: { ja: "日本語", en: "English" },
  },

  // ===== Hero =====
  hero: {
    badge: { ja: "ASPM × Active Insurance", en: "ASPM × Active Insurance" },
    headline1: { ja: "セキュリティリスクを", en: "Visualize" },
    headlineHighlight: { ja: "「見える化」", en: "Security Risks" },
    headlineConnector: { ja: "し、", en: "," },
    headline2a: {
      ja: "守りと補償を同時に",
      en: "Optimize Protection and",
    },
    headline2b: {
      ja: "最適化する。",
      en: "Coverage Simultaneously.",
    },
    subheadline: {
      ja: "FearlockはASPMとActive Insuranceを統合した\n次世代セキュリティ実行プラットフォームです。",
      en: "Fearlock is a next-generation security execution platform\nthat integrates ASPM and Active Insurance.",
    },
    ctaPrimary: { ja: "デモを申し込む", en: "Get a Demo" },
    ctaSecondary: { ja: "資料請求", en: "Request Info" },
    trust1: { ja: "エージェントレス導入", en: "Agentless Deployment" },
    trust2: { ja: "最短5分でスキャン開始", en: "Scan in 5 Minutes" },
    trust3: { ja: "24/7 継続モニタリング", en: "24/7 Continuous Monitoring" },
    riskDetected: { ja: "リスク検出済み", en: "Risk Detected" },
    insuranceActive: { ja: "保険連携: Active", en: "Insurance: Active" },
  },

  // ===== Problem =====
  problem: {
    badge: { ja: "Current Challenges", en: "Current Challenges" },
    title1: { ja: "なぜ、従来のセキュリティ対策は", en: "Why Traditional Security Measures" },
    titleHighlight: { ja: "機能しないのか", en: "Don't Work" },
    subtitle: {
      ja: "多くの企業が直面している、セキュリティ対策の構造的課題",
      en: "Structural challenges in security that many companies face",
    },
    problems: [
      {
        title: { ja: "セキュリティ対策が分断化", en: "Fragmented Security Measures" },
        description: {
          ja: "ツールやプロセスがバラバラで、全体のリスクを統合的に把握できない。対策の抜け漏れが見えないまま、リスクが増大します。",
          en: "Disconnected tools and processes make it impossible to comprehensively understand overall risks. Gaps in protection go unnoticed while risks continue to grow.",
        },
      },
      {
        title: { ja: "リスクがインシデントまで不可視", en: "Risks Invisible Until Incidents" },
        description: {
          ja: "外部からの攻撃対象面が把握されていない。問題が発生して初めてリスクに気づくのでは遅すぎます。",
          en: "External attack surfaces remain unidentified. Discovering risks only after an incident occurs is far too late.",
        },
      },
      {
        title: {
          ja: "従来の保険は受動的で断絶",
          en: "Traditional Insurance is Passive and Disconnected",
        },
        description: {
          ja: "既存のサイバー保険は実際のセキュリティ状態と連動していません。保険料は一律で、対策の努力が評価されない仕組みです。",
          en: "Existing cyber insurance doesn't reflect actual security posture. Premiums are flat-rate, with no recognition of improvement efforts.",
        },
      },
      {
        title: { ja: "専門人材の不足", en: "Shortage of Security Experts" },
        description: {
          ja: "セキュリティの専門チームを持てない中小企業・スタートアップでは、何から始めればよいかすら分からず、対策が後回しに。",
          en: "SMEs and startups without dedicated security teams don't know where to start, causing security measures to be deprioritized.",
        },
      },
    ],
    consequencesTitle: {
      ja: "これらの課題が招く結果",
      en: "Consequences of These Challenges",
    },
    consequences: [
      { ja: "サイバー攻撃リスクの増大", en: "Increased Cyber Attack Risk" },
      { ja: "責任範囲の不明確化", en: "Unclear Accountability" },
      { ja: "インシデント復旧コストの高騰", en: "Rising Incident Recovery Costs" },
      {
        ja: "コンプライアンス・信頼性の低下",
        en: "Declining Compliance & Trust",
      },
    ],
  },

  // ===== Solution =====
  solution: {
    badge: { ja: "Solution", en: "Solution" },
    title1: { ja: "Fearlockが提供する", en: "Fearlock Delivers" },
    titleHighlight: {
      ja: "新しいセキュリティの形",
      en: "A New Form of Security",
    },
    subtitle1: {
      ja: "検出から改善、そして保険までを一つのプラットフォームで。",
      en: "Detection, remediation, and insurance — all in one platform.",
    },
    subtitle2: {
      ja: "セキュリティを「実行」するための仕組みです。",
      en: "A system built to execute security.",
    },
    steps: [
      {
        title: { ja: "自動発見", en: "Auto Discovery" },
        description: {
          ja: "ドメイン、サブドメイン、IP、クラウドサービスなど、外部公開資産を自動検出・マッピング。",
          en: "Automatically discover and map external assets including domains, subdomains, IPs, and cloud services.",
        },
      },
      {
        title: { ja: "継続監視・評価", en: "Continuous Monitoring" },
        description: {
          ja: "リスクスコアリングとポスチャ可視化で、セキュリティ状態をリアルタイム把握。",
          en: "Real-time understanding of security posture through risk scoring and posture visualization.",
        },
      },
      {
        title: { ja: "改善実行", en: "Remediation" },
        description: {
          ja: "設定ミス・脆弱性の検出と同時に、即実行可能な改善アクションを提示。",
          en: "Present immediately actionable remediation steps alongside detected misconfigurations and vulnerabilities.",
        },
      },
      {
        title: { ja: "保険連携", en: "Insurance Integration" },
        description: {
          ja: "リアルタイムリスクデータをActive Insuranceと連携し、保険条件を最適化。",
          en: "Optimize insurance terms by linking real-time risk data with Active Insurance.",
        },
      },
    ],
    stats: {
      stat1Label: {
        ja: "外部アタックサーフェスの可視化",
        en: "External Attack Surface Visibility",
      },
      stat2Label: {
        ja: "リアルタイム継続監視",
        en: "Real-time Continuous Monitoring",
      },
      stat3Label: {
        ja: "検出・改善・保険を統合",
        en: "Detection, Remediation & Insurance Unified",
      },
    },
  },

  // ===== Features =====
  features: {
    badge: { ja: "Features", en: "Features" },
    title: { ja: "主な機能", en: "Key Features" },
    subtitle: {
      ja: "セキュリティの「検出」から「実行」までをワンストップで支援",
      en: "End-to-end support from detection to execution",
    },
    items: [
      {
        title: {
          ja: "外部アタックサーフェスの自動発見",
          en: "Automatic External Attack Surface Discovery",
        },
        description: {
          ja: "ドメイン、サブドメイン、IPアドレス、クラウドサービスなど、外部に公開されたすべてのデジタル資産を自動で検出・インベントリ化します。",
          en: "Automatically detect and inventory all externally exposed digital assets including domains, subdomains, IP addresses, and cloud services.",
        },
      },
      {
        title: {
          ja: "継続的なリスク可視化とスコアリング",
          en: "Continuous Risk Visualization & Scoring",
        },
        description: {
          ja: "セキュリティポスチャをリアルタイムに定量評価。リスクスコアの推移をダッシュボードで確認し、経営判断に活用できます。",
          en: "Quantitatively evaluate security posture in real-time. Monitor risk score trends on dashboards for informed business decisions.",
        },
      },
      {
        title: {
          ja: "即実行可能な改善アクション提示",
          en: "Actionable Remediation Steps",
        },
        description: {
          ja: "検出された脆弱性や設定ミスに対し、具体的な改善手順を自動で提案。セキュリティ専門知識がなくても対応できます。",
          en: "Automatically suggest specific remediation steps for detected vulnerabilities and misconfigurations. No security expertise required.",
        },
      },
      {
        title: {
          ja: "経営・監査向けレポート自動生成",
          en: "Automated Reports for Management & Audits",
        },
        description: {
          ja: "セキュリティ状況を分かりやすくまとめたレポートを自動生成。経営層への報告やISMS・監査対応に即活用できます。",
          en: "Automatically generate clear and concise security reports. Instantly usable for executive reporting and ISMS/audit compliance.",
        },
      },
    ],
  },

  // ===== Insurance =====
  insurance: {
    badge: { ja: "Active Insurance", en: "Active Insurance" },
    title: {
      ja: "とは",
      en: "Explained",
    },
    subtitle: {
      ja: "セキュリティ対策の改善がそのまま保険条件の改善につながる、\n新しいサイバー保険の仕組みです。",
      en: "A new cyber insurance framework where improving security directly improves your insurance terms.",
    },
    traditionalLabel: { ja: "従来型", en: "Traditional" },
    traditionalTitle: {
      ja: "従来のサイバー保険",
      en: "Traditional Cyber Insurance",
    },
    traditionalItems: [
      { ja: "一律の保険料設定", en: "Flat-rate premiums" },
      {
        ja: "セキュリティ状態と保険が断絶",
        en: "Insurance disconnected from security posture",
      },
      { ja: "事後対応のみ", en: "Post-incident response only" },
      { ja: "改善インセンティブなし", en: "No improvement incentives" },
      {
        ja: "リスクがブラックボックス",
        en: "Risk is a black box",
      },
    ],
    activeInsuranceItems: [
      {
        ja: "セキュリティ状態に連動した動的保険料",
        en: "Dynamic premiums linked to security posture",
      },
      {
        ja: "リアルタイムリスクデータと保険が直結",
        en: "Real-time risk data directly connected to insurance",
      },
      {
        ja: "予防＋事後の両面をカバー",
        en: "Covers both prevention and post-incident",
      },
      {
        ja: "セキュリティ改善が保険最適化に直結",
        en: "Security improvements directly optimize insurance",
      },
      {
        ja: "リスクの定量的な可視化",
        en: "Quantitative risk visualization",
      },
    ],
    flowTitle: {
      ja: "Active Insuranceの仕組み",
      en: "How Active Insurance Works",
    },
    flowSteps: [
      {
        label: { ja: "リスク評価", en: "Risk Assessment" },
        sub: {
          ja: "セキュリティ状態を\nリアルタイム定量評価",
          en: "Real-time quantitative\nevaluation of security posture",
        },
      },
      {
        label: { ja: "動的連携", en: "Dynamic Integration" },
        sub: {
          ja: "リスクデータと保険条件を\nリアルタイム連動",
          en: "Real-time linking of risk data\nand insurance terms",
        },
      },
      {
        label: { ja: "保険最適化", en: "Insurance Optimization" },
        sub: {
          ja: "改善がそのまま\n保険条件改善に",
          en: "Improvements directly\noptimize insurance terms",
        },
      },
    ],
    valueProps: [
      {
        title: { ja: "財務リスクの低減", en: "Financial Risk Reduction" },
        description: {
          ja: "セキュリティ投資と保険を最適化し、インシデント時の財務インパクトを最小限に。",
          en: "Optimize security investments and insurance to minimize financial impact during incidents.",
        },
      },
      {
        title: { ja: "インセンティブ型改善", en: "Incentive-driven Improvement" },
        description: {
          ja: "セキュリティ改善が直接的に保険条件の向上に反映される好循環を実現。",
          en: "Create a virtuous cycle where security improvements directly enhance insurance terms.",
        },
      },
      {
        title: { ja: "経営層の意思決定支援", en: "Executive Decision Support" },
        description: {
          ja: "セキュリティ投資のROIを可視化し、経営レベルでの判断を支援。",
          en: "Visualize security investment ROI to support executive-level decision making.",
        },
      },
    ],
  },

  // ===== Benefits =====
  benefits: {
    badge: { ja: "Benefits", en: "Benefits" },
    title1: { ja: "Fearlockを導入する", en: "Benefits of Adopting" },
    titleHighlight: { ja: "メリット", en: "Fearlock" },
    subtitle: {
      ja: "4つの視点からビジネスに貢献",
      en: "Contributing to your business from 4 perspectives",
    },
    items: [
      {
        perspective: "Security",
        title: { ja: "セキュリティ強化", en: "Enhanced Security" },
        description: {
          ja: "外部アタックサーフェスの可視化と継続監視で、脆弱性を早期発見・対処。インシデントリスクを大幅に低減。",
          en: "Early detection and remediation of vulnerabilities through attack surface visibility and continuous monitoring. Significantly reduce incident risk.",
        },
      },
      {
        perspective: "Cost",
        title: { ja: "コスト最適化", en: "Cost Optimization" },
        description: {
          ja: "Active Insurance連携で保険料を最適化。セキュリティ投資のROIを明確にし、無駄のないコスト配分を実現。",
          en: "Optimize premiums through Active Insurance integration. Clarify security investment ROI for efficient cost allocation.",
        },
      },
      {
        perspective: "Governance",
        title: { ja: "ガバナンス", en: "Governance" },
        description: {
          ja: "自動レポートでISMS・監査対応を効率化。説明責任を果たせる体制を構築し、コンプライアンスを簡素化。",
          en: "Streamline ISMS and audit compliance with automated reports. Build accountability frameworks and simplify compliance.",
        },
      },
      {
        perspective: "Trust",
        title: { ja: "信頼性向上", en: "Trust Enhancement" },
        description: {
          ja: "セキュリティ態勢の可視化は取引先・顧客からの信頼獲得に直結。ビジネスの競争力を高めます。",
          en: "Security posture visibility directly builds trust with partners and customers. Enhance your competitive advantage.",
        },
      },
    ],
    personaTitle1: { ja: "こんな方に", en: "Recommended" },
    personaTitleHighlight: { ja: "おすすめ", en: "For" },
    personas: [
      {
        role: { ja: "情シス・IT担当", en: "IT Admin / IT Department" },
        pain: {
          ja: "セキュリティが属人化し、全体像が見えない",
          en: "Security is siloed and there's no holistic view",
        },
        solution: {
          ja: "ダッシュボードで全資産のリスクを一元管理。属人化を解消します。",
          en: "Centrally manage all asset risks from a single dashboard. Eliminate knowledge silos.",
        },
      },
      {
        role: {
          ja: "総務・法務・コンプラ",
          en: "Legal / Compliance",
        },
        pain: {
          ja: "説明責任とリスク管理を求められている",
          en: "Required to ensure accountability and risk management",
        },
        solution: {
          ja: "自動レポートで監査・コンプライアンス対応を効率化します。",
          en: "Streamline audit and compliance response with automated reports.",
        },
      },
      {
        role: { ja: "経営者・CTO", en: "CEO / CTO" },
        pain: {
          ja: "セキュリティ投資の妥当性が判断できない",
          en: "Unable to justify the validity of security investments",
        },
        solution: {
          ja: "リスクスコアとActive Insuranceで投資対効果を可視化します。",
          en: "Visualize ROI through risk scores and Active Insurance integration.",
        },
      },
    ],
  },

  // ===== Use Cases =====
  useCases: {
    badge: { ja: "Use Cases", en: "Use Cases" },
    title1: { ja: "導入", en: "Deployment" },
    titleHighlight: { ja: "ユースケース", en: "Use Cases" },
    subtitle: {
      ja: "さまざまな業種・規模の企業でご活用いただけます",
      en: "Applicable to companies of all industries and sizes",
    },
    items: [
      {
        title: {
          ja: "セキュリティ専任がいない企業",
          en: "Companies Without Dedicated Security Teams",
        },
        description: {
          ja: "専門のセキュリティチームを持たない中小企業でも、Fearlockが外部リスクを自動で検出・可視化。改善アクションの提示までワンストップで対応。",
          en: "Even SMEs without security teams can leverage Fearlock's automatic external risk detection and visualization. One-stop from discovery to remediation.",
        },
        tags: {
          ja: ["中小企業", "スタートアップ", "リソース不足"],
          en: ["SMEs", "Startups", "Resource-limited"],
        },
      },
      {
        title: {
          ja: "IPO準備・ISMS対応企業",
          en: "IPO Preparation & ISMS Compliance",
        },
        description: {
          ja: "IPO審査やISMS認証取得に必要なセキュリティ体制の整備と証跡管理をサポート。自動レポート生成により、監査対応の工数を大幅に削減。",
          en: "Support security infrastructure and audit trail management required for IPO review and ISMS certification. Automated reports dramatically reduce audit preparation effort.",
        },
        tags: {
          ja: ["IPO準備", "ISMS", "監査対応"],
          en: ["IPO Preparation", "ISMS", "Audit Response"],
        },
      },
      {
        title: {
          ja: "委託先管理が必要な企業",
          en: "Vendor Risk Management",
        },
        description: {
          ja: "サプライチェーンや委託先のセキュリティリスクも可視化。グループ企業・パートナー企業のアタックサーフェスを統合管理。",
          en: "Visualize security risks across supply chains and vendors. Unified management of attack surfaces for group companies and partners.",
        },
        tags: {
          ja: ["サプライチェーン", "委託先管理", "グループ統制"],
          en: ["Supply Chain", "Vendor Management", "Group Governance"],
        },
      },
    ],
  },

  // ===== CTA =====
  cta: {
    title1: { ja: "セキュリティ対策を", en: "Transform Security" },
    titleHighlight1: { ja: "努力", en: "Effort" },
    titleConnector: { ja: "から", en: "into" },
    titleHighlight2: { ja: "仕組み", en: "Systems" },
    titleEnd: { ja: "変えませんか？", en: "" },
    subtitle: {
      ja: "Fearlockが、貴社のセキュリティとリスク管理を次のステージへ導きます。\nまずはお気軽にご相談ください。",
      en: "Fearlock will take your security and risk management to the next level.\nFeel free to reach out for a consultation.",
    },
    ctaPrimary: { ja: "無料相談", en: "Free Consultation" },
    ctaSecondary: { ja: "デモを見る", en: "Watch Demo" },
    note: {
      ja: "※ 無料相談は30分程度です。営業の押し売りは一切ありません。",
      en: "* Free consultation is about 30 minutes. No hard sell, ever.",
    },
  },

  // ===== Demo Page =====
  demo: {
    title: { ja: "デモを申し込む", en: "Request a Demo" },
    subtitle: {
      ja: "Fearlockの機能をデモでご体験ください。\n30分程度のオンラインデモで、貴社の課題に合わせたご提案をいたします。",
      en: "Experience Fearlock's features through a live demo.\nIn a 30-minute online session, we'll provide proposals tailored to your needs.",
    },
    form: {
      company: { ja: "会社名", en: "Company Name" },
      companyPlaceholder: { ja: "例: 株式会社Fearlock", en: "e.g. Fearlock Inc." },
      name: { ja: "お名前", en: "Full Name" },
      namePlaceholder: { ja: "例: 山田 太郎", en: "e.g. John Smith" },
      email: { ja: "メールアドレス", en: "Email Address" },
      emailPlaceholder: { ja: "例: taro@example.com", en: "e.g. john@example.com" },
      phone: { ja: "電話番号（任意）", en: "Phone Number (Optional)" },
      phonePlaceholder: { ja: "例: 03-1234-5678", en: "e.g. +81-3-1234-5678" },
      role: { ja: "役職", en: "Role" },
      rolePlaceholder: { ja: "選択してください", en: "Please select" },
      roleOptions: {
        ja: ["経営者・CTO", "情シス・IT担当", "総務・法務・コンプラ", "エンジニア", "その他"],
        en: ["CEO / CTO", "IT / Security", "Legal / Compliance", "Engineer", "Other"],
      },
      employees: { ja: "従業員数", en: "Number of Employees" },
      employeesPlaceholder: { ja: "選択してください", en: "Please select" },
      employeesOptions: {
        ja: ["1〜50名", "51〜200名", "201〜500名", "501〜1000名", "1001名以上"],
        en: ["1-50", "51-200", "201-500", "501-1,000", "1,001+"],
      },
      message: { ja: "ご相談内容（任意）", en: "Message (Optional)" },
      messagePlaceholder: {
        ja: "現在のセキュリティ課題やご質問など、お気軽にご記入ください。",
        en: "Feel free to describe your current security challenges or questions.",
      },
      privacy: {
        ja: "プライバシーポリシーに同意する",
        en: "I agree to the Privacy Policy",
      },
      submit: { ja: "デモを申し込む", en: "Request a Demo" },
      submitting: { ja: "送信中...", en: "Submitting..." },
    },
    benefits: {
      title: { ja: "デモでわかること", en: "What You'll Learn" },
      items: [
        {
          ja: "外部アタックサーフェスの自動検出とリスクスコアリングのデモ",
          en: "Demo of automatic external attack surface detection and risk scoring",
        },
        {
          ja: "Active Insuranceによる保険条件最適化の仕組み",
          en: "How Active Insurance optimizes insurance terms",
        },
        {
          ja: "経営・監査向けレポートの自動生成デモ",
          en: "Auto-generated reporting for management and audits",
        },
        {
          ja: "導入から運用開始までのスケジュール感",
          en: "Timeline from deployment to operational launch",
        },
      ],
    },
    note: {
      ja: "※ 営業の押し売りは一切ありません。お気軽にお申し込みください。",
      en: "* No hard sell, ever. Feel free to apply.",
    },
    successTitle: { ja: "お申し込みありがとうございます！", en: "Thank You for Your Request!" },
    successMessage: {
      ja: "担当者より2営業日以内にご連絡いたします。",
      en: "Our team will contact you within 2 business days.",
    },
    successBack: { ja: "トップページに戻る", en: "Back to Home" },
  },

  // ===== Footer =====
  footer: {
    description: {
      ja: "セキュリティリスクを「見える化」し、検出・改善・保険を一つのプラットフォームで統合。\nASPMとActive Insuranceによる次世代セキュリティ実行プラットフォーム。",
      en: "Visualize security risks and unify detection, remediation, and insurance in one platform.\nNext-generation security execution platform powered by ASPM and Active Insurance.",
    },
    productTitle: { ja: "プロダクト", en: "Product" },
    productItems: {
      ja: ["機能一覧", "Active Insurance", "料金プラン", "セキュリティ"],
      en: ["Features", "Active Insurance", "Pricing", "Security"],
    },
    companyTitle: { ja: "企業情報", en: "Company" },
    companyItems: {
      ja: ["会社概要", "ブログ", "お問い合わせ", "プライバシーポリシー"],
      en: ["About Us", "Blog", "Contact", "Privacy Policy"],
    },
  },
} as const;

export function t(
  obj: { ja: string; en: string } | Record<string, string>,
  locale: Locale
): string {
  return obj[locale] || obj["ja"];
}
