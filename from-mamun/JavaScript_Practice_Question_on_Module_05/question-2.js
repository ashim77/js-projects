// Develop a class named "Counter" with a property called "count". Implement two methods:
// "increment" and "getCount". The "increment" method should be able to take an optional value to
// increment by; if no value is provided, it should increment the count by 1. The "getCount" method
// should retrieve the current count value. Export this "Counter" class from a module and then import it
// into a different file. Instantiate the class and demonstrate its functionality through a sequence of
// "increment" and "getCount" calls

class Counter {
    constructor() {
        this.count = 0;
    }

    increment(value = 1) {
        this.count += value;
    }

    getCount() {
        return this.count;
    }
}

//  const counterInstance = new Counter();
// console.log(counterInstance.getCount());

// const counterInstance = new Counter();
// counterInstance.increment(5);
// console.log(counterInstance.getCount());

const counterInstance = new Counter();
counterInstance.increment(1);
console.log(counterInstance.getCount());