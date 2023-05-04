//creando funcion vacia para con array vacio para ir adicionando los usuarios
function Contact() {
  this.str = [];
}

//creando metodo para adicionar usuarios
Contact.prototype.addUsers = function (e) {
  this.str.push(e);
};

//creando metodo para eliminar usuarios
Contact.prototype.dellUsers = function (users) {
  for (let i = 0; i < this.str.length; i++) {
    if (this.str[i].includes(users)) {
      this.str.splice(i, 1);
    }
  }
};

Contact.prototype.showUsers = function () {
  return this.str;
};

//creando objeto para adicionar usuarios
newUsers = new Contact();
newUsers.addUsers("david marbello");
newUsers.addUsers("fransisco marbello");
newUsers.addUsers("jose marbello");
newUsers.addUsers("maria marbello");
console.log(newUsers);

//eliminando usuarios
// newUsers.dellUsers("david");
// newUsers.dellUsers("jose");
// newUsers.dellUsers("fransisco");
newUsers.dellUsers("maria");
console.log(newUsers);

console.log(newUsers.showUsers());

