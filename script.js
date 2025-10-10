const vila = [
  { nome: "Alzira Tronelli Zoprax", casa: 1 },
  { nome: "Jonas Velkior Draven", casa: 2 },
  { nome: "Felmina Quirz de Alcon", casa: 3 },
  { nome: "Tassila Ferom Varnet", casa: 4 },
  { nome: "Lorena Visk Ternari", casa: 5 },
  { nome: "Neandro Sefrin Calgor", casa: 6 },
  { nome: "Mirela Xandor Ylman", casa: 7 },
  { nome: "Renatto Garmex Ulvim", casa: 8 },
  { nome: "Elziane Korth Felvon", casa: 9 },
  { nome: "Vilmarque Zolin Crast", casa: 10 },
];

const numeroCasa = prompt("Qual é o número da casa?");
const morador = vila.find((pessoa) => pessoa.casa.toString() === numeroCasa);

if (morador) {
  const dataPagamento = prompt("Qual é a data de pagamento? (Ex: 10/05/2025)");
  const mesPagamento = prompt("Em que mês recebeu o pagamento? (Ex: maio)");

  if (!dataPagamento || !/\d{2}\/\d{2}\/\d{4}/.test(dataPagamento)) {
    alert("Data inválida. Use o formato dd/mm/aaaa.");
  } else {
    document.getElementById("nomeMorador").textContent = morador.nome;
    document.getElementById("dataPagamento").textContent = dataPagamento;
    document.getElementById("mesPagamento").textContent = mesPagamento;
  }
} else {
  alert("Morador não encontrado.");
}

function gerarPDF() {
  const element = document.getElementById("recibo");

  const opt = {
    margin: [50, 10, 50, 10],
    filename: "recibo.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
  };

  html2pdf().set(opt).from(element).save();
}
