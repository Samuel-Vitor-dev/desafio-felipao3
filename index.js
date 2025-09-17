class heroi {
  constructor(nome,idade,tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  
  atacar(){
    if(this.tipo === "mago"){
      console.log(`o ${this.tipo} atacou usando magia`);
    } else if (this.tipo === "guerreiro"){
      console.log(`o ${this.tipo} atacou usando espada`);
    }else if (this.tipo === "monge"){
      console.log(`o ${this.tipo} atacou usando artes maciais`);
    } else if (this.tipo === "ninja"){
      console.log(`o ${this.tipo} atacou usando shuriken`);
    } else {
      console.log("Digite um tipo válido!!")
    }

  }
  
}

let M = new heroi("Samuel",18,"mago");
M.atacar();
let Duda = new heroi ("Duda",18,"guerreiro")
Duda.atacar();