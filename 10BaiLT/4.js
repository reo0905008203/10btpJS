function blockScopeTest() {
    let message = "bên ngoài if";
  
    if (true) {
      let message = "bên trong if";
      const status = "OK";
      console.log(message); // "bên trong if"
      console.log(status);  // "OK"
    }
  
    console.log(message); // "bên ngoài if"
    // console.log(status); ❌ lỗi vì ngoài block
  }
  blockScopeTest();
  