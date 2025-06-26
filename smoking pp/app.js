const logBtn = document.getElementById('logBtn');
const cigsCountInput = document.getElementById('cigsCount');
const logList = document.getElementById('logList');

let logs = JSON.parse(localStorage.getItem('smokeLogs')) || [];

function saveLogs() {
  localStorage.setItem('smokeLogs', JSON.stringify(logs));
}

function renderLogs() {
  logList.innerHTML = '';
  logs.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.date} — ${entry.count} cigarette(s)`;
    logList.appendChild(li);
  });
}

logBtn.addEventListener('click', () => {
  const count = Number(cigsCountInput.value);
  if (isNaN(count) || count < 0) return alert("Enter a valid number");

  const today = new Date().toLocaleDateString();
  const existing = logs.find(log => log.date === today);
  if (existing) {
    existing.count = count;
  } else {
    logs.push({ date: today, count });
  }

  saveLogs();
  renderLogs();
  cigsCountInput.value = '';
});

renderLogs();
