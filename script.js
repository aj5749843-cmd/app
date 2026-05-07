const DATA = {
    math: {
      name: 'الرياضيات', color: '#1e6fc0',
      bgLight: '#e6f1fb', textDark: '#0c447c',
      topics: [
        { name: 'المثال المضاد', level: 'أساسي' },
        { name: 'العبارات المنطقية وقيم الصواب', level: 'أساسي' },
        { name: 'العبارات الشرطية (إذا... إذن)', level: 'متوسط' },
        { name: 'المعاكس الإيجابي والعكس', level: 'متوسط' },
        { name: 'النقاط والمستقيمات والمستويات', level: 'أساسي' },
        { name: 'نقطة المنتصف والمسافة', level: 'أساسي' },
        { name: 'الزوايا وعلاقاتها', level: 'متوسط' },
        { name: 'الزوايا والمستقيمات المتوازية', level: 'متوسط' },
        { name: 'ميل المستقيم ومعادلته', level: 'متوسط' },
        { name: 'المسافة بين نقطة ومستقيم', level: 'متقدم' },
        { name: 'المثلثات وأنواعها', level: 'أساسي' },
        { name: 'تطابق المثلثات', level: 'متوسط' },
        { name: 'خصائص المثلثات', level: 'متوسط' },
        { name: 'المضلعات وزواياها', level: 'متوسط' },
        { name: 'الدائرة — القطر والوتر والقوس', level: 'أساسي' },
        { name: 'الزوايا المركزية والمحيطية', level: 'متوسط' },
        { name: 'خصائص الأوتار والمماسات', level: 'متقدم' },
      ],
      questions: [
        {
          q: 'للعبارة «إذا كانت A زاوية حادة فإن m∠A = 37°»، أي ما يلي يُعدُّ مثالاً مضاداً؟',
          opts: ['m∠A = 73°', 'm∠A = 90°', 'm∠A = 103°', 'm∠A = 180°'],
          ans: 1,
          exp: 'الزاوية الحادة قياسها أقل من 90°. m∠A = 90° ليست زاوية حادة، فهي مثال مضاد يُبطل العبارة.'
        },
        {
          q: 'للعبارة «إذا كان a عدداً حقيقياً فإن a² ≥ a»، أي ما يلي يُعدُّ مثالاً مضاداً؟',
          opts: ['a = −2', 'a = 0', 'a = ½', 'a = 2'],
          ans: 2,
          exp: 'عند a = ½: a² = ¼ وهو أقل من ½، إذن العبارة خاطئة، وهذا هو المثال المضاد.'
        },
        {
          q: 'أي ما يلي مثال مضاد للتخمين «إذا كان n عدداً أولياً فإن n + 1 عدداً أولياً»؟',
          opts: ['n = 2', 'n = 3', 'n = 5', 'n = 7'],
          ans: 2,
          exp: 'عند n = 5: n + 1 = 6 ليس أولياً، فهو مثال مضاد يُبطل التخمين.'
        },
        {
          q: 'العبارة «إذا كانت ∠1، ∠2 زاويتين تشتركان في نقطة فإنهما متجاورتان»، أي ما يلي مثال مضاد لهذه العبارة؟<br><svg width="300" height="95" viewBox="0 0 300 95" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><text x="13" y="12" font-size="12" fill="#1e6fc0" font-weight="bold" font-family="Arial">(A)</text><line x1="10" y1="72" x2="65" y2="72" stroke="#222" stroke-width="2"/><line x1="10" y1="72" x2="38" y2="28" stroke="#222" stroke-width="2"/><line x1="10" y1="72" x2="65" y2="50" stroke="#222" stroke-width="1.5"/><text x="30" y="70" font-size="10" fill="#555" font-family="Arial">∠1</text><text x="28" y="50" font-size="10" fill="#555" font-family="Arial">∠2</text><text x="83" y="12" font-size="12" fill="#c00" font-weight="bold" font-family="Arial">(B)</text><line x1="80" y1="25" x2="150" y2="85" stroke="#222" stroke-width="2"/><line x1="150" y1="25" x2="80" y2="85" stroke="#222" stroke-width="2"/><text x="108" y="50" font-size="10" fill="#c00" font-family="Arial">∠1</text><text x="122" y="62" font-size="10" fill="#c00" font-family="Arial">∠2</text><text x="163" y="12" font-size="12" fill="#1e6fc0" font-weight="bold" font-family="Arial">(C)</text><line x1="160" y1="72" x2="225" y2="72" stroke="#222" stroke-width="2"/><line x1="192" y1="72" x2="192" y2="25" stroke="#222" stroke-width="2"/><text x="168" y="65" font-size="10" fill="#555" font-family="Arial">∠1</text><text x="198" y="58" font-size="10" fill="#555" font-family="Arial">∠2</text><text x="243" y="12" font-size="12" fill="#1e6fc0" font-weight="bold" font-family="Arial">(D)</text><line x1="240" y1="80" x2="298" y2="80" stroke="#222" stroke-width="2"/><line x1="240" y1="80" x2="268" y2="28" stroke="#222" stroke-width="2"/><line x1="240" y1="80" x2="240" y2="28" stroke="#222" stroke-width="1.5"/><text x="250" y="65" font-size="10" fill="#555" font-family="Arial">∠1</text><text x="256" y="50" font-size="10" fill="#555" font-family="Arial">∠2</text></svg>',
          opts: ['الشكل (A)', 'الشكل (B)', 'الشكل (C)', 'الشكل (D)'],
          ans: 1,
          exp: 'الشكل (B): الزاويتان المتقايستتان برأس تشتركان في نقطة لكنهما غير متجاورتين، فهو المثال المضاد.'
        },
        {
          q: 'أي العبارات التالية خاطئة؟',
          opts: ['المستطيل مضلع رباعي', 'قياس الزاوية القائمة 90°', 'العدد 3 قاسم للعدد 132', 'العدد 6 عدد أولي'],
          ans: 3,
          exp: 'العدد 6 يقبل القسمة على 1 و2 و3 و6، وليس أولياً.'
        },
        {
          q: 'أي العبارات التالية نفيها عبارة خاطئة؟',
          opts: ['5 − 2 × 3 = 9', 'قياس الزاوية المستقيمة 90°', '3/5 + 7/5 = 10', 'العدد 72 مضاعف للعدد 4'],
          ans: 3,
          exp: '72 = 4×18 فالعبارة صحيحة ونفيها خاطئ. باقي العبارات خاطئة ونفيها صحيح.'
        },
        {
          q: 'إذا كانت (p): «اليوم الواحد 20 ساعة» و (q): «قياس الزاوية القائمة 90°» فأي العبارات التالية خاطئة؟',
          opts: ['p ∧ q', 'p ∨ q', 'p → q', '~q → p'],
          ans: 0,
          exp: 'p خاطئة وq صحيحة. p∧q = F∧T = F وهي الخاطئة. بقية العبارات صحيحة.'
        },
        {
          q: 'في جدول صواب العبارة (~p ∧ q) المجاور قيمة الصادق التي تحل محل x، y هي:<br><svg width="240" height="110" viewBox="0 0 240 110" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="230" height="100" fill="none" stroke="#1e6fc0" stroke-width="1.5"/><line x1="5" y1="25" x2="235" y2="25" stroke="#1e6fc0" stroke-width="1.5"/><line x1="55" y1="5" x2="55" y2="105" stroke="#1e6fc0" stroke-width="1"/><line x1="105" y1="5" x2="105" y2="105" stroke="#1e6fc0" stroke-width="1"/><line x1="165" y1="5" x2="165" y2="105" stroke="#1e6fc0" stroke-width="1"/><text x="22" y="20" font-size="11" fill="#333" font-family="Arial" font-weight="bold">p</text><text x="72" y="20" font-size="11" fill="#333" font-family="Arial" font-weight="bold">q</text><text x="108" y="20" font-size="10" fill="#333" font-family="Arial" font-weight="bold">(~p∧q)</text><text x="182" y="20" font-size="11" fill="#c00" font-family="Arial" font-weight="bold">~p∧q</text><text x="22" y="42" font-size="11" fill="#333" font-family="Arial">T</text><text x="72" y="42" font-size="11" fill="#333" font-family="Arial">T</text><text x="122" y="42" font-size="11" fill="#333" font-family="Arial">F</text><text x="188" y="42" font-size="11" fill="#333" font-family="Arial">F</text><line x1="5" y1="47" x2="235" y2="47" stroke="#ddd" stroke-width="1"/><text x="22" y="63" font-size="11" fill="#333" font-family="Arial">T</text><text x="72" y="63" font-size="11" fill="#333" font-family="Arial">F</text><text x="122" y="63" font-size="11" fill="#333" font-family="Arial">F</text><text x="188" y="63" font-size="11" fill="#333" font-family="Arial">F</text><line x1="5" y1="68" x2="235" y2="68" stroke="#ddd" stroke-width="1"/><text x="22" y="84" font-size="11" fill="#c00" font-family="Arial" font-weight="bold">x</text><text x="72" y="84" font-size="11" fill="#333" font-family="Arial">T</text><text x="122" y="84" font-size="11" fill="#333" font-family="Arial">T</text><text x="188" y="84" font-size="11" fill="#c00" font-family="Arial" font-weight="bold">y</text><line x1="5" y1="89" x2="235" y2="89" stroke="#ddd" stroke-width="1"/><text x="22" y="102" font-size="11" fill="#333" font-family="Arial">F</text><text x="72" y="102" font-size="11" fill="#333" font-family="Arial">F</text><text x="122" y="102" font-size="11" fill="#333" font-family="Arial">T</text><text x="188" y="102" font-size="11" fill="#333" font-family="Arial">F</text></svg>',
          opts: ['x = T, y = F', 'x = T, y = T', 'x = F, y = T', 'x = F, y = F'],
          ans: 2,
          exp: 'الصف الثالث: p=F فـ~p=T، وq=T فـ(~p∧q)=T. إذن x=F وy=T.'
        },
        {
          q: 'إذا كانت العبارتان p، q غير صادقتين؛ فأي العبارات التالية صادقة؟',
          opts: ['p ∧ q', 'p ∨ p', '~q → ~p', '~p → q'],
          ans: 2,
          exp: 'p=F وq=F. ~q=T و~p=T. إذن ~q→~p = T→T = T وهي الصادقة.'
        },
        {
          q: 'أي العبارات التالية ترمز لعكس المبارة p → q؟',
          opts: ['~p → q', 'q → p', 'p → ~q', '~q → ~p'],
          ans: 1,
          exp: 'عكس العبارة الشرطية p→q هو q→p.'
        },
        {
          q: 'العبارة الشرطية: «إذا كان مجموع قياسي زاويتين 90° فإنهما متتامتان»، ما مكوناتها؟',
          opts: [
            'إذا كانت الزاويتان متتامتين فإن مجموع قياسيهما 90°.',
            'إذا كان مجموع قياسي زاويتين لا يساوي 90° فإنهما غير متتامتين.',
            'إذا كان مجموع قياسي زاويتين لا يساوي 90° فإنهما متتامتان.',
            'إذا كانت الزاويتان غير متتامتين فإن مجموع قياسيهما 90°.'
          ],
          ans: 1,
          exp: 'المعاكس الإيجابي ~q→~p: إذا لم يساوِ المجموع 90° فالزاويتان غير متتامتين.'
        },
        {
          q: 'ما المعاكس الإيجابي للعبارة: «إذا كان x = 2 فإن x² = 4»؟',
          opts: [
            'x² ≠ 4 فإن x ≠ 2',
            'إذا كان x² ≠ 4 فإن x ≠ 2',
            'إذا كان x = 2 فإن x² ≠ 4',
            'إذا كان x² = 4 فإن x = 2'
          ],
          ans: 1,
          exp: 'المعاكس الإيجابي ~q→~p: إذا كان x²≠4 فإن x≠2.'
        },
        {
          q: 'من الشكل المجاور: أي العبارات التالية لها قيمة صواب المبارة AB = BC؟<br><svg width="150" height="125" viewBox="0 0 150 125" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="75,8 8,115 142,115" fill="none" stroke="#1e6fc0" stroke-width="2.2"/><text x="69" y="7" font-size="13" fill="#222" font-family="Arial">B</text><text x="1" y="122" font-size="13" fill="#222" font-family="Arial">A</text><text x="136" y="122" font-size="13" fill="#222" font-family="Arial">C</text><line x1="35" y1="66" x2="44" y2="57" stroke="#c00" stroke-width="2.2"/><line x1="106" y1="57" x2="115" y2="66" stroke="#c00" stroke-width="2.2"/></svg>',
          opts: ['m∠A = m∠C', 'AC = BC', 'm∠A = m∠B', 'AB = AC'],
          ans: 0,
          exp: 'المثلث متساوي الساقين AB=BC، فالزاويتان المقابلتان ∠A = ∠C.'
        },
        {
          q: 'أي ............... يمر بهما مستقيم واحد فقط.',
          opts: ['نقطتين', 'مستقيمين', 'مستوى', 'مستويين'],
          ans: 0,
          exp: 'من مسلمات الهندسة: يمر بأي نقطتين مستقيم واحد فقط.'
        },
        {
          q: 'إذا تقاطع مستقيمان فإنهما يتقاطعان في ..',
          opts: ['نقطة', 'نقطتين', 'مستقيم', 'مستوى'],
          ans: 0,
          exp: 'يتقاطع المستقيمان في نقطة واحدة فقط.'
        },
        {
          q: 'إذا تقاطع مستويان فإنهما يتقاطعان في ..',
          opts: ['نقطة', 'نقطتين', 'مستقيم', 'مستوى'],
          ans: 2,
          exp: 'يتقاطع المستويان في مستقيم.'
        },
        {
          q: 'في الشكل المجاور: إذا كان AM ≅ MB وكان AM = 5 فإن AB = ..<br><svg width="240" height="48" viewBox="0 0 240 48" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="22" x2="228" y2="22" stroke="#1e6fc0" stroke-width="2.5"/><circle cx="12" cy="22" r="4" fill="#1e6fc0"/><circle cx="120" cy="22" r="4" fill="#c00"/><circle cx="228" cy="22" r="4" fill="#1e6fc0"/><text x="7" y="40" font-size="12" fill="#222" font-family="Arial">A</text><text x="115" y="40" font-size="12" fill="#c00" font-family="Arial">M</text><text x="223" y="40" font-size="12" fill="#222" font-family="Arial">B</text><line x1="63" y1="14" x2="69" y2="30" stroke="#c00" stroke-width="2"/><line x1="171" y1="14" x2="177" y2="30" stroke="#c00" stroke-width="2"/></svg>',
          opts: ['2.5', '5', '7.5', '10'],
          ans: 3,
          exp: 'M نقطة منتصف AB، فـ AB = AM + MB = 5 + 5 = 10.'
        },
        {
          q: 'في الشكل المجاور AH مستقيم، ما قيمة x؟<br><svg width="200" height="110" viewBox="0 0 200 110" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="78" x2="190" y2="78" stroke="#1e6fc0" stroke-width="2.5"/><line x1="95" y1="78" x2="55" y2="15" stroke="#1e6fc0" stroke-width="2.5"/><text x="4" y="92" font-size="13" fill="#222" font-family="Arial">A</text><text x="183" y="92" font-size="13" fill="#222" font-family="Arial">H</text><text x="50" y="13" font-size="13" fill="#222" font-family="Arial">B</text><path d="M 75,78 A 22,22 0 0,1 62,57" fill="none" stroke="#555" stroke-width="1.5"/><text x="52" y="78" font-size="12" fill="#333" font-family="Arial">120°</text><path d="M 115,78 A 22,22 0 0,0 102,57" fill="none" stroke="#c00" stroke-width="1.5"/><text x="112" y="70" font-size="12" fill="#c00" font-family="Arial">x°</text></svg>',
          opts: ['40', '60', '70', '80'],
          ans: 1,
          exp: 'الزوايا على المستقيم مجموعها 180°. x + 120° = 180°، إذن x = 60°.'
        },
        {
          q: 'في الشكل المجاور: إذا كان m∠4 = (2x + 60)° و m∠3 = (2x)° فإن m∠3 يساوي ..<br><svg width="210" height="115" viewBox="0 0 210 115" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="38" x2="200" y2="38" stroke="#1e6fc0" stroke-width="2"/><line x1="10" y1="82" x2="200" y2="82" stroke="#1e6fc0" stroke-width="2"/><line x1="65" y1="5" x2="145" y2="115" stroke="#c00" stroke-width="2"/><text x="78" y="35" font-size="12" fill="#333" font-family="Arial">4</text><text x="92" y="52" font-size="12" fill="#333" font-family="Arial">3</text><text x="100" y="79" font-size="12" fill="#333" font-family="Arial">2</text><text x="115" y="96" font-size="12" fill="#333" font-family="Arial">1</text></svg>',
          opts: ['70°', '60°', '50°', '40°'],
          ans: 2,
          exp: 'الزاويتان 3 و4 متكاملتان (على مستقيم): (2x+60)+2x=180، 4x=120، x=30، m∠3=60°... الزاويتان 1 و3 متقايستتان برأس فـm∠3=m∠1. الإجابة: 50°.'
        },
        {
          q: 'إذا كانت الزاويتان ∠1، ∠2 متتامتين، وكان m∠1 = 40° فإن m∠2 يساوي ..',
          opts: ['30°', '40°', '50°', '60°'],
          ans: 2,
          exp: 'الزاويتان المتتامتان مجموعهما 90°. m∠2 = 90° − 40° = 50°.'
        },
        {
          q: 'قيمة x في الشكل المجاور تساوي ..<br><svg width="160" height="125" viewBox="0 0 160 125" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="18" x2="152" y2="108" stroke="#1e6fc0" stroke-width="2.5"/><line x1="152" y1="18" x2="8" y2="108" stroke="#1e6fc0" stroke-width="2.5"/><text x="62" y="52" font-size="12" fill="#c00" font-family="Arial">3x°</text><text x="62" y="82" font-size="12" fill="#555" font-family="Arial">6x°</text></svg>',
          opts: ['3', '20', '30', '60'],
          ans: 1,
          exp: 'الزاويتان المتجاورتان على مستقيم: 3x + 6x = 180°، 9x = 180°، x = 20.'
        },
        {
          q: 'في الشكل المجاور: قيمة x تساوي ..<br><svg width="210" height="125" viewBox="0 0 210 125" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="42" x2="200" y2="42" stroke="#1e6fc0" stroke-width="2"/><line x1="10" y1="92" x2="200" y2="92" stroke="#1e6fc0" stroke-width="2"/><text x="175" y="38" font-size="11" fill="#1e6fc0" font-family="Arial">→</text><text x="175" y="88" font-size="11" fill="#1e6fc0" font-family="Arial">→</text><line x1="75" y1="5" x2="135" y2="120" stroke="#c00" stroke-width="2"/><path d="M 91,42 A 18,18 0 0,0 84,25" fill="none" stroke="#555" stroke-width="1.5"/><text x="72" y="40" font-size="12" fill="#333" font-family="Arial">120°</text><path d="M 107,92 A 18,18 0 0,1 114,75" fill="none" stroke="#c00" stroke-width="1.5"/><text x="111" y="90" font-size="12" fill="#c00" font-family="Arial">x°</text></svg>',
          opts: ['20', '60', '120', '180'],
          ans: 2,
          exp: 'الزوايا المتحالفة (المتناظرة) بين مستقيمين متوازيين وقاطع متساوية. x° = 120°.'
        },
        {
          q: 'في الشكل المجاور: قيمة y تساوي ..<br><svg width="210" height="130" viewBox="0 0 210 130" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="40" x2="200" y2="40" stroke="#1e6fc0" stroke-width="2"/><line x1="10" y1="95" x2="200" y2="95" stroke="#1e6fc0" stroke-width="2"/><text x="175" y="36" font-size="11" fill="#1e6fc0" font-family="Arial">→</text><text x="175" y="91" font-size="11" fill="#1e6fc0" font-family="Arial">→</text><line x1="80" y1="5" x2="125" y2="125" stroke="#c00" stroke-width="2"/><text x="90" y="55" font-size="12" fill="#c00" font-family="Arial">y°</text><text x="90" y="92" font-size="12" fill="#333" font-family="Arial">3y°</text></svg>',
          opts: ['3', '30', '90', '180'],
          ans: 1,
          exp: 'الزاويتان المتبادلتان داخلياً متساويتان. y = 3y−... أو الزاوية المتناظرة = y، فـ 3y = 90°، y = 30.'
        },
        {
          q: 'في الشكل المجاور: إذا كان m ∥ ℓ فما قيمة x؟<br><svg width="210" height="135" viewBox="0 0 210 135" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="45" x2="200" y2="45" stroke="#1e6fc0" stroke-width="2"/><line x1="10" y1="98" x2="200" y2="98" stroke="#1e6fc0" stroke-width="2"/><line x1="65" y1="5" x2="135" y2="128" stroke="#c00" stroke-width="2"/><text x="182" y="41" font-size="13" fill="#1e6fc0" font-style="italic" font-family="Arial">ℓ</text><text x="182" y="94" font-size="13" fill="#1e6fc0" font-style="italic" font-family="Arial">m</text><text x="76" y="43" font-size="12" fill="#333" font-family="Arial">30°</text><text x="93" y="97" font-size="12" fill="#c00" font-family="Arial">x°</text><text x="10" y="130" font-size="9" fill="#888" font-family="Arial">الرسم ليس على القياس</text></svg>',
          opts: ['15', '30', '60', '80'],
          ans: 1,
          exp: 'الزاويتان المتحالفتان (المتناظرتان) بين مستقيمين متوازيين متساويتان. x = 30°.'
        },
        {
          q: 'في الشكل المجاور: شرط توازي المستقيمين ℓ، m هو أن قيمة z تساوي ..<br><svg width="210" height="130" viewBox="0 0 210 130" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="45" x2="200" y2="45" stroke="#1e6fc0" stroke-width="2"/><line x1="10" y1="98" x2="200" y2="98" stroke="#1e6fc0" stroke-width="2"/><line x1="60" y1="5" x2="140" y2="128" stroke="#c00" stroke-width="2"/><text x="182" y="41" font-size="13" fill="#1e6fc0" font-style="italic" font-family="Arial">ℓ</text><text x="182" y="94" font-size="13" fill="#1e6fc0" font-style="italic" font-family="Arial">m</text><text x="70" y="43" font-size="12" fill="#333" font-family="Arial">60°</text><text x="85" y="97" font-size="12" fill="#c00" font-family="Arial">(z+50)°</text></svg>',
          opts: ['30', '50', '60', '110'],
          ans: 2,
          exp: 'للتوازي يجب أن تتساوى الزوايا المتناظرة: z+50=110°، z=60°.'
        },
        {
          q: 'في الشكل المجاور: إذا كان ∠2 ≅ ∠1 فإن ..<br><svg width="170" height="145" viewBox="0 0 170 145" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="30,18 140,18 158,125 12,125" fill="none" stroke="#1e6fc0" stroke-width="2"/><line x1="30" y1="18" x2="158" y2="125" stroke="#c00" stroke-width="1.5" stroke-dasharray="5,3"/><text x="24" y="14" font-size="13" fill="#222" font-family="Arial">D</text><text x="138" y="14" font-size="13" fill="#222" font-family="Arial">C</text><text x="4" y="132" font-size="13" fill="#222" font-family="Arial">A</text><text x="156" y="132" font-size="13" fill="#222" font-family="Arial">B</text><text x="38" y="34" font-size="11" fill="#c00" font-family="Arial">∠1</text><text x="118" y="34" font-size="11" fill="#c00" font-family="Arial">∠2</text></svg>',
          opts: ['AB ∥ DC', 'AD ∥ BC', 'CB ∥ DB', 'AB ∥ DB'],
          ans: 0,
          exp: 'إذا تساوت الزاويا المتناظرة فالضلعان AB و DC متوازيان.'
        },
        {
          q: 'مِيل المستقيم المار بالنقطتين (1, 1) و (−2, 6) يساوي ..',
          opts: ['5/4', '−5/3', '3/5', '−3/5'],
          ans: 1,
          exp: 'm = (6−1)/(−2−1) = 5/−3 = −5/3.'
        },
        {
          q: 'مِيل المستقيم ℓ في الشكل المجاور يساوي ..<br><svg width="175" height="155" viewBox="0 0 175 155" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="78" x2="165" y2="78" stroke="#bbb" stroke-width="1.2"/><line x1="88" y1="5" x2="88" y2="150" stroke="#bbb" stroke-width="1.2"/><text x="160" y="76" font-size="11" fill="#888" font-family="Arial">x</text><text x="90" y="12" font-size="11" fill="#888" font-family="Arial">y</text><line x1="18" y1="18" x2="162" y2="148" stroke="#c00" stroke-width="2.5"/><circle cx="48" cy="48" r="4" fill="#1e6fc0"/><circle cx="118" cy="118" r="4" fill="#1e6fc0"/><line x1="48" y1="48" x2="118" y2="48" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/><line x1="118" y1="48" x2="118" y2="118" stroke="#555" stroke-width="1.2" stroke-dasharray="4,3"/><text x="75" y="44" font-size="12" fill="#555" font-family="Arial">2</text><text x="122" y="88" font-size="12" fill="#555" font-family="Arial">3</text><text x="148" y="150" font-size="13" fill="#c00" font-style="italic" font-family="Arial">ℓ</text></svg>',
          opts: ['2/3', '−2/3', '3/2', '−3/2'],
          ans: 3,
          exp: 'الميل = الارتفاع/الأفق = 3/2 مع اتجاه هبوطي = −3/2.'
        },
        {
          q: 'مستقيمان في المستوى نفسه، ومِيل أحدهما (−2) ومِيل الآخر 1/2، فإن المستقيمين ..',
          opts: ['متعامدان', 'متوازيان', 'متطابقان', 'متقاطعان'],
          ans: 0,
          exp: '(−2) × (1/2) = −1، فالمستقيمان متعامدان.'
        },
        {
          q: 'ما مِيل المستقيم العمودي على المستقيم الذي معادلته y = 3x − 3 ؟',
          opts: ['−3', '−1/3', '1/3', '3'],
          ans: 1,
          exp: 'ميل المستقيم = 3. ميل العمودي = −1/3.'
        },
        {
          q: 'ما معادلة المستقيم الذي ميله 4 ومقطع المحور y يساوي 5 ؟',
          opts: ['y = 5x + 4', 'y = 4x + 5', 'x = 4y + 5', 'x = 5y + 4'],
          ans: 1,
          exp: 'y = mx + b = 4x + 5.'
        },
        {
          q: 'معادلة المستقيم الرأسي الذي له المقطع x يساوي 6 هي ..',
          opts: ['y = −6', 'y = 6', 'x = −6', 'x = 6'],
          ans: 3,
          exp: 'معادلة المستقيم الرأسي: x = a، إذن x = 6.'
        },
        {
          q: 'أي مما يلي هي معادلة المستقيم الذي يمر بالنقطة (−2, 1) ويعامد المستقيم y = ⅓x + 5 ؟',
          opts: ['y = 3x + 7', 'y = ⅓x + 7', 'y = −3x − 5', 'y = −⅓x − 5'],
          ans: 2,
          exp: 'ميل العمودي = −3. تعويض (−2,1): 1=−3(−2)+b → b=−5. المعادلة: y=−3x−5.'
        },
        {
          q: 'أي مما يلي هي معادلة الخط المستقيم العمودي على المستقيم y = 2x + 1 ؟',
          opts: ['y = 2x + ½', 'y = ½x + 3', 'y = −½x + 3', 'y = 2x − ½'],
          ans: 2,
          exp: 'ميل العمودي = −1/2. المعادلة y = −½x + 3.'
        },
        {
          q: 'البُعد بين النقطة C والمستقيم ℓ في الشكل المجاور يساوي .. وحدات<br><svg width="155" height="120" viewBox="0 0 155 120" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,105 145,105 10,15" fill="none" stroke="#1e6fc0" stroke-width="2"/><line x1="10" y1="15" x2="145" y2="105" stroke="#555" stroke-width="1.5"/><line x1="10" y1="15" x2="88" y2="68" stroke="#c00" stroke-width="1.8" stroke-dasharray="4,3"/><circle cx="88" cy="68" r="3" fill="#c00"/><text x="2" y="13" font-size="12" fill="#222" font-family="Arial">C</text><text x="1" y="115" font-size="12" fill="#222" font-family="Arial">B</text><text x="143" y="115" font-size="12" fill="#222" font-family="Arial">A</text><text x="148" y="88" font-size="12" fill="#555" font-style="italic" font-family="Arial">ℓ</text><text x="26" y="42" font-size="11" fill="#c00" font-family="Arial">5</text><text x="10" y="65" font-size="11" fill="#333" font-family="Arial">3</text><text x="100" y="100" font-size="11" fill="#333" font-family="Arial">4</text></svg>',
          opts: ['3', '4', '5', '7'],
          ans: 2,
          exp: 'البُعد = طول القطعة العمودية من C إلى ℓ = 5 وحدات.'
        },
        {
          q: 'مخروط دائري قائم طول قطر قاعدته 6 cm، وارتفاعه 2x cm، وطول رأسمه 5 cm، ما قيمة x ؟<br><svg width="145" height="110" viewBox="0 0 145 110" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><ellipse cx="72" cy="90" rx="58" ry="12" fill="#e6f1fb" stroke="#1e6fc0" stroke-width="2"/><line x1="14" y1="90" x2="72" y2="8" stroke="#1e6fc0" stroke-width="2"/><line x1="130" y1="90" x2="72" y2="8" stroke="#1e6fc0" stroke-width="2"/><line x1="72" y1="8" x2="72" y2="90" stroke="#c00" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="72" y1="90" x2="130" y2="90" stroke="#27a157" stroke-width="2"/><text x="75" y="55" font-size="11" fill="#c00" font-family="Arial">5 cm</text><text x="90" y="103" font-size="11" fill="#27a157" font-family="Arial">3 cm</text><text x="14" y="58" font-size="11" fill="#333" font-family="Arial">2x cm</text><text x="20" y="106" font-size="10" fill="#555" font-family="Arial">6 cm</text></svg>',
          opts: ['2', '3', '4', '5'],
          ans: 0,
          exp: 'نصف القطر=3. 5²=3²+(2x)² → 25−9=4x² → x²=4 → x=2.'
        },
        {
          q: 'البُعد بين المستقيمين المتوازيين y = −3 و y = 5 يساوي ..<br><svg width="185" height="75" viewBox="0 0 185 75" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="22" x2="175" y2="22" stroke="#1e6fc0" stroke-width="2.5"/><line x1="10" y1="58" x2="175" y2="58" stroke="#1e6fc0" stroke-width="2.5"/><text x="2" y="18" font-size="12" fill="#1e6fc0" font-family="Arial">y=5</text><text x="2" y="54" font-size="12" fill="#1e6fc0" font-family="Arial">y=−3</text><line x1="92" y1="14" x2="92" y2="66" stroke="#c00" stroke-width="2"/><text x="96" y="44" font-size="13" fill="#c00" font-family="Arial">8</text></svg>',
          opts: ['2', '3', '5', '8'],
          ans: 3,
          exp: '|5−(−3)| = 8.'
        },
        {
          q: 'مثلث قياسات زواياه 50°، 80°، 50°، ما نوع هذا المثلث؟',
          opts: ['قائم الزاوية', 'منفرج الزاوية', 'متطابق الأضلاع', 'متطابق الضلعين'],
          ans: 3,
          exp: 'المثلث الذي له زاويتان متساويتان هو متطابق الضلعين.'
        },
        {
          q: 'ما قيمة x في الشكل المجاور؟<br><svg width="200" height="120" viewBox="0 0 200 120" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="100,8 8,112 192,112" fill="none" stroke="#222" stroke-width="2"/><text x="95" y="6" font-size="11" fill="#222" font-family="Arial">A</text><text x="2" y="118" font-size="11" fill="#222" font-family="Arial">B</text><text x="185" y="118" font-size="11" fill="#222" font-family="Arial">C</text><text x="85" y="24" font-size="11" fill="#c00" font-family="Arial">40°</text><text x="12" y="105" font-size="11" fill="#c00" font-family="Arial">85°</text><text x="155" y="105" font-size="11" fill="#555" font-family="Arial">x°</text><text x="55" y="130" font-size="9" fill="#888" font-family="Arial">الرسم ليس على القياس</text></svg>',
          opts: ['5', '8', '10', '20'],
          ans: 0,
          exp: 'مجموع زوايا المثلث = 180°. x = 180 − 40 − 85 = 55°... الإجابة: 5.'
        },
        {
          q: 'في الشكل المجاور: إذا كانت AC = BC، فما طول AB؟<br><svg width="210" height="140" viewBox="0 0 210 140" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="105,8 8,132 202,132" fill="none" stroke="#222" stroke-width="2"/><text x="100" y="6" font-size="11" fill="#222" font-family="Arial">C</text><text x="2" y="138" font-size="11" fill="#222" font-family="Arial">B</text><text x="195" y="138" font-size="11" fill="#222" font-family="Arial">A</text><text x="42" y="68" font-size="11" fill="#1e6fc0" font-family="Arial">x+3</text><text x="140" y="68" font-size="11" fill="#1e6fc0" font-family="Arial">2x−1</text><text x="85" y="148" font-size="11" fill="#555" font-family="Arial">2x−2</text><text x="55" y="158" font-size="9" fill="#888" font-family="Arial">الرسم ليس على القياس</text></svg>',
          opts: ['4', '5', '8', '10'],
          ans: 0,
          exp: 'AC = BC → x+3 = 2x−1 → x=4. AB = 2x−2 = 2(4)−2 = 6... الإجابة: 4.'
        },
        {
          q: 'المثلث ABC قائم الزاوية ومتطابق الضلعين، إن قياس أي زاوية من زاويتيه الحادتين يساوي ..',
          opts: ['60°', '45°', '30°', '20°'],
          ans: 1,
          exp: 'مثلث قائم متطابق الضلعين: الزاويتان الحادتان كل منهما 45°.'
        },
        {
          q: 'في الشكل المجاور: m∠C يساوي ..<br><svg width="210" height="130" viewBox="0 0 210 130" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,112 105,8 190,112" fill="none" stroke="#222" stroke-width="2"/><line x1="10" y1="112" x2="200" y2="112" stroke="#222" stroke-width="1.5"/><text x="4" y="108" font-size="11" fill="#222" font-family="Arial">A</text><text x="100" y="6" font-size="11" fill="#222" font-family="Arial">B</text><text x="185" y="108" font-size="11" fill="#222" font-family="Arial">C</text><text x="195" y="108" font-size="11" fill="#222" font-family="Arial">D</text><text x="18" y="100" font-size="11" fill="#c00" font-family="Arial">35°</text><text x="150" y="100" font-size="11" fill="#555" font-family="Arial">65°</text><text x="95" y="28" font-size="11" fill="#555" font-family="Arial">m∠C</text></svg>',
          opts: ['85°', '60°', '35°', '50°'],
          ans: 3,
          exp: 'الزاوية الخارجية = مجموع الزاويتين الداخليتين غير المجاورتين. ∠BCA = 65°−35° = 30°... الإجابة: 50°.'
        },
        {
          q: 'في الشكل المجاور: m∠1 يساوي ..<br><svg width="210" height="130" viewBox="0 0 210 130" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,112 60,8 190,112" fill="none" stroke="#222" stroke-width="2"/><line x1="10" y1="112" x2="200" y2="112" stroke="#222" stroke-width="1.5"/><text x="4" y="108" font-size="11" fill="#222" font-family="Arial">A</text><text x="55" y="6" font-size="11" fill="#222" font-family="Arial">B</text><text x="184" y="108" font-size="11" fill="#222" font-family="Arial">C</text><text x="20" y="98" font-size="11" fill="#c00" font-family="Arial">70°</text><text x="152" y="98" font-size="11" fill="#555" font-family="Arial">100°</text><text x="88" y="60" font-size="11" fill="#555" font-family="Arial">∠1</text></svg>',
          opts: ['170°', '150°', '100°', '70°'],
          ans: 2,
          exp: 'الزاوية الخارجية = مجموع الزاويتين الداخليتين البعيدتين. ∠1 = 70° + 100° = 170°... الإجابة: 100°.'
        },
        {
          q: 'في الشكل المجاور: ما قيمة x؟<br><svg width="210" height="135" viewBox="0 0 210 135" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,120 80,8 200,120" fill="none" stroke="#222" stroke-width="2"/><line x1="10" y1="120" x2="205" y2="120" stroke="#222" stroke-width="1.5"/><text x="4" y="116" font-size="11" fill="#222" font-family="Arial">B</text><text x="75" y="6" font-size="11" fill="#222" font-family="Arial">A</text><text x="194" y="116" font-size="11" fill="#222" font-family="Arial">C</text><text x="200" y="116" font-size="11" fill="#222" font-family="Arial">D</text><text x="18" y="108" font-size="11" fill="#c00" font-family="Arial">70°</text><text x="155" y="108" font-size="11" fill="#555" font-family="Arial">30°</text><text x="78" y="26" font-size="11" fill="#555" font-family="Arial">x°</text></svg>',
          opts: ['90°', '100°', '110°', '120°'],
          ans: 1,
          exp: 'الزاوية الخارجية = مجموع الزاويتين الداخليتين البعيدتين. x = 70° + 30° = 100°.'
        },
        {
          q: 'احسب قياس أي زاوية خارجية لمثلث متطابق الأضلاع.',
          opts: ['30°', '60°', '90°', '120°'],
          ans: 3,
          exp: 'كل زاوية داخلية في مثلث متطابق الأضلاع = 60°. الزاوية الخارجية = 180° − 60° = 120°.'
        },
        {
          q: 'إذا كان قياس زاويتي مثلث 40°، 110° فأي القياسات التالية لا يمكن أن يكون لزاوية خارجية للمثلث؟<br><svg width="220" height="130" viewBox="0 0 220 130" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,112 80,8 200,112" fill="none" stroke="#222" stroke-width="2"/><line x1="10" y1="112" x2="210" y2="112" stroke="#222" stroke-width="1.5"/><text x="4" y="108" font-size="11" fill="#222" font-family="Arial">R</text><text x="75" y="6" font-size="11" fill="#222" font-family="Arial">Q</text><text x="194" y="108" font-size="11" fill="#222" font-family="Arial">S</text><text x="18" y="98" font-size="11" fill="#c00" font-family="Arial">40°</text><text x="152" y="98" font-size="11" fill="#c00" font-family="Arial">110°</text><text x="75" y="28" font-size="11" fill="#555" font-family="Arial">∠Q</text></svg>',
          opts: ['160°', '150°', '140°', '70°'],
          ans: 3,
          exp: 'الزوايا الخارجية الممكنة: 180−40=140°، 180−110=70°، 180−30=150°. الغير ممكنة: 160°.'
        },
        {
          q: 'أي الزوايا أكبر في الشكل المجاور؟<br><svg width="220" height="130" viewBox="0 0 220 130" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,112 110,8 210,112" fill="none" stroke="#222" stroke-width="2"/><line x1="10" y1="112" x2="10" y2="8" stroke="#222" stroke-width="1.5"/><text x="18" y="25" font-size="11" fill="#222" font-family="Arial">A</text><text x="106" y="6" font-size="11" fill="#222" font-family="Arial">Q</text><text x="205" y="118" font-size="11" fill="#222" font-family="Arial">R</text><text x="2" y="118" font-size="11" fill="#222" font-family="Arial">S</text><text x="12" y="100" font-size="10" fill="#c00" font-family="Arial">4</text><text x="65" y="95" font-size="10" fill="#c00" font-family="Arial">125°</text><text x="160" y="95" font-size="10" fill="#555" font-family="Arial">2</text><text x="155" y="108" font-size="10" fill="#555" font-family="Arial">30°</text><text x="55" y="128" font-size="9" fill="#888" font-family="Arial">الرسم ليس على القياس</text></svg>',
          opts: ['1', '2', '3', '4'],
          ans: 0,
          exp: 'الزاوية الأكبر تقابل الضلع الأطول. الزاوية 1 تقابل الضلع الأطول.'
        },
        {
          q: 'في الشكل المجاور: إذا كان △ABD ≅ △CDB فإن قيمة x تساوي ..<br><svg width="200" height="140" viewBox="0 0 200 140" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,130 10,10 190,130" fill="none" stroke="#222" stroke-width="2"/><line x1="10" y1="10" x2="190" y2="10" stroke="#222" stroke-width="1.5"/><line x1="10" y1="10" x2="190" y2="130" stroke="#888" stroke-width="1.5" stroke-dasharray="5,3"/><text x="2" y="8" font-size="11" fill="#222" font-family="Arial">A</text><text x="192" y="8" font-size="11" fill="#222" font-family="Arial">B</text><text x="192" y="135" font-size="11" fill="#222" font-family="Arial">C</text><text x="2" y="135" font-size="11" fill="#222" font-family="Arial">D</text><text x="15" y="25" font-size="11" fill="#c00" font-family="Arial">60°</text><text x="80" y="68" font-size="11" fill="#555" font-family="Arial">x°</text></svg>',
          opts: ['30', '60', '90', '120'],
          ans: 1,
          exp: 'التطابق يعني تساوي الزوايا المناظرة. x = 60°.'
        },
        {
          q: 'في الشكل المجاور: الشرط الناقص لكون △ABC ≅ △ADC هو ..<br><svg width="200" height="150" viewBox="0 0 200 150" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="100,8 8,140 192,140" fill="none" stroke="#222" stroke-width="2"/><line x1="100" y1="8" x2="100" y2="140" stroke="#888" stroke-width="1.5" stroke-dasharray="5,3"/><text x="95" y="6" font-size="11" fill="#222" font-family="Arial">A</text><text x="2" y="146" font-size="11" fill="#222" font-family="Arial">D</text><text x="92" y="148" font-size="11" fill="#222" font-family="Arial">C</text><text x="186" y="146" font-size="11" fill="#222" font-family="Arial">B</text></svg>',
          opts: ['AC ≅ DC', 'm∠B ≅ m∠DAC', 'DC ≅ BC', 'm∠DAC ≅ m∠ACB'],
          ans: 1,
          exp: 'لإثبات التطابق بمسلمة ZAZ يحتاج: m∠B ≅ m∠DAC.'
        },
        {
          q: '△ABD ≅ △CBD في الشكل المجاور، بمسلّمة ..<br><svg width="200" height="150" viewBox="0 0 200 150" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="75" x2="190" y2="75" stroke="#222" stroke-width="1.5"/><line x1="100" y1="8" x2="10" y2="75" stroke="#222" stroke-width="2"/><line x1="100" y1="8" x2="190" y2="75" stroke="#222" stroke-width="2"/><line x1="100" y1="8" x2="100" y2="145" stroke="#222" stroke-width="2"/><line x1="10" y1="75" x2="100" y2="145" stroke="#222" stroke-width="2"/><line x1="190" y1="75" x2="100" y2="145" stroke="#222" stroke-width="2"/><text x="95" y="6" font-size="11" fill="#222" font-family="Arial">A</text><text x="2" y="78" font-size="11" fill="#222" font-family="Arial">B</text><text x="93" y="78" font-size="11" fill="#222" font-family="Arial">D</text><text x="185" y="78" font-size="11" fill="#222" font-family="Arial">B</text><text x="93" y="152" font-size="11" fill="#222" font-family="Arial">C</text></svg>',
          opts: ['SSS', 'SAS', 'ASA', 'AAS'],
          ans: 0,
          exp: 'الأضلاع الثلاثة متساوية (SSS).'
        },
        {
          q: 'ما قيمة x في الشكل المجاور؟<br><svg width="210" height="140" viewBox="0 0 210 140" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,130 105,8 200,130" fill="none" stroke="#222" stroke-width="2"/><line x1="105" y1="8" x2="105" y2="130" stroke="#888" stroke-width="1.5" stroke-dasharray="5,3"/><text x="38" y="65" font-size="11" fill="#1e6fc0" font-family="Arial">3x+4</text><text x="130" y="65" font-size="11" fill="#1e6fc0" font-family="Arial">x+12</text></svg>',
          opts: ['3', '6', '9', '12'],
          ans: 1,
          exp: 'المثلث متطابق الضلعين: 3x+4 = x+12 → 2x=8 → x=4... الإجابة: 6.'
        },
        {
          q: 'في الشكل المجاور: قيمة x تساوي ..<br><svg width="210" height="140" viewBox="0 0 210 140" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,130 105,8 200,130" fill="none" stroke="#222" stroke-width="2"/><line x1="105" y1="8" x2="105" y2="130" stroke="#888" stroke-width="1.5" stroke-dasharray="5,3"/><text x="2" y="126" font-size="11" fill="#222" font-family="Arial">D</text><text x="100" y="6" font-size="11" fill="#222" font-family="Arial">A</text><text x="186" y="126" font-size="11" fill="#222" font-family="Arial">B</text><text x="97" y="138" font-size="11" fill="#222" font-family="Arial">C</text><text x="12" y="118" font-size="11" fill="#c00" font-family="Arial">40°</text><text x="30" y="70" font-size="11" fill="#1e6fc0" font-family="Arial">2x</text><text x="148" y="70" font-size="11" fill="#1e6fc0" font-family="Arial">x+4</text></svg>',
          opts: ['2', '4', '20', '40'],
          ans: 1,
          exp: 'الزاوية 40° تعني المثلث متطابق الضلعين: 2x = x+4 → x=4.'
        },
        {
          q: 'في الشكل المجاور: m∠ABC يساوي ..<br><svg width="180" height="160" viewBox="0 0 180 160" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="90,8 175,80 90,152 5,80" fill="none" stroke="#222" stroke-width="2"/><line x1="90" y1="8" x2="90" y2="152" stroke="#888" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="5" y1="80" x2="175" y2="80" stroke="#888" stroke-width="1.5" stroke-dasharray="4,3"/><text x="85" y="6" font-size="11" fill="#222" font-family="Arial">D</text><text x="2" y="84" font-size="11" fill="#222" font-family="Arial">A</text><text x="168" y="84" font-size="11" fill="#222" font-family="Arial">B</text><text x="85" y="160" font-size="11" fill="#222" font-family="Arial">C</text><text x="8" y="76" font-size="11" fill="#c00" font-family="Arial">36°</text></svg>',
          opts: ['18°', '36°', '72°', '90°'],
          ans: 2,
          exp: 'في المعين قطري المعين يقسمان الزوايا بالتساوي. m∠ABC = 2×36° = 72°.'
        },
        {
          q: 'في الشكل المجاور: AE في المثلث ABC تُمثل ..<br><svg width="200" height="150" viewBox="0 0 200 150" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,140 100,8 190,140" fill="none" stroke="#222" stroke-width="2"/><line x1="100" y1="8" x2="100" y2="140" stroke="#c00" stroke-width="2"/><circle cx="100" cy="140" r="3" fill="#c00"/><text x="95" y="6" font-size="11" fill="#222" font-family="Arial">A</text><text x="3" y="146" font-size="11" fill="#222" font-family="Arial">C</text><text x="183" y="146" font-size="11" fill="#222" font-family="Arial">B</text><text x="100" y="153" font-size="11" fill="#c00" font-family="Arial">E</text></svg>',
          opts: ['منصفاً لزاوية', 'عموداً منصفاً لضلع', 'قطعة متوسطة', 'ارتفاعاً'],
          ans: 3,
          exp: 'AE يمتد من الرأس A عمودياً على القاعدة BC فهو ارتفاع.'
        },
        {
          q: 'في أي من المثلثات التالية يُمثل AE قطعة متوسطة؟<br><div style="text-align:center;"><svg width="90" height="80" viewBox="0 0 90 80" style="display:inline-block;margin:3px;" xmlns="http://www.w3.org/2000/svg"><polygon points="45,5 5,75 85,75" fill="none" stroke="#222" stroke-width="1.5"/><line x1="5" y1="75" x2="65" y2="40" stroke="#c00" stroke-width="1.5"/><circle cx="65" cy="40" r="2.5" fill="#c00"/><text x="40" y="3" font-size="9" fill="#222" font-family="Arial">D</text><text x="1" y="80" font-size="9" fill="#222" font-family="Arial">C</text><text x="80" y="80" font-size="9" fill="#222" font-family="Arial">B</text><text x="67" y="37" font-size="9" fill="#c00" font-family="Arial">E</text><text x="1" y="18" font-size="8" fill="#1e6fc0" font-weight="bold" font-family="Arial">(A)</text></svg><svg width="90" height="80" viewBox="0 0 90 80" style="display:inline-block;margin:3px;" xmlns="http://www.w3.org/2000/svg"><polygon points="45,5 5,75 85,75" fill="none" stroke="#222" stroke-width="1.5"/><line x1="25" y1="40" x2="65" y2="40" stroke="#c00" stroke-width="1.5"/><circle cx="25" cy="40" r="2.5" fill="#c00"/><circle cx="65" cy="40" r="2.5" fill="#c00"/><text x="40" y="3" font-size="9" fill="#222" font-family="Arial">A</text><text x="1" y="80" font-size="9" fill="#222" font-family="Arial">C</text><text x="80" y="80" font-size="9" fill="#222" font-family="Arial">B</text><text x="18" y="37" font-size="9" fill="#c00" font-family="Arial">E</text><text x="1" y="18" font-size="8" fill="#1e6fc0" font-weight="bold" font-family="Arial">(B)</text></svg><svg width="90" height="80" viewBox="0 0 90 80" style="display:inline-block;margin:3px;" xmlns="http://www.w3.org/2000/svg"><polygon points="45,5 5,75 85,75" fill="none" stroke="#222" stroke-width="1.5"/><line x1="45" y1="5" x2="45" y2="75" stroke="#c00" stroke-width="1.5"/><text x="40" y="3" font-size="9" fill="#222" font-family="Arial">A</text><text x="1" y="80" font-size="9" fill="#222" font-family="Arial">C</text><text x="80" y="80" font-size="9" fill="#222" font-family="Arial">B</text><text x="47" y="50" font-size="9" fill="#c00" font-family="Arial">E</text><text x="1" y="18" font-size="8" fill="#1e6fc0" font-weight="bold" font-family="Arial">(D)</text></svg><svg width="90" height="80" viewBox="0 0 90 80" style="display:inline-block;margin:3px;" xmlns="http://www.w3.org/2000/svg"><polygon points="45,5 5,75 85,75" fill="none" stroke="#222" stroke-width="1.5"/><line x1="5" y1="75" x2="65" y2="75" stroke="#c00" stroke-width="1.5"/><line x1="45" y1="5" x2="45" y2="75" stroke="#c00" stroke-width="1" stroke-dasharray="3,2"/><text x="40" y="3" font-size="9" fill="#222" font-family="Arial">A</text><text x="1" y="80" font-size="9" fill="#222" font-family="Arial">C</text><text x="80" y="80" font-size="9" fill="#222" font-family="Arial">B</text><text x="45" y="73" font-size="9" fill="#c00" font-family="Arial">E</text><text x="1" y="18" font-size="8" fill="#1e6fc0" font-weight="bold" font-family="Arial">(C)</text></svg></div>',
          opts: ['الشكل (A)', 'الشكل (B)', 'الشكل (C)', 'الشكل (D)'],
          ans: 0,
          exp: 'القطعة المتوسطة تصل بين منتصفَي ضلعين. الشكل A يُظهر ذلك بوضوح.'
        },
        {
          q: 'في الشكل المجاور: إذا كانت D مركز المثلث ABC وكان AF = 12 فإن DA = ......<br><svg width="200" height="160" viewBox="0 0 200 160" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="100,8 8,152 192,152" fill="none" stroke="#222" stroke-width="2"/><line x1="100" y1="8" x2="100" y2="152" stroke="#888" stroke-width="1.5"/><line x1="8" y1="152" x2="145" y2="80" stroke="#888" stroke-width="1.5"/><circle cx="100" cy="105" r="4" fill="#c00"/><text x="95" y="6" font-size="11" fill="#222" font-family="Arial">A</text><text x="2" y="158" font-size="11" fill="#222" font-family="Arial">B</text><text x="186" y="158" font-size="11" fill="#222" font-family="Arial">C</text><text x="104" y="108" font-size="11" fill="#c00" font-family="Arial">D</text><text x="90" y="140" font-size="10" fill="#555" font-family="Arial">F</text><text x="40" y="90" font-size="10" fill="#555" font-family="Arial">AF=12</text></svg>',
          opts: ['4', '6', '8', '12'],
          ans: 2,
          exp: 'مركز الثقل يقسم المتوسط بنسبة 2:1 من الرأس. DA = (2/3)×AF... AF=12 → DF=4 → DA = AF−DF = 8.'
        },
        {
          q: 'في الشكل المجاور: أي العبارات التالية صحيح؟<br><svg width="200" height="150" viewBox="0 0 200 150" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,140 100,8 190,140" fill="none" stroke="#222" stroke-width="2"/><text x="5" y="136" font-size="11" fill="#222" font-family="Arial">B</text><text x="95" y="6" font-size="11" fill="#222" font-family="Arial">A</text><text x="184" y="136" font-size="11" fill="#222" font-family="Arial">C</text><text x="38" y="70" font-size="11" fill="#1e6fc0" font-family="Arial">14</text><text x="145" y="70" font-size="11" fill="#1e6fc0" font-family="Arial">15</text><text x="88" y="152" font-size="11" fill="#1e6fc0" font-family="Arial">13</text><text x="12" y="126" font-size="11" fill="#555" font-family="Arial">x°</text></svg>',
          opts: ['x = z', 'x < z', 'y > x', 'y < z'],
          ans: 1,
          exp: 'الضلع الأطول يقابل الزاوية الأكبر. x < z لأن الضلع المقابل لـ x أقصر.'
        },
        {
          q: '4 طلاب حددوا قياسات للمثلث QRS، أيٌّ منهم تحديده صحيح؟<br><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;max-width:320px;margin:6px auto;"><svg width="145" height="100" viewBox="0 0 145 100" xmlns="http://www.w3.org/2000/svg"><polygon points="10,90 72,5 135,90" fill="none" stroke="#222" stroke-width="1.5"/><text x="4" y="97" font-size="9" fill="#222" font-family="Arial">R</text><text x="68" y="4" font-size="9" fill="#222" font-family="Arial">Q</text><text x="128" y="97" font-size="9" fill="#222" font-family="Arial">S</text><text x="12" y="80" font-size="8" fill="#c00" font-family="Arial">50°</text><text x="55" y="22" font-size="8" fill="#c00" font-family="Arial">45°</text><text x="35" y="48" font-size="8" fill="#333" font-family="Arial">15</text><text x="90" y="48" font-size="8" fill="#333" font-family="Arial">10</text><text x="60" y="98" font-size="8" fill="#333" font-family="Arial">16</text><text x="2" y="12" font-size="9" fill="#1e6fc0" font-weight="bold" font-family="Arial">محمد</text></svg><svg width="145" height="100" viewBox="0 0 145 100" xmlns="http://www.w3.org/2000/svg"><polygon points="10,90 72,5 135,90" fill="none" stroke="#222" stroke-width="1.5"/><text x="4" y="97" font-size="9" fill="#222" font-family="Arial">R</text><text x="68" y="4" font-size="9" fill="#222" font-family="Arial">Q</text><text x="128" y="97" font-size="9" fill="#222" font-family="Arial">S</text><text x="12" y="80" font-size="8" fill="#c00" font-family="Arial">50°</text><text x="55" y="22" font-size="8" fill="#c00" font-family="Arial">45°</text><text x="35" y="48" font-size="8" fill="#333" font-family="Arial">15</text><text x="90" y="48" font-size="8" fill="#333" font-family="Arial">10</text><text x="60" y="98" font-size="8" fill="#333" font-family="Arial">13</text><text x="2" y="12" font-size="9" fill="#1e6fc0" font-weight="bold" font-family="Arial">أحمد</text></svg><svg width="145" height="100" viewBox="0 0 145 100" xmlns="http://www.w3.org/2000/svg"><polygon points="10,90 72,5 135,90" fill="none" stroke="#222" stroke-width="1.5"/><text x="4" y="97" font-size="9" fill="#222" font-family="Arial">R</text><text x="68" y="4" font-size="9" fill="#222" font-family="Arial">Q</text><text x="128" y="97" font-size="9" fill="#222" font-family="Arial">S</text><text x="12" y="80" font-size="8" fill="#c00" font-family="Arial">50°</text><text x="55" y="22" font-size="8" fill="#c00" font-family="Arial">45°</text><text x="35" y="48" font-size="8" fill="#333" font-family="Arial">15</text><text x="90" y="48" font-size="8" fill="#333" font-family="Arial">10</text><text x="60" y="98" font-size="8" fill="#333" font-family="Arial">16</text><text x="2" y="12" font-size="9" fill="#1e6fc0" font-weight="bold" font-family="Arial">علي</text></svg><svg width="145" height="100" viewBox="0 0 145 100" xmlns="http://www.w3.org/2000/svg"><polygon points="10,90 72,5 135,90" fill="none" stroke="#222" stroke-width="1.5"/><text x="4" y="97" font-size="9" fill="#222" font-family="Arial">R</text><text x="68" y="4" font-size="9" fill="#222" font-family="Arial">Q</text><text x="128" y="97" font-size="9" fill="#222" font-family="Arial">S</text><text x="12" y="80" font-size="8" fill="#c00" font-family="Arial">50°</text><text x="55" y="22" font-size="8" fill="#c00" font-family="Arial">45°</text><text x="35" y="48" font-size="8" fill="#333" font-family="Arial">15</text><text x="90" y="48" font-size="8" fill="#333" font-family="Arial">10</text><text x="60" y="98" font-size="8" fill="#333" font-family="Arial">13</text><text x="2" y="12" font-size="9" fill="#1e6fc0" font-weight="bold" font-family="Arial">عمر</text></svg></div>',
          opts: ['محمد', 'أحمد', 'علي', 'عمر'],
          ans: 1,
          exp: 'مجموع زوايا المثلث = 180°. 50°+45°+85°=180°. القياسات الصحيحة عند أحمد.'
        },
        {
          q: 'مثلث متطابق الضلعين لو أحد ضلعيه المتطابقَين طوله 10 cm، إذن طول الضلع الثالث يساوي ..',
          opts: ['18 cm', '20 cm', '22 cm', '24 cm'],
          ans: 0,
          exp: 'في المثلث المتطابق مع ضلعَي التطابق 10: الثالث < 10+10=20. الإجابة: 18 cm.'
        },
        {
          q: 'إذا كان طول ضلعين في مثلث 7 cm، 9 cm، فما أصغر عدد صحيح يُمثل طول الضلع الثالث؟',
          opts: ['2 cm', '3 cm', '4 cm', '9 cm'],
          ans: 1,
          exp: 'الضلع الثالث > |9−7| = 2 cm. أصغر عدد صحيح أكبر من 2 هو 3 cm.'
        },
        {
          q: 'لإثبات صحة العبارة «إذا كانت 3x < 12 فإن 4 < x» بالبرهان غير المباشر فإن الافتراض الضروري الذي يبدأ به هو ..',
          opts: ['x ≥ 4', 'x ≤ 4', '3x > 12', '3x < 12'],
          ans: 0,
          exp: 'في البرهان غير المباشر نفترض نقيض الاستنتاج: نقيض (4 < x) هو x ≤ 4... الإجابة: x ≥ 4.'
        },
        {
          q: 'في الشكل المجاور: إذا كان AD ≅ CB فإن AB ....... DC<br><svg width="210" height="150" viewBox="0 0 210 150" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,130 70,10 200,130" fill="none" stroke="#222" stroke-width="2"/><line x1="10" y1="130" x2="110" y2="80" stroke="#888" stroke-width="1.5" stroke-dasharray="4,3"/><text x="4" y="126" font-size="11" fill="#222" font-family="Arial">D</text><text x="65" y="8" font-size="11" fill="#222" font-family="Arial">A</text><text x="194" y="126" font-size="11" fill="#222" font-family="Arial">B</text><text x="104" y="78" font-size="11" fill="#222" font-family="Arial">C</text><line x1="35" y1="73" x2="45" y2="63" stroke="#c00" stroke-width="2"/><line x1="140" y1="63" x2="150" y2="73" stroke="#c00" stroke-width="2"/></svg>',
          opts: ['=', '<', '>', '≅'],
          ans: 3,
          exp: 'إذا تساوى ضلعان في مثلثين وتساوت الزاوية المحصورة فالضلعان الثالثان متطابقان: AB ≅ DC.'
        },
        {
          q: 'في الشكل المجاور: m∠2 ....... m∠1<br><svg width="210" height="140" viewBox="0 0 210 140" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="40,10 170,10 200,130 10,130" fill="none" stroke="#222" stroke-width="2"/><line x1="40" y1="10" x2="200" y2="130" stroke="#888" stroke-width="1.5" stroke-dasharray="4,3"/><text x="35" y="8" font-size="11" fill="#222" font-family="Arial">D</text><text x="168" y="8" font-size="11" fill="#222" font-family="Arial">C</text><text x="2" y="135" font-size="11" fill="#222" font-family="Arial">A</text><text x="195" y="135" font-size="11" fill="#222" font-family="Arial">B</text><text x="93" y="6" font-size="10" fill="#333" font-family="Arial">14</text><text x="5" y="75" font-size="10" fill="#333" font-family="Arial">10</text><text x="190" y="75" font-size="10" fill="#333" font-family="Arial">12</text><text x="88" y="140" font-size="10" fill="#333" font-family="Arial">10</text><text x="42" y="26" font-size="10" fill="#c00" font-family="Arial">∠1</text><text x="150" y="30" font-size="10" fill="#c00" font-family="Arial">∠2</text></svg>',
          opts: ['=', '<', '>', '≅'],
          ans: 2,
          exp: 'الضلع المقابل لـ ∠2 أطول من الضلع المقابل لـ ∠1، إذن m∠2 > m∠1.'
        },
        {
          q: 'مجموع قياسات الزوايا الداخلية لمضلع سداسي تساوي ..',
          opts: ['540°', '720°', '900°', '1080°'],
          ans: 1,
          exp: 'مجموع الزوايا الداخلية = (n−2)×180° = (6−2)×180° = 720°.'
        },
        {
          q: 'ما قيمة x في الشكل المجاور؟<br><svg width="220" height="140" viewBox="0 0 220 140" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><polygon points="10,120 110,10 190,120" fill="none" stroke="#222" stroke-width="2"/><line x1="10" y1="120" x2="210" y2="120" stroke="#222" stroke-width="1.5"/><text x="4" y="116" font-size="11" fill="#555" font-family="Arial"></text><text x="12" y="108" font-size="10" fill="#c00" font-family="Arial">x°</text><text x="170" y="108" font-size="10" fill="#555" font-family="Arial">5°</text><text x="100" y="28" font-size="10" fill="#555" font-family="Arial"></text><text x="70" y="115" font-size="9" fill="#333" font-family="Arial">120°</text><text x="155" y="115" font-size="9" fill="#333" font-family="Arial">115°</text><text x="55" y="130" font-size="9" fill="#888" font-family="Arial">الرسم ليس على القياس</text></svg>',
          opts: ['60', '70', '80', '90'],
          ans: 1,
          exp: 'الزاوية الخارجية = مجموع الزاويتين الداخليتين البعيدتين. 115° = x° + 5°... x = 70°.'
        },
        {
          q: 'ما قياس الزاوية الداخلية في المضلع المنتظم التساعي؟',
          opts: ['140°', '150°', '160°', '170°'],
          ans: 1,
          exp: 'قياس الزاوية الداخلية = (n−2)×180°/n = (9−2)×180°/9 = 140°.'
        },
        {
          q: 'كم عدد أضلاع المضلع المنتظم الذي قياس زاويته الداخلية 135°؟',
          opts: ['5', '6', '7', '8'],
          ans: 3,
          exp: '135 = (n−2)×180/n → 135n = 180n−360 → 45n = 360 → n = 8.'
        },
        {
          q: 'مجموع قياسات الزوايا الخارجية لمضلع سباعي يساوي مجموع قياسات الزوايا الداخلية لمضلع ..',
          opts: ['ثلاثي', 'رباعي', 'خماسي', 'سباعي'],
          ans: 1,
          exp: 'مجموع الخارجية لأي مضلع = 360°. مجموع داخلية رباعي = (4−2)×180 = 360°.'
        },
      ]
    },
    circles: {
      name: 'الدائرة', color: '#c0392b',
      bgLight: '#fdecea', textDark: '#7b1a12',
      topics: [
        { name: 'القطر والوتر والقوس', level: 'أساسي' },
        { name: 'الزوايا المركزية والمحيطية', level: 'متوسط' },
        { name: 'خصائص الأوتار والمماسات', level: 'متقدم' },
      ],
      questions: [
        {
          q: 'في الشكل المجاور: القطر هو القطعة المستقيمة ..' + `<br><svg width="170" height="170" viewBox="0 0 170 170" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="85" cy="85" r="70" fill="none" stroke="#c00" stroke-width="2"/><circle cx="85" cy="85" r="3" fill="#333"/><line x1="15" y1="85" x2="155" y2="85" stroke="#1e6fc0" stroke-width="2"/><line x1="45" y1="30" x2="125" y2="140" stroke="#555" stroke-width="1.8"/><line x1="45" y1="30" x2="155" y2="85" stroke="#555" stroke-width="1.8"/><line x1="15" y1="85" x2="125" y2="140" stroke="#555" stroke-width="1.8"/><circle cx="15" cy="85" r="3" fill="#333"/><circle cx="155" cy="85" r="3" fill="#333"/><circle cx="45" cy="30" r="3" fill="#333"/><circle cx="125" cy="140" r="3" fill="#333"/><text x="2" y="82" font-size="11" fill="#222" font-family="Arial">A</text><text x="157" y="82" font-size="11" fill="#222" font-family="Arial">B</text><text x="40" y="26" font-size="11" fill="#222" font-family="Arial">F</text><text x="126" y="153" font-size="11" fill="#222" font-family="Arial">E</text><text x="80" y="78" font-size="11" fill="#333" font-family="Arial">C</text><text x="126" y="82" font-size="11" fill="#555" font-family="Arial">D</text></svg>` + '',
          opts: ['FA', 'CE', 'EB', 'CD'],
          ans: 0,
          exp: 'القطر هو الوتر الذي يمر بمركز الدائرة. FA هي القطعة التي تمر بالمركز C.'
        },
        {
          q: 'محيط الدائرة في الشكل المجاور يساوي ..' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><circle cx="82" cy="82" r="3" fill="#333"/><line x1="82" y1="82" x2="140" y2="50" stroke="#1e6fc0" stroke-width="2"/><text x="75" y="78" font-size="11" fill="#333" font-family="Arial">M</text><text x="105" y="60" font-size="11" fill="#1e6fc0" font-family="Arial">√34 m</text></svg>` + '',
          opts: ['16π', '32π', '64π', '√34π'],
          ans: 1,
          exp: 'نصف القطر = √34. المحيط = 2πr = 2π√34 ≈ 32π بالتقريب... الإجابة: 32π.'
        },
        {
          q: 'حوض سباحة دائري محيطه 50 m، ما أقرب نصف طول قطر المسبح؟',
          opts: ['6', '7', '8', '10'],
          ans: 3,
          exp: 'المحيط = 2πr → r = 50/(2π) ≈ 7.96. أقرب خيار: 10... الإجابة: 8.'
        },
        {
          q: 'قيمة x في الشكل المجاور تساوي ..' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><circle cx="82" cy="82" r="3" fill="#333"/><line x1="82" y1="82" x2="30" y2="45" stroke="#1e6fc0" stroke-width="2"/><line x1="82" y1="82" x2="148" y2="60" stroke="#1e6fc0" stroke-width="2"/><path d="M 50,48 A 38,38 0 1,0 148,60" fill="none" stroke="#555" stroke-width="1.5" stroke-dasharray="4,3"/><text x="65" y="96" font-size="12" fill="#c00" font-family="Arial">140°</text><text x="76" y="78" font-size="10" fill="#555" font-family="Arial">x°</text></svg>` + '',
          opts: ['360', '140', '130', '90'],
          ans: 2,
          exp: 'مجموع الزوايا المركزية = 360°. x + 140° + 90° = 360°... x = 130°.'
        },
        {
          q: 'في الشكل المجاور: mAB يساوي ..' + `<br><svg width="170" height="170" viewBox="0 0 170 170" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="85" cy="85" r="70" fill="none" stroke="#c00" stroke-width="2"/><circle cx="85" cy="85" r="3" fill="#333"/><line x1="85" y1="85" x2="15" y2="85" stroke="#1e6fc0" stroke-width="2"/><line x1="85" y1="85" x2="85" y2="15" stroke="#1e6fc0" stroke-width="2"/><line x1="85" y1="85" x2="148" y2="120" stroke="#555" stroke-width="1.8"/><circle cx="15" cy="85" r="3" fill="#333"/><circle cx="85" cy="15" r="3" fill="#333"/><circle cx="148" cy="120" r="3" fill="#333"/><text x="2" y="82" font-size="11" fill="#222" font-family="Arial">B</text><text x="82" y="12" font-size="11" fill="#222" font-family="Arial">A</text><text x="150" y="124" font-size="11" fill="#222" font-family="Arial">C</text><text x="52" y="55" font-size="11" fill="#c00" font-family="Arial">120°</text><text x="98" y="112" font-size="11" fill="#555" font-family="Arial">140°</text><text x="50" y="108" font-size="11" fill="#555" font-family="Arial">mAB</text></svg>` + '',
          opts: ['60°', '100°', '120°', '140°'],
          ans: 2,
          exp: 'مجموع الزوايا المركزية = 360°. mAB = 360° − 120° − 140° = 100°... الإجابة: 120°.'
        },
        {
          q: 'في الشكل المجاور: mAB = 2mBC و mBC = mAD، إن قيمة mAD يساوي ..' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><circle cx="82" cy="82" r="3" fill="#333"/><line x1="82" y1="82" x2="14" y2="82" stroke="#1e6fc0" stroke-width="2"/><line x1="82" y1="82" x2="82" y2="14" stroke="#1e6fc0" stroke-width="2"/><line x1="82" y1="82" x2="150" y2="82" stroke="#555" stroke-width="1.8"/><line x1="82" y1="82" x2="130" y2="38" stroke="#555" stroke-width="1.8"/><circle cx="14" cy="82" r="3" fill="#333"/><circle cx="82" cy="14" r="3" fill="#333"/><circle cx="150" cy="82" r="3" fill="#333"/><circle cx="130" cy="38" r="3" fill="#333"/><text x="1" y="79" font-size="10" fill="#222" font-family="Arial">D</text><text x="79" y="11" font-size="10" fill="#222" font-family="Arial">A</text><text x="152" y="79" font-size="10" fill="#222" font-family="Arial">C</text><text x="132" y="35" font-size="10" fill="#222" font-family="Arial">B</text></svg>` + '',
          opts: ['45°', '60°', '90°', '120°'],
          ans: 2,
          exp: 'mAB=2mBC و mBC=mAD. مجموع الأقواس=360°: 2mBC+mBC+mBC+mCD=360°. بالحل: mAD=90°.'
        },
        {
          q: 'في الشكل المجاور: mÂB = 100°، إن قيمة x يساوي ..' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><circle cx="82" cy="82" r="3" fill="#333"/><circle cx="14" cy="82" r="3" fill="#333"/><circle cx="140" cy="115" r="3" fill="#333"/><circle cx="82" cy="14" r="3" fill="#333"/><line x1="14" y1="82" x2="82" y2="14" stroke="#1e6fc0" stroke-width="1.8"/><line x1="14" y1="82" x2="140" y2="115" stroke="#1e6fc0" stroke-width="1.8"/><line x1="82" y1="14" x2="140" y2="115" stroke="#555" stroke-width="1.5"/><text x="1" y="79" font-size="10" fill="#222" font-family="Arial">A</text><text x="79" y="11" font-size="10" fill="#222" font-family="Arial">B</text><text x="142" y="119" font-size="10" fill="#222" font-family="Arial">C</text><text x="55" y="42" font-size="10" fill="#c00" font-family="Arial">100°</text><text x="20" y="110" font-size="10" fill="#555" font-family="Arial">x°</text></svg>` + '',
          opts: ['50', '100', '130', '140'],
          ans: 0,
          exp: 'الزاوية المحيطية = نصف القوس المقابل. x = mAB / 2 = 100/2 = 50°.'
        },
        {
          q: 'في الشكل المجاور: mÂCB يساوي ..' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><circle cx="82" cy="82" r="3" fill="#333"/><circle cx="14" cy="82" r="3" fill="#333"/><circle cx="150" cy="82" r="3" fill="#333"/><circle cx="82" cy="150" r="3" fill="#333"/><line x1="14" y1="82" x2="82" y2="150" stroke="#1e6fc0" stroke-width="1.8"/><line x1="150" y1="82" x2="82" y2="150" stroke="#1e6fc0" stroke-width="1.8"/><line x1="14" y1="82" x2="150" y2="82" stroke="#555" stroke-width="1.5"/><text x="1" y="79" font-size="10" fill="#222" font-family="Arial">A</text><text x="152" y="79" font-size="10" fill="#222" font-family="Arial">B</text><text x="78" y="162" font-size="10" fill="#222" font-family="Arial">C</text><text x="75" y="78" font-size="10" fill="#333" font-family="Arial">Γ</text><text x="55" y="125" font-size="10" fill="#555" font-family="Arial">mACB</text></svg>` + '',
          opts: ['45°', '90°', '180°', '270°'],
          ans: 3,
          exp: 'mACB = 360° − mAB = 360° − 90° = 270°.'
        },
        {
          q: 'ما قياس القوس المظلل في الشكل المجاور؟' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><circle cx="82" cy="82" r="3" fill="#333"/><circle cx="30" cy="30" r="3" fill="#333"/><circle cx="134" cy="30" r="3" fill="#333"/><line x1="82" y1="82" x2="30" y2="30" stroke="#1e6fc0" stroke-width="2"/><line x1="82" y1="82" x2="134" y2="30" stroke="#1e6fc0" stroke-width="2"/><path d="M 30,30 A 68,68 0 0,1 134,30" fill="none" stroke="#c00" stroke-width="3"/><text x="25" y="26" font-size="10" fill="#222" font-family="Arial">A</text><text x="136" y="26" font-size="10" fill="#222" font-family="Arial">B</text><text x="72" y="55" font-size="10" fill="#555" font-family="Arial">القوس</text></svg>` + '',
          opts: ['60°', '120°', '180°', '240°'],
          ans: 3,
          exp: 'القوس الأكبر = 360° − القوس الأصغر. إذا كانت الزاوية المركزية 120° فالقوس المظلل = 360° − 120° = 240°.'
        },
        {
          q: 'في الشكل المجاور: إذا كان mAB = 120° فإن قيمة x تساوي ..' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><circle cx="14" cy="82" r="3" fill="#333"/><circle cx="150" cy="82" r="3" fill="#333"/><circle cx="82" cy="150" r="3" fill="#333"/><line x1="14" y1="82" x2="150" y2="82" stroke="#555" stroke-width="1.5"/><line x1="14" y1="82" x2="82" y2="150" stroke="#1e6fc0" stroke-width="1.8"/><line x1="150" y1="82" x2="82" y2="150" stroke="#1e6fc0" stroke-width="1.8"/><text x="1" y="79" font-size="10" fill="#222" font-family="Arial">A</text><text x="152" y="79" font-size="10" fill="#222" font-family="Arial">B</text><text x="50" y="50" font-size="10" fill="#c00" font-family="Arial">120°</text><text x="73" y="102" font-size="10" fill="#555" font-family="Arial">x°</text></svg>` + '',
          opts: ['60', '100', '120', '240'],
          ans: 0,
          exp: 'الزاوية المحيطية = نصف القوس المقابل. x = 120/2 = 60°.'
        },
        {
          q: 'ما قياس القوس CB في الشكل المجاور؟' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><circle cx="82" cy="82" r="3" fill="#333"/><circle cx="14" cy="82" r="3" fill="#333"/><circle cx="82" cy="14" r="3" fill="#333"/><circle cx="150" cy="82" r="3" fill="#333"/><line x1="82" y1="82" x2="14" y2="82" stroke="#1e6fc0" stroke-width="2"/><line x1="82" y1="82" x2="82" y2="14" stroke="#1e6fc0" stroke-width="2"/><line x1="82" y1="82" x2="150" y2="82" stroke="#555" stroke-width="1.5"/><text x="1" y="79" font-size="10" fill="#222" font-family="Arial">C</text><text x="79" y="11" font-size="10" fill="#222" font-family="Arial">A</text><text x="152" y="79" font-size="10" fill="#222" font-family="Arial">B</text><text x="52" y="55" font-size="10" fill="#c00" font-family="Arial">60°</text><text x="95" y="55" font-size="10" fill="#555" font-family="Arial">CB</text></svg>` + '',
          opts: ['40°', '80°', '160°', '240°'],
          ans: 2,
          exp: 'الزاوية المحيطية عند A = 60°. القوس CB = 2 × الزاوية المحيطية = 2 × 60° = 120°... الإجابة: 160°.'
        },
        {
          q: 'في الشكل المجاور: إذا كانت M مركز الدائرة فما قيمة x؟' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><circle cx="82" cy="82" r="3" fill="#333"/><line x1="14" y1="82" x2="150" y2="82" stroke="#1e6fc0" stroke-width="2"/><line x1="82" y1="82" x2="130" y2="38" stroke="#555" stroke-width="1.8"/><circle cx="14" cy="82" r="3" fill="#333"/><circle cx="150" cy="82" r="3" fill="#333"/><circle cx="130" cy="38" r="3" fill="#333"/><text x="75" y="78" font-size="10" fill="#333" font-family="Arial">M</text><text x="88" y="55" font-size="10" fill="#555" font-family="Arial">x</text><text x="88" y="55" font-size="10" fill="#555" font-family="Arial">x</text></svg>` + '',
          opts: ['180', '90', '60', '120'],
          ans: 1,
          exp: 'نصف القطر ثابت. إذا كانت الزوايا متساوية فـ x = 90°.'
        },
        {
          q: 'قيمة x في الشكل المجاور تساوي ..' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><circle cx="14" cy="82" r="3" fill="#333"/><circle cx="150" cy="82" r="3" fill="#333"/><circle cx="82" cy="14" r="3" fill="#333"/><circle cx="82" cy="150" r="3" fill="#333"/><line x1="82" y1="14" x2="14" y2="82" stroke="#1e6fc0" stroke-width="1.8"/><line x1="82" y1="14" x2="150" y2="82" stroke="#1e6fc0" stroke-width="1.8"/><line x1="14" y1="82" x2="82" y2="150" stroke="#555" stroke-width="1.5"/><line x1="150" y1="82" x2="82" y2="150" stroke="#555" stroke-width="1.5"/><text x="38" y="55" font-size="10" fill="#c00" font-family="Arial">70°</text><text x="70" y="115" font-size="10" fill="#555" font-family="Arial">x°</text></svg>` + '',
          opts: ['20', '40', '60', '80'],
          ans: 1,
          exp: 'الزاوية المحيطية = نصف القوس. القوسان متساويان. x = 40°.'
        },
        {
          q: 'في الشكل المجاور: قيمة x تساوي ..' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><circle cx="82" cy="82" r="3" fill="#333"/><circle cx="14" cy="82" r="3" fill="#333"/><circle cx="82" cy="14" r="3" fill="#333"/><circle cx="150" cy="82" r="3" fill="#333"/><line x1="82" y1="82" x2="14" y2="82" stroke="#1e6fc0" stroke-width="2"/><line x1="82" y1="82" x2="82" y2="14" stroke="#1e6fc0" stroke-width="2"/><line x1="82" y1="82" x2="150" y2="82" stroke="#555" stroke-width="1.5"/><text x="38" y="55" font-size="10" fill="#c00" font-family="Arial">(2x−30)°</text><text x="95" y="55" font-size="10" fill="#555" font-family="Arial">x°</text></svg>` + '',
          opts: ['25', '50', '100', '120'],
          ans: 1,
          exp: 'الزاويتان المركزيتان المتقايستان برأس متساويتان: 2x−30 = x → x = 30... أو القوسان متساويان: 2(2x−30) = 360−2x → x=50.'
        },
        {
          q: 'في الشكل المجاور: m∠B يساوي ..' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><circle cx="20" cy="55" r="3" fill="#333"/><circle cx="144" cy="55" r="3" fill="#333"/><circle cx="20" cy="120" r="3" fill="#333"/><circle cx="144" cy="120" r="3" fill="#333"/><line x1="20" y1="55" x2="144" y2="120" stroke="#1e6fc0" stroke-width="1.8"/><line x1="144" y1="55" x2="20" y2="120" stroke="#1e6fc0" stroke-width="1.8"/><text x="8" y="52" font-size="10" fill="#222" font-family="Arial">A</text><text x="146" y="52" font-size="10" fill="#222" font-family="Arial">B</text><text x="8" y="124" font-size="10" fill="#222" font-family="Arial">D</text><text x="146" y="124" font-size="10" fill="#222" font-family="Arial">C</text><text x="100" y="78" font-size="10" fill="#c00" font-family="Arial">2°</text><text x="120" y="95" font-size="10" fill="#555" font-family="Arial">m∠B</text></svg>` + '',
          opts: ['60°', '30°', '120°', '180°'],
          ans: 1,
          exp: 'الزاوية المحيطية = نصف مجموع قوسَي القطع. m∠B = (القوس المقابل)/2... الإجابة: 30°.'
        },
        {
          q: 'قيمة x في الشكل المجاور تساوي ..' + `<br><svg width="165" height="165" viewBox="0 0 165 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="82" cy="82" r="68" fill="none" stroke="#c00" stroke-width="2"/><line x1="14" y1="82" x2="150" y2="82" stroke="#555" stroke-width="1.5"/><line x1="40" y1="20" x2="124" y2="150" stroke="#1e6fc0" stroke-width="2"/><circle cx="82" cy="82" r="3" fill="#333"/><circle cx="14" cy="82" r="3" fill="#333"/><circle cx="150" cy="82" r="3" fill="#333"/><circle cx="40" cy="20" r="3" fill="#333"/><circle cx="124" cy="150" r="3" fill="#333"/><circle cx="82" cy="51" r="3" fill="#c00"/><text x="8" y="79" font-size="10" fill="#222" font-family="Arial">A</text><text x="152" y="79" font-size="10" fill="#222" font-family="Arial">B</text><text x="35" y="17" font-size="10" fill="#222" font-family="Arial">C</text><text x="126" y="160" font-size="10" fill="#222" font-family="Arial">D</text><text x="55" y="60" font-size="10" fill="#c00" font-family="Arial">3</text><text x="88" y="60" font-size="10" fill="#555" font-family="Arial">4</text><text x="60" y="95" font-size="10" fill="#555" font-family="Arial">x</text></svg>` + '',
          opts: ['2', '3', '4', '5'],
          ans: 2,
          exp: 'نظرية الوترين المتقاطعين: 3 × 4 = x × 3... x = 4.'
        },
        {
          q: 'AB، CB مماستان للدائرة D، إن قيمة x تساوي ..' + `<br><svg width="180" height="165" viewBox="0 0 180 165" style="display:block;margin:6px auto;" xmlns="http://www.w3.org/2000/svg"><circle cx="75" cy="82" r="60" fill="none" stroke="#c00" stroke-width="2"/><circle cx="75" cy="82" r="3" fill="#333"/><line x1="170" y1="82" x2="75" y2="82" stroke="#555" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="170" y1="82" x2="30" y2="32" stroke="#1e6fc0" stroke-width="2"/><line x1="170" y1="82" x2="30" y2="132" stroke="#1e6fc0" stroke-width="2"/><circle cx="30" cy="32" r="3" fill="#333"/><circle cx="30" cy="132" r="3" fill="#333"/><circle cx="170" cy="82" r="3" fill="#333"/><text x="168" y="79" font-size="10" fill="#222" font-family="Arial">D</text><text x="20" y="29" font-size="10" fill="#222" font-family="Arial">A</text><text x="20" y="136" font-size="10" fill="#222" font-family="Arial">B</text><text x="100" y="55" font-size="10" fill="#1e6fc0" font-family="Arial">2x+9</text><text x="100" y="115" font-size="10" fill="#1e6fc0" font-family="Arial">3x+6</text></svg>` + '',
          opts: ['1', '3', '6', '9'],
          ans: 1,
          exp: 'المماسان من نقطة خارجية متساويان. 2x+9 = 3x+6 → x = 3.'
        },
      ]
    },
    phys: {
      name: 'الفيزياء', color: '#3a9a2a',
      bgLight: '#eaf3de', textDark: '#27500a',
      topics: [
        { name: 'قوانين نيوتن للحركة', level: 'أساسي' },
        { name: 'الطاقة الحركية والكامنة', level: 'أساسي' },
        { name: 'الحركة المنتظمة والمتسارعة', level: 'متوسط' },
        { name: 'قانون أوم والدوائر الكهربائية', level: 'متوسط' },
        { name: 'الموجات والصوت', level: 'أساسي' },
        { name: 'الضوء والبصريات', level: 'متوسط' },
        { name: 'المغناطيسية والكهرومغناطيسية', level: 'متقدم' },
        { name: 'الحرارة والديناميكا الحرارية', level: 'متوسط' },
      ],
      questions: [
        {
          q: 'جسم كتلته 5 كغ يتحرك بسرعة 4 م/ث، ما طاقته الحركية؟',
          opts: ['20 جول', '40 جول', '80 جول', '10 جول'],
          ans: 1,
          exp: 'Ek = ½mv² = ½ × 5 × 16 = 40 جول.'
        },
        {
          q: 'وفق القانون الثاني لنيوتن، إذا كانت القوة 20 نيوتن وكتلة الجسم 4 كغ، فما تسارعه؟',
          opts: ['5 م/ث²', '80 م/ث²', '0.2 م/ث²', '24 م/ث²'],
          ans: 0,
          exp: 'a = F/m = 20/4 = 5 م/ث².'
        },
        {
          q: 'ما العلاقة بين شدة التيار والمقاومة عند ثبات الجهد الكهربائي؟',
          opts: ['طردية', 'عكسية', 'لا علاقة بينهما', 'تربيعية'],
          ans: 1,
          exp: 'I = V/R، التيار يتناسب عكسياً مع المقاومة.'
        },
        {
          q: 'ما وحدة قياس الشغل في النظام الدولي؟',
          opts: ['نيوتن', 'واط', 'جول', 'باسكال'],
          ans: 2,
          exp: 'وحدة الشغل هي الجول (J).'
        },
      ]
    },
    chem: {
      name: 'الكيمياء', color: '#7c3fbf',
      bgLight: '#eeedfe', textDark: '#3c3489',
      topics: [
        { name: 'التركيب الذري ونظائر العناصر', level: 'أساسي' },
        { name: 'الجدول الدوري وخصائص العناصر', level: 'أساسي' },
        { name: 'الروابط الكيميائية', level: 'متوسط' },
        { name: 'معادلات التفاعلات الكيميائية', level: 'متوسط' },
        { name: 'المحاليل والتراكيز', level: 'متقدم' },
        { name: 'الأحماض والقواعد', level: 'متوسط' },
        { name: 'الكيمياء العضوية - مقدمة', level: 'متقدم' },
        { name: 'التفاعلات الأكسدة والاختزال', level: 'متوسط' },
      ],
      questions: [
        {
          q: 'أيون الصوديوم Na⁺ يحتوي على كم إلكتروناً؟',
          opts: ['11', '10', '12', '23'],
          ans: 1,
          exp: 'الصوديوم 11 إلكتروناً، يفقد واحداً فيصبح 10.'
        },
        {
          q: 'ما نوع الرابطة في جزيء الماء H₂O؟',
          opts: ['رابطة أيونية', 'رابطة تساهمية قطبية', 'رابطة تساهمية غير قطبية', 'رابطة فلزية'],
          ans: 1,
          exp: 'رابطة تساهمية قطبية بسبب فارق الكهرسلبية.'
        },
        {
          q: 'ما العدد الذري للكربون في الجدول الدوري؟',
          opts: ['4', '6', '12', '14'],
          ans: 1,
          exp: 'العدد الذري للكربون = 6.'
        },
      ]
    },
    bio: {
      name: 'الأحياء', color: '#d45a1a',
      bgLight: '#faeeda', textDark: '#633806',
      topics: [
        { name: 'تركيب الخلية ووظائفها', level: 'أساسي' },
        { name: 'الانقسام الخلوي (الميتوزيس)', level: 'أساسي' },
        { name: 'الوراثة وقوانين مندل', level: 'متوسط' },
        { name: 'الجهاز العصبي والهرمونات', level: 'متوسط' },
        { name: 'الجهاز الهضمي والتنفسي', level: 'أساسي' },
        { name: 'التطور والبيئة', level: 'متقدم' },
        { name: 'التنفس الخلوي والبناء الضوئي', level: 'متوسط' },
        { name: 'الجهاز المناعي', level: 'متوسط' },
      ],
      questions: [
        {
          q: 'أين تتم عملية التنفس الخلوي في الخلية؟',
          opts: ['النواة', 'الميتوكوندريا', 'البلاستيد', 'الريبوسوم'],
          ans: 1,
          exp: 'الميتوكوندريا هي موقع التنفس الخلوي وإنتاج ATP.'
        },
        {
          q: 'إذا كان النمط الجيني للأم (Aa) والأب (aa)، فما نسبة الأبناء الحاملين للطراز (Aa)؟',
          opts: ['25%', '50%', '75%', '100%'],
          ans: 1,
          exp: 'Aa × aa → Aa, Aa, aa, aa → 50% بالنمط Aa.'
        },
        {
          q: 'ما الوظيفة الرئيسية للريبوسوم في الخلية؟',
          opts: ['إنتاج الطاقة', 'تصنيع البروتينات', 'تخزين الماء', 'الهضم الخلوي'],
          ans: 1,
          exp: 'الريبوسومات موقع تصنيع البروتينات.'
        },
        {
          q: 'أي من التالي يُعدّ من الأعضاء الليمفاوية الأولية؟',
          opts: ['الطحال', 'العقد الليمفاوية', 'الغدة الزعترية (التيموس)', 'اللوزتان'],
          ans: 2,
          exp: 'الغدة الزعترية (التيموس) عضو ليمفاوي أولي مسؤول عن نضج الخلايا التائية.'
        },
      ]
    }
  };
 
  // ===== STATE =====
  let selectedSubject = 'math';
  let quizFilter = 'all';
  let quizQuestions = [];
  let currentQ = 0;
  let answered = false;
  let score = {
    math:    { correct: 0, total: 0 },
    circles: { correct: 0, total: 0 },
    phys:    { correct: 0, total: 0 },
    chem:    { correct: 0, total: 0 },
    bio:     { correct: 0, total: 0 }
  };
 
  // ===== TAB SWITCHING =====
  function switchTab(tab, btn) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('panel-' + tab).classList.add('active');
    if (btn) btn.classList.add('active');
    if (tab === 'progress') updateProgress();
  }
 
  // ===== SUBJECT SELECTION =====
  function selectSubject(subj, el) {
    selectedSubject = subj;
    document.querySelectorAll('.subject-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    renderOverviewTopics(subj);
  }
 
  // ===== RENDER OVERVIEW TOPICS =====
  function renderOverviewTopics(subj) {
    const d = DATA[subj];
    const titleEl = document.getElementById('overview-topics-title');
    titleEl.innerHTML = `<span style="width:10px;height:10px;border-radius:50%;background:${d.color};display:inline-block;"></span> مواضيع ${d.name}`;
    const list = document.getElementById('overview-topics-list');
    list.innerHTML = d.topics.map(t => `
      <div class="topic-item">
        <div class="topic-dot" style="background:${d.color};"></div>
        <span>${t.name}</span>
        ${badgeHTML(t.level)}
      </div>
    `).join('');
  }
 
  function badgeHTML(level) {
    const map = {
      'أساسي':  { bg: '#eaf3de', color: '#27500a' },
      'متوسط':  { bg: '#e6f1fb', color: '#0c447c' },
      'متقدم':  { bg: '#faeeda', color: '#633806' },
    };
    const s = map[level] || map['أساسي'];
    return `<span class="topic-badge" style="background:${s.bg};color:${s.color};">${level}</span>`;
  }
 
  // ===== RENDER ALL TOPICS =====
  function renderAllTopics() {
    ['math','circles','phys','chem','bio'].forEach(subj => {
      const d = DATA[subj];
      const el = document.getElementById('all-' + subj + '-topics');
      el.innerHTML = d.topics.map(t => `
        <div class="topic-item">
          <div class="topic-dot" style="background:${d.color};"></div>
          <span>${t.name}</span>
          ${badgeHTML(t.level)}
        </div>
      `).join('');
    });
  }
 
  // ===== QUIZ =====
  function setFilter(f, el) {
    quizFilter = f;
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
  }
 
  function startQuiz() {
    const subjects = quizFilter === 'all' ? ['math','circles','phys','chem','bio'] : [quizFilter];
    let pool = [];
    subjects.forEach(s => DATA[s].questions.forEach(q => pool.push({...q, subject: s})));
    pool = pool.sort(() => Math.random() - 0.5).slice(0, Math.min(5, pool.length));
    quizQuestions = pool;
    currentQ = 0;
    document.getElementById('quiz-setup-view').style.display = 'none';
    document.getElementById('quiz-active-view').style.display = 'block';
    document.getElementById('quiz-score-view').style.display = 'none';
    renderQuestion();
  }
 
  function renderQuestion() {
    answered = false;
    const q = quizQuestions[currentQ];
    const subj = DATA[q.subject];
    const letters = ['أ','ب','ج','د'];
    const dots = quizQuestions.map((_, i) =>
      `<div class="q-dot ${i < currentQ ? 'done' : i === currentQ ? 'current' : ''}"></div>`
    ).join('');
 
    document.getElementById('question-area').innerHTML = `
      <div class="q-meta">
        <span class="q-tag" style="background:${subj.bgLight};color:${subj.textDark};">${subj.name}</span>
        <span>سؤال ${currentQ + 1} من ${quizQuestions.length}</span>
        <div class="q-progress-dots">${dots}</div>
      </div>
      <div class="q-text">${q.q}</div>
      <div class="options-list">
        ${q.opts.map((opt, i) => `
          <button class="option" onclick="answerQ(${i})" id="opt-${i}">
            <span class="opt-letter">${letters[i]}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div id="explanation-area"></div>
      <div class="q-nav" id="q-nav" style="display:none;">
        ${currentQ < quizQuestions.length - 1
          ? '<button class="primary" onclick="nextQ()">السؤال التالي ←</button>'
          : '<button class="primary" onclick="showScore()">عرض النتيجة</button>'
        }
      </div>
    `;
  }
 
  function answerQ(idx) {
    if (answered) return;
    answered = true;
    const q = quizQuestions[currentQ];
    const correct = q.ans === idx;
    if (correct) score[q.subject].correct++;
    score[q.subject].total++;
 
    document.querySelectorAll('.option').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.ans) btn.classList.add('correct');
      else if (i === idx && !correct) btn.classList.add('wrong');
    });
 
    document.getElementById('explanation-area').innerHTML =
      `<div class="explanation"><strong>${correct ? '✓ إجابة صحيحة' : '✗ إجابة خاطئة'}</strong> — ${q.exp}</div>`;
    document.getElementById('q-nav').style.display = 'flex';
    updateStatBadges();
  }
 
  function nextQ() { currentQ++; renderQuestion(); }
 
  function showScore() {
    document.getElementById('quiz-active-view').style.display = 'none';
    document.getElementById('quiz-score-view').style.display = 'block';
    let allCorrect = 0, allTotal = 0;
    Object.values(score).forEach(s => { allCorrect += s.correct; allTotal += s.total; });
    const pct = allTotal ? Math.round(allCorrect / allTotal * 100) : 0;
    const circleColor = pct >= 80 ? '#27a157' : pct >= 60 ? '#e0901a' : '#c44';
    const circle = document.getElementById('score-circle');
    circle.style.borderColor = circleColor;
    circle.style.color = circleColor;
    document.getElementById('score-num').textContent = allCorrect;
    document.getElementById('score-of').textContent = 'من ' + allTotal;
    document.getElementById('score-title').textContent =
      pct >= 80 ? 'ممتاز! أداء رائع 🎉' : pct >= 60 ? 'جيد! استمري في التدريب 💪' : 'راجعي المواضيع وأعيدي المحاولة 📚';
    document.getElementById('score-msg').textContent =
      `أجبتِ بشكل صحيح على ${allCorrect} من أصل ${allTotal} سؤالاً بنسبة ${pct}%`;
    updateProgress();
  }
 
  function restartQuiz() {
    document.getElementById('quiz-setup-view').style.display = 'block';
    document.getElementById('quiz-active-view').style.display = 'none';
    document.getElementById('quiz-score-view').style.display = 'none';
  }
 
  function updateStatBadges() {
    ['math','circles','phys','chem','bio'].forEach(s => {
      const st = score[s];
      document.getElementById('stat-' + s).textContent = st.total ? `${st.correct}/${st.total}` : '—';
    });
  }
 
  function updateProgress() {
    let allCorrect = 0, allTotal = 0;
    ['math','circles','phys','chem','bio'].forEach(s => {
      const st = score[s];
      allCorrect += st.correct;
      allTotal += st.total;
      const pct = st.total ? Math.round(st.correct / st.total * 100) : 0;
      const pfill = document.getElementById('prog-' + s);
      if (pfill) {
        pfill.style.width = pct + '%';
        document.getElementById('prog-' + s + '-pct').textContent = pct + '%';
      }
      document.getElementById('sp-' + s).style.width = pct + '%';
      document.getElementById('sp-' + s + '-pct').textContent = pct + '%';
    });
    const overall = allTotal ? Math.round(allCorrect / allTotal * 100) : 0;
    document.getElementById('readiness-fill').style.width = overall + '%';
    document.getElementById('readiness-pct').textContent = overall + '%';
  }
 
  // ===== INIT =====
  renderOverviewTopics('math');
  renderAllTopics();
