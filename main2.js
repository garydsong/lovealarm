let onoff;
let awake = document.getElementById("awake-toggle")
awake.addEventListener('click', () => {
    if (onoff !== "on") {
        onoff = "on";
        awake.style.color = 'gray';
        awake.innerText = 'asleep';
        awake.style.transition = "0.5s"
    } else {
        onoff = "off";
        awake.style.color = 'rgb(218, 246, 255)';
        awake.innerText = 'awake';
    }
})

let onoff2;
let onswitch = document.getElementById("on-toggle")
onswitch.addEventListener('click', () => {
    if (onoff2 !== "on") {
        onoff2 = "on";
        onswitch.style.color = 'gray';
        onswitch.innerText = 'OFF';
        onswitch.style.transition = "0.5s"
    } else {
        onoff2 = "off";
        onswitch.style.color = 'rgb(218, 246, 255)';
        onswitch.innerText = 'ON';
    }
})

let onoff3;
let settings = document.getElementById('settings')
let clock = document.getElementById('clock')
let bod = document.getElementById('bod')
let lightswitch = document.getElementById("light-toggle")
lightswitch.addEventListener('click', () => {
    if (onoff3 !== "on") {
        onoff3 = "on";
        lightswitch.style.color = 'gray';
        lightswitch.innerText = 'GOOD NIGHT';
        bod.style.background = 'gold';
        bod.style.background = 'radial-gradient(ellipse at center,  rgb(255, 245, 153)  0%, white 70%)';
        clock.style.color = 'black';
        settings.style.color = 'black';
        settings.style.textShadow = '0 0 20px white,  0 0 20px gold';
        clock.style.textShadow = '0 0 20px white,  0 0 20px gold';
        lightswitch.style.textShadow = '0 0 20px white,  0 0 20px gold';
        clock.style.transition = "0.5s";
        settings.style.transition = "0.5s";
        bod.style.transition = '3s';
        lightswitch.style.transition = "0.5s";


    } else {
        onoff3 = "off";
        lightswitch.style.color = 'rgb(218, 246, 255)';
        lightswitch.innerText = 'GOOD MORNING';
        bod.style.background = '#0f3854';
        bod.style.background = 'radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%)';
        clock.style.color = 'rgb(218, 246, 255)';
        settings.style.color = 'rgb(218, 246, 255)';
        settings.style.textShadow = '0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)';
        clock.style.textShadow = '0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)';
        lightswitch.style.textShadow = '0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)';
    }
})
