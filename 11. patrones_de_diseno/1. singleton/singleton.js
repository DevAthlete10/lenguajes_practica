class Singleton {
    static instance;
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

class SingletonFunction {
    static instance;
    static getInstance() {
        if (SingletonFunction.instance) {
            return SingletonFunction.instance;
        }
        SingletonFunction.instance = this;
    }
}

const singleton = new Singleton();
const singleton2 = new Singleton();
const singletonFunction = new SingletonFunction().getInstance;
const singletonFunction2 = new SingletonFunction().getInstance;
console.log(singleton === singleton2);
console.log(singletonFunction === singletonFunction2);

