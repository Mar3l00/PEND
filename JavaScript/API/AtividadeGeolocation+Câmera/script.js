long =document.querySelector("#longitude");
lat = document.querySelector("#latitude");
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        long.textContent = `Longitude: ${posicao.coords.longitude}`;
        lat.textContent = `Latitude: ${posicao.coords.latitude}`;

        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("Precisão:", posicao.coords.accuracy);
    },
    function (erro) {
        console.log("Não foi possível obter a localização.", erro);
    }
);

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
.then(function(stream) {
    const video = document.querySelector("#camera");
    video.srcObject = stream;
})
.catch(function(erro) {
    console.log("Erro ao acessar a câmera:", erro);
});