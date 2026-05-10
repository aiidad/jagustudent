const STUDENTS = [
  { id:'povt-1',  pass:'1',  name:'Абдиваитов Айдарбек Эркебаевич',     group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-2',  pass:'2',  name:'Абдуваситов Афтандил Аскарбекович',   group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-3',  pass:'3',  name:'Алиев Байтурбек Тилекович',           group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-4',  pass:'4',  name:'Арзиматов Мусабай',                   group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-5',  pass:'5',  name:'Болотбекова Айдай Шекербековна',      group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-6',  pass:'6',  name:'Гуламжанов Бекназар Насибжанович',    group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-7',  pass:'7',  name:'Курбаналиев Бексултан Бектурсунович', group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-8',  pass:'8',  name:'Макамбаев Мыктыбек Ашуралиевич',     group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-9',  pass:'9',  name:'Масыркулов Ыскак Кумарбекович',       group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-10', pass:'10', name:'Момунов Нурдин Алижанович',           group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-11', pass:'11', name:'Нематова Айгерим Алмазбековна',       group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-12', pass:'12', name:'Нурматов Эрлан Ырысбекович',          group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-13', pass:'13', name:'Орунбекова Диана Илимбековна',        group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-14', pass:'14', name:'Паизбекова Анжелика Орозалиевна',     group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-15', pass:'15', name:'Салибаева Уулкан Кубаничбековна',     group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-16', pass:'16', name:'Смадияров Сыймык Даниярович',         group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-17', pass:'17', name:'Токсонбаев Муса Сулайманович',        group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-18', pass:'18', name:'Тургунбаев Эрнист Бакытбекович',      group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-19', pass:'19', name:'Шайдуллаев Аскат Алмазбекович',       group:'POVTAS4-23', year:3, contract:20200 },
  { id:'povt-20', pass:'20', name:'Эргешова Нурсейил Торомурзаевна',     group:'POVTAS4-23', year:3, contract:20200 },
];

const TEACHERS = [
  { id:'mug-100', pass:'100', name:'Асилбек уулу К.',  subject:'db',    subjectName:'Разработка и эксплуатация удаленных базы данных',                                                              degree:'Маг.' },
  { id:'mug-101', pass:'101', name:'Алмаз к. А.',       subject:'oop',   subjectName:'УМ3 Написание программного кода с использованием языков объектно-ориентированного программирования, определения и манипулирования данными', degree:'Маг.' },
  { id:'mug-102', pass:'102', name:'Исаева К. Ш.',      subject:'debug', subjectName:'УМ8 Проверка и отладка  программного кода',                                                           degree:'Маг.' },
  { id:'mug-103', pass:'103', name:'Рахманова А. Т.',   subject:'git',   subjectName:'УМ6 Работа с системой контроля версий',                                                              degree:'Маг.' },
  { id:'mug-104', pass:'104', name:'Манасбекова Г. А.', subject:'style', subjectName:'УМ7 Оформление программного кода в соответствии с установленными требованиями',                     degree:'Маг.' },
  { id:'mug-105', pass:'105', name:'Айдарова Бибигүл',  subject:'safe',  subjectName:'УМ9 Техника безопасности и охрана труда',                                                            degree:'Маг.' },
  { id:'mug-106', pass:'106', name:'Аскаров Жолон',     subject:'ebiz',  subjectName:'Электронный бизнес',                                                                             degree:'Маг.' },
];

const SCHEDULE = [
  { subjectKey:'db',    day:'Дүйшөмбү', dayIdx:1, para:1, time:'08:00–09:20', groups:['POVTAS4-23'] },
  { subjectKey:'oop',   day:'Дүйшөмбү', dayIdx:1, para:2, time:'09:30–10:50', groups:['POVTAS4-23'] },
  { subjectKey:'debug', day:'Дүйшөмбү', dayIdx:1, para:3, time:'11:00–12:20', groups:['POVTAS4-23'] },
  { subjectKey:'git',   day:'Шейшемби', dayIdx:2, para:1, time:'08:00–09:20', groups:['POVTAS4-23'] },
  { subjectKey:'style', day:'Шейшемби', dayIdx:2, para:2, time:'09:30–10:50', groups:['POVTAS4-23'] },
  { subjectKey:'safe',  day:'Шейшемби', dayIdx:2, para:3, time:'11:00–12:20', groups:['POVTAS4-23'] },
  { subjectKey:'ebiz',  day:'Шаршемби', dayIdx:3, para:1, time:'08:00–09:20', groups:['POVTAS4-23'] },
  { subjectKey:'db',    day:'Шаршемби', dayIdx:3, para:2, time:'09:30–10:50', groups:['POVTAS4-23'] },
  { subjectKey:'oop',   day:'Шаршемби', dayIdx:3, para:3, time:'11:00–12:20', groups:['POVTAS4-23'] },
  { subjectKey:'debug', day:'Бейшемби', dayIdx:4, para:1, time:'08:00–09:20', groups:['POVTAS4-23'] },
  { subjectKey:'git',   day:'Бейшемби', dayIdx:4, para:2, time:'09:30–10:50', groups:['POVTAS4-23'] },
  { subjectKey:'style', day:'Бейшемби', dayIdx:4, para:3, time:'11:00–12:20', groups:['POVTAS4-23'] },
  { subjectKey:'safe',  day:'Жума', dayIdx:5, para:1, time:'08:00–09:20', groups:['POVTAS4-23'] },
  { subjectKey:'ebiz',  day:'Жума', dayIdx:5, para:2, time:'09:30–10:50', groups:['POVTAS4-23'] },
  { subjectKey:'db',    day:'Жума', dayIdx:5, para:3, time:'11:00–12:20', groups:['POVTAS4-23'] },
];

const DAYS = [
  { idx:1, label:'Дүйшөмбү', short:'Дүй' },
  { idx:2, label:'Шейшемби', short:'Шей' },
  { idx:3, label:'Шаршемби', short:'Шар' },
  { idx:4, label:'Бейшемби', short:'Бей' },
  { idx:5, label:'Жума',     short:'Жум' },
];

const PAGES = [
  { label:'1-пара', dates:['02.09','09.09','16.09','23.09','30.09','07.10','14.10','21.10','28.10','04.11'] },
  { label:'2-пара', dates:['11.11','18.11','25.11','02.12','09.12','16.12','23.12','13.01','20.01','27.01'] },
  { label:'3-пара', dates:['03.02','10.02','17.02','24.02','03.03','10.03','17.03','24.03','31.03','07.04'] },
];

const GRADES_KEY = 'jagu_grades';

function loadGradesFromStorage() {
  try { return JSON.parse(localStorage.getItem(GRADES_KEY) || '{}'); }
  catch(e) { return {}; }
}
function saveGradesToStorage() {
  localStorage.setItem(GRADES_KEY, JSON.stringify(gradesDB));
}

let gradesDB       = loadGradesFromStorage();
let currentUser    = null;
let currentRole    = null;
let journalGroup   = null;
let journalPageIdx = null;
let selectedStDay  = 1;
let selectedTcDay  = 1;

function switchLoginTab(mode) {
  document.getElementById('login-form-student').style.display = mode === 'student' ? 'block' : 'none';
  document.getElementById('login-form-teacher').style.display = mode === 'teacher' ? 'block' : 'none';
  document.getElementById('btn-tab-st').classList.toggle('active', mode === 'student');
  document.getElementById('btn-tab-tc').classList.toggle('active', mode === 'teacher');
  hideErr();
}

function loginStudent() {
  const id   = document.getElementById('st-login-id').value.trim();
  const pass = document.getElementById('st-login-pass').value.trim();
  if (!id || !pass) { showErr('Логин жана сырсөз жазыңыз.'); return; }
  const st = STUDENTS.find(s => s.id === id && s.pass === pass);
  if (!st) { showErr('Логин же сырсөз туура эмес!'); return; }
  currentUser = st;
  currentRole = 'student';
  openStudentPage();
}

function loginTeacher() {
  const id   = document.getElementById('tc-login-id').value.trim();
  const pass = document.getElementById('tc-login-pass').value.trim();
  if (!id || !pass) { showErr('Логин жана сырсөз жазыңыз.'); return; }
  const tc = TEACHERS.find(t => t.id === id && t.pass === pass);
  if (!tc) { showErr('Логин же сырсөз туура эмес!'); return; }
  currentUser = tc;
  currentRole = 'teacher';
  openTeacherPage();
}

function logout() {
  currentUser    = null;
  currentRole    = null;
  journalGroup   = null;
  journalPageIdx = null;
  ['st-login-id','st-login-pass','tc-login-id','tc-login-pass']
    .forEach(id => { document.getElementById(id).value = ''; });
  hideErr();
  showPage('page-login');
}

function showErr(msg) {
  const el = document.getElementById('login-error');
  el.textContent   = msg;
  el.style.display = 'block';
}
function hideErr() {
  document.getElementById('login-error').style.display = 'none';
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function resetNavBtns(pageId) {
  document.querySelectorAll('#' + pageId + ' .nav-btn')
    .forEach(b => b.classList.remove('active'));
}

function openStudentPage() {
  showPage('page-student');
  document.getElementById('st-nav-user').textContent = currentUser.name;
  ['st-schedule','st-grades','st-profile'].forEach(id =>
    document.getElementById(id).classList.remove('active'));
  document.getElementById('st-schedule').classList.add('active');
  resetNavBtns('page-student');
  document.querySelector('#page-student .nav-btn').classList.add('active');
  selectedStDay = 1;
  renderStudentSchedule();
}

function openTeacherPage() {
  showPage('page-teacher');
  document.getElementById('tc-nav-user').textContent = currentUser.name;
  ['tc-schedule','tc-journal','tc-profile'].forEach(id =>
    document.getElementById(id).classList.remove('active'));
  document.getElementById('tc-schedule').classList.add('active');
  resetNavBtns('page-teacher');
  document.querySelector('#page-teacher .nav-btn').classList.add('active');
  selectedTcDay = 1;
  renderTeacherSchedule();
  setupJournalFilters();
}

function stTab(name, btn) {
  ['st-schedule','st-grades','st-profile'].forEach(id =>
    document.getElementById(id).classList.remove('active'));
  document.getElementById('st-' + name).classList.add('active');
  resetNavBtns('page-student');
  if (btn) btn.classList.add('active');
  if (name === 'schedule') renderStudentSchedule();
  if (name === 'grades')   renderStudentGrades();
  if (name === 'profile')  renderStudentProfile();
}

function tcTab(name, btn) {
  ['tc-schedule','tc-journal','tc-profile'].forEach(id =>
    document.getElementById(id).classList.remove('active'));
  document.getElementById('tc-' + name).classList.add('active');
  resetNavBtns('page-teacher');
  if (btn) btn.classList.add('active');
  if (name === 'schedule') renderTeacherSchedule();
  if (name === 'profile')  renderTeacherProfile();
}

function renderStudentSchedule() {
  const container = document.getElementById('st-schedule-cards');

  const dayBtns = DAYS.map(d =>
    `<button class="day-btn ${selectedStDay === d.idx ? 'day-btn-active' : ''}"
             onclick="selectStDay(${d.idx})">
       <span class="day-btn-num">${d.idx}</span>
       <span class="day-btn-label">${d.short}</span>
     </button>`).join('');

  const lessons = SCHEDULE
    .filter(s => s.dayIdx === selectedStDay && s.groups.includes(currentUser.group))
    .sort((a, b) => a.para - b.para);

  const cards = lessons.length
    ? lessons.map(s => {
        const tc = TEACHERS.find(t => t.subject === s.subjectKey);
        return `<div class="sched-card">
          <div class="sched-para-badge">${s.para}-пара</div>
          <div class="sched-subject">${tc ? tc.subjectName : s.subjectKey}</div>
          <div class="sched-info">👤 Мугалим: <strong>${tc ? tc.name : '—'}</strong></div>
          <span class="sched-time">⏰ ${s.time}</span>
        </div>`;
      }).join('')
    : '<div class="sched-empty">Бул күнгө сабак жок</div>';

  const dayName = DAYS.find(d => d.idx === selectedStDay)?.label || '';
  container.innerHTML = `
    <div class="day-scale">${dayBtns}</div>
    <div class="day-title">${dayName} — сабактар</div>
    <div class="sched-cards-row">${cards}</div>`;
}

function selectStDay(idx) {
  selectedStDay = idx;
  renderStudentSchedule();
}

function renderTeacherSchedule() {
  const container = document.getElementById('tc-schedule-cards');

  const dayBtns = DAYS.map(d =>
    `<button class="day-btn ${selectedTcDay === d.idx ? 'day-btn-active' : ''}"
             onclick="selectTcDay(${d.idx})">
       <span class="day-btn-num">${d.idx}</span>
       <span class="day-btn-label">${d.short}</span>
     </button>`).join('');

  const lessons = SCHEDULE
    .filter(s => s.dayIdx === selectedTcDay && s.subjectKey === currentUser.subject)
    .sort((a, b) => a.para - b.para);

  const cards = lessons.length
    ? lessons.map(s =>
        `<div class="sched-card">
          <div class="sched-para-badge">${s.para}-пара</div>
          <div class="sched-subject">${currentUser.subjectName}</div>
          <div class="sched-info">👥 Топтор: <strong>${s.groups.join(', ')}</strong></div>
          <span class="sched-time">⏰ ${s.time}</span>
        </div>`).join('')
    : '<div class="sched-empty">Бул күнгө сабак жок</div>';

  const dayName = DAYS.find(d => d.idx === selectedTcDay)?.label || '';
  container.innerHTML = `
    <div class="day-scale">${dayBtns}</div>
    <div class="day-title">${dayName} — сабактар</div>
    <div class="sched-cards-row">${cards}</div>`;
}

function selectTcDay(idx) {
  selectedTcDay = idx;
  renderTeacherSchedule();
}

function renderStudentGrades() {
  gradesDB = loadGradesFromStorage();
  const container = document.getElementById('st-grades-cards');
  const mySubjs   = getStudentSubjects(currentUser.group);

  if (!mySubjs.length) {
    container.innerHTML = '<div style="text-align:center;color:#9ca3af;padding:2rem">Сабак жок</div>';
    document.getElementById('st-overall-avg-bar').style.display = 'none';
    return;
  }

  let total = 0, count = 0;

  const rows = mySubjs.map(subj => {
    const tc  = TEACHERS.find(t => t.subject === subj);
    const avg = calcStudentSubjAvg(currentUser.id, subj);
    if (avg !== null) { total += avg; count++; }
    const disp = avg !== null ? avg.toFixed(2) : '<span style="color:#9ca3af">—</span>';
    return `<tr>
      <td style="padding:10px 14px;font-size:.9rem;color:#1e293b">${tc ? tc.subjectName : subj}</td>
      <td style="padding:10px 14px;font-size:.88rem;color:#6b7280">${tc ? tc.name : '—'}</td>
      <td style="padding:10px 14px;text-align:center;font-weight:700"><strong>${disp}</strong></td>
      <td style="padding:10px 14px;text-align:center">${avg !== null ? gradeBadge(avg) : '—'}</td>
    </tr>`;
  }).join('');

  container.innerHTML = `
    <div style="overflow-x:auto;margin-top:1rem">
      <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:10px;box-shadow:0 1px 6px rgba(0,0,0,.08)">
        <thead>
          <tr style="background:#f8fafc">
            <th style="padding:12px 14px;text-align:left;font-size:.85rem;color:#374151;border-bottom:2px solid #e5e7eb">Предмет</th>
            <th style="padding:12px 14px;text-align:left;font-size:.85rem;color:#374151;border-bottom:2px solid #e5e7eb;white-space:nowrap">Мугалим</th>
            <th style="padding:12px 14px;text-align:center;font-size:.85rem;color:#374151;border-bottom:2px solid #e5e7eb">Орточо баа</th>
            <th style="padding:12px 14px;text-align:center;font-size:.85rem;color:#374151;border-bottom:2px solid #e5e7eb">Баа</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function renderStudentProfile() {
  gradesDB = loadGradesFromStorage();
  const s       = currentUser;
  const mySubjs = getStudentSubjects(s.group);
  const initials = s.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  // Build subject rows — same style as teacher profile student rows
  const subjRows = mySubjs.map(subj => {
    const tc   = TEACHERS.find(t => t.subject === subj);
    const saved = gradesDB?.[s.id]?.[subj] || {};
    const dates = Object.keys(saved).sort();

    let total = 0, cnt = 0, nbCount = 0;
    dates.forEach(d => {
      const v = saved[d];
      if (v === 0) nbCount++;
      else if (v !== null && v !== undefined) { total += v; cnt++; }
    });
    const avg = cnt ? (total / cnt) : null;

    if (!dates.length) {
      return `<div class="tc-student-grade-row">
        <div class="tc-student-name">${tc ? tc.subjectName : subj}</div>
        <div style="font-size:.78rem;color:#6b7280;margin-bottom:.2rem">👤 ${tc ? tc.name : '—'}</div>
        <div class="tc-grade-no-data">Баа коюлган жок</div>
      </div>`;
    }

    const gradeDots = dates.map(d => {
      const v = saved[d];
      if (v === 0) return `<div class="tc-grade-dot tc-grade-nb" title="${d}">НБ</div>`;
      const cls = v >= 4 ? 'tc-grade-good' : v === 3 ? 'tc-grade-mid' : 'tc-grade-bad';
      return `<div class="tc-grade-dot ${cls}" title="${d}">${v}</div>`;
    }).join('');

    const avgPct   = avg !== null ? ((avg - 1) / 4) * 100 : 0;
    const avgColor = avg !== null ? (avg >= 4 ? '#16a34a' : avg >= 3 ? '#ca8a04' : '#dc2626') : '#9ca3af';
    const barColor = avg !== null ? (avg >= 4 ? '#16a34a' : avg >= 3 ? '#eab308' : '#ef4444') : '#e5e7eb';

    return `<div class="tc-student-grade-row">
      <div class="tc-student-name">${tc ? tc.subjectName : subj}</div>
      <div style="font-size:.78rem;color:#6b7280;margin-bottom:.5rem">👤 ${tc ? tc.name : '—'}</div>
      <div class="tc-grade-dots-wrap">${gradeDots}</div>
      <div class="tc-grade-bar-wrap">
        <div class="tc-grade-bar-track">
          <div class="tc-grade-bar-fill" style="width:${avgPct}%;background:${barColor}"></div>
        </div>
        <span class="tc-grade-avg-val" style="color:${avgColor}">${avg !== null ? avg.toFixed(2) : '—'}</span>
      </div>
      ${nbCount ? `<div class="tc-nb-label">НБ: ${nbCount}</div>` : ''}
    </div>`;
  }).join('');

  const gradesSection = mySubjs.length
    ? `<div class="tc-grades-list">${subjRows}</div>`
    : '<div style="color:#9ca3af;padding:2rem;text-align:center">Баа коюлган жок</div>';

  document.getElementById('st-profile-body').innerHTML = `
    <div class="profile-grid">
      <div class="profile-card" style="min-width:220px;max-width:260px">
        <div class="profile-section-title">Жеке маалымат</div>
        <div class="profile-avatar">${initials}</div>
        <div class="profile-name">${s.name}</div>
        <div class="profile-role">Студент · ${s.group}</div>
        <div class="profile-row"><span class="profile-key">Логин</span><span class="profile-val">${s.id}</span></div>
        <div class="profile-row"><span class="profile-key">Группа</span><span class="profile-val">${s.group}</span></div>
        <div class="profile-row"><span class="profile-key">Курс</span><span class="profile-val">${s.year}-курс</span></div>
        <div class="profile-row"><span class="profile-key">Контракт</span><span class="profile-val">${s.contract.toLocaleString()} сом/жыл</span></div>
      </div>
      <div class="profile-card" style="flex:1">
        <div class="profile-section-title">Предметтер боюнча баалар</div>
        ${gradesSection}
      </div>
    </div>`;
}

function renderTeacherProfile() {
  gradesDB = loadGradesFromStorage();
  const t        = currentUser;
  const initials = t.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const myGroups = [...new Set(SCHEDULE.filter(s => s.subjectKey === t.subject).flatMap(s => s.groups))];
  const myStudents = STUDENTS.filter(s => myGroups.includes(s.group));

  // Build grade scale rows — each student with their grades for this subject
  const allDates = [];
  myStudents.forEach(st => {
    const saved = gradesDB?.[st.id]?.[t.subject];
    if (saved) Object.keys(saved).forEach(d => { if (!allDates.includes(d)) allDates.push(d); });
  });
  allDates.sort();

  // Build student grade bars (vertical list)
  const studentRows = myStudents.map(st => {
    const saved = gradesDB?.[st.id]?.[t.subject] || {};
    const gradeEntries = allDates.map(d => {
      const v = saved[d];
      if (v === undefined || v === null) return null;
      return { date: d, val: v };
    }).filter(Boolean);

    // Compute avg (excluding НБ=0)
    let total = 0, cnt = 0, nbCount = 0;
    gradeEntries.forEach(e => {
      if (e.val === 0) nbCount++;
      else { total += e.val; cnt++; }
    });
    const avg = cnt ? (total / cnt) : null;

    if (!gradeEntries.length) {
      return `<div class="tc-student-grade-row">
        <div class="tc-student-name">${st.name}</div>
        <div class="tc-grade-no-data">Баа коюлган жок</div>
      </div>`;
    }

    const gradeDots = gradeEntries.map(e => {
      if (e.val === 0) {
        return `<div class="tc-grade-dot tc-grade-nb" title="${e.date}">НБ</div>`;
      }
      const cls = e.val >= 4 ? 'tc-grade-good' : e.val === 3 ? 'tc-grade-mid' : 'tc-grade-bad';
      return `<div class="tc-grade-dot ${cls}" title="${e.date}">${e.val}</div>`;
    }).join('');

    const avgPct   = avg !== null ? ((avg - 1) / 4) * 100 : 0;
    const avgColor = avg !== null ? (avg >= 4 ? '#16a34a' : avg >= 3 ? '#ca8a04' : '#dc2626') : '#9ca3af';
    const barColor = avg !== null ? (avg >= 4 ? '#16a34a' : avg >= 3 ? '#eab308' : '#ef4444') : '#e5e7eb';

    return `<div class="tc-student-grade-row">
      <div class="tc-student-name">${st.name}</div>
      <div class="tc-grade-dots-wrap">${gradeDots}</div>
      <div class="tc-grade-bar-wrap">
        <div class="tc-grade-bar-track">
          <div class="tc-grade-bar-fill" style="width:${avgPct}%;background:${barColor}"></div>
        </div>
        <span class="tc-grade-avg-val" style="color:${avgColor}">${avg !== null ? avg.toFixed(2) : '—'}</span>
      </div>
      ${nbCount ? `<div class="tc-nb-label">НБ: ${nbCount}</div>` : ''}
    </div>`;
  }).join('');

  const gradesSection = myStudents.length
    ? `<div class="tc-grades-list">${studentRows}</div>`
    : '<div style="color:#9ca3af;padding:1rem">Студент жок</div>';

  document.getElementById('tc-profile-body').innerHTML = `
    <div class="profile-grid">
      <div class="profile-card" style="max-width:320px">
        <div class="profile-section-title">Жеке маалымат</div>
        <div class="profile-avatar">${initials}</div>
        <div class="profile-name">${t.name}</div>
        <div class="profile-role">Мугалим · ${t.subjectName}</div>
        <div class="profile-row"><span class="profile-key">Логин</span><span class="profile-val">${t.id}</span></div>
        <div class="profile-row"><span class="profile-key">Предмет</span><span class="profile-val">${t.subjectName}</span></div>
        <div class="profile-row"><span class="profile-key">Топтор</span><span class="profile-val">${myGroups.join(', ') || '—'}</span></div>
      </div>
      <div class="profile-card" style="flex:1">
        <div class="profile-section-title">Баалар — студенттер боюнча</div>
        ${gradesSection}
      </div>
    </div>`;
}

function setupJournalFilters() {
  document.getElementById('tc-subj-label').textContent =
    'Предмет: ' + currentUser.subjectName + ' — журналга баа коюңуз';

  const myGroups = [...new Set(
    SCHEDULE.filter(s => s.subjectKey === currentUser.subject).flatMap(s => s.groups)
  )];

  document.getElementById('tc-group-sel').innerHTML =
    '<option value="">— Группа тандаңыз —</option>' +
    myGroups.map(g => `<option value="${g}">${g}</option>`).join('');

  const pageSel = document.getElementById('tc-page-sel');
  pageSel.innerHTML = '<option value="">— Алгач группа тандаңыз —</option>';
  pageSel.disabled  = true;

  document.getElementById('journal-table-wrap').style.display  = 'none';
  document.getElementById('journal-placeholder').style.display = 'block';
  document.getElementById('journal-history-wrap').innerHTML    = '';

  journalGroup   = null;
  journalPageIdx = null;
}

function onGroupChange() {
  const g = document.getElementById('tc-group-sel').value;
  journalGroup  = g || null;
  const pageSel = document.getElementById('tc-page-sel');

  if (!g) {
    pageSel.innerHTML = '<option value="">— Алгач группа тандаңыз —</option>';
    pageSel.disabled  = true;
    document.getElementById('journal-table-wrap').style.display  = 'none';
    document.getElementById('journal-placeholder').style.display = 'block';
    document.getElementById('journal-history-wrap').innerHTML    = '';
    journalPageIdx = null;
    return;
  }

  pageSel.disabled  = false;
  pageSel.innerHTML = '<option value="">— Пара тандаңыз —</option>' +
    PAGES.map((p, i) => `<option value="${i}">${p.label}</option>`).join('');

  document.getElementById('journal-table-wrap').style.display  = 'none';
  document.getElementById('journal-placeholder').style.display = 'block';
  document.getElementById('journal-history-wrap').innerHTML    = '';
  journalPageIdx = null;
}

function onPageChange() {
  const val = document.getElementById('tc-page-sel').value;
  if (val === '') {
    document.getElementById('journal-table-wrap').style.display  = 'none';
    document.getElementById('journal-placeholder').style.display = 'block';
    journalPageIdx = null;
    return;
  }
  journalPageIdx = parseInt(val);
  renderJournalTable();
}

function getTodayStr() {
  const d = new Date();
  return String(d.getDate()).padStart(2,'0') + '.' + String(d.getMonth()+1).padStart(2,'0');
}

function onDateInputChange(input) {
  let val = input.value.replace(/[^0-9.]/g, '');
  if (val.length === 2 && !val.includes('.')) val = val + '.';
  input.value = val;
}

function renderJournalTable() {
  if (journalGroup === null || journalPageIdx === null) return;

  const subj     = currentUser.subject;
  const page     = PAGES[journalPageIdx];
  const dateInp  = document.getElementById('journal-date-input');
  const dateVal  = dateInp ? dateInp.value.trim() : '';
  const today    = dateVal.length === 5 ? dateVal : getTodayStr();
  const students = STUDENTS.filter(s => s.group === journalGroup);

  document.getElementById('journal-title').textContent =
    currentUser.subjectName + ' · ' + journalGroup + ' · ' + page.label;

  document.getElementById('journal-thead').innerHTML = `
    <tr>
      <th class="name-col">Студент</th>
      <th class="date-col">${today}</th>
    </tr>`;

  document.getElementById('journal-tbody').innerHTML = students.map((st, si) => {
    const existing = getGradeByDate(st.id, subj, today);
    const selVal   = existing !== null ? String(existing) : '';
    return `<tr>
      <td class="name-cell">${si + 1}. ${st.name}</td>
      <td class="grade-cell">
        <select class="grade-sel" data-si="${si}" data-di="0">
          <option value="" ${selVal === '' ? 'selected' : ''}>—</option>
          <option value="0" ${selVal === '0' ? 'selected' : ''}>НБ</option>
          <option value="1" ${selVal === '1' ? 'selected' : ''}>1</option>
          <option value="2" ${selVal === '2' ? 'selected' : ''}>2</option>
          <option value="3" ${selVal === '3' ? 'selected' : ''}>3</option>
          <option value="4" ${selVal === '4' ? 'selected' : ''}>4</option>
          <option value="5" ${selVal === '5' ? 'selected' : ''}>5</option>
        </select>
      </td>
    </tr>`;
  }).join('');

  document.getElementById('journal-table-wrap').style.display  = 'block';
  document.getElementById('journal-placeholder').style.display = 'none';
  document.getElementById('journal-save-msg').className        = 'grade-msg';
  document.getElementById('journal-history-wrap').innerHTML    = '';
}

function saveGrades() {
  if (journalGroup === null || journalPageIdx === null) return;

  const subj    = currentUser.subject;
  const dateInp = document.getElementById('journal-date-input');
  const dateVal = dateInp ? dateInp.value.trim() : '';
  const today   = dateVal.length === 5 ? dateVal : getTodayStr();
  const students = STUDENTS.filter(s => s.group === journalGroup);

  students.forEach((st, si) => {
    const sel = document.querySelector(`.grade-sel[data-si="${si}"][data-di="0"]`);
    if (!sel || sel.value === '') return;
    const v = parseInt(sel.value);
    setGradeByDate(st.id, subj, today, v);
  });

  saveGradesToStorage();
  gradesDB = loadGradesFromStorage();

  const msg = document.getElementById('journal-save-msg');
  msg.textContent = '✅ Сакталды!';
  msg.className   = 'grade-msg grade-msg-ok';
  setTimeout(() => { msg.textContent = ''; msg.className = 'grade-msg'; }, 2500);

  document.getElementById('journal-table-wrap').style.display  = 'none';
  document.getElementById('journal-placeholder').style.display = 'none';

  const histWrap = document.getElementById('journal-history-wrap');
  if (histWrap) {
    histWrap.style.display = 'block';
    renderGradeHistory();
  }
}

function renderGradeHistory() {
  const wrap = document.getElementById('journal-history-wrap');
  if (!wrap || !journalGroup) return;

  const subj     = currentUser.subject;
  const students = STUDENTS.filter(s => s.group === journalGroup);

  const allDates = [];
  students.forEach(st => {
    const saved = gradesDB?.[st.id]?.[subj];
    if (saved) Object.keys(saved).forEach(d => { if (!allDates.includes(d)) allDates.push(d); });
  });
  allDates.sort();

  if (!allDates.length) {
    wrap.innerHTML = '<div style="text-align:center;color:#9ca3af;padding:2rem">Азырынча баа коюлган жок</div>';
    return;
  }

  const headCells = allDates.map(d => `<th class="date-col">${d}</th>`).join('');

  const bodyRows = students.map(st => {
    let total = 0, count = 0, nb = 0;

    const cells = allDates.map(d => {
      const v = getGradeByDate(st.id, subj, d);
      if (v === undefined || v === null) return `<td class="grade-cell" style="color:#d1d5db;text-align:center">—</td>`;
      if (v === 0) {
        nb++;
        return `<td class="grade-cell" style="text-align:center"><span style="background:#fee2e2;color:#dc2626;font-weight:700;padding:2px 6px;border-radius:4px;font-size:.85rem">НБ</span></td>`;
      }
      total += v; count++;
      const bg    = v >= 4 ? '#dcfce7' : v === 3 ? '#fef9c3' : '#fee2e2';
      const color = v >= 4 ? '#16a34a' : v === 3 ? '#854d0e' : '#dc2626';
      return `<td class="grade-cell" style="text-align:center"><span style="background:${bg};color:${color};font-weight:800;padding:2px 8px;border-radius:4px;font-size:1rem">${v}</span></td>`;
    }).join('');

    const avg      = count ? (total / count).toFixed(2) : null;
    const avgColor = avg >= 4 ? '#16a34a' : avg >= 3 ? '#854d0e' : '#dc2626';
    return `<tr>
      <td class="name-cell">${st.name}</td>
      ${cells}
      <td class="grade-cell" style="text-align:center;font-weight:800;font-size:1.05rem;color:${avg ? avgColor : '#9ca3af'}">
        ${avg !== null ? avg : '—'}
        ${nb ? `<div style="font-size:.72rem;color:#dc2626;font-weight:600">НБ: ${nb}</div>` : ''}
      </td>
    </tr>`;
  }).join('');

  let gTotal = 0, gCount = 0;
  students.forEach(st => allDates.forEach(d => {
    const v = getGradeByDate(st.id, subj, d);
    if (v !== null && v !== undefined && v !== 0) { gTotal += v; gCount++; }
  }));
  const classAvg = gCount ? (gTotal / gCount).toFixed(2) : '—';

  wrap.innerHTML = `
    <div class="history-header">
      <span>📋 ${currentUser.subjectName} · ${journalGroup} — бардык баалар</span>
      <span class="history-avg">Класстын орточосу: <strong>${classAvg}</strong></span>
    </div>
    <div style="overflow-x:auto">
      <table class="journal-table">
        <thead>
          <tr>
            <th class="name-col">Студент</th>
            ${headCells}
            <th class="date-col">Орточо</th>
          </tr>
        </thead>
        <tbody>${bodyRows}</tbody>
      </table>
    </div>`;
}

function getStudentSubjects(group) {
  const keys = new Set();
  SCHEDULE.forEach(s => { if (s.groups.includes(group)) keys.add(s.subjectKey); });
  return Array.from(keys);
}

function getGradeByDate(stId, subj, dateStr) {
  const v = gradesDB?.[stId]?.[subj]?.[dateStr];
  return v !== undefined ? v : null;
}

function setGradeByDate(stId, subj, dateStr, val) {
  if (!gradesDB[stId])       gradesDB[stId] = {};
  if (!gradesDB[stId][subj]) gradesDB[stId][subj] = {};
  gradesDB[stId][subj][dateStr] = val;
}

function calcStudentSubjAvg(stId, subj) {
  const saved = gradesDB?.[stId]?.[subj];
  if (!saved) return null;
  let total = 0, count = 0;
  Object.values(saved).forEach(v => {
    if (v !== null && v !== 0) { total += v; count++; }
  });
  return count ? parseFloat((total / count).toFixed(2)) : null;
}

function gradeBadge(avg) {
  if (avg >= 4.5) return '<span class="badge badge-5">5 — Мыкты</span>';
  if (avg >= 3.5) return '<span class="badge badge-4">4 — Жакшы</span>';
  if (avg >= 2.5) return '<span class="badge badge-3">3 — Канааттандырарлык</span>';
  return '<span class="badge badge-2">2 — Канааттандырбайт</span>';
}