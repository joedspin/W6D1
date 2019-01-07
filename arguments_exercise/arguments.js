function sum(...nums) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function restSum(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

Function.prototype.myBind = function(ctx, ...bindArgs) {
  return (...callArgs) => {
    return () => {
      this.apply(ctx, bindArgs.concat(callArgs));
    };
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
const markovSays = markov.says.myBind(pavlov, "meow")("Markov");
markovSays();
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

function curriedSum(numArgs){
  const arr = [];
  return function _curriedSum(num){
    arr.push(num);
    if (arr.length >= numArgs){
      console.log(arr.reduce((acc, el) => acc + el));
    } else {
      return _curriedSum;
    }
  };
}

const cs = curriedSum(5);
cs(1)(2)(3)(4)(5);


function sumArgs(args){
  
  const ourSum =  args.reduce((acc, el) => acc + el);
  console.log(ourSum);
}

Function.prototype.curry = function(numArgs){
  const arr = [];
  that = this;
  return function _curry(num) {
    
    arr.push(num);
    if (arr.length === numArgs) {
      that.call(that, arr);
    } else {
      return _curry;
    }
  };
}

const sa = sumArgs.curry(5);

