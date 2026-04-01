function cadastrarVinho() {

  const vinho = prompt('Insira o nome do vinho:');
  const tipo = prompt('Insira o tipo do vinho (tinto, branco, rosé):');
  const safra = prompt('Insira a safra do vinho:');
  const estoque = Number(prompt('Insira a quantidade em estoque:'));
  const valorCusto = Number(prompt('Insira o valor de custo do vinho:'));
  const valorVenda = Number(prompt('Insira o valor de venda do vinho:'));
  const despesasVariaveis = Number(prompt('Insira as despesas variáveis:'));

  const lucroBruto = valorVenda - valorCusto;
  const lucroLiquido = lucroBruto - (despesasVariaveis / estoque);

  console.log('---- CADASTRO DE VINHO ----');
  console.log(`Vinho: ${vinho}`);
  console.log(`Tipo: ${tipo}`);
  console.log(`Safra: ${safra}`);
  console.log(`Estoque: ${estoque}`);
  console.log(`Valor de Custo: ${valorCusto}`);
  console.log(`Valor de Venda: ${valorVenda}`);
  console.log(`Lucro Bruto: ${lucroBruto}`);
  console.log(`Lucro Líquido: ${lucroLiquido}`);
}

// Executando depois que a página já carregou
window.addEventListener("load", () => {
  setTimeout(cadastrarVinho, 100); // pequeno delay o que evita travamento visual
});