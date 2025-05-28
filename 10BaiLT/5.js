const person = {
    name: "An",
    age: 25,
    greet: function () {
      console.log(`Xin chào, tôi là ${this.name}, ${this.age} tuổi.`);
    }
  };
  
  person.greet();
  