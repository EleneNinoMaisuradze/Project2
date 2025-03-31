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

function updateData() {
    currentBalance.textContent = '$4,900.00';
    income.textContent = '$4,000.00';
    expenses.textContent = '$1,800.00';
    totalSaved.textContent = '$900';
    budgetAmount.textContent = '$350';
    paidBills.textContent = '$200.00';
    totalUpcoming.textContent = '$200.00';
    dueSoon.textContent = '$65.00';
}


updateData(); 
setInterval(updateData, 5000);
