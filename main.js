///بسم الله الرحمن الرحيم
let $ = document
let img = $.querySelector("img")
img.onclick = ()=>{
$.getElementById("soundEffect").play()
$.querySelector("h1").textContent = 'جاري الفتح'
setTimeout(() => {
img.src = './assets/gift-box.png'
img.style.transform = "scale(1.5)"
$.querySelector("h1").textContent = 'تم الفتح'
}, 4000);
setTimeout(() => {
$.getElementsByClassName("boxDiv")[0].style.display = 'none'
$.querySelector("h1").textContent = ''
}, 6000);
setTimeout(() => {
$.querySelector("video").style.display = 'block'

}, 6000);
setTimeout(() => {
$.querySelector("video").style.filter = 'blur(0px)'
$.querySelector("video").play()
$.getElementById("theTitle").innerHTML = 'يتمنى لكم نادينا عيد مبارك'
$.querySelector("h2").textContent = 'عيد مبارك ,علينا و عليكم ان شاء الله'
}, 8000);
}