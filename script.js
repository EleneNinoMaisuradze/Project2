const minimizeMenuButton = document.querySelector('.minimize-menu');
const sidebar = document.querySelector('.sidebar');
minimizeMenuButton.addEventListener('click',()=>{
    sidebar.classList.toggle('minimized');
})
const currentBalance = document.querySelector('.current-balance p')
const income = document.querySelector('.income p')
const expenses = document.querySelector('.expenses p');
const totalSaved = document.querySelector('.pots-summary p:last-child');
const budgetAmount = document.querySelector('.budget-chart-inner p:first-child');
const paidBills = document.querySelector('.recurring-bills-content p:nth-child(2)');
const totalUpcoming = document.querySelector('.recurring-bills-content p:nth-child(4)');
const dueSoon = document.querySelector('.recurring-bills-content p:nth-child(6)');

function updateData() {
    currentBalance.textContent='$4,900.00';
    income.textContent ='$4,000.00';
    expenses.textContent = '$1,800.00';
    totalSaved.textContent = '$900';
    budgetAmount.textContent = '$350';
    paidBills.textContent = '$200.00';
    totalUpcoming.textContent = '$200.00';
    dueSoon.textContent = '$65.00'
}

setInterval(updateData, 5000)