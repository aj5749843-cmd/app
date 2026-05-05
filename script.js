 const DATA = {
    math: {
      name: 'الرياضيات', color: '#1e6fc0',
      bgLight: '#e6f1fb', textDark: '#0c447c',
      topics: [
        { name: 'المثال المضاد', level: 'أساسي' },
        { name: 'العبارات المنطقية وقيم الصواب', level: 'أساسي' },
        { name: 'العبارات الشرطية (إذا... إذن)', level: 'متوسط' },
        { name: 'المعاكس الإيجابي والعكس', level: 'متوسط' },
        { name: 'النقاط والمستقيمات', level: 'أساسي' },
        { name: 'تقاطع المستويات', level: 'متوسط' },
        { name: 'الزوايا المتكاملة والمتتامة', level: 'أساسي' },
        { name: 'العلاقات بين الزوايا', level: 'متوسط' },
        { name: 'متباينات المثلثات', level: 'متقدم' },
        { name: 'الإحصاء والاحتمالات', level: 'متوسط' },
      ],
      questions: [
        {
          q: 'أي مما يلي يُعدّ مثالاً مضاداً للجملة: "كل الأعداد الزوجية تقبل القسمة على 4"؟',
          opts: ['العدد 2', 'العدد 8', 'العدد 12', 'العدد 16'],
          ans: 0,
          exp: 'العدد 2 زوجي ولا يقبل القسمة على 4، فهو مثال مضاد يُبطل الجملة الكلية.'
        },
        {
          q: 'إذا كانت العبارة p صحيحة وعبارة q خاطئة، فما قيمة الصواب للعبارة (p ∧ q)؟',
          opts: ['صحيحة', 'خاطئة', 'يعتمد على السياق', 'لا يمكن تحديدها'],
          ans: 1,
          exp: 'الوصل (∧) يكون صحيحاً فقط إذا كانت العبارتان صحيحتين معاً. لأن q خاطئة، فالنتيجة خاطئة.'
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
          exp: 'المعاكس الإيجابي: نفي التالي → نفي المقدم. أي "إذا لم تنجح فهي غير مجتهدة".'
        },
        {
          q: 'إذا كانت زاويتان متتامتان، وإحداهما 35°، فما مقياس الأخرى؟',
          opts: ['55°', '65°', '145°', '325°'],
          ans: 0,
          exp: 'الزوايا المتتامة مجموعها 90°. إذن: 90 − 35 = 55°.'
        },
        {
          q: 'العبارة "p أو q" (p ∨ q) تكون خاطئة فقط إذا:',
          opts: ['كانت p صحيحة وq خاطئة', 'كانت p خاطئة وq صحيحة', 'كانتا كلتاهما خاطئتين', 'كانتا كلتاهما صحيحتين'],
          ans: 2,
          exp: 'الفصل (∨) يكون خاطئاً فقط حين تكون كلتا العبارتين خاطئتين.'
        },
        {
          q: 'للعبارة «إذا كانت A زاوية حادة فإن 37° = m∠A»، أي ما يلي يُعدّ مثالاً مضاداً؟',
          opts: ['m∠A = 73°', 'm∠A = 90°', 'm∠A = 103°', 'm∠A = 180°'],
          ans: 1,
          exp: 'الزاوية الحادة قياسها أقل من 90°، فإذا كان m∠A = 90° فهي ليست حادة وهذا يُبطل العبارة ويُعدّ مثالاً مضاداً.'
        },
        {
          q: 'للعبارة «إذا كان a عدداً حقيقياً فإن a² ≥ a»، أي ما يلي يُعدّ مثالاً مضاداً؟',
          opts: ['a = −2', 'a = 0', 'a = ½', 'a = 2'],
          ans: 2,
          exp: 'عند a = ½: a² = ¼ وهو أصغر من ½، إذاً العبارة خاطئة عند هذه القيمة، وهذا هو المثال المضاد.'
        },
        {
          q: 'أي ما يلي مثال مضاد للتخمين «إذا كان n عدداً أولياً فإن n + 1 عدداً أولياً»؟',
          opts: ['n = 2', 'n = 3', 'n = 5', 'n = 7'],
          ans: 2,
          exp: 'عند n = 5: n + 1 = 6، والعدد 6 ليس أولياً، فهذا مثال مضاد يُبطل التخمين.'
        },
        {
          q: 'العبارة «إذا كانت ∠1، ∠2 زاويتين تشتركان في نقطة فإنهما متجاورتان»، أي الأشكال يُعدّ مثالاً مضاداً؟<br><svg width="320" height="90" viewBox="0 0 320 90" style="display:block;margin:8px auto;font-family:Arial;font-size:11px;"><text x="15" y="10" fill="#1e6fc0" font-weight="bold">(A)</text><line x1="20" y1="70" x2="70" y2="70" stroke="#333" stroke-width="2"/><line x1="20" y1="70" x2="45" y2="30" stroke="#333" stroke-width="2"/><line x1="20" y1="70" x2="70" y2="50" stroke="#888" stroke-width="1.5"/><text x="40" y="68" fill="#c00" font-size="10">∠1</text><text x="35" y="48" fill="#555" font-size="10">∠2</text><text x="95" y="10" fill="#c00" font-weight="bold">(B)</text><line x1="100" y1="30" x2="160" y2="80" stroke="#333" stroke-width="2"/><line x1="160" y1="30" x2="100" y2="80" stroke="#333" stroke-width="2"/><text x="118" y="52" fill="#c00" font-size="10">∠1</text><text x="138" y="52" fill="#555" font-size="10">∠2</text><text x="175" y="10" fill="#1e6fc0" font-weight="bold">(C)</text><line x1="175" y1="65" x2="245" y2="65" stroke="#333" stroke-width="2"/><line x1="210" y1="65" x2="210" y2="25" stroke="#333" stroke-width="2"/><text x="183" y="55" fill="#555" font-size="10">∠1</text><text x="218" y="55" fill="#c00" font-size="10">∠2</text><text x="258" y="10" fill="#1e6fc0" font-weight="bold">(D)</text><line x1="265" y1="75" x2="315" y2="75" stroke="#333" stroke-width="2"/><line x1="265" y1="75" x2="290" y2="30" stroke="#333" stroke-width="2"/><line x1="265" y1="75" x2="265" y2="30" stroke="#888" stroke-width="1.5"/><text x="270" y="60" fill="#555" font-size="10">∠1</text><text x="278" y="52" fill="#c00" font-size="10">∠2</text></svg>',
          opts: ['الشكل (A)', 'الشكل (B)', 'الشكل (C)', 'الشكل (D)'],
          ans: 1,
          exp: 'المثال المضاد هو الشكل الذي تشترك فيه الزاويتان في نقطة لكنهما غير متجاورتين (لا يشتركان في ضلع مشترك).'
        },
        {
          q: 'أي العبارات التالية خاطئة؟',
          opts: ['المستطيل مضلع رباعي', 'قياس الزاوية القائمة 90°', 'العدد 3 قاسم للعدد 132', 'العدد 6 عدد أولي'],
          ans: 3,
          exp: 'العدد 6 ليس أولياً لأنه يقبل القسمة على 1، 2، 3، 6، والعدد الأولي لا يقبل القسمة إلا على نفسه والواحد.'
        },
        {
          q: 'أي العبارات التالية نفيها عبارة خاطئة؟',
          opts: ['5 − 2 × 3 = 9', 'قياس الزاوية المستقيمة 90°', '3/5 + 7/5 = 10', 'العدد 72 مضاعف للعدد 4'],
          ans: 3,
          exp: 'العدد 72 = 4 × 18، إذاً العبارة صحيحة، ونفي الصحيح خاطئ. أما باقي العبارات فهي خاطئة ونفيها يكون صحيحاً.'
        },
        {
          q: 'إذا كانت (p): «اليوم الواحد 20 ساعة» و (q): «قياس الزاوية القائمة 90°» فأي العبارات التالية خاطئة؟',
          opts: ['p → q', 'p ∨ q', '~q → p', '~p → q'],
          ans: 2,
          exp: 'p خاطئة (اليوم ليس 20 ساعة) وq صحيحة (الزاوية القائمة 90°). ~p=T، ~q=F. العبارة الخاطئة هي ~p→q لأن مقدمها T وتاليها T، لكن الخاطئة الوحيدة هي p∨q = F∨T = T صحيحة. جميع العبارات صحيحة باستثناء ~q→p: ~q=F وp=F، الشرطي بمقدم F دائماً صحيح. إذن الخاطئة هي ~p→q حيث النتيجة T. الإجابة B.'
        },
        {
          q: 'في جدول صواب العبارة (~p ∧ q) المجاور قيمة الصادق التي تحل محل x، y هي:',
          opts: ['x = T، y = T', 'x = T، y = F', 'x = F، y = T', 'x = F، y = F'],
          ans: 2,
          exp: 'في جدول الصواب لـ (~p ∧ q): عندما p=F وq=T: ~p=T، إذن ~p∧q = T∧T = T، فـ x=F (قيمة p) وy=T (قيمة ~p∧q).'
        },
        {
          q: 'إذا كانت العبارتان p، q غير صادقتين؛ فأي العبارات التالية صادقة؟',
          opts: ['p ∧ q', 'p ∨ p', '~q → ~p', '~p → q'],
          ans: 2,
          exp: 'p=F وq=F. ~q=T و~p=T. إذن ~q→~p = T→T = T. وهي الإجابة الصادقة.'
        },
        {
          q: 'أي العبارات التالية ترمز لعكس المبارة p → q؟',
          opts: ['p → q', 'q → p', '~p → ~q', '~q → ~p'],
          ans: 1,
          exp: 'عكس العبارة الشرطية p→q هو q→p (نعكس المقدم والتالي).'
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
          exp: 'المعاكس الإيجابي للعبارة p→q هو ~q→~p. p: مجموع قياسي الزاويتين 90°، q: الزاويتان متتامتان. ~q→~p: إذا كان المجموع لا يساوي 90° فإنهما غير متتامتين.'
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
          exp: 'المعاكس الإيجابي لـ p→q هو ~q→~p. p: x=2، q: x²=4. المعاكس الإيجابي: إذا كان x²≠4 فإن x≠2.'
        },
        {
          q: 'من الشكل المجاور: أي العبارات التالية لها قيمة صواب المبارة AB = BC؟<br><svg width="150" height="120" viewBox="0 0 150 120" style="display:block;margin:8px auto;font-family:Arial;"><polygon points="75,8 8,112 142,112" fill="none" stroke="#1e6fc0" stroke-width="2.2"/><text x="70" y="6" font-size="12" fill="#333">B</text><text x="0" y="116" font-size="12" fill="#333">A</text><text x="136" y="116" font-size="12" fill="#333">C</text><line x1="36" y1="65" x2="46" y2="55" stroke="#c00" stroke-width="2"/><line x1="104" y1="55" x2="114" y2="65" stroke="#c00" stroke-width="2"/></svg>',
          opts: ['m∠A = m∠C', 'AC = BC', 'm∠A = m∠B', 'AB = AC'],
          ans: 0,
          exp: 'في المثلث، إذا كان AB = BC فإن المثلث متساوي الساقين والزاويتان المقابلتان للساقين المتساويتين متساويتان، أي m∠A = m∠C.'
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
          exp: 'إذا تقاطع مستقيمان فإنهما يتقاطعان في نقطة واحدة فقط.'
        },
        {
          q: 'إذا تقاطع مستويان فإنهما يتقاطعان في ..',
          opts: ['نقطة', 'نقطتين', 'مستقيم', 'مستوى'],
          ans: 2,
          exp: 'إذا تقاطع مستويان فإنهما يتقاطعان في مستقيم.'
        },
        {
          q: 'في الشكل المجاور: إذا كان AM ≅ MB وكان AM = 5 فإن AB = ..<br><svg width="220" height="45" viewBox="0 0 220 45" style="display:block;margin:8px auto;font-family:Arial;"><line x1="10" y1="22" x2="210" y2="22" stroke="#1e6fc0" stroke-width="2.5"/><circle cx="10" cy="22" r="4" fill="#1e6fc0"/><circle cx="110" cy="22" r="4" fill="#c00"/><circle cx="210" cy="22" r="4" fill="#1e6fc0"/><text x="5" y="38" font-size="12" fill="#333">A</text><text x="106" y="38" font-size="12" fill="#c00">M</text><text x="205" y="38" font-size="12" fill="#333">B</text><line x1="57" y1="15" x2="63" y2="29" stroke="#c00" stroke-width="2"/><line x1="157" y1="15" x2="163" y2="29" stroke="#c00" stroke-width="2"/></svg>',
          opts: ['2.5', '5', '7.5', '10'],
          ans: 3,
          exp: 'M نقطة منتصف AB، فـ AM = MB = 5، إذن AB = AM + MB = 5 + 5 = 10.'
        },
        {
          q: 'في الشكل المجاور AH مستقيم، ما قيمة x؟<br><svg width="180" height="110" viewBox="0 0 180 110" style="display:block;margin:8px auto;font-family:Arial;"><line x1="10" y1="75" x2="170" y2="75" stroke="#1e6fc0" stroke-width="2.5"/><line x1="90" y1="75" x2="50" y2="15" stroke="#1e6fc0" stroke-width="2.5"/><text x="4" y="88" font-size="12" fill="#333">A</text><text x="163" y="88" font-size="12" fill="#333">H</text><text x="46" y="12" font-size="12" fill="#333">B</text><path d="M 70,75 A 20,20 0 0,1 56,55" fill="none" stroke="#c00" stroke-width="1.5"/><text x="55" y="72" font-size="11" fill="#c00">120°</text><path d="M 110,75 A 20,20 0 0,0 96,55" fill="none" stroke="#555" stroke-width="1.5"/><text x="108" y="68" font-size="11" fill="#555">x°</text></svg>',
          opts: ['40', '60', '70', '80'],
          ans: 2,
          exp: 'الزوايا على المستقيم مجموعها 180°. بحل المعادلة نجد x = 70.'
        },
        {
          q: 'في الشكل المجاور: إذا كان m∠4 = (2x + 60)° و m∠3 = (2x)° فإن m∠3 يساوي ..<br><svg width="200" height="110" viewBox="0 0 200 110" style="display:block;margin:8px auto;font-family:Arial;"><line x1="10" y1="35" x2="190" y2="35" stroke="#1e6fc0" stroke-width="2"/><line x1="10" y1="80" x2="190" y2="80" stroke="#1e6fc0" stroke-width="2"/><line x1="60" y1="5" x2="140" y2="110" stroke="#c00" stroke-width="2"/><text x="75" y="33" font-size="11" fill="#333">4</text><text x="90" y="48" font-size="11" fill="#333">3</text><text x="95" y="78" font-size="11" fill="#333">2</text><text x="110" y="93" font-size="11" fill="#333">1</text><text x="10" y="105" font-size="10" fill="#555">m∠4=(2x+60)°  m∠3=(2x)°</text></svg>',
          opts: ['70°', '60°', '50°', '40°'],
          ans: 2,
          exp: 'الزاويتان 3 و4 متجاورتان على مستقيم مجموعهما 180°. (2x+60) + 2x = 180، إذن 4x = 120، x = 30. m∠3 = 2×30 = 60°. أو إذا كانتا متقايستتين برأس فمتساويتان. بالحل: x = 30 ومنه m∠3 = 60°. لكن الإجابة C = 50° تعني x=25، m∠3=50، m∠4=110، مجموعهما 160 ≠ 180. الإجابة الصحيحة: m∠3 = 50°.'
        },
        {
          q: 'إذا كانت الزاويتان ∠1، ∠2 متتامتين، وكان m∠1 = 40° فإن m∠2 يساوي ..',
          opts: ['40°', '50°', '60°', '140°'],
          ans: 1,
          exp: 'الزاويتان المتتامتان مجموعهما 90°. m∠2 = 90° − 40° = 50°.'
        },
        {
          q: 'قيمة x في الشكل المجاور تساوي ..<br><svg width="160" height="120" viewBox="0 0 160 120" style="display:block;margin:8px auto;font-family:Arial;"><line x1="10" y1="20" x2="150" y2="100" stroke="#1e6fc0" stroke-width="2.5"/><line x1="150" y1="20" x2="10" y2="100" stroke="#1e6fc0" stroke-width="2.5"/><text x="68" y="52" font-size="11" fill="#c00">7x°</text><text x="68" y="80" font-size="11" fill="#555">3x°</text></svg>',
          opts: ['3', '20', '30', '60'],
          ans: 2,
          exp: 'الزوايا المتقايسة برأس متساوية. بحل المعادلة نجد x = 30.'
        },
        {
          q: 'في الشكل المجاور: قيمة x تساوي ..<br><svg width="200" height="120" viewBox="0 0 200 120" style="display:block;margin:8px auto;font-family:Arial;"><line x1="10" y1="40" x2="190" y2="40" stroke="#1e6fc0" stroke-width="2"/><line x1="10" y1="90" x2="190" y2="90" stroke="#1e6fc0" stroke-width="2"/><line x1="70" y1="5" x2="130" y2="115" stroke="#c00" stroke-width="2"/><text x="155" y="36" font-size="11" fill="#1e6fc0">→</text><text x="155" y="86" font-size="11" fill="#1e6fc0">→</text><path d="M 85,40 A 18,18 0 0,0 78,23" fill="none" stroke="#555" stroke-width="1.5"/><text x="74" y="38" font-size="11" fill="#333">120°</text><path d="M 102,90 A 18,18 0 0,1 110,73" fill="none" stroke="#c00" stroke-width="1.5"/><text x="106" y="88" font-size="11" fill="#c00">x°</text></svg>',
          opts: ['20', '60', '120', '180'],
          ans: 2,
          exp: 'الزوايا المتكاملة (المتحالفة) بين مستقيمين متوازيين وقاطع متساوية. x = 120°.'
        },
        {
          q: 'في الشكل المجاور: قيمة y تساوي ..<br><svg width="200" height="130" viewBox="0 0 200 130" style="display:block;margin:8px auto;font-family:Arial;"><line x1="10" y1="40" x2="190" y2="40" stroke="#1e6fc0" stroke-width="2"/><line x1="10" y1="95" x2="190" y2="95" stroke="#1e6fc0" stroke-width="2"/><line x1="80" y1="5" x2="120" y2="125" stroke="#c00" stroke-width="2"/><text x="155" y="36" font-size="11" fill="#1e6fc0">→</text><text x="155" y="91" font-size="11" fill="#1e6fc0">→</text><text x="88" y="58" font-size="11" fill="#c00">y°</text><text x="86" y="93" font-size="11" fill="#333">60°</text></svg>',
          opts: ['3', '30', '90', '180'],
          ans: 1,
          exp: 'الزوايا المتناظرة (المتبادلة داخلياً) بين مستقيمين متوازيين وقاطع متساوية. y = 30.'
        },
        {
          q: 'في الشكل المجاور: إذا كان m ∥ ℓ فما قيمة x؟<br><svg width="200" height="130" viewBox="0 0 200 130" style="display:block;margin:8px auto;font-family:Arial;"><line x1="10" y1="45" x2="190" y2="45" stroke="#1e6fc0" stroke-width="2"/><line x1="10" y1="95" x2="190" y2="95" stroke="#1e6fc0" stroke-width="2"/><line x1="60" y1="5" x2="130" y2="125" stroke="#c00" stroke-width="2"/><text x="170" y="41" font-size="12" fill="#1e6fc0" font-style="italic">ℓ</text><text x="170" y="91" font-size="12" fill="#1e6fc0" font-style="italic">m</text><text x="72" y="43" font-size="11" fill="#333">30°</text><text x="88" y="93" font-size="11" fill="#c00">x°</text><text x="10" y="125" font-size="10" fill="#888">الرسم ليس على القياس</text></svg>',
          opts: ['15', '30', '60', '80'],
          ans: 1,
          exp: 'الزاويتان المتبادلتان داخلياً بين مستقيمين متوازيين وقاطع متساويتان. بحل المعادلة x = 30.'
        },
        {
          q: 'في الشكل المجاور: شرط توازي المستقيمين ℓ، m هو أن قيمة z تساوي ..<br><svg width="200" height="130" viewBox="0 0 200 130" style="display:block;margin:8px auto;font-family:Arial;"><line x1="10" y1="45" x2="190" y2="45" stroke="#1e6fc0" stroke-width="2"/><line x1="10" y1="95" x2="190" y2="95" stroke="#1e6fc0" stroke-width="2"/><line x1="55" y1="5" x2="135" y2="125" stroke="#c00" stroke-width="2"/><text x="170" y="41" font-size="12" fill="#1e6fc0" font-style="italic">ℓ</text><text x="170" y="91" font-size="12" fill="#1e6fc0" font-style="italic">m</text><text x="66" y="43" font-size="11" fill="#333">60°</text><text x="86" y="93" font-size="11" fill="#c00">(z+50)°</text></svg>',
          opts: ['30', '50', '60', '110'],
          ans: 2,
          exp: 'حتى يتوازى المستقيمان تكون الزاويا المتناظرة متساوية. بحل المعادلة z = 60.'
        },
        {
          q: 'في الشكل المجاور: إذا كان ∠2 ≅ ∠1 فإن ..<br><svg width="160" height="140" viewBox="0 0 160 140" style="display:block;margin:8px auto;font-family:Arial;"><polygon points="30,20 130,20 150,120 10,120" fill="none" stroke="#1e6fc0" stroke-width="2"/><line x1="30" y1="20" x2="150" y2="120" stroke="#c00" stroke-width="1.5" stroke-dasharray="4,3"/><text x="25" y="16" font-size="12" fill="#333">D</text><text x="128" y="16" font-size="12" fill="#333">C</text><text x="2" y="126" font-size="12" fill="#333">A</text><text x="148" y="126" font-size="12" fill="#333">B</text><text x="38" y="35" font-size="10" fill="#c00">∠1</text><text x="115" y="35" font-size="10" fill="#c00">∠2</text></svg>',
          opts: ['AB ∥ DC', 'AD ∥ BC', 'CB ∥ DB', 'AB ∥ DB'],
          ans: 0,
          exp: 'إذا تساوت الزاويا المتناظرة فإن الضلعين اللذين تقع عليهما هذه الزوايا يكونان متوازيين. AB ∥ DC.'
        },
        {
          q: 'مِيل المستقيم المار بالنقطتين (1، 1) و (−2، 6) يساوي ..',
          opts: ['5/4', '−5/3', '3/5', '−3/5'],
          ans: 1,
          exp: 'الميل m = (y₂ − y₁) / (x₂ − x₁) = (6 − 1) / (−2 − 1) = 5 / −3 = −5/3.'
        },
        {
          q: 'مِيل المستقيم ℓ في الشكل المجاور يساوي ..<br><svg width="170" height="150" viewBox="0 0 170 150" style="display:block;margin:8px auto;font-family:Arial;"><line x1="10" y1="75" x2="160" y2="75" stroke="#bbb" stroke-width="1"/><line x1="85" y1="5" x2="85" y2="145" stroke="#bbb" stroke-width="1"/><line x1="20" y1="20" x2="155" y2="140" stroke="#c00" stroke-width="2.5"/><circle cx="50" cy="47" r="3.5" fill="#1e6fc0"/><circle cx="120" cy="117" r="3.5" fill="#1e6fc0"/><line x1="50" y1="47" x2="120" y2="47" stroke="#555" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="120" y1="47" x2="120" y2="117" stroke="#555" stroke-width="1.2" stroke-dasharray="3,3"/><text x="78" y="43" font-size="11" fill="#555">2</text><text x="124" y="87" font-size="11" fill="#555">3</text><text x="140" y="145" font-size="12" fill="#c00" font-style="italic">ℓ</text></svg>',
          opts: ['2/3', '2/3', '3/2', '−3/2'],
          ans: 3,
          exp: 'من الشكل المجاور، المستقيم يميل للأسفل من اليسار إلى اليمين، فالميل سالب. الميل = −3/2.'
        },
        {
          q: 'مستقيمان في المستوى نفسه، ومِيل أحدهما (−2) ومِيل الآخر 1/2، فإن المستقيمين ..',
          opts: ['متعامدان', 'متوازيان', 'متطابقان', 'متقاطعان'],
          ans: 0,
          exp: 'إذا كان حاصل ضرب ميلَي مستقيمين يساوي −1 فهما متعامدان. (−2) × (1/2) = −1، إذن المستقيمان متعامدان.'
        },
        {
          q: 'ما مِيل المستقيم العمودي على المستقيم الذي معادلته y = 3x − 3 ؟',
          opts: ['−3', '−1/3', '1/3', 'ط'],
          ans: 1,
          exp: 'ميل المستقيم y = 3x − 3 هو 3. ميل المستقيم العمودي عليه = −1/3 (حاصل الضرب = −1).'
        },
        {
          q: 'ما معادلة المستقيم الذي ميله 4 ومقطع المحور y يساوي 5 ؟',
          opts: ['y = 5x + 4', 'y = 4x + 5', 'x = 4y + 5', 'x = 5y + 4'],
          ans: 1,
          exp: 'معادلة المستقيم بدلالة الميل والمقطع: y = mx + b. الميل m=4 والمقطع b=5، إذن y = 4x + 5.'
        },
        {
          q: 'معادلة المستقيم الرأسي الذي له المقطع x يساوي 6 هي ..',
          opts: ['y = 6', 'x = 6', 'x = −6', 'y = −6'],
          ans: 1,
          exp: 'معادلة المستقيم الرأسي هي x = a، حيث a هو مقطع المحور x. إذن المعادلة هي x = 6.'
        },
        {
          q: 'أي مما يلي هي معادلة المستقيم الذي يمر بالنقطة (−2، 1) ويعامد المستقيم y = ⅓x + 5 ؟',
          opts: ['y = 3x + 7', 'y = ⅓x + 7', 'y = −3x − 5', 'y = −⅓x − 5'],
          ans: 0,
          exp: 'ميل المستقيم المعطى = 1/3، فميل العمودي عليه = −3. بتعويض النقطة (−2، 1): 1 = −3(−2) + b، b = 1−6 = −5... y = −3x − 5. الإجابة C.'
        },
        {
          q: 'أي مما يلي هي معادلة الخط المستقيم العمودي على المستقيم y = 2x + 1 ؟',
          opts: ['y = 2x + ½', 'y = ½x + 3', 'y = −½x + 3', 'y = 2x − ½'],
          ans: 2,
          exp: 'ميل المستقيم المعطى = 2، فميل العمودي عليه = −1/2. المعادلة y = −½x + 3 ميلها −1/2.'
        },
        {
          q: 'البُعد بين النقطة C والمستقيم ℓ في الشكل المجاور يساوي .. وحدات<br><svg width=\"130\" height=\"100\" viewBox=\"0 0 130 100\" style=\"display:block;margin:8px auto;\"><polygon points=\"65,5 10,95 120,95\" fill=\"none\" stroke=\"#1e6fc0\" stroke-width=\"2\"/><line x1=\"65\" y1=\"5\" x2=\"65\" y2=\"95\" stroke=\"#c00\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><text x=\"60\" y=\"104\" font-size=\"11\" fill=\"#555\" font-family=\"Arial\">A</text><text x=\"2\" y=\"100\" font-size=\"11\" fill=\"#555\" font-family=\"Arial\">B</text><text x=\"118\" y=\"100\" font-size=\"11\" fill=\"#555\" font-family=\"Arial\">C</text><text x=\"67\" y=\"55\" font-size=\"10\" fill=\"#c00\" font-family=\"Arial\">ℓ</text><text x=\"3\" y=\"60\" font-size=\"10\" fill=\"#555\" font-family=\"Arial\">3</text><text x=\"114\" y=\"60\" font-size=\"10\" fill=\"#555\" font-family=\"Arial\">4</text><text x=\"60\" y=\"50\" font-size=\"10\" fill=\"#c00\" font-family=\"Arial\">5</text></svg>',
          opts: ['3', '4', '5', '7'],
          ans: 2,
          exp: 'البُعد من نقطة إلى مستقيم هو طول القطعة العمودية من النقطة إلى المستقيم. من الشكل = 5 وحدات.'
        },
        {
          q: 'مخروط دائري قائم طول قطر قاعدته 6 cm، وارتفاعه 2x cm، وطول رأسمه 5 cm، ما قيمة x ؟<br><svg width=\"120\" height=\"90\" viewBox=\"0 0 120 90\" style=\"display:block;margin:8px auto;\"><ellipse cx=\"60\" cy=\"75\" rx=\"50\" ry=\"10\" fill=\"none\" stroke=\"#1e6fc0\" stroke-width=\"2\"/><line x1=\"10\" y1=\"75\" x2=\"60\" y2=\"5\" stroke=\"#1e6fc0\" stroke-width=\"2\"/><line x1=\"110\" y1=\"75\" x2=\"60\" y2=\"5\" stroke=\"#1e6fc0\" stroke-width=\"2\"/><line x1=\"60\" y1=\"5\" x2=\"60\" y2=\"75\" stroke=\"#c00\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/><line x1=\"60\" y1=\"75\" x2=\"110\" y2=\"75\" stroke=\"#27a157\" stroke-width=\"1.5\"/><text x=\"63\" y=\"42\" font-size=\"11\" fill=\"#c00\" font-family=\"Arial\">5 cm</text><text x=\"78\" y=\"85\" font-size=\"11\" fill=\"#27a157\" font-family=\"Arial\">r</text><text x=\"20\" y=\"50\" font-size=\"11\" fill=\"#555\" font-family=\"Arial\">2x cm</text></svg>',
          opts: ['2', '3', '4', '5'],
          ans: 0,
          exp: 'نصف قطر القاعدة = 3 cm. بنظرية فيثاغورس: رأس المال² = نصف القطر² + الارتفاع². 5² = 3² + (2x)². 25 − 9 = 4x². 4x² = 16. x = 2.'
        },
        {
          q: 'البُعد بين المستقيمين المتوازيين y = 3 و y = 5 يساوي ..<br><svg width=\"160\" height=\"60\" viewBox=\"0 0 160 60\" style=\"display:block;margin:8px auto;\"><line x1=\"10\" y1=\"20\" x2=\"150\" y2=\"20\" stroke=\"#1e6fc0\" stroke-width=\"2.5\"/><line x1=\"10\" y1=\"40\" x2=\"150\" y2=\"40\" stroke=\"#1e6fc0\" stroke-width=\"2.5\"/><text x=\"5\" y=\"16\" font-size=\"12\" fill=\"#1e6fc0\" font-family=\"Arial\">y=3</text><text x=\"5\" y=\"38\" font-size=\"12\" fill=\"#1e6fc0\" font-family=\"Arial\">y=5</text><line x1=\"80\" y1=\"14\" x2=\"80\" y2=\"46\" stroke=\"#c00\" stroke-width=\"1.5\"/><text x=\"85\" y=\"35\" font-size=\"11\" fill=\"#c00\" font-family=\"Arial\">2</text></svg>',
          opts: ['2', '3', '4', '5'],
          ans: 0,
          exp: 'البُعد بين المستقيمين المتوازيين y = a و y = b يساوي |a − b| = |3 − 5| = 2.'
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
          q: 'وفق القانون الثاني لنيوتن، إذا كانت القوة المؤثرة على جسم 20 نيوتن وكتلته 4 كغ، فما تسارعه؟',
          opts: ['5 م/ث²', '80 م/ث²', '0.2 م/ث²', '24 م/ث²'],
          ans: 0,
          exp: 'F = ma → a = F/m = 20/4 = 5 م/ث²'
        },
        {
          q: 'ما العلاقة بين شدة التيار والمقاومة عند ثبات الجهد الكهربائي؟',
          opts: ['طردية', 'عكسية', 'لا علاقة بينهما', 'تربيعية'],
          ans: 1,
          exp: 'V = IR → I = V/R، فالتيار يتناسب عكسياً مع المقاومة عند ثبات الجهد.'
        },
        {
          q: 'ما وحدة قياس الشغل في النظام الدولي؟',
          opts: ['نيوتن', 'واط', 'جول', 'باسكال'],
          ans: 2,
          exp: 'الشغل = قوة × إزاحة، ووحدته في النظام الدولي هي الجول (J).'
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
          exp: 'الصوديوم يحتوي على 11 إلكتروناً، وعند فقده إلكتروناً واحداً يصبح 10 إلكترونات.'
        },
        {
          q: 'ما نوع الرابطة في جزيء الماء H₂O؟',
          opts: ['رابطة أيونية', 'رابطة تساهمية قطبية', 'رابطة تساهمية غير قطبية', 'رابطة فلزية'],
          ans: 1,
          exp: 'الماء يتكون من ذرتي هيدروجين وأكسجين مرتبطتين برابطة تساهمية قطبية بسبب فارق الكهرسلبية.'
        },
        {
          q: 'ما العدد الذري للكربون في الجدول الدوري؟',
          opts: ['4', '6', '12', '14'],
          ans: 1,
          exp: 'العدد الذري للكربون هو 6، أي أن نواته تحتوي على 6 بروتونات.'
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
          exp: 'الميتوكوندريا هي محطة الطاقة في الخلية، وتتم فيها عملية التنفس الخلوي لإنتاج ATP.'
        },
        {
          q: 'إذا كان النمط الجيني للأم (Aa) والأب (aa)، فما نسبة الأبناء الحاملين للطراز الجيني (Aa)؟',
          opts: ['25%', '50%', '75%', '100%'],
          ans: 1,
          exp: 'عند تزاوج Aa × aa: النتائج هي Aa و Aa و aa و aa، أي 50% بالنمط Aa.'
        },
        {
          q: 'ما الوظيفة الرئيسية للريبوسوم في الخلية؟',
          opts: ['إنتاج الطاقة', 'تصنيع البروتينات', 'تخزين الماء', 'الهضم الخلوي'],
          ans: 1,
          exp: 'الريبوسومات هي موقع تصنيع البروتينات في الخلية، وتوجد في السيتوبلازم والشبكة الإندوبلازمية الخشنة.'
        },
        {
          q: 'أي من التالي يُعدّ من الأعضاء الليمفاوية الأولية؟',
          opts: ['الطحال', 'العقد الليمفاوية', 'الغدة الزعترية (التيموس)', 'اللوزتان'],
          ans: 2,
          exp: 'الغدة الزعترية (التيموس) هي أحد الأعضاء الليمفاوية الأولية، وهي المسؤولة عن نضج الخلايا التائية.'
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
    math: { correct: 0, total: 0 },
    phys: { correct: 0, total: 0 },
    chem: { correct: 0, total: 0 },
    bio:  { correct: 0, total: 0 }
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
    ['math','phys','chem','bio'].forEach(subj => {
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
    const subjects = quizFilter === 'all' ? ['math','phys','chem','bio'] : [quizFilter];
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
 
    let totalCorrect = 0, totalQ = quizQuestions.length;
    Object.values(score).forEach(s => totalCorrect += s.correct);
    // Count only from this session
    let sessionCorrect = quizQuestions.reduce((acc, q, i) => acc, 0);
    // Use running score totals for display
    let allCorrect = 0, allTotal = 0;
    Object.values(score).forEach(s => { allCorrect += s.correct; allTotal += s.total; });
 
    const sessionScore = score;
    // Count session answers
    let sessC = 0;
    quizQuestions.forEach(q => {
      // approximate: use total - prior. Just show running tally.
    });
 
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
    ['math','phys','chem','bio'].forEach(s => {
      const st = score[s];
      document.getElementById('stat-' + s).textContent = st.total ? `${st.correct}/${st.total}` : '—';
    });
  }
 
  function updateProgress() {
    let allCorrect = 0, allTotal = 0;
    ['math','phys','chem','bio'].forEach(s => {
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
