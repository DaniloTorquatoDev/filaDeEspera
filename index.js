let menu = "";
let fila = [];

do {
menu = prompt(`

CONSULTORIO MÉDICO
Pascientes na fila: ${fila.length}

Escolha uma opção:
1. Adicionar um nome na fila
2. Consultar pasciente
3. Sair`);

switch (menu) {
    case "1":
        const nome = prompt("Digite o nome do pasciente:");
        fila.push(nome);
        alert(`${nome} foi adicionado(a) na fila!`);
        break;
    case "2":           
        if (fila.length > 0) {
            const pasciente = fila.shift();
            alert(`${pasciente} foi consultado(a)!\nPascientes na fila: ${fila.length}`);
        } else {
            alert("Não há pascientes na fila!");
        }           
        break;  
    case "3":
        alert("Encerrando o sistema...");
        break;
    default:
        alert("Opção inválida! Tente novamente.");
        break;
}} while (menu !== "3")