'use strict';

/* ============================================================
   DATA — الأسئلة مع تلميحات + مصادر مباشرة لكل سؤال
   ============================================================ */
const DATA = {

  /* ══ رياضيات ══ */
  math: {
    name: 'الرياضيات', color: '#1e6fc0',
    bgLight: '#e6f1fb', textDark: '#0c447c',
    topics: [
      { name: 'المثال المضاد',                      level: 'أساسي' },
      { name: 'العبارات المنطقية وقيم الصواب',       level: 'أساسي' },
      { name: 'العبارات الشرطية (إذا... إذن)',        level: 'متوسط' },
      { name: 'المعاكس الإيجابي والعكس',             level: 'متوسط' },
      { name: 'النقاط والمستقيمات',                  level: 'أساسي' },
      { name: 'تقاطع المستويات',                     level: 'متوسط' },
      { name: 'الزوايا المتكاملة والمتتامة',          level: 'أساسي' },
      { name: 'العلاقات بين الزوايا',                level: 'متوسط' },
      { name: 'متباينات المثلثات',                   level: 'متقدم' },
      { name: 'الإحصاء والاحتمالات',                 level: 'متوسط' },
    ],
    questions: [
      {
        q: 'أي مما يلي يُعدّ مثالاً مضاداً للجملة: "كل الأعداد الزوجية تقبل القسمة على 4"؟',
        opts: ['العدد 2', 'العدد 8', 'العدد 12', 'العدد 16'],
        ans: 0,
        exp: 'العدد 2 زوجي ولا يقبل القسمة على 4، فهو مثال مضاد يُبطل الجملة الكلية.',
        hint: 'ابحث عن عدد زوجي لا يقبل القسمة على 4.',
        steps: ['تحقق: 2÷4=0.5 ← ليس صحيحاً ✓', '8÷4=2 ، 12÷4=3 ، 16÷4=4 ← تنجح جميعاً'],
        topic: 'المثال المضاد',
        refs: [
          { name: 'بوابة عين — المثال المضاد', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — المثال المضاد', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'يوتيوب — شرح المثال المضاد', url: 'https://www.youtube.com/results?search_query=%D8%A7%D9%84%D9%85%D8%AB%D8%A7%D9%84+%D8%A7%D9%84%D9%85%D8%B6%D8%A7%D8%AF+%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA+%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A' },
        ]
      },
      {
        q: 'إذا كانت العبارة p صحيحة وعبارة q خاطئة، فما قيمة الصواب للعبارة (p ∧ q)؟',
        opts: ['صحيحة', 'خاطئة', 'يعتمد على السياق', 'لا يمكن تحديدها'],
        ans: 1,
        exp: 'الوصل (∧) يكون صحيحاً فقط إذا كانت العبارتان صحيحتين معاً.',
        hint: 'الوصل (AND) يحتاج الطرفين صحيحين.',
        steps: ['p=ص ، q=خ', 'ص ∧ خ = خاطئة (قاعدة جدول الحقيقة)'],
        topic: 'العبارات المنطقية',
        refs: [
          { name: 'بوابة عين — المنطق الرياضي', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — المنطق الرياضي', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'يوتيوب — جدول الحقيقة', url: 'https://www.youtube.com/results?search_query=%D8%AC%D8%AF%D9%88%D9%84+%D8%A7%D9%84%D8%AD%D9%82%D9%8A%D9%82%D8%A9+%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A' },
        ]
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
        exp: 'المعاكس الإيجابي: نفي التالي → نفي المقدم.',
        hint: 'المعاكس الإيجابي = عكس + نفي معاً.',
        steps: ['العبارة: إذا p فإن q', 'المعاكس الإيجابي: إذا ¬q فإن ¬p'],
        topic: 'العبارات الشرطية',
        refs: [
          { name: 'بوابة عين — العبارات الشرطية', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — العبارات الشرطية', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'يوتيوب — المعاكس الإيجابي', url: 'https://www.youtube.com/results?search_query=%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%83%D8%B3+%D8%A7%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%A8%D9%8A+%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A' },
        ]
      },
      {
        q: 'إذا كانت زاويتان متتامتان، وإحداهما 35°، فما مقياس الأخرى؟',
        opts: ['55°', '65°', '145°', '325°'],
        ans: 0,
        exp: 'الزوايا المتتامة مجموعها 90°. إذن: 90 − 35 = 55°.',
        hint: 'المتتامة مجموعها 90°، المكملة مجموعها 180°.',
        steps: ['مجموع المتتامتين = 90°', '90 − 35 = 55°'],
        topic: 'الزوايا المتتامة',
        refs: [
          { name: 'بوابة عين — الزوايا', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — الزوايا', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'Desmos — رسم الزوايا تفاعلياً', url: 'https://www.desmos.com/geometry' },
        ]
      },
      {
        q: 'العبارة "p أو q" (p ∨ q) تكون خاطئة فقط إذا:',
        opts: ['كانت p صحيحة وq خاطئة', 'كانت p خاطئة وq صحيحة', 'كانتا كلتاهما خاطئتين', 'كانتا كلتاهما صحيحتين'],
        ans: 2,
        exp: 'الفصل (∨) يكون خاطئاً فقط حين تكون كلتا العبارتين خاطئتين.',
        hint: 'OR يكفيه طرف واحد صحيح — يكون خاطئاً فقط حين كلاهما خاطئ.',
        steps: ['ص∨ص=ص ، ص∨خ=ص ، خ∨ص=ص', 'خ∨خ=خ ← الحالة الوحيدة للخطأ'],
        topic: 'العبارات المنطقية',
        refs: [
          { name: 'بوابة عين — المنطق الرياضي', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — المنطق الرياضي', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'يوتيوب — الفصل والوصل', url: 'https://www.youtube.com/results?search_query=%D8%A7%D9%84%D9%81%D8%B5%D9%84+%D9%88%D8%A7%D9%84%D9%88%D8%B5%D9%84+%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82+%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A' },
        ]
      },
    ]
  },

  /* ══ فيزياء ══ */
  phys: {
    name: 'الفيزياء', color: '#2e8b3a',
    bgLight: '#eaf3de', textDark: '#1a5c25',
    topics: [
      { name: 'قوانين نيوتن للحركة',          level: 'أساسي' },
      { name: 'الطاقة الحركية والكامنة',        level: 'أساسي' },
      { name: 'الحركة المنتظمة والمتسارعة',     level: 'متوسط' },
      { name: 'قانون أوم والدوائر الكهربائية',  level: 'متوسط' },
      { name: 'الموجات والصوت',                 level: 'أساسي' },
      { name: 'الضوء والبصريات',                level: 'متوسط' },
      { name: 'المغناطيسية والكهرومغناطيسية',   level: 'متقدم' },
      { name: 'الحرارة والديناميكا الحرارية',   level: 'متوسط' },
    ],
    questions: [
      {
        q: 'جسم كتلته 5 كغ يتحرك بسرعة 4 م/ث، ما طاقته الحركية؟',
        opts: ['20 جول', '40 جول', '80 جول', '10 جول'],
        ans: 1,
        exp: 'Ek = ½mv² = ½ × 5 × (4)² = 40 جول.',
        hint: 'القانون: Ek = ½mv² — ربّع السرعة أولاً.',
        steps: ['Ek = ½ × 5 × (4)²', '= ½ × 5 × 16 = 40 جول'],
        topic: 'الطاقة الحركية',
        refs: [
          { name: 'بوابة عين — الطاقة الحركية', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — الطاقة الحركية', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'محاكاة الطاقة — PhET', url: 'https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_all.html' },
          { name: 'يوتيوب — الطاقة الحركية', url: 'https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9+%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D9%8A%D8%A9+%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A+%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1' },
        ]
      },
      {
        q: 'وفق القانون الثاني لنيوتن، إذا كانت القوة 20 نيوتن والكتلة 4 كغ، فما التسارع؟',
        opts: ['5 م/ث²', '80 م/ث²', '0.2 م/ث²', '24 م/ث²'],
        ans: 0,
        exp: 'F = ma → a = F/m = 20/4 = 5 م/ث².',
        hint: 'القانون الثاني: F = m×a، اعزل a.',
        steps: ['a = F ÷ m', 'a = 20 ÷ 4 = 5 م/ث²'],
        topic: 'قوانين نيوتن',
        refs: [
          { name: 'بوابة عين — قوانين نيوتن', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — قوانين نيوتن', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'محاكاة القوى — PhET', url: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html' },
          { name: 'يوتيوب — قوانين نيوتن', url: 'https://www.youtube.com/results?search_query=%D9%82%D9%88%D8%A7%D9%86%D9%8A%D9%86+%D9%86%D9%8A%D9%88%D8%AA%D9%86+%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1+%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A' },
        ]
      },
      {
        q: 'ما العلاقة بين شدة التيار والمقاومة عند ثبات الجهد الكهربائي؟',
        opts: ['طردية', 'عكسية', 'لا علاقة', 'تربيعية'],
        ans: 1,
        exp: 'V = IR → I = V/R، التيار يتناسب عكسياً مع المقاومة.',
        hint: 'I = V/R — إذا زادت R وV ثابتة، ماذا يحدث لـ I؟',
        steps: ['I = V ÷ R', 'R تزداد → I تنقص ← عكسية'],
        topic: 'قانون أوم',
        refs: [
          { name: 'بوابة عين — الكهرباء', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — الكهرباء', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'محاكاة الدوائر — PhET', url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html' },
        ]
      },
      {
        q: 'ما وحدة قياس الشغل في النظام الدولي؟',
        opts: ['نيوتن', 'واط', 'جول', 'باسكال'],
        ans: 2,
        exp: 'الشغل = قوة × إزاحة، ووحدته الجول (J = N·m).',
        hint: 'شغل = N × m = جول. الواط وحدة الطاقة لا الشغل.',
        steps: ['شغل = قوة (N) × إزاحة (m)', '1 N·m = 1 جول (J)'],
        topic: 'الشغل والطاقة',
        refs: [
          { name: 'بوابة عين — الشغل والطاقة', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — الشغل والطاقة', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'يوتيوب — الشغل الميكانيكي', url: 'https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%B4%D8%BA%D9%84+%D8%A7%D9%84%D9%85%D9%8A%D9%83%D8%A7%D9%86%D9%8A%D9%83%D9%8A+%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1+%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A' },
        ]
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
        exp: 'Na له 11 إلكتروناً، وعند فقده إلكتروناً واحداً يصبح 10.',
        hint: 'Na عدده الذري 11. الشحنة + تعني فقدان إلكترون.',
        steps: ['عدد إلكترونات Na = 11', 'Na⁺ فقد إلكتروناً: 11−1=10'],
        topic: 'التركيب الذري',
        refs: [
          { name: 'بوابة عين — التركيب الذري', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — التركيب الذري', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'الجدول الدوري التفاعلي — Ptable', url: 'https://ptable.com/?lang=ar#Properties' },
          { name: 'يوتيوب — الأيونات', url: 'https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%A3%D9%8A%D9%88%D9%86%D8%A7%D8%AA+%D9%83%D9%8A%D9%85%D9%8A%D8%A7%D8%A1+%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A' },
        ]
      },
      {
        q: 'ما نوع الرابطة في جزيء الماء H₂O؟',
        opts: ['أيونية', 'تساهمية قطبية', 'تساهمية غير قطبية', 'فلزية'],
        ans: 1,
        exp: 'الماء رابطة تساهمية قطبية بسبب فارق الكهرسلبية بين H وO.',
        hint: 'كهرسلبية O (3.44) >> H (2.20) → الرابطة قطبية.',
        steps: ['H وO يتشاركان إلكترونات ← تساهمية', 'الفارق في الكهرسلبية كبير ← قطبية'],
        topic: 'الروابط الكيميائية',
        refs: [
          { name: 'بوابة عين — الروابط الكيميائية', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — الروابط الكيميائية', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'الجدول الدوري — الكهرسلبية', url: 'https://ptable.com/?lang=ar#Properties/Electronegativity' },
        ]
      },
      {
        q: 'ما العدد الذري للكربون في الجدول الدوري؟',
        opts: ['4', '6', '12', '14'],
        ans: 1,
        exp: 'العدد الذري للكربون هو 6، أي أن نواته تحتوي على 6 بروتونات.',
        hint: 'الكربون هو العنصر السادس في الجدول الدوري.',
        steps: ['ابحث عن C في الجدول', 'العدد الذري = 6'],
        topic: 'الجدول الدوري',
        refs: [
          { name: 'بوابة عين — الجدول الدوري', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — الجدول الدوري', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'الجدول الدوري التفاعلي — Ptable', url: 'https://ptable.com/?lang=ar#Properties' },
        ]
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
        exp: 'الميتوكوندريا محطة الطاقة وتتم فيها عملية التنفس الخلوي لإنتاج ATP.',
        hint: 'تذكّر: الميتوكوندريا = محطة الطاقة.',
        steps: ['التنفس الخلوي ينتج ATP', 'يحدث داخل الميتوكوندريا'],
        topic: 'تركيب الخلية',
        refs: [
          { name: 'بوابة عين — الخلية', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — الخلية', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'يوتيوب — الميتوكوندريا', url: 'https://www.youtube.com/results?search_query=%D8%A7%D9%84%D9%85%D9%8A%D8%AA%D9%88%D9%83%D9%88%D9%86%D8%AF%D8%B1%D9%8A%D8%A7+%D8%A3%D8%AD%D9%8A%D8%A7%D8%A1+%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A' },
        ]
      },
      {
        q: 'إذا كان النمط الجيني للأم (Aa) والأب (aa)، فما نسبة الأبناء الحاملين للطراز (Aa)؟',
        opts: ['25%', '50%', '75%', '100%'],
        ans: 1,
        exp: 'تزاوج Aa × aa: النتائج Aa،Aa،aa،aa — أي 50% بالنمط Aa.',
        hint: 'ارسم مربع بانيت: الأم تعطي A أو a، الأب يعطي a دائماً.',
        steps: ['الأم: A أو a (50/50)', 'الأب: a فقط', 'النتائج: Aa,Aa,aa,aa → 50% Aa'],
        topic: 'الوراثة',
        refs: [
          { name: 'بوابة عين — الوراثة', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — الوراثة', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'يوتيوب — مربع بانيت', url: 'https://www.youtube.com/results?search_query=%D9%85%D8%B1%D8%A8%D8%B9+%D8%A8%D8%A7%D9%86%D9%8A%D8%AA+%D8%A3%D8%AD%D9%8A%D8%A7%D8%A1+%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A' },
        ]
      },
      {
        q: 'ما الوظيفة الرئيسية للريبوسوم في الخلية؟',
        opts: ['إنتاج الطاقة', 'تصنيع البروتينات', 'تخزين الماء', 'الهضم الخلوي'],
        ans: 1,
        exp: 'الريبوسومات موقع تصنيع البروتينات في الخلية.',
        hint: 'الريبوسوم = مصنع البروتينات.',
        steps: ['الريبوسوم يقرأ mRNA', 'يُجمّع الأحماض الأمينية', 'النتيجة: سلسلة بروتينية'],
        topic: 'تركيب الخلية',
        refs: [
          { name: 'بوابة عين — الخلية', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — الخلية', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'يوتيوب — عضيات الخلية', url: 'https://www.youtube.com/results?search_query=%D8%B9%D8%B6%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9+%D8%A3%D8%AD%D9%8A%D8%A7%D8%A1+%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A' },
        ]
      },
      {
        q: 'أي من التالي يُعدّ من الأعضاء الليمفاوية الأولية؟',
        opts: ['الطحال', 'العقد الليمفاوية', 'الغدة الزعترية (التيموس)', 'اللوزتان'],
        ans: 2,
        exp: 'الغدة الزعترية (التيموس) عضو ليمفاوي أولي مسؤول عن نضج الخلايا التائية.',
        hint: 'الأعضاء الأولية: نخاع العظم + الغدة الزعترية فقط.',
        steps: ['الأولية: نخاع العظم + التيموس', 'الطحال والعقد واللوزتان = ثانوية'],
        topic: 'الجهاز المناعي',
        refs: [
          { name: 'بوابة عين — الجهاز المناعي', url: 'https://ien.edu.sa' },
          { name: 'عين دروس (يوتيوب رسمي) — الجهاز المناعي', url: 'https://www.youtube.com/channel/UCndb1LGM5oQJVhjh2NViU5g' },
          { name: 'يوتيوب — الجهاز المناعي', url: 'https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2+%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B9%D9%8A+%D8%A3%D8%AD%D9%8A%D8%A7%D8%A1+%D8%AA%D8%AD%D8%B5%D9%8A%D9%84%D9%8A' },
        ]
      },
    ]
  }
};

/* ============================================================
   نظام التحفيز — الأوسمة والنجوم
   ============================================================ */
const BADGES = [
  { id:'first',   icon:'🏅', name:'وسام الانطلاق',   desc:'أجبت على أول سؤال صحيح',  req: c => c >= 1  },
  { id:'three',   icon:'🥉', name:'وسام البرونز',     desc:'3 إجابات صحيحة',           req: c => c >= 3  },
  { id:'five',    icon:'🥈', name:'وسام الفضة',       desc:'5 إجابات صحيحة',           req: c => c >= 5  },
  { id:'ten',     icon:'🥇', name:'وسام الذهب',       desc:'10 إجابات صحيحة',          req: c => c >= 10 },
  { id:'perfect', icon:'💎', name:'وسام الماسة',      desc:'جلسة كاملة بدون خطأ',      req: (c,t)=>t>=5 && c===t },
];

/* نجوم: كل 5 أوسمة = نجمة */
function calcStars(badgeCount) { return Math.floor(badgeCount / 2); }

/* ============================================================
   STATE
   ============================================================ */
let state = {
  screen        : 'dashboard',
  topicSubject  : 'math',
  quizFilter    : 'all',
  quizQuestions : [],
  currentQ      : 0,
  answered      : false,
  firstAttempt  : true,   // هل لم يُستخدم التلميح بعد؟
  score         : { math:{c:0,t:0}, phys:{c:0,t:0}, chem:{c:0,t:0}, bio:{c:0,t:0} },
  totalCorrect  : 0,       // مجموع الصحيح من أول محاولة
  sessionCorrect: 0,
  sessionTotal  : 0,
  earnedBadges  : [],      // معرّفات الأوسمة المكتسبة
  stars         : 0,
};

/* ============================================================
   HELPERS
   ============================================================ */
const $ = id => document.getElementById(id);
const pct = (c,t) => t>0 ? Math.round(c/t*100) : 0;

function openUrl(url) { window.open(url, '_blank', 'noopener,noreferrer'); }

function showToast(msg, duration=3000) {
  const el = $('toast');
  el.innerHTML = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), duration);
}

/* ============================================================
   NAVIGATION
   ============================================================ */
const TITLES = { dashboard:'لوحة التحكم', topics:'المواضيع', quiz:'التدريب', progress:'تقدمي' };

function showScreen(name) {
  state.screen = name;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $('screen-'+name).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const btn = $('nav-'+name);
  if (btn) btn.classList.add('active');
  $('topbar-title').textContent = TITLES[name] || '';
  if (name==='progress')  renderProgress();
  if (name==='dashboard') updateDashboard();
  if (name==='quiz' && !state.quizStarted) showQuizSetup();
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
  let allC=0, allT=0;
  ['math','phys','chem','bio'].forEach(s => {
    const sc=state.score[s];
    allC+=sc.c; allT+=sc.t;
    const p=pct(sc.c,sc.t);
    const fill=$(`sc-fill-${s}`), pEl=$(`sc-pct-${s}`);
    if(fill) fill.style.width=p+'%';
    if(pEl)  pEl.textContent=p+'%';
  });
  const overall=pct(allC,allT);
  $('ring-pct').textContent=overall;
  const circle=document.querySelector('.ring-progress');
  if(circle){ const c=2*Math.PI*44; circle.style.strokeDashoffset=c-(c*overall/100); }
  $('dash-total').textContent=allT;
  $('dash-correct').textContent=allC;

  /* أوسمة في الداشبورد */
  renderBadgeStrip();
  updatePills();
}

function updatePills() {
  ['math','phys','chem','bio'].forEach(s => {
    const el=$('pill-'+s);
    if(!el) return;
    const sc=state.score[s];
    el.textContent = sc.t ? `${sc.c}/${sc.t}` : '—';
  });
}

function renderBadgeStrip() {
  const el=$('badge-strip');
  if(!el) return;
  const stars=calcStars(state.earnedBadges.length);
  let html='';
  BADGES.forEach(b => {
    const earned=state.earnedBadges.includes(b.id);
    html+=`<div class="badge-item ${earned?'earned':'locked'}" title="${b.name}: ${b.desc}">
      <span class="badge-icon">${earned ? b.icon : '🔒'}</span>
      <span class="badge-name">${b.name}</span>
    </div>`;
  });
  /* نجوم */
  if(stars>0) {
    for(let i=0;i<stars;i++) html+=`<div class="badge-item earned star-item" title="نجمة تميّز"><span class="badge-icon">⭐</span><span class="badge-name">نجمة ${i+1}</span></div>`;
  }
  el.innerHTML=html;
}

function renderDashTopics(subj) {
  const d=DATA[subj], list=$('dash-topic-list'), title=$('dash-topic-title');
  if(title) title.innerHTML=`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${d.color};margin-left:6px"></span>${d.name}`;
  if(list)  list.innerHTML=d.topics.map(t=>`
    <div class="topic-row">
      <div class="t-dot" style="background:${d.color}"></div>
      <span>${t.name}</span>${badge(t.level)}
    </div>`).join('');
}

function badge(level) {
  const m={'أساسي':{bg:'#eaf3de',c:'#1a5c25'},'متوسط':{bg:'#e6f1fb',c:'#0c447c'},'متقدم':{bg:'#fef3e2',c:'#7a4010'}};
  const s=m[level]||m['أساسي'];
  return `<span class="t-badge" style="background:${s.bg};color:${s.c}">${level}</span>`;
}

/* ============================================================
   TOPICS
   ============================================================ */
function switchTopicTab(sub,el) {
  state.topicSubject=sub;
  document.querySelectorAll('.stab').forEach(t=>t.className='stab');
  el.className=`stab active-${sub}`;
  renderTopicsGrid(sub);
}
function renderTopicsGrid(sub) {
  const d=DATA[sub];
  $('topics-grid').innerHTML=d.topics.map(t=>`
    <div class="topic-card">
      <div class="tc-dot" style="background:${d.color}"></div>
      <span class="tc-name">${t.name}</span>${badge(t.level)}
    </div>`).join('');
}

/* ============================================================
   QUIZ SETUP
   ============================================================ */
function showQuizSetup() {
  state.quizStarted=false;
  $('quiz-setup').style.display='block';
  $('quiz-active').style.display='none';
  $('quiz-score').style.display='none';
  document.querySelectorAll('.fchip').forEach(c=>c.classList.toggle('active',c.dataset.filter===state.quizFilter));
}
function setFilter(f,el) {
  state.quizFilter=f;
  document.querySelectorAll('.fchip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
}
function startQuiz() {
  const subjects=state.quizFilter==='all'?['math','phys','chem','bio']:[state.quizFilter];
  let pool=[];
  subjects.forEach(s=>DATA[s].questions.forEach(q=>pool.push({...q,subject:s})));
  pool=pool.sort(()=>Math.random()-.5).slice(0,Math.min(8,pool.length));
  state.quizQuestions=pool;
  state.currentQ=0;
  state.quizStarted=true;
  state.sessionCorrect=0;
  state.sessionTotal=0;
  $('quiz-setup').style.display='none';
  $('quiz-active').style.display='block';
  $('quiz-score').style.display='none';
  renderQuestion();
}

/* ============================================================
   RENDER QUESTION
   ============================================================ */
function renderQuestion() {
  state.answered=false;
  state.firstAttempt=true;
  const qs=state.quizQuestions, q=qs[state.currentQ], d=DATA[q.subject];
  const n=state.currentQ, total=qs.length;
  const letters=['أ','ب','ج','د'];

  $('q-progress-fill').style.width=((n/total)*100)+'%';
  $('q-counter').textContent=`${n+1} / ${total}`;
  $('q-tag').textContent=d.name;
  $('q-tag').style.background=d.bgLight;
  $('q-tag').style.color=d.textDark;
  $('q-dots').innerHTML=qs.map((_,i)=>`<div class="qdot ${i<n?'done':i===n?'current':''}"></div>`).join('');
  $('q-text').textContent=q.q;
  $('options-list').innerHTML=q.opts.map((opt,i)=>`
    <button class="option" id="opt-${i}" onclick="answerQ(${i})">
      <span class="opt-letter">${letters[i]}</span><span>${opt}</span>
    </button>`).join('');

  const expBox=$('explanation-box');
  expBox.className='explanation-box'; expBox.innerHTML='';
  $('q-next-btn').style.display='none';

  /* مساعد */
  renderAssistant(q);
}

/* ============================================================
   ASSISTANT + REFERENCES
   ============================================================ */
function renderAssistant(q) {
  $('hint-text').textContent=q.hint||'فكّر في المفاهيم الأساسية.';
  $('hint-steps-list').innerHTML=(q.steps||[]).map((s,i)=>`<li><span class="step-num">${i+1}</span>${s}</li>`).join('');
  $('hint-steps-wrap').style.display='none';
  $('hint-show-btn').style.display='flex';
  $('hint-hide-btn').style.display='none';

  /* مصادر خاصة بالسؤال */
  $('resources-body').innerHTML=(q.refs||[]).map(r=>`
    <div class="res-link" onclick="openUrl('${r.url}')">
      <div class="res-icon">${getResIcon(r.name)}</div>
      <div class="res-info">
        <div class="res-name">${r.name}</div>
      </div>
      <span class="res-arrow">↗</span>
    </div>`).join('');
}

function getResIcon(name) {
  if(name.includes('عين دروس')) return '<span style="background:#fff3e0;color:#e65100;padding:4px 7px;border-radius:6px;font-size:11px;font-weight:900;">▶عين</span>';
  if(name.includes('عين'))   return '<span style="background:#e6f0ff;color:#0066cc;padding:4px 7px;border-radius:6px;font-size:11px;font-weight:900;">عين</span>';
  if(name.includes('يوتيوب'))return '<span style="background:#fff0f0;color:#ff0000;font-size:18px;">▶️</span>';
  if(name.includes('PhET') || name.includes('محاكاة')) return '<span style="background:#eaf3de;color:#2e7d32;font-size:18px;">⚗️</span>';
  if(name.includes('Ptable') || name.includes('الجدول'))return '<span style="background:#f0ebfc;color:#7c3fbf;font-size:18px;">⚛️</span>';
  if(name.includes('Desmos'))return '<span style="background:#e6f1fb;color:#1a6fc0;font-size:18px;">📐</span>';
  return '<span style="font-size:18px;">🔗</span>';
}

function showHint() {
  state.firstAttempt=false;  // استخدم التلميح → لن يحصل على وسام الانجاز من أول مرة
  $('hint-steps-wrap').style.display='block';
  $('hint-show-btn').style.display='none';
  $('hint-hide-btn').style.display='flex';
}
function hideHint() {
  $('hint-steps-wrap').style.display='none';
  $('hint-show-btn').style.display='flex';
  $('hint-hide-btn').style.display='none';
}

/* ============================================================
   ANSWER
   ============================================================ */
function answerQ(idx) {
  if(state.answered) return;
  state.answered=true;
  const q=state.quizQuestions[state.currentQ];
  const correct=idx===q.ans;

  if(correct) {
    state.score[q.subject].c++;
    state.sessionCorrect++;
    if(state.firstAttempt) state.totalCorrect++;  // أول محاولة بدون تلميح
  }
  state.score[q.subject].t++;
  state.sessionTotal++;

  /* تلوين الخيارات */
  document.querySelectorAll('.option').forEach((btn,i)=>{
    btn.disabled=true;
    if(i===q.ans) btn.classList.add('correct');
    else if(i===idx&&!correct) btn.classList.add('wrong');
  });

  /* شرح */
  const expBox=$('explanation-box');
  expBox.className='explanation-box show '+(correct?'correct-exp':'wrong-exp');
  expBox.innerHTML=`<strong>${correct?'✓ إجابة صحيحة!':'✗ إجابة خاطئة'}</strong><p style="margin-top:6px">${q.exp}</p>`;

  /* وسام فوري إن استحق */
  if(correct && state.firstAttempt) checkBadges(true);

  $('q-next-btn').style.display='flex';
  $('q-next-btn').textContent=state.currentQ<state.quizQuestions.length-1?'السؤال التالي ←':'عرض النتيجة';
  updatePills();
}

/* ============================================================
   BADGE SYSTEM
   ============================================================ */
function checkBadges(showPopup=false) {
  const totalC=state.totalCorrect;
  const sessC=state.sessionCorrect, sessT=state.sessionTotal;
  let newlyEarned=[];

  BADGES.forEach(b=>{
    if(!state.earnedBadges.includes(b.id) && b.req(totalC, sessT ? sessC : 0, sessT)) {
      state.earnedBadges.push(b.id);
      newlyEarned.push(b);
    }
  });

  /* نجوم جديدة */
  const newStars=calcStars(state.earnedBadges.length);
  const oldStars=state.stars;
  state.stars=newStars;

  if(showPopup && newlyEarned.length>0) {
    newlyEarned.forEach((b,i)=>{
      setTimeout(()=>showAchievement(b.icon, b.name, b.desc), i*1400);
    });
  }
  if(newStars>oldStars) {
    setTimeout(()=>showAchievement('⭐','نجمة تميّز جديدة!',`حصلت على نجمة رقم ${newStars}`), newlyEarned.length*1400);
  }
}

function showAchievement(icon, name, desc) {
  $('ach-icon').textContent=icon;
  $('ach-name').textContent=name;
  $('ach-desc').textContent=desc;
  const el=$('achievement-popup');
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),3000);
}

/* ============================================================
   NEXT / SCORE
   ============================================================ */
function nextQ() {
  if(state.currentQ<state.quizQuestions.length-1){ state.currentQ++; renderQuestion(); }
  else showScore();
}

function showScore() {
  /* فحص وسام الجلسة الكاملة */
  checkBadges(true);

  $('quiz-active').style.display='none';
  $('quiz-score').style.display='block';

  let allC=0, allT=0;
  ['math','phys','chem','bio'].forEach(s=>{ allC+=state.score[s].c; allT+=state.score[s].t; });
  const p=pct(allC,allT);
  const color=p>=80?'#22a855':p>=60?'#e0901a':'#dd3344';
  const ring=$('score-ring');
  ring.style.borderColor=color; ring.style.color=color;
  $('score-num').textContent=allC;
  $('score-denom').textContent='من '+allT;
  $('score-title').textContent=p>=80?'ممتاز! أداء رائع 🎉':p>=60?'جيد! واصل التدريب 💪':'راجع المواضيع وأعد المحاولة 📚';
  $('score-msg').textContent=`أجبتَ صحيحاً على ${allC} من ${allT} سؤال (${p}%)`;

  /* أوسمة في صفحة النتيجة */
  const stars=calcStars(state.earnedBadges.length);
  let badgeHtml=state.earnedBadges.map(id=>{
    const b=BADGES.find(x=>x.id===id);
    return b?`<span class="score-badge" title="${b.desc}">${b.icon} ${b.name}</span>`:'';
  }).join('');
  for(let i=0;i<stars;i++) badgeHtml+=`<span class="score-badge star">⭐ نجمة ${i+1}</span>`;
  $('score-badges').innerHTML=badgeHtml||'<span style="color:var(--text3);font-size:13px;">تدرّب أكثر لتحصل على أوسمة!</span>';

  const subNames={math:'الرياضيات',phys:'الفيزياء',chem:'الكيمياء',bio:'الأحياء'};
  const subColors={math:'#1e6fc0',phys:'#2e8b3a',chem:'#7c3fbf',bio:'#c97020'};
  $('score-breakdown').innerHTML=['math','phys','chem','bio'].map(s=>{
    const sc=state.score[s], p2=pct(sc.c,sc.t);
    return `<div class="sb-row">
      <span class="sb-label">${subNames[s]}</span>
      <div class="sb-bar-wrap"><div class="sb-bar" style="background:${subColors[s]};width:${p2}%"></div></div>
      <span class="sb-val" style="color:${subColors[s]}">${sc.t?sc.c+'/'+sc.t:'—'}</span>
    </div>`;
  }).join('');

  updateDashboard();
}

function restartQuiz() { showQuizSetup(); }

/* ============================================================
   PROGRESS
   ============================================================ */
function renderProgress() {
  let allC=0, allT=0;
  const subNames={math:'الرياضيات',phys:'الفيزياء',chem:'الكيمياء',bio:'الأحياء'};
  const subColors={math:'#1e6fc0',phys:'#2e8b3a',chem:'#7c3fbf',bio:'#c97020'};
  $('progress-rows').innerHTML=['math','phys','chem','bio'].map(s=>{
    const sc=state.score[s]; allC+=sc.c; allT+=sc.t;
    const p=pct(sc.c,sc.t);
    return `<div class="subj-row">
      <span class="subj-name">${subNames[s]}</span>
      <div class="subj-bar"><div class="subj-fill" style="background:${subColors[s]};width:${p}%"></div></div>
      <span class="subj-pct" style="color:${subColors[s]}">${p}%</span>
    </div>`;
  }).join('');
  const overall=pct(allC,allT);
  $('big-fill').style.width=overall+'%';
  $('big-pct').textContent=overall+'%';
  $('prog-total').textContent=allT;
  $('prog-correct').textContent=allC;
  const emptyEl=$('empty-progress');
  if(emptyEl) emptyEl.style.display=allT===0?'block':'none';

  /* أوسمة وعرضها */
  const stars=calcStars(state.earnedBadges.length);
  let bHtml='';
  BADGES.forEach(b=>{
    const earned=state.earnedBadges.includes(b.id);
    bHtml+=`<div class="prog-badge ${earned?'earned':'locked'}">
      <div class="pb-icon">${earned?b.icon:'🔒'}</div>
      <div class="pb-name">${b.name}</div>
      <div class="pb-desc">${b.desc}</div>
    </div>`;
  });
  for(let i=0;i<stars;i++) bHtml+=`<div class="prog-badge earned">
    <div class="pb-icon">⭐</div>
    <div class="pb-name">نجمة ${i+1}</div>
    <div class="pb-desc">مكافأة تميّز</div>
  </div>`;
  $('prog-badges').innerHTML=bHtml||'<div style="color:var(--text3);font-size:13px;grid-column:1/-1">لم تحصل على أوسمة بعد</div>';
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', ()=>{
  renderDashTopics('math');
  renderTopicsGrid('math');
  updateDashboard();
  document.querySelector('.stab').className='stab active-math';
});
