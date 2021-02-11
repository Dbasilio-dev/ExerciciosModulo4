// function handleMouseMove(event) {
//   const clientX = event.clientX;
//   const clientY = event.clientY;
//   console.log(clientX, clientY);
// }

//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: "Jane", last: "Doe" };

//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
company = {
  name: "ACME Corp",
  address: "Nowhere st",
  products: {
    shirts: {
      colors: ["red", "green", "blue"],
    },
    socks: {
      colors: ["cyan", "magenta", "yellow"],
    },
  },
};

//1
const alo = {
  clienteX: "Daniel",
  clienteY: "Alicia",
};
const { clienteX, clienteY } = alo;

console.log(clienteX, clienteY);

//2

const { first } = obj;
console.log(first);

//3

const {
  name,
  products: { shirts: colors },
} = company;

console.log(name, colors);
