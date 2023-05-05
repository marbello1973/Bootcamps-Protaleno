/* for (let i = 0; i < 10; i++) {
  console.log(`Me encanta lourdes ${i}`);
}
 */
// let numeros=[1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < 10; i++) {
//   console.log(numeros[i]);
// }
/* 
let num = 0;
while (num <= 10) {
  console.log(num++);
  // return num++
} */

// console.log(num)
/* 
let students = [
  { name: "david", nota: 3 },
  { name: "rafa", nota: 5 },
  { name: "lourdes", nota: 9 },
  { name: "leonardo", nota: 4 },
  { name: "daniel", nota: 6 },
  { name: "brayan", nota: 7 },
];
const notas = students.filter((el) => (el.nota >= 5 ? `Aprobo` : null));
console.log(notas);

const users = require("./listaContactos.json");
 */
/* const User = users.map((el) => {
  return {
    id: el.id,
    name: el.name,
    lastname: el.lastName,
  };
});
console.log(User); */

//Crea una función constructora donde se almacena los datos requeridos
// function Users(name, lastname) {
//   this.name = name;
//   this.lastname = lastname;
// }
/* 
function AddUsers(name, lastname) {
  let users = {
    name,
    lastname,
  };
  return users;
}

// agregamos un usuario a la funcion contructora
const user1 = new AddUsers("David", "Marbello");
console.log(user1);

//Metodo para eliminar los usuarios
Users.prototype.dellUsers = function (name) {
  for (let i = 0; i < this.name.length; i++) {
    if (this.name[i].includes(name)) {
      this.name.splice(i, 1);
    }
  }
};
user1.dellUsers("David");
console.log(user1);
console.log(Users());
 */

/************************************************************************************/
/* 
const users = [];
let id = 0;

// funcion para incrementar id
function idIncrement(id) {
  return ++id;
}

function addUsers(name, lastname) {
  users.filter((el) => (el.name.includes(name) ? "name existe" : el.name));
  users.filter((el) =>
    el.lastname.includes(lastname) ? "name existe" : el.lastname
  );
  let user = {
    id: idIncrement(id++),
    name: name,
    lastname: lastname,
  };
  users.find((el) => el.id !== id);
  users.push(user);
}
addUsers("david", "marbello");
addUsers("david", "marbello");
addUsers("Alejandro", "Perez");
addUsers("Sergio", "Gonzalez");
addUsers("Pedro", "Martinez");

const displayUser = () => {
  return users;
};
console.log(displayUser());

const add = (name, lastname) => {
  // const nam = users.map((el) => el.name.includes(name));
  // const last = users.map((el) => el.lastname.includes(lastname));

  if (name.includes(name) || lastname.includes(lastname)) {
    console.log(`${name} ${lastname} registro existe`);
  } else {
    let user = {
      id: idIncrement(id++),
      name: name,
      lastname: lastname,
    };
    users.push(user);
    return users;
  }
};

console.log(add("juana", "pedrozo"));

 */
