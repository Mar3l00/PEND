const funcionando = document.querySelector("#funcionando");
const nao_funcionando = document.querySelector("#nao_funcionando");
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("Precisão:", posicao.coords.accuracy);
        document.getElementById("localizacao").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/2776/2776063.png' alt='localizacao' width='400' height='400'>";
    },
    function (erro) {
        console.log("Não foi possível obter a localização.", erro);
        document.getElementById("localizacao").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/256/5450/5450998.png' alt='localizacao' width='400' height='400'>";
    }
);

