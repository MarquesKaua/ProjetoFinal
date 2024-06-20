class Jogador {
    constructor(nomeInteiro, selecaoNacional, golsFeitos, ganhouCopa) {
        this.nomeInteiro = nomeInteiro;
        this.selecaoNacional = selecaoNacional;
        this.golsFeitos = golsFeitos;
        this.ganhouCopa = ganhouCopa;
    }
}

let jogadores = [];

function inserirJogador() {
    let nomeCompleto = document.getElementById("nomeCompleto").value;
    let selecao = document.getElementById("selecao").value;
    let gols = document.getElementById("gols").value;
    let ganhou = document.getElementById("ganhou").value;
    let jogador = new Jogador(nomeCompleto, selecao, gols, ganhou);
    jogadores.push(jogador);
    document.getElementById("demo").innerHTML = "Jogador inserido com sucesso";
}

function mostrarJogador() {
    let text = "";
    let select = document.getElementById("deleteSelect");
    select.innerHTML = "";
    for(let i = 0; i < jogadores.length; i++){
        text += "Jogador:" + " " + jogadores[i].nomeInteiro + " "  + "Seleção:" + " " + jogadores[i].selecaoNacional + " " + "Gols Feitos:" +  " " + jogadores[i].golsFeitos +  " " + "Ganhou quantas copas:" + " " + jogadores[i].ganhouCopa + "<br>";
        let option = document.createElement("option");
        option.text = "Jogador:" + " " + jogadores[i].nomeInteiro + " "  + "Seleção:" + " " + jogadores[i].selecaoNacional + " " + "Gols Feitos:" +  " " + jogadores[i].golsFeitos +  " " + "Ganhou quantas copas:" + " " + jogadores[i].ganhouCopa;
        option.value = i;
        select.add(option);
    }
    document.getElementById("demo").innerHTML = text;
}

function deletarJogador(){
    let select = document.getElementById("deleteSelect");
    let index = select.value;
    if(index >= 0 && index < jogadores.length){
        jogadores.splice(index,1);
        document.getElementById("demo").innerHTML = "Jogador deletado";
        mostrarJogador();
    } else {
        document.getElementById("demo").innerHTML = "Índice inválido";
    }

    
}

function atualizarJogador() {
    let select = document.getElementById("deleteSelect");
    let index = select.value;
    
    if (index >= 0 && index < jogadores.length) {
        let nomeCompleto = document.getElementById("nomeCompleto").value;
        let selecao = document.getElementById("selecao").value;
        let gols = document.getElementById("gols").value;
        let ganhou = document.getElementById("ganhou").value;
        
        // Atualiza os dados do jogador selecionado
        jogadores[index].nomeInteiro = nomeCompleto;
        jogadores[index].selecaoNacional = selecao;
        jogadores[index].golsFeitos = gols;
        jogadores[index].ganhouCopa = ganhou;
        
        document.getElementById("demo").innerHTML = "Jogador atualizado com sucesso";
        mostrarJogador(); // Atualiza a exibição da lista de jogadores
    } else {
        document.getElementById("demo").innerHTML = "Selecione um jogador para atualizar";
    }
}
