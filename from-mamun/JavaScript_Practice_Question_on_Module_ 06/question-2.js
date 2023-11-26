// You have an object data with an initial result value of 0. Inside this object, there is a method add, but it's currently empty. Your task is to implement the add method in a way that allows it to be called multiple times consecutively and increments the result property by 1 each time it is called.

// Here's the code template you can use in your question:

const data = {
    result: 0,
    add() {
        this.result++;
        return this;
    },
}

data.add().add().add();

// data.add();
// data.add();
// data.add();


console.log(data.result); 