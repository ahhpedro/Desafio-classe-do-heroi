class Hero {
    constructor(nome, idade, tipo) {
      Object.assign(this, { nome, idade, tipo });
    }
  
    atacar() {
    const ataques = {
    mago: "usou magia",
    guerreiro: "usou espada",
    monge: "usou artes marciais",
    ninja: "usou shuriken",
    };
    console.log(`O ${this.tipo} atacou usando ${ataques[this.tipo]}`);
}
  }
  
  const hero = new Hero("Pedro", 29, "guerreiro");
  hero.atacar(); // O guerreiro atacou usando espada