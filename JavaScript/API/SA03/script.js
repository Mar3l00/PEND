const tempo = document.querySelector("#tempo");
const botao = document.querySelector("#buscar");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", buscarClima);

async function buscarClima() {

    const cidade = tempo.value;

    if (cidade === "") {

        resultado.textContent = "Digite uma Cidade.";
        return;
    }

    resultado.textContent = "Pesquisando";
    //aqui é pra buscar a cidade/região
    const respostaLocalizacao = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cidade)}&count=1&language=pt&format=json`
    );

    const dadosLocalizacao = await respostaLocalizacao.json();

    if (!dadosLocalizacao.results) {
        resultado.textContent = "Cidade não encontrada.";
        return;
    }

    const localizacao = dadosLocalizacao.results[0];

    const latitude = localizacao.latitude;
    const longitude = localizacao.longitude;
    //aqui é pra buscar o clima da cidade/região
    const respostaClima = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    const dadosClima = await respostaClima.json();

    const temperatura = dadosClima.current.temperature_2m;
    const umidade = dadosClima.current.relative_humidity_2m;
    const vento = dadosClima.current.wind_speed_10m;

    resultado.innerHTML = `
    <h2>${localizacao.name}
    
    <p> Temperatura: ${temperatura}°C </p>
    <p> Umidade: ${umidade}%</p>
    <p> Vento: ${vento}Km/h </p>
    
    `;

}