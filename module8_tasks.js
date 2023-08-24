//task_8.7.1

/* function printInfo (name, age)
{
  alert(`Name: ${this.name}, Age ${this.age}`);
}

const person = {
  name: "Oleg",
  age: 21
}
printInfo.call(person); */ 

//task_8.7.2

 /* function calculate(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        if (b !== 0) {
            return a / b;
        } else {
            return "Ошибка: на ноль делить нельзя";
        }
    } else {
        return "Ошибка: неверный оператор";
    }
}

const object = {
  a: 2,
  b: 3,
  operator: "+",
};

const array = [4, 15, "*"];

const result = calculate.apply(object, array);

alert(result); */

//task_8.7.3

/* const Users = [ 
    {
        name : "Oleg",
        age : 15
    },
    {
        name : "Anton",
        age : 35
    },
    {
        name : "Jonh",
        age : 21
    },
    {
        name : "Domenik",
        age : 10
    }
]

const filteredByAgeUsers = Users.filter((user) => {
    return user.age > 18;
});
const filteredByNameUsers = Users.map( function (user) {
    return user.name;
});
console.log(filteredByAgeUsers);
console.log(filteredByNameUsers); */

//task_8.7.4

/*  const User = {
    name: "Oleg",
    age: 21,
    setFullName: function (fullName = 'Oleg Petrovich')
    {
        this.fullName = fullName;
    }
  }
const person = {
    name: "Oleg",
    age: 21
  }
alert(User);
User.setFullName();
alert(User);
const setPersonFullName = User.setFullName.bind(person, "Jonh Smith");
alert(person);
setPersonFullName();
alert(person);   */



//task_8.7.5

/* function uniqSort (arr)
{
  if (!(arr.Arrayis))
  {
    const uniqSet = new Set(arr);
    const uniqArr = Array.from(uniqSet);
    const uniqSortArr = uniqArr.sort((a,b) => a - b);
    alert(uniqSortArr);
  }
  else
  {
    alert("Это не массив");
  }
}

const mass = [15,19,1,36,5,72,8,25,3,4,1,5,15,25,72,8];
uniqSort(mass); */