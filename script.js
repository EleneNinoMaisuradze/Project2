const minimizeMenuButton = document.querySelector('.minimize-menu');
const sidebar = document.querySelector('.sidebar');

if (minimizeMenuButton) {
    minimizeMenuButton.addEventListener('click', () => {
        sidebar.classList.toggle('minimized');
    });
}

const currentBalance = document.querySelector('.current-balance p');
const income = document.querySelector('.income p');
const expenses = document.querySelector('.expenses p');
const totalSaved = document.querySelector('.pots-summary p:last-child');
const budgetAmount = document.querySelector('.budget-chart-inner p:first-child');
const paidBills = document.querySelector('.recurring-bills-summary:nth-child(1) p:last-child');
const totalUpcoming = document.querySelector('.recurring-bills-summary:nth-child(2) p:last-child');
const dueSoon = document.querySelector('.recurring-bills-summary:nth-child(3) p:last-child');


let financeData = {
    currentBalance: 4900.00,
    income: 4000.00,
    expenses: 1800.00,
    totalSaved: 900,
    budgetAmount: 350,
    paidBills: 200.00,
    totalUpcoming: 200.00,
    dueSoon: 65.00
};

function updateUI() {
    currentBalance.textContent = `$${financeData.currentBalance.toFixed(2)}`;
    income.textContent = `$${financeData.income.toFixed(2)}`;
    expenses.textContent = `$${financeData.expenses.toFixed(2)}`;
    totalSaved.textContent = `$${financeData.totalSaved}`;
    budgetAmount.textContent = `$${financeData.budgetAmount}`;
    paidBills.textContent = `$${financeData.paidBills.toFixed(2)}`;
    totalUpcoming.textContent = `$${financeData.totalUpcoming.toFixed(2)}`;
    dueSoon.textContent = `$${financeData.dueSoon.toFixed(2)}`;
}

function updateData() {
   
     fetch('/api/finance')
         .then(response => response.json())
         .then(data => {
            financeData = data;
             updateUI();
        })
         .catch(error => {
            console.error('Error fetching data:', error);
         });


    financeData.currentBalance += 10;
    financeData.income += 5;
    financeData.expenses += 2;
    updateUI();
}

updateUI(); 
setInterval(updateData, 5000);