
function testScope() {
  console.log("---- Bên trong khối if ----");
  if (true) {
    var x = "var: tồn tại trong toàn bộ hàm";
    let y = "let: chỉ trong block";
    const z = "const: chỉ trong block";

    console.log("Trong block:");
    console.log("x =", x); // OK
    console.log("y =", y); // OK
    console.log("z =", z); // OK
  }

  console.log("\n---- Bên ngoài khối if ----");
  console.log("x =", x); // ✅ var vẫn tồn tại
  try {
    console.log("y =", y); // ❌ Lỗi
  } catch (e) {
    console.log("y =", e.message);
  }

  try {
    console.log("z =", z); // ❌ Lỗi
  } catch (e) {
    console.log("z =", e.message);
  }
}

testScope();

console.log("\n---- Vòng lặp for: var vs let ----");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 100);
}

console.log("\n---- const không thể gán lại ----");
const a = 5;
console.log("a =", a);
try {
  a = 10; // ❌ Lỗi
} catch (e) {
  console.log("Gán lại const:", e.message);
}

const obj = { name: "An" };
obj.name = "Bình"; // ✅ OK vì không thay đổi tham chiếu
console.log("obj.name =", obj.name);