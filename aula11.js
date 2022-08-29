let filmes_e_series = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

function maiusculas(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }
    return array;
}

console.log(filmes_e_series);
console.log(maiusculas(filmes_e_series));


// 2

let filmes_animacao = ["toy story", "procurando nemo", "kung-fu panda", "wally", "fortnite"];

let games = [];
games[0] = filmes_animacao.pop();

function adicionar_filmes(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }
    return array1;
}

console.log(adicionar_filmes(filmes_e_series, filmes_animacao));
console.log(games)


// 3

let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compara_notas(array1, array2) {
    
    if (array1.length != array2.length) { 
        return (false + ': ' + 'As arrays não tem o mesmo tamanho');
    } else {
        
        for (let i = 0; i < array1.length; i++) { 
            if (array1[i] != array2[i]) { 
                console.log(false + " " + array1[i] + " != " + array2[i]);
               
            } else {
                console.log(true + " " + array1[i] + " == " + array2[i]);
                
            }
        }
        return (true + ': ' + 'As arrays tem o mesmo tamanho'); 
    }
}

console.log(compara_notas(asiaScores, euroScores));