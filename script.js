// Atribuir a data diretamente para a variavel
    // const dataHoraFinalString = "2023-12-10 13:59:59";

// Obter a data final do elemento span:
    // const dataHoraFinalString = document.getElementById("dataHoraFinal").textContent;

// Obter a data atual:
const dataAtual = new Date();

// Adicione 8 dias a data atual:
const dataFinal = new Date(dataAtual);
dataFinal.setDate(dataFinal.getDate() + 8);

// Converter a data final para o formato desejado ('YYYY-MM-DD HH:mm:ss'):
const dataHoraFinalString = `${dataFinal.getFullYear()}-${(dataFinal.getMonth() + 1).toString().padStart(2, '0')}-${dataFinal.getDate().toString().padStart(2, '0')} 23:59:59`;

// Dividir a data em um array:
const partesDataHora = dataHoraFinalString.split(/[\s:-] + /);
//console.log(partesDataHora);

// Criar um objeto Date:
const dataHoraFinal = new Date(partesDataHora[0], partesDataHora[1] - 1,partesDataHora[2],partesDataHora[3],partesDataHora[4],partesDataHora[5] || 0);

// Atualizar o contador a cada segundo:
const interValor = setInterval(() => {
    // Obter a data atual em Sao Paulo, em formato 'en-US', isto e, MM/DD/YYYY HH:mm:ss
    const horaAtualSP = new Date(new Date().toLocaleString('en-US', {
        timeZone: 'America/Sao_Paulo'
    }));
    // Calcular a diferenca entre a data final e a data atual:
    const diferenca = dataHoraFinal - horaAtualSP;
    
    // Calcular dias, horas, minutos e segundos:
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Enviar o horario para o HTML atualizar o elemento com o tempo restante:
    document.getElementById("dias").innerHTML = `${dias}d`;
    document.getElementById("horas").innerHTML = `${horas}h`;
    document.getElementById("minutos").innerHTML = `${minutos}m`;
    document.getElementById("segundos").innerHTML = `${segundos}s`;

}, 1000);// Atualizar a cada segundo; 