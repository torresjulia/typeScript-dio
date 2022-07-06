interface Humano {
    nome: string,
    idade: number,
    profissao1: Trabalho
}

enum Trabalho {
    Atriz,
    Padeiro, 
}

let humano1: Humano = {
    nome: "maria",
    idade: 29,
    profissao1: Trabalho.Atriz
};

let humano2: Humano = {
    nome: "roberto",
    idade: 19,
    profissao1: Trabalho.Padeiro
}

let humano3: Humano = {
    nome: "laura",
    idade: 32,
    profissao1: Trabalho.Atriz
};

let humano4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao1: Trabalho.Padeiro
}