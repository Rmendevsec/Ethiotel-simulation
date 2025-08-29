function calculateInvestment() {
    let initial = parseFloat(document.getElementById('initial').value);
    let monthly = parseFloat(document.getElementById('monthly').value);
    let rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    let months = parseInt(document.getElementById('months').value);

    let balance = initial;
    let history = [];

    for (let i = 1; i <= months; i++) {
        balance += monthly;
        balance += balance * rate;
        history.push(balance.toFixed(2));
    }

    document.getElementById('result').innerText = `Projected Balance: ETB ${balance.toFixed(2)}`;
    displayChart(history);
}

function displayChart(history) {
    let chartDiv = document.getElementById('chart');
    chartDiv.innerHTML = '';

    history.forEach((val, index) => {
        let bar = document.createElement('div');
        bar.style.height = val / 10 + 'px';
        bar.style.width = '20px';
        bar.style.display = 'inline-block';
        bar.style.margin = '2px';
        bar.style.backgroundColor = '#6a040f';
        bar.title = `Month ${index + 1}: ETB ${val}`;
        chartDiv.appendChild(bar);
    });
}
