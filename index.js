let ism = prompt("Ismingizni kiriting:");
let harf = prompt("Bironta harf yozing:");

let ismKichik = ism.toLowerCase();
let harfKichik = harf.toLowerCase();

if (ismKichik.includes(harfKichik)) {
    alert("Ismingizda " + harf + " harfi mavjud!");
} else {
    alert("Ismingizda " + harf + " harfi mavjud emas.");
}
