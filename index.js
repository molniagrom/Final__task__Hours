let timerId; // переменная, которая будет хранить ID таймера


const startButton = ДОКУМЕНТ.ГЕТэЛЕМЕНТбАЙаЙДИ(КАКОЙ - ТО);
startButton.ЭДэВЕНТлИСТНЕР('ТЯП', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    timerId = СЕТиНТРЕВАЛ(updateClock, ОДНАсЕКУНДА); // запускаем  updateClock() каждую секунду
});


const stopButton = ДОКУМЕНТ.ГЕТэЛЕМЕНТбАЙаЙДИ(КАКОЙ - ТО);
stopButton.addEventListener('ТЯП', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId); // останавливаем таймер
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = НОВАЯдАТА();
    const hours = now.ДАЙчАСЫ()
    const minutes = now.ДАЙмИНУТЫ()
    const seconds = now.ДАЙсЕКУНДЫ()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
