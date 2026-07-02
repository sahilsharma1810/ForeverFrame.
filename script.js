const heartsContainer = document.querySelector(".hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

heartsContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},11000);

}

setInterval(createHeart,700);
const starsContainer=document.querySelector(".stars");

function createStar(){

const star=document.createElement("div");

star.className="star";

star.innerHTML="✨";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(8+Math.random()*10)+"px";

star.style.animationDuration=(2+Math.random()*3)+"s";

starsContainer.appendChild(star);

setTimeout(()=>{
star.remove();
},5000);

}

setInterval(createStar,300);
const btn = document.getElementById("createBtn");

btn.addEventListener("click", () => {
    btn.classList.remove("ripple");

    setTimeout(() => {
        btn.classList.add("ripple");
    }, 10);
});
const homePage = document.getElementById("homePage");
const step1Page = document.getElementById("step1Page");

document.getElementById("createBtn").addEventListener("click", () => {

    homePage.style.display = "none";

    step1Page.style.display = "flex";

});
const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {

    continueBtn.addEventListener("click", () => {

        step1Page.style.display = "none";
        photoPage.style.display = "flex";

    });

}

const maxPhotos = 6;
const photoContainer = document.getElementById("photoContainer");
for(let i=1; i<=maxPhotos; i++){
photoContainer.innerHTML += `

<div class="upload-box">

<label for="photo${i}" class="upload-card">

<img id="preview${i}" class="preview-image" style="display:none;">

<div id="uploadText${i}">
📷
<br><br>
<strong>Tap to Add Photo ${i}</strong>
<br>
JPG • PNG • JPEG
</div>

<div class="uploaded-badge" id="badge${i}" style="display:none;">
✅ Uploaded
</div>

</label>

<input
type="file"
id="photo${i}"
accept="image/*"
hidden>

</div>

`;

}
for(let i = 1; i <= maxPhotos; i++) {

    const input = document.getElementById(`photo${i}`);
    const preview = document.getElementById(`preview${i}`);
    const uploadText = document.getElementById(`uploadText${i}`);
    const badge = document.getElementById(`badge${i}`);

    input.addEventListener("change", function() {

        const file = this.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block";
            uploadText.style.display = "none";
            badge.style.display = "block";
        };

        reader.readAsDataURL(file);
    });

}
const watchDemoBtn = document.getElementById("watchDemoBtn");

const demoSelectPage = document.getElementById("demoSelectPage");

const demoBackBtn = document.getElementById("demoBackBtn");

watchDemoBtn.addEventListener("click",()=>{

homePage.style.display="none";

demoSelectPage.style.display="flex";

});

demoBackBtn.addEventListener("click",()=>{

demoSelectPage.style.display="none";

homePage.style.display="flex";

});
document.getElementById("backToHome").addEventListener("click", () => {

    step1Page.style.display = "none";
    homePage.style.display = "flex";

});
document.getElementById("backToStep1").addEventListener("click", () => {

    photoPage.style.display = "none";
    step1Page.style.display = "flex";

});
document.getElementById("backToHomeDemo").addEventListener("click", () => {

    demoSelectPage.style.display = "none";
    homePage.style.display = "flex";

});
document.getElementById("backToHome").onclick = function () {
};

document.getElementById("backToStep1").onclick = function () {
};

document.getElementById("backToHomeDemo").onclick = function () {
};
const basicDemoBtn = document.getElementById("basicDemoBtn");
const basicDemoPage = document.getElementById("basicDemoPage");

basicDemoBtn.addEventListener("click", () => {
    demoSelectPage.style.display = "none";
    basicDemoPage.style.display = "flex";
});

document.getElementById("backToDemoSelect").addEventListener("click", () => {
    basicDemoPage.style.display = "none";
    demoSelectPage.style.display = "flex";
});
const journeyPage = document.getElementById("journeyPage");

const beginMemoriesBtn =
document.getElementById("beginMemoriesBtn");

document.getElementById("openSurpriseBtn")
.addEventListener("click",()=>{

basicDemoPage.style.display="none";

journeyPage.style.display="flex";

});

document.getElementById("backToIntro")
.addEventListener("click",()=>{

journeyPage.style.display="none";

basicDemoPage.style.display="flex";

});

const memoryPage = document.getElementById("memoryPage");

const bgMusic = document.getElementById("bgMusic");

beginMemoriesBtn.addEventListener("click", () => {

    journeyPage.style.display = "none";
    memoryPage.style.display = "flex";

    bgMusic.play();

});

document.getElementById("backToJourney").addEventListener("click", () => {

    memoryPage.style.display = "none";
    journeyPage.style.display = "flex";

});

const demoPhotos = [
    "images/demo1.jpg",
    "images/demo2.jpg",
    "images/demo3.jpg",
    "images/demo4.jpg",
    "images/demo5.jpg",
    "images/demo6.jpg"
];

let currentPhoto = 0;

const memoryImage = document.getElementById("memoryImage");
const memoryCount = document.getElementById("memoryCount");

function showPhoto() {

    memoryImage.style.opacity = "0";

    setTimeout(() => {

        memoryImage.src = demoPhotos[currentPhoto];

        memoryCount.innerHTML =
        `Memory ${currentPhoto + 1} of ${demoPhotos.length} ❤️`;

        memoryImage.style.opacity = "1";

    }, 150);

}

showPhoto();

let startX = 0;
let endX = 0;

memoryImage.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

memoryImage.addEventListener("touchend", (e) => {

    endX = e.changedTouches[0].clientX;

    if (startX - endX > 80 && currentPhoto < demoPhotos.length - 1) {
        currentPhoto++;
        showPhoto();
    }

    if (endX - startX > 80 && currentPhoto > 0) {
        currentPhoto--;
        showPhoto();
    }

});
