const techList = (tech, name) =>
  tech === [] ? "Vazio!"
    : tech.sort().map((element) => ({ tech: element, name }));
console.log(techList([], "Lucas"));

