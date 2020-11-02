const c = require("./src/challenges")
console.clear();
let resposta = c.hydrate("1 cerveja");
console.log(resposta);
resposta = c.hydrate("1 cachaça, 5 cervejas e 1 copo de vinho");
console.log(resposta);
resposta = c.hydrate("1 cachaça, 5 cervejas e 3 copo de vinho");
console.log(resposta);
resposta = c.hydrate("2 cachaça, 5 cervejas e 1 copo de vinho");
console.log(resposta);
