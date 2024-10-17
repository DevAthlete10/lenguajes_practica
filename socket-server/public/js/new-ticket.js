

console.log('Nuevo Ticket HTML');
const $currentTicketLbl = document.getElementById('lbl-new-ticket');
const $createTicketBtn = document.querySelector('.btn-lg');
// const url = 'http://localhost:3000/api/ticket';
const url = 'http://localhost:3000/api/ticket';
async function getLastTickets() {
    const lastTicket = await fetch('/api/ticket/last').then(resp => resp.json());
    console.log(lastTicket);
    $currentTicketLbl.innerHTML = lastTicket;
    
}

async function createTicket() {
    const newTicket =  await fetch('/api/ticket',{method:'POST'}).then(resp => resp.json());

    $currentTicketLbl.innerHTML = newTicket.number;
    
}

$createTicketBtn.addEventListener('click',createTicket);

getLastTickets();



