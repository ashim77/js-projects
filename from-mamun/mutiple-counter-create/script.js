let counterId = 0;

function addCounter() {
    counterId++;
    const counterContainer = document.getElementById('counters');
    const newCounter = document.createElement('div');
    newCounter.innerHTML = `
        <p>Counter ${counterId}: <span id="counterValue${counterId}">0</span></p>
        <button onclick="incrementCounter(${counterId})">Increment</button>
        <button onclick="decrementCounter(${counterId})">Decrement</button>
    `;
    counterContainer.appendChild(newCounter);
}

function incrementCounter(id) {
    const counterValueElement = document.getElementById(`counterValue${id}`);
    const currentValue = parseInt(counterValueElement.textContent);
    counterValueElement.textContent = currentValue + 1;
}

function decrementCounter(id) {
    const counterValueElement = document.getElementById(`counterValue${id}`);
    const currentValue = parseInt(counterValueElement.textContent);
    if (currentValue > 0) {
        counterValueElement.textContent = currentValue - 1;
    }
}