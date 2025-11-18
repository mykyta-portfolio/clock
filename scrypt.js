let sec = document.getElementById("sec")
let min = document.getElementById("min")
let hour = document.getElementById("hour")

function time(){
    let now = new Date()
    let s = now.getSeconds()
    let m = now.getMinutes()
    let h = now.getHours()
sec.style.transform = "rotate(" + (s * 6) + "deg)"
min.style.transform = "rotate(" + (m * 6 + s / 10) + "deg)"
hour.style.transform = "rotate(" + (h * 30 + m /2 ) + "deg)"
}
setInterval(time, 1000)








