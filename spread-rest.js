//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
const clothes = {
  pants: { colors: ["black", "blue"] },
  shirts: { colors: ["white", "red"] },
  socks: { colors: ["beige", "gray"] },
};

//Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks

//1

const clone = { ...clothes };
console.log(clone);

//2

const clone2 = { ...clothes, shoes: { colors: ["yellow", "purple"] } };
console.log(clone2);
