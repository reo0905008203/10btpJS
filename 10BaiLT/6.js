const user = {
    firstName: "Nguyen",
    lastName: "An",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  
  console.log(user.fullName); // "Nguyen An"
  user.fullName = "Le Bao";
  console.log(user.fullName); // "Le Bao"
  