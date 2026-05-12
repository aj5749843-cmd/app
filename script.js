'use strict';

/* ============================================================
   DATA — المحتوى الكامل مع تلميحات المساعد ومصادر تعليمية
   ============================================================ */
const DATA = {

  /* ══ رياضيات ══ */
  math: {
    name: 'الرياضيات', color: '#1e6fc0',
    bgLight: '#e6f1fb', textDark: '#0c447c',
    topics: [
      { name: 'المثال المضاد',                       level: 'أساسي' },
      { name: 'العبارات المنطقية وقيم الصواب',        level: 'أساسي' },
      { name: 'العبارات الشرطية (إذا... إذن)',         level: 'متوسط' },
      { name: 'المعاكس الإيجابي والعكس',              level: 'متوسط' },
      { name: 'النقاط والمستقيمات',                   level: 'أساسي' },
      { name: 'تقاطع المستويات',                      level: 'متوسط' },
      { name: 'الزوايا المتكاملة والمتتامة',           level: 'أساسي' },
      { name: 'العلاقات بين الزوايا',                 level: 'متوسط' },
      { name: 'متباينات المثلثات',                    level: 'متقدم' },
      { name: 'الإحصاء والاحتمالات',                  level: 'متوسط' },
    ],
    questions: [
      {
        q: 'أي مما يلي يُعدّ مثالاً مضاداً للجملة: "كل الأعداد الزوجية تقبل القسمة على 4"؟',
        opts: ['العدد 2', 'العدد 8', 'العدد 12', 'العدد 16'],
        ans: 0,
        exp: 'العدد 2 زوجي ولا يقبل القسمة على 4، فهو مثال مضاد يُبطل الجملة الكلية.',
        hint: 'المثال المضاد هو عدد يحقق الفرضية (زوجي) لكن لا يحقق النتيجة (القسمة على 4).',
        steps: [
          'ابحث عن عدد زوجي لا يقبل القسمة على 4',
          '2 ÷ 4 = 0.5 (ليس عدداً صحيحاً) ← هذا هو المثال المضاد',
          '8 ÷ 4 = 2 ✓ ، 12 ÷ 4 = 3 ✓ ← هذه تحقق الجملة'
        ],
        topic: 'المثال المضاد',
        resources: ['ain', 'mawdoo3', 'youtube_sa']
      },
      {
        q: 'إذا كانت العبارة p صحيحة وعبارة q خاطئة، فما قيمة الصواب للعبارة (p ∧ q)؟',
        opts: ['صحيحة', 'خاطئة', 'يعتمد على السياق', 'لا يمكن تحديدها'],
        ans: 1,
        exp: 'الوصل (∧) يكون صحيحاً فقط إذا كانت العبارتان صحيحتين معاً. لأن q خاطئة، فالنتيجة خاطئة.',
        hint: 'تذكّر قاعدة الوصل (AND): يحتاج الطرفين صحيحين لكي تكون النتيجة صحيحة.',
        steps: [
          'p = صحيحة ، q = خاطئة',
          'جدول الحقيقة: ص ∧ خ = خاطئة',
          'الوصل (∧) = "و" في العربية ← يحتاج كلاهما صحيح'
        ],
        topic: 'العبارات المنطقية وقيم الصواب',
        resources: ['ain', 'mawdoo3']
      },
      {
        q: 'ما المعاكس الإيجابي للعبارة: "إذا كانت الطالبة مجتهدةً فإنها تنجح"؟',
        opts: [
          'إذا نجحت الطالبة فهي مجتهدة',
          'إذا لم تجتهد الطالبة فلن تنجح',
          'إذا لم تنجح الطالبة فهي غير مجتهدة',
          'إذا اجتهدت الطالبة فلن تنجح'
        ],
        ans: 2,
        exp: 'المعاكس الإيجابي: نفي التالي → نفي المقدم. أي "إذا لم تنجح فهي غير مجتهدة".',
        hint: 'المعاكس الإيجابي = نفي الاستنتاج → نفي الفرضية (عكس وأنفي معاً).',
        steps: [
          'العبارة الأصلية: إذا p فإن q',
          'المعاكس الإيجابي: إذا ¬q فإن ¬p',
          'p = "مجتهدة" ، q = "تنجح"',
          'المعاكس: إذا لم تنجح (¬q) فهي غير مجتهدة (¬p)'
        ],
        topic: 'المعاكس الإيجابي والعكس',
        resources: ['ain', 'mawdoo3', 'youtube_sa']
      },
      {
        q: 'إذا كانت زاويتان متتامتان، وإحداهما 35°، فما مقياس الأخرى؟',
        opts: ['55°', '65°', '145°', '325°'],
        ans: 0,
        exp: 'الزوايا المتتامة مجموعها 90°. إذن: 90 − 35 = 55°.',
        hint: 'الزوايا المتتامة: مجموعها 90°. الزوايا المكملة: مجموعها 180°.',
        steps: [
          'تعريف المتتامة: المجموع = 90°',
          'الزاوية المجهولة = 90° − 35°',
          '= 55°'
        ],
        topic: 'الزوايا المتكاملة والمتتامة',
        resources: ['ain', 'desmos']
      },
      {
        q: 'العبارة "p أو q" (p ∨ q) تكون خاطئة فقط إذا:',
        opts: ['كانت p صحيحة وq خاطئة', 'كانت p خاطئة وq صحيحة', 'كانتا كلتاهما خاطئتين', 'كانتا كلتاهما صحيحتين'],
        ans: 2,
        exp: 'الفصل (∨) يكون خاطئاً فقط حين تكون كلتا العبارتين خاطئتين.',
        hint: 'الفصل (OR) يكفيه طرف واحد صحيح ليكون صحيحاً، ويكون خاطئاً فقط إذا كلاهما خاطئ.',
        steps: [
          'جدول الحقيقة للـ OR:',
          'ص ∨ ص = ص ، ص ∨ خ = ص ، خ ∨ ص = ص',
          'خ ∨ خ = خ  ← الحالة الوحيدة للنتيجة الخاطئة'
        ],
        topic: 'العبارات المنطقية وقيم الصواب',
        resources: ['ain', 'mawdoo3']
      },
    ]
  },

  /* ══ فيزياء ══ */
  phys: {
    name: 'الفيزياء', color: '#2e8b3a',
    bgLight: '#eaf3de', textDark: '#1a5c25',
    topics: [
      { name: 'قوانين نيوتن للحركة',           level: 'أساسي' },
      { name: 'الطاقة الحركية والكامنة',         level: 'أساسي' },
      { name: 'الحركة المنتظمة والمتسارعة',      level: 'متوسط' },
      { name: 'قانون أوم والدوائر الكهربائية',   level: 'متوسط' },
      { name: 'الموجات والصوت',                  level: 'أساسي' },
      { name: 'الضوء والبصريات',                 level: 'متوسط' },
      { name: 'المغناطيسية والكهرومغناطيسية',    level: 'متقدم' },
      { name: 'الحرارة والديناميكا الحرارية',    level: 'متوسط' },
    ],
    questions: [
      {
        q: 'جسم كتلته 5 كغ يتحرك بسرعة 4 م/ث، ما طاقته الحركية؟',
        opts: ['20 جول', '40 جول', '80 جول', '10 جول'],
        ans: 1,
        exp: 'Ek = ½mv² = ½ × 5 × 16 = 40 جول.',
        hint: 'قانون الطاقة الحركية: Ek = ½mv² — لا تنسَ تربيع السرعة أولاً.',
        steps: [
          'اكتب القانون: Ek = ½ × m × v²',
          'عوّض: Ek = ½ × 5 × (4)²',
          '= ½ × 5 × 16 = 40 جول'
        ],
        topic: 'الطاقة الحركية والكامنة',
        resources: ['ain', 'phet', 'youtube_sa']
      },
      {
        q: 'وفق القانون الثاني لنيوتن، إذا كانت القوة 20 نيوتن والكتلة 4 كغ، فما التسارع؟',
        opts: ['5 م/ث²', '80 م/ث²', '0.2 م/ث²', '24 م/ث²'],
        ans: 0,
        exp: 'F = ma → a = F/m = 20/4 = 5 م/ث².',
        hint: 'القانون الثاني: F = m × a. اعزل التسارع: a = F ÷ m.',
        steps: [
          'القانون: F = m × a',
          'اعزل a: a = F ÷ m',
          'a = 20 ÷ 4 = 5 م/ث²'
        ],
        topic: 'قوانين نيوتن للحركة',
        resources: ['ain', 'phet', 'mawdoo3']
      },
      {
        q: 'ما العلاقة بين شدة التيار والمقاومة عند ثبات الجهد الكهربائي؟',
        opts: ['طردية', 'عكسية', 'لا علاقة', 'تربيعية'],
        ans: 1,
        exp: 'V = IR → I = V/R، فالتيار يتناسب عكسياً مع المقاومة عند ثبات الجهد.',
        hint: 'تذكّر قانون أوم: V = I × R. إذا ثبت V وزاد R، ماذا يحدث لـ I؟',
        steps: [
          'قانون أوم: V = I × R',
          'V ثابتة → I = V ÷ R',
          'R ↑ ⟹ I ↓  ← علاقة عكسية'
        ],
        topic: 'قانون أوم والدوائر الكهربائية',
        resources: ['ain', 'phet']
      },
      {
        q: 'ما وحدة قياس الشغل في النظام الدولي؟',
        opts: ['نيوتن', 'واط', 'جول', 'باسكال'],
        ans: 2,
        exp: 'الشغل = قوة × إزاحة، ووحدته في النظام الدولي هي الجول (J).',
        hint: 'الشغل = F × d. وحدة القوة × وحدة المسافة = نيوتن × متر = جول.',
        steps: [
          'شغل = قوة (N) × إزاحة (m)',
          '1 N × 1 m = 1 N·m = 1 جول (J)',
          'الواط وحدة الطاقة، لا الشغل'
        ],
        topic: 'الطاقة الحركية والكامنة',
        resources: ['ain', 'mawdoo3']
      },
    ]
  },

  /* ══ كيمياء ══ */
  chem: {
    name: 'الكيمياء', color: '#7c3fbf',
    bgLight: '#f0ebfc', textDark: '#4a2080',
    topics: [
      { name: 'التركيب الذري ونظائر العناصر',      level: 'أساسي' },
      { name: 'الجدول الدوري وخصائص العناصر',       level: 'أساسي' },
      { name: 'الروابط الكيميائية',                 level: 'متوسط' },
      { name: 'معادلات التفاعلات الكيميائية',        level: 'متوسط' },
      { name: 'المحاليل والتراكيز',                 level: 'متقدم' },
      { name: 'الأحماض والقواعد',                   level: 'متوسط' },
      { name: 'الكيمياء العضوية - مقدمة',            level: 'متقدم' },
      { name: 'التفاعلات الأكسدة والاختزال',         level: 'متوسط' },
    ],
    questions: [
      {
        q: 'أيون الصوديوم Na⁺ يحتوي على كم إلكتروناً؟',
        opts: ['11', '10', '12', '23'],
        ans: 1,
        exp: 'الصوديوم له 11 إلكتروناً، وعند فقده إلكتروناً واحداً يصبح 10 إلكترونات.',
        hint: 'Na له عدد ذري 11 (أي 11 إلكترون). الشحنة + تعني فقدان إلكترون واحد.',
        steps: [
          'العدد الذري للصوديوم = 11 ← 11 إلكترون',
          'Na⁺ يعني فقدان إلكترون واحد',
          '11 − 1 = 10 إلكترونات'
        ],
        topic: 'التركيب الذري ونظائر العناصر',
        resources: ['ain', 'ptable', 'mawdoo3']
      },
      {
        q: 'ما نوع الرابطة في جزيء الماء H₂O؟',
        opts: ['أيونية', 'تساهمية قطبية', 'تساهمية غير قطبية', 'فلزية'],
        ans: 1,
        exp: 'الماء رابطة تساهمية قطبية بسبب فارق الكهرسلبية بين H وO.',
        hint: 'الأكسجين أعلى كهرسلبية من الهيدروجين ← الإلكترونات لا تتوزع بالتساوي ← قطبية.',
        steps: [
          'H وO يتشاركان إلكترونات ← تساهمية',
          'كهرسلبية O (3.44) >> كهرسلبية H (2.20)',
          'الفارق كبير ← رابطة تساهمية قطبية'
        ],
        topic: 'الروابط الكيميائية',
        resources: ['ain', 'ptable', 'mawdoo3']
      },
      {
        q: 'ما العدد الذري للكربون في الجدول الدوري؟',
        opts: ['4', '6', '12', '14'],
        ans: 1,
        exp: 'العدد الذري للكربون هو 6، أي أن نواته تحتوي على 6 بروتونات.',
        hint: 'العدد الذري = عدد البروتونات في النواة. الكربون هو العنصر السادس في الجدول.',
        steps: [
          'ابحث عن الكربون (C) في الجدول الدوري',
          'العدد الذري يظهر فوق رمز العنصر',
          'C = العنصر رقم 6'
        ],
        topic: 'الجدول الدوري وخصائص العناصر',
        resources: ['ain', 'ptable']
      },
    ]
  },

  /* ══ أحياء ══ */
  bio: {
    name: 'الأحياء', color: '#c97020',
    bgLight: '#fef3e2', textDark: '#7a4010',
    topics: [
      { name: 'تركيب الخلية ووظائفها',          level: 'أساسي' },
      { name: 'الانقسام الخلوي (الميتوزيس)',     level: 'أساسي' },
      { name: 'الوراثة وقوانين مندل',            level: 'متوسط' },
      { name: 'الجهاز العصبي والهرمونات',        level: 'متوسط' },
      { name: 'الجهاز الهضمي والتنفسي',          level: 'أساسي' },
      { name: 'التطور والبيئة',                  level: 'متقدم' },
      { name: 'التنفس الخلوي والبناء الضوئي',    level: 'متوسط' },
      { name: 'الجهاز المناعي',                  level: 'متوسط' },
    ],
    questions: [
      {
        q: 'أين تتم عملية التنفس الخلوي في الخلية؟',
        opts: ['النواة', 'الميتوكوندريا', 'البلاستيد', 'الريبوسوم'],
        ans: 1,
        exp: 'الميتوكوندريا هي محطة الطاقة في الخلية وتتم فيها عملية التنفس الخلوي لإنتاج ATP.',
        hint: 'تذكّر: "الميتوكوندريا = محطة الطاقة". التنفس الخلوي يُنتج ATP.',
        steps: [
          'التنفس الخلوي: جلوكوز + أكسجين → ثاني أكسيد الكربون + ماء + ATP',
          'هذه العملية تحدث في الميتوكوندريا',
          'الريبوسوم: تصنيع البروتين ← وظيفة مختلفة'
        ],
        topic: 'تركيب الخلية ووظائفها',
        resources: ['ain', 'mawdoo3', 'youtube_sa']
      },
      {
        q: 'إذا كان النمط الجيني للأم (Aa) والأب (aa)، فما نسبة الأبناء الحاملين للطراز (Aa)؟',
        opts: ['25%', '50%', '75%', '100%'],
        ans: 1,
        exp: 'عند تزاوج Aa × aa: النتائج Aa وAa وaa وaa، أي 50% بالنمط Aa.',
        hint: 'ارسم مربع بانيت: الأم Aa تعطي A أو a. الأب aa يعطي a دائماً.',
        steps: [
          'الأم: A أو a (بالتساوي)',
          'الأب: a أو a (دائماً)',
          'الاحتمالات: Aa، Aa، aa، aa',
          '50% = Aa ، 50% = aa'
        ],
        topic: 'الوراثة وقوانين مندل',
        resources: ['ain', 'mawdoo3']
      },
      {
        q: 'ما الوظيفة الرئيسية للريبوسوم في الخلية؟',
        opts: ['إنتاج الطاقة', 'تصنيع البروتينات', 'تخزين الماء', 'الهضم الخلوي'],
        ans: 1,
        exp: 'الريبوسومات موقع تصنيع البروتينات وتوجد في السيتوبلازم والشبكة الإندوبلازمية الخشنة.',
        hint: 'قاعدة سهلة: الريبوسوم = مصنع البروتينات.',
        steps: [
          'الريبوسوم يقرأ الـ mRNA',
          'يُجمّع الأحماض الأمينية بالترتيب الصحيح',
          'النتيجة = سلسلة بروتينية'
        ],
        topic: 'تركيب الخلية ووظائفها',
        resources: ['ain', 'mawdoo3']
      },
      {
        q: 'أي من التالي يُعدّ من الأعضاء الليمفاوية الأولية؟',
        opts: ['الطحال', 'العقد الليمفاوية', 'الغدة الزعترية (التيموس)', 'اللوزتان'],
        ans: 2,
        exp: 'الغدة الزعترية (التيموس) عضو ليمفاوي أولي مسؤول عن نضج الخلايا التائية.',
        hint: 'الأعضاء الأولية: نخاع العظم والغدة الزعترية. الثانوية: الطحال والعقد واللوزتان.',
        steps: [
          'الأعضاء الأولية: نخاع العظم + الغدة الزعترية',
          'تنضج فيها الخلايا المناعية',
          'الطحال والعقد = أعضاء ثانوية'
        ],
        topic: 'الجهاز المناعي',
        resources: ['ain', 'mawdoo3']
      },
    ]
  }
};

/* ============================================================
   EXTERNAL RESOURCES — المصادر التعليمية
   ============================================================ */
const RESOURCES = {
  ain: {
    name: 'بوابة عين التعليمية',
    icon: '🎓',
    color: '#0066cc',
    bg: '#e6f0ff',
    desc: 'شروحات رسمية وزارة التعليم',
    url: (q) => `https://www.educational.gov.sa/search?q=${encodeURIComponent(q)}`
  },
  mawdoo3: {
    name: 'موضوع',
    icon: '📖',
    color: '#e63946',
    bg: '#fdecea',
    desc: 'شرح مبسط بالعربية',
    url: (q) => `https://mawdoo3.com/بحث?q=${encodeURIComponent(q)}`
  },
  youtube_sa: {
    name: 'يوتيوب تعليمي',
    icon: '▶️',
    color: '#ff0000',
    bg: '#fff0f0',
    desc: 'فيديوهات شرح بالعربية',
    url: (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q + ' شرح')}`
  },
  phet: {
    name: 'PhET Simulations',
    icon: '⚗️',
    color: '#2e7d32',
    bg: '#eaf3de',
    desc: 'محاكاة تفاعلية مجانية',
    url: (q) => `https://phet.colorado.edu/ar/simulations/filter?q=${encodeURIComponent(q)}`
  },
  ptable: {
    name: 'الجدول الدوري',
    icon: '⚛️',
    color: '#7c3fbf',
    bg: '#f0ebfc',
    desc: 'الجدول الدوري التفاعلي',
    url: () => 'https://ptable.com/?lang=ar'
  },
  desmos: {
    name: 'Desmos',
    icon: '📐',
    color: '#1a6fc0',
    bg: '#e6f1fb',
    desc: 'رسم بياني تفاعلي',
    url: () => 'https://www.desmos.com/geometry'
  }
};

/* ============================================================
   STATE
   ============================================================ */
let state = {
  screen: 'dashboard',
  topicSubject: 'math',
  quizFilter: 'all',
  quizQuestions: [],
  currentQ: 0,
  answered: false,
  hintShown: false,
  score: {
    math: { c: 0, t: 0 },
    phys: { c: 0, t: 0 },
    chem: { c: 0, t: 0 },
    bio:  { c: 0, t: 0 }
  }
};

/* ============================================================
   HELPERS
   ============================================================ */
const $ = id => document.getElementById(id);
const pct = (c, t) => t > 0 ? Math.round(c / t * 100) : 0;

function showToast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function openUrl(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ============================================================
   NAVIGATION
   ============================================================ */
const SCREEN_TITLES = {
  dashboard : 'لوحة التحكم',
  topics    : 'المواضيع',
  quiz      : 'التدريب',
  progress  : 'تقدمي'
};

function showScreen(name) {
  state.screen = name;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $('screen-' + name).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const btn = $('nav-' + name);
  if (btn) btn.classList.add('active');
  $('topbar-title').textContent = SCREEN_TITLES[name] || '';

  if (name === 'progress')  renderProgress();
  if (name === 'dashboard') updateDashboard();
  if (name === 'quiz' && !state.quizStarted) showQuizSetup();
}

function openSubjectQuiz(sub) {
  state.quizFilter = sub;
  showScreen('quiz');
  showQuizSetup();
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function updateDashboard() {
  let allC = 0, allT = 0;
  ['math','phys','chem','bio'].forEach(s => {
    const sc = state.score[s];
    allC += sc.c; allT += sc.t;
    const p = pct(sc.c, sc.t);
    const fill = $(`sc-fill-${s}`);
    const pctEl = $(`sc-pct-${s}`);
    if (fill)  fill.style.width = p + '%';
    if (pctEl) pctEl.textContent = p + '%';
  });
  const overall = pct(allC, allT);
  $('ring-pct').textContent = overall;
  const circle = document.querySelector('.ring-progress');
  if (circle) {
    const circ = 2 * Math.PI * 44;
    circle.style.strokeDashoffset = circ - (circ * overall / 100);
  }
  $('dash-total').textContent = allT;
  $('dash-correct').textContent = allC;
  updateScorePills();
}

function updateScorePills() {
  ['math','phys','chem','bio'].forEach(s => {
    const el = $('pill-' + s);
    if (!el) return;
    const sc = state.score[s];
    el.textContent = sc.t ? `${sc.c}/${sc.t}` : '—';
  });
}

function renderDashTopics(subj) {
  const d = DATA[subj];
  const list = $('dash-topic-list');
  if (!list) return;
  const title = $('dash-topic-title');
  if (title) {
    title.innerHTML = `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${d.color};margin-left:6px;"></span>${d.name}`;
  }
  list.innerHTML = d.topics.map(t => `
    <div class="topic-row">
      <div class="t-dot" style="background:${d.color}"></div>
      <span>${t.name}</span>
      ${badge(t.level)}
    </div>`).join('');
}

function badge(level) {
  const map = {
    'أساسي': { bg:'#eaf3de', c:'#1a5c25' },
    'متوسط': { bg:'#e6f1fb', c:'#0c447c' },
    'متقدم': { bg:'#fef3e2', c:'#7a4010' }
  };
  const s = map[level] || map['أساسي'];
  return `<span class="t-badge" style="background:${s.bg};color:${s.c}">${level}</span>`;
}

/* ============================================================
   TOPICS SCREEN
   ============================================================ */
function switchTopicTab(sub, el) {
  state.topicSubject = sub;
  document.querySelectorAll('.stab').forEach(t => t.className = 'stab');
  el.className = `stab active-${sub}`;
  renderTopicsGrid(sub);
}

function renderTopicsGrid(sub) {
  const d = DATA[sub];
  $('topics-grid').innerHTML = d.topics.map(t => `
    <div class="topic-card">
      <div class="tc-dot" style="background:${d.color}"></div>
      <span class="tc-name">${t.name}</span>
      ${badge(t.level)}
    </div>`).join('');
}

/* ============================================================
   QUIZ — SETUP
   ============================================================ */
function showQuizSetup() {
  state.quizStarted = false;
  $('quiz-setup').style.display  = 'block';
  $('quiz-active').style.display = 'none';
  $('quiz-score').style.display  = 'none';

  // highlight active filter chip
  document.querySelectorAll('.fchip').forEach(c => {
    c.classList.toggle('active', c.dataset.filter === state.quizFilter);
  });
}

function setFilter(f, el) {
  state.quizFilter = f;
  document.querySelectorAll('.fchip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}

function startQuiz() {
  const subjects = state.quizFilter === 'all' ? ['math','phys','chem','bio'] : [state.quizFilter];
  let pool = [];
  subjects.forEach(s => DATA[s].questions.forEach(q => pool.push({ ...q, subject: s })));
  pool = pool.sort(() => Math.random() - 0.5).slice(0, Math.min(8, pool.length));
  state.quizQuestions = pool;
  state.currentQ = 0;
  state.quizStarted = true;

  $('quiz-setup').style.display  = 'none';
  $('quiz-active').style.display = 'block';
  $('quiz-score').style.display  = 'none';

  renderQuestion();
}

/* ============================================================
   QUIZ — RENDER QUESTION
   ============================================================ */
function renderQuestion() {
  state.answered = false;
  state.hintShown = false;

  const qs = state.quizQuestions;
  const q  = qs[state.currentQ];
  const d  = DATA[q.subject];
  const letters = ['أ','ب','ج','د'];
  const n = state.currentQ, total = qs.length;

  /* Progress bar */
  $('q-progress-fill').style.width = ((n / total) * 100) + '%';
  $('q-counter').textContent = `${n + 1} / ${total}`;
  $('q-tag').textContent = d.name;
  $('q-tag').style.background = d.bgLight;
  $('q-tag').style.color = d.textDark;

  /* Dots */
  $('q-dots').innerHTML = qs.map((_, i) =>
    `<div class="qdot ${i < n ? 'done' : i === n ? 'current' : ''}"></div>`
  ).join('');

  /* Question text */
  $('q-text').textContent = q.q;

  /* Options */
  $('options-list').innerHTML = q.opts.map((opt, i) => `
    <button class="option" id="opt-${i}" onclick="answerQ(${i})">
      <span class="opt-letter">${letters[i]}</span>
      <span>${opt}</span>
    </button>`).join('');

  /* Reset panels */
  const expBox = $('explanation-box');
  expBox.className = 'explanation-box';
  expBox.innerHTML = '';

  /* Navigation buttons */
  $('q-next-btn').style.display = 'none';

  /* Render Assistant Panel */
  renderAssistant(q);
}

/* ============================================================
   QUIZ — ASSISTANT PANEL
   ============================================================ */
function renderAssistant(q) {
  /* Hint card (hidden until requested) */
  $('hint-text').textContent   = q.hint || 'فكّر في المفاهيم الأساسية للموضوع.';
  $('hint-steps-list').innerHTML = (q.steps || []).map((s, i) => `
    <li><span class="step-num">${i + 1}</span>${s}</li>`).join('');
  $('hint-steps-wrap').style.display = 'none';
  $('hint-show-btn').style.display   = 'flex';
  $('hint-hide-btn').style.display   = 'none';

  /* Resources */
  const rKeys = q.resources || ['ain', 'mawdoo3'];
  $('resources-body').innerHTML = rKeys.map(key => {
    const r = RESOURCES[key];
    if (!r) return '';
    const url = r.url(q.topic || q.q.slice(0, 30));
    return `
      <div class="res-link" onclick="openUrl('${url}')" title="${r.name}">
        <div class="res-logo" style="background:${r.bg};color:${r.color};">${r.icon}</div>
        <div class="res-info">
          <div class="res-name">${r.name}</div>
          <div class="res-sub">${r.desc}</div>
        </div>
        <span class="res-arrow">↗</span>
      </div>`;
  }).join('');
}

function showHint() {
  $('hint-steps-wrap').style.display = 'block';
  $('hint-show-btn').style.display   = 'none';
  $('hint-hide-btn').style.display   = 'flex';
  state.hintShown = true;
}
function hideHint() {
  $('hint-steps-wrap').style.display = 'none';
  $('hint-show-btn').style.display   = 'flex';
  $('hint-hide-btn').style.display   = 'none';
}

/* ============================================================
   QUIZ — ANSWER
   ============================================================ */
function answerQ(idx) {
  if (state.answered) return;
  state.answered = true;

  const q = state.quizQuestions[state.currentQ];
  const correct = idx === q.ans;

  if (correct) state.score[q.subject].c++;
  state.score[q.subject].t++;

  /* Color options */
  document.querySelectorAll('.option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans) btn.classList.add('correct');
    else if (i === idx && !correct) btn.classList.add('wrong');
  });

  /* Explanation */
  const expBox = $('explanation-box');
  expBox.className = 'explanation-box show ' + (correct ? 'correct-exp' : 'wrong-exp');
  expBox.innerHTML = `
    <strong>${correct ? '✓ إجابة صحيحة!' : '✗ إجابة خاطئة'}</strong>
    <p style="margin-top:6px;">${q.exp}</p>`;

  /* Show next */
  const nextBtn = $('q-next-btn');
  nextBtn.style.display = 'flex';
  nextBtn.textContent = state.currentQ < state.quizQuestions.length - 1
    ? 'السؤال التالي ←'
    : 'عرض النتيجة';

  updateScorePills();
}

function nextQ() {
  if (state.currentQ < state.quizQuestions.length - 1) {
    state.currentQ++;
    renderQuestion();
  } else {
    showScore();
  }
}

/* ============================================================
   QUIZ — SCORE
   ============================================================ */
function showScore() {
  $('quiz-active').style.display = 'none';
  $('quiz-score').style.display  = 'block';

  let allC = 0, allT = 0;
  ['math','phys','chem','bio'].forEach(s => {
    allC += state.score[s].c;
    allT += state.score[s].t;
  });

  const p = pct(allC, allT);
  const color = p >= 80 ? '#22a855' : p >= 60 ? '#e0901a' : '#dd3344';
  const ring  = $('score-ring');
  ring.style.borderColor = color;
  ring.style.color       = color;
  $('score-num').textContent   = allC;
  $('score-denom').textContent = 'من ' + allT;
  $('score-title').textContent = p >= 80 ? 'ممتاز! أداء رائع 🎉' : p >= 60 ? 'جيد! واصل التدريب 💪' : 'راجع المواضيع وأعد المحاولة 📚';
  $('score-msg').textContent   = `أجبتَ بشكل صحيح على ${allC} من ${allT} سؤالاً (${p}%)`;

  /* Breakdown */
  const subNames = { math:'الرياضيات', phys:'الفيزياء', chem:'الكيمياء', bio:'الأحياء' };
  const subColors = { math:'#1e6fc0', phys:'#2e8b3a', chem:'#7c3fbf', bio:'#c97020' };
  $('score-breakdown').innerHTML = ['math','phys','chem','bio'].map(s => {
    const sc = state.score[s];
    const p2 = pct(sc.c, sc.t);
    return `
      <div class="sb-row">
        <span class="sb-label">${subNames[s]}</span>
        <div class="sb-bar-wrap">
          <div class="sb-bar" style="background:${subColors[s]};width:${p2}%"></div>
        </div>
        <span class="sb-val" style="color:${subColors[s]}">${sc.t ? sc.c+'/'+sc.t : '—'}</span>
      </div>`;
  }).join('');

  updateDashboard();
}

function restartQuiz() { showQuizSetup(); }

/* ============================================================
   PROGRESS SCREEN
   ============================================================ */
function renderProgress() {
  let allC = 0, allT = 0;
  const subNames  = { math:'الرياضيات', phys:'الفيزياء', chem:'الكيمياء', bio:'الأحياء' };
  const subColors = { math:'#1e6fc0', phys:'#2e8b3a', chem:'#7c3fbf', bio:'#c97020' };

  $('progress-rows').innerHTML = ['math','phys','chem','bio'].map(s => {
    const sc = state.score[s];
    allC += sc.c; allT += sc.t;
    const p = pct(sc.c, sc.t);
    return `
      <div class="subj-row">
        <span class="subj-name">${subNames[s]}</span>
        <div class="subj-bar">
          <div class="subj-fill" style="background:${subColors[s]};width:${p}%"></div>
        </div>
        <span class="subj-pct" style="color:${subColors[s]}">${p}%</span>
      </div>`;
  }).join('');

  const overall = pct(allC, allT);
  $('big-fill').style.width = overall + '%';
  $('big-pct').textContent  = overall + '%';

  $('prog-total').textContent   = allT;
  $('prog-correct').textContent = allC;

  const emptyEl = $('empty-progress');
  if (emptyEl) emptyEl.style.display = allT === 0 ? 'block' : 'none';
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderDashTopics('math');
  renderTopicsGrid('math');
  updateDashboard();

  /* Highlight first topic tab */
  const firstTab = document.querySelector('.stab');
  if (firstTab) firstTab.className = 'stab active-math';
});
