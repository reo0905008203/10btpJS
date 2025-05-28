function createCounter() {
    let count = 0;
    return function () {
      count++;
      console.log(`Hàm được gọi ${count} lần`);
    };
  }
  
  const counter = createCounter();
  counter(); // 1
  counter(); // 2
  counter(); // 3
  