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
          q: 'إذا كانت زاويتان متكاملتان، وإحداهما 35°، فما مقياس الأخرى؟',
          opts: ['55°', '65°', '145°', '325°'],
          ans: 0,
          exp: 'الزوايا المتكاملة مجموعها 90°. إذن: 90 − 35 = 55°.'
        },
        {
          q: 'العبارة "p أو q" (p ∨ q) تكون خاطئة فقط إذا:',
          opts: ['كانت p صحيحة وq خاطئة', 'كانت p خاطئة وq صحيحة', 'كانتا كلتاهما خاطئتين', 'كانتا كلتاهما صحيحتين'],
          ans: 2,
          exp: 'الفصل (∨) يكون خاطئاً فقط حين تكون كلتا العبارتين خاطئتين.'
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
