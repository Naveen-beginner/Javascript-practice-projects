const perHead = document.getElementById('perPersonTotal');
const people = document.getElementById('numberOfPeople');

let numberOfPeople = 1;

const calculateBill = () => {
    const billAmount = parseFloat(document.getElementById('billTotalInput').value);
    const tipPercentage = parseFloat(document.getElementById('tipInput').value);
    
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / numberOfPeople;

    perHead.innerText = `$${amountPerPerson.toFixed(2)}`;

}

const increasePeople = () => {
    numberOfPeople++;
    people.innerText = numberOfPeople;
    calculateBill();
}

const decreasePeople = () => {
    if (numberOfPeople <= 1) return;
    numberOfPeople--;
    people.innerText = numberOfPeople;
    calculateBill();
}