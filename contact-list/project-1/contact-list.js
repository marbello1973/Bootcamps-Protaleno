//creando funcion constructora donde se almacenan los datos creados en este caso name, lastname
function Contact() {
  this.str = [];
}

//creando metodo para adicionar usuarios
Contact.prototype.addUsers = function (e) {
  this.str.push(e);
};

// adicionando contactos en el constructor
newUsers = new Contact();
newUsers.addUsers("david", "marbello");
newUsers.addUsers("fransisco", "marbello");
newUsers.addUsers("jose", "marbello");
newUsers.addUsers("maria", "marbello");
console.log(newUsers);

//creando metodo para eliminar usuarios
Contact.prototype.dellUsers = function (users) {
  for (let i = 0; i < this.str.length; i++) {
    if (this.str[i].includes(users)) {
      this.str.splice(i, 1);
    }
  }
};

//Metodo para mostrar contactos en consola
Contact.prototype.showUsers = function () {
  return this.str;
};

//eliminando usuarios
// newUsers.dellUsers("david");
// newUsers.dellUsers("jose");
newUsers.dellUsers("fransisco");
newUsers.dellUsers("maria");
console.log(newUsers);

//mostrando usuarios en consola
console.log(newUsers.showUsers());
