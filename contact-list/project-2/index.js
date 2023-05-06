//declarando el id con valor en 1
let id = 0;

//funcion para incrementar id
function idIncrement() {
  return ++id;
}

//creando funcion constructora donde se almacenan los datos creados en este caso name, lastname
function Users(name, lastName, phone, city, addres) {
  this.id = Number(idIncrement());
  this.name = name;
  this.lastName = lastName;
  this.phone = Number(phone);
  this.ubicacion = {
    city: city,
    addres: addres,
  };
}
//creando la funcion para almacenar los usuario
function addUser(user, listUser) {
  listUser.push(user);
}

//array vacio para almacenr los usuarios
let listUser = [];
//creo los usuario
let newUser = new Users(
  "david",
  "marbello",
  "3044378745",
  "colombia",
  "barranquilla"
);
let newUser1 = new Users(
  "jair",
  "robles",
  "4024787740",
  "argentina",
  "cordoba"
);
let user2 = new Users("jair", "robles", "4024787740", "argentina", "cordoba");
let user3 = new Users("karla", "orellano", "9007801701", "chile", "santiago");

//hace un push a los de los usuarios creados en le array vacio
addUser(newUser, listUser);
addUser(newUser1, listUser);
addUser(user2, listUser);
addUser(user3, listUser);

//funcion muestra la lista de personas agregadas a la funcion addUser
function showUsers(listaUser) {
  listaUser.forEach((el) =>
    console.log(
      `${el.name} ${el.lastName} ${el.phone} ${el.ubicacion.city} ${el.ubicacion.addres}`
    )
  );
}
// showUsers(listUser);

//funcion para eliminar usuarios
function dellUsers(user, listaUser) {
  let index = listaUser.indexOf(user);
  if (index > -1) listaUser.splice(index, 1);
}

dellUsers(newUser1, listUser);
dellUsers(newUser, listUser);
showUsers(listUser);
