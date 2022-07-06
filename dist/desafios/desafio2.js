"use strict";
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
let humano1 = {
    nome: "maria",
    idade: 29,
    profissao1: Trabalho.Atriz
};
let humano2 = {
    nome: "roberto",
    idade: 19,
    profissao1: Trabalho.Padeiro
};
let humano3 = {
    nome: "laura",
    idade: 32,
    profissao1: Trabalho.Atriz
};
let humano4 = {
    nome: "carlos",
    idade: 19,
    profissao1: Trabalho.Padeiro
};
