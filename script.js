const firstnum = document.getElementById('firstnum');
const secondnum = document.getElementById('secondnum');
const opchoose = document.getElementById('opchoose');
const countbtn = document.getElementById('countbtn');
const result = document.getElementById('result');
const cleanbtn = document.getElementById('cleanbtn');

let history = [];

countbtn.addEventListener('click', function() {
    const a = parseFloat(firstnum.value);
    const b = parseFloat(secondnum.value);
    const op = opchoose.value;
    let res;

    if (isNaN(a) || isNaN(b)) {
        result.textContent = 'Введите числа!';
        return;
    }

    if (op === '+') res = a + b;
    if (op === '-') res = a - b;
    if (op === '*') res = a * b;
    if (op === '/') res = b === 0 ? 'Нельзя делить на 0' : a / b;

    result.textContent = res;

    history.push(`${a} ${op} ${b} = ${res}`);
    updateHistory();
});
function updateHistory() {
    const historyDiv = document.getElementById('counthistory');
    historyDiv.innerHTML = '<h2 id="historyh2">История вычислений:</h2>';
    history.forEach(function(item) {
        const p = document.createElement('p');
        p.textContent = item;
        historyDiv.appendChild(p);
    });
    const btn = document.createElement('button');
    btn.id = 'cleanbtn';
    btn.textContent = 'Очистить';
    btn.addEventListener('click', clearHistory);
    historyDiv.appendChild(btn);
}

function clearHistory() {
    history = [];
    updateHistory();
}

cleanbtn.addEventListener('click', clearHistory);
