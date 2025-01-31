// Get the pie chart canvas
const ctx = document.getElementById('pieChart').getContext('2d');

// Create a pie chart using Chart.js
const pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Food', 'Transportation', 'Entertainment', 'Shopping', 'Other'],
        datasets: [{
            data: [30, 20, 15, 25, 10], // Example data, replace with actual values
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        }]
    }
});

// Update range values when the sliders change
const incomeRange = document.getElementById('income-range');
const expenseRange = document.getElementById('expense-range');

incomeRange.oninput = function() {
    document.querySelector('.income-range .range-value').textContent = '$' + this.value;
};

expenseRange.oninput = function() {
    document.querySelector('.expense-range .range-value').textContent = '$' + this.value;
};