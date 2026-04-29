// بيانات المواد والمواضيع والأسئلة
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
      }
    ]
  },
  phys: {
    name: 'الفيزياء', color: '#3a9a2a',
    bgLight: '#eaf3de', textDark: '#27500a',
    topics: [
      { name: 'قوانين نيوتن للحركة', level: 'أساسي' },
      { name: 'الطاقة الحركية والكامنة', level: 'أساسي' }
    ],
    questions: [
      {
        q: 'جسم كتلته 5 كغ يتحرك بسرعة 4 م/ث، ما طاقته الحركية؟',
        opts: ['20 جول', '40 جول', '80 جول', '10 جول'],
        ans: 1,
        exp: 'Ek = ½mv² = ½ × 5 × 16 = 40 جول.'
      }
    ]
  },
  chem: {
    name: 'الكيمياء', color: '#7c3fbf',
    bgLight: '#eeedfe', textDark: '#3c3489',
    topics: [
      { name: 'التركيب الذري ونظائر العناصر', level: 'أساسي' },
      { name: 'الروابط الكيميائية', level: 'متوسط' }
    ],
    questions: [
      {
        q: 'أيون الصوديوم Na⁺ يحتوي على كم إلكتروناً؟',
        opts: ['11', '10', '12', '23'],
        ans: 1,
        exp: 'الصوديوم يحتوي على 11 إلكتروناً، وعند فقده إلكتروناً واحداً يصبح 10 إلكترونات.'
      }
    ]
  },
  bio: {
    name: 'الأحياء', color: '#d45a1a',
    bgLight: '#faeeda', textDark: '#633806',
    topics: [
      { name: 'تركيب الخلية ووظائفها', level: 'أساسي' },
      { name: 'الوراثة وقوانين مندل', level: 'متوسط' }
    ],
    questions: [
      {
        q: 'أين تتم عملية التنفس الخلوي في الخلية؟',
        opts: ['النواة', 'الميتوكوندريا', 'البلاستيد', 'الريبوسوم'],
        ans: 1,
        exp: 'الميتوكوندريا هي محطة الطاقة في الخلية، وتتم فيها عملية التنفس الخلوي لإنتاج ATP.'
      }
    ]
  }
};

// حالة التطبيق
let selectedSubject = 'math';
let quizFilter = 'all';
let currentQuizQuestions = [];
let currentQIndex = 0;
let userScore = 0;

// تبديل التبويبات
function switchTab(tabId, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + tabId).classList.add('active');
  if (btn) btn.classList.add('active');
}

// اختيار المادة في نظرة عامة
function selectSubject(subj, el) {
  selectedSubject = subj;
  document.querySelectorAll('.subject-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  renderOverviewTopics(subj);
}

// عرض مواضيع المادة المختارة
function renderOverviewTopics(subj) {
  const d = DATA[subj];
  const list = document.getElementById('overview-topics-list');
  const title = document.getElementById('overview-topics-title');
  
  title.innerHTML = `<span style="width:10px;height:10px;border-radius:50%;background:${d.color};display:inline-block;"></span> مواضيع ${d.name}`;
  
  list.innerHTML = d.topics.map(t => `
    <div class="topic-item">
      <div class="topic-dot" style="background:${d.color};"></div>
      <span>${t.name}</span>
      <span class="topic-badge" style="background:${d.bgLight}; color:${d.textDark};">${t.level}</span>
    </div>
  `).join('');
}

// عرض جميع المواضيع في تبويب "المواضيع"
function renderAllTopics() {
  ['math', 'phys', 'chem', 'bio'].forEach(subj => {
    const d = DATA[subj];
    const container = document.getElementById('all-' + subj + '-topics');
    if (container) {
      container.innerHTML = d.topics.map(t => `
        <div class="topic-item">
          <div class="topic-dot" style="background:${d.color};"></div>
          <span>${t.name}</span>
        </div>
      `).join('');
    }
  });
}

// بدء التشغيل عند تحميل الصفحة
window.onload = () => {
  renderOverviewTopics('math');
  renderAllTopics();
};