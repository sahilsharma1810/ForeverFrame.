// ----------------------
// HEARTS
// ----------------------

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

// ----------------------
// STARS
// ----------------------

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

// ----------------------
// PAGES
// ----------------------

const homePage=document.getElementById("homePage");

const step1Page=document.getElementById("step1Page");

const photoPage=document.getElementById("photoPage");

const demoSelectPage=document.getElementById("demoSelectPage");

const basicDemoPage=document.getElementById("basicDemoPage");

const journeyPage=document.getElementById("journeyPage");

const memoryPage=document.getElementById("memoryPage");

const letterPage=document.getElementById("letterPage");

// ----------------------
// HOME
// ----------------------

document.getElementById("createBtn")
.addEventListener("click",()=>{

homePage.style.display="none";

step1Page.style.display="flex";

});

document.getElementById("watchDemoBtn")
.addEventListener("click",()=>{

homePage.style.display="none";

demoSelectPage.style.display="flex";

});

// ----------------------
// BACK
// ----------------------

document.getElementById("backToHome")
.addEventListener("click",()=>{

step1Page.style.display="none";

homePage.style.display="flex";

});

document.getElementById("backToHomeDemo")
.addEventListener("click",()=>{

demoSelectPage.style.display="none";

homePage.style.display="flex";

});

// ----------------------
// STEP 1 -> PHOTO PAGE
// ----------------------

document.getElementById("continueBtn")
.addEventListener("click",()=>{

step1Page.style.display="none";

photoPage.style.display="flex";

});

document.getElementById("backToStep1")
.addEventListener("click",()=>{

photoPage.style.display="none";

step1Page.style.display="flex";

});

// ----------------------
// PHOTO UPLOAD
// ----------------------

const maxPhotos = 6;
const photoContainer = document.getElementById("photoContainer");

if(photoContainer){

for(let i=1;i<=maxPhotos;i++){

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

<div class="uploaded-badge"
id="badge${i}"
style="display:none;">
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

for(let i=1;i<=maxPhotos;i++){

const input=document.getElementById(`photo${i}`);
const preview=document.getElementById(`preview${i}`);
const uploadText=document.getElementById(`uploadText${i}`);
const badge=document.getElementById(`badge${i}`);

input.addEventListener("change",function(){

const file=this.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(e){

preview.src=e.target.result;

preview.style.display="block";

uploadText.style.display="none";

badge.style.display="block";

};

reader.readAsDataURL(file);

});

}

}

// ----------------------
// DEMO PAGE
// ----------------------

document.getElementById("basicDemoBtn")
.addEventListener("click",()=>{

demoSelectPage.style.display="none";

basicDemoPage.style.display="flex";

});

document.getElementById("backToDemoSelect")
.addEventListener("click",()=>{

basicDemoPage.style.display="none";

demoSelectPage.style.display="flex";

});

// ----------------------
// JOURNEY
// ----------------------

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

// ----------------------
// MEMORY PAGE
// ----------------------

const bgMusic = document.getElementById("bgMusic");

const demoPhotos = [
"images/demo1.jpg",
"images/demo2.jpg",
"images/demo3.jpg",
"images/demo4.jpg",
"images/demo5.jpg",
"images/demo6.jpg"
];

const demoCaptions = [
"Every story has a beautiful beginning... ❤️",
"Every smile became a memory... 😊",
"Some moments stay forever... ✨",
"Distance never changed our bond... 💕",
"The best memories were never planned... 🌸",
"And this is only the beginning... ❤️"
];

let currentPhoto = 0;

const memoryImage =
document.getElementById("memoryImage");

const memoryCount =
document.getElementById("memoryCount");

const memoryCaption =
document.getElementById("memoryCaption");

const openLetterBtn =
document.getElementById("openLetterBtn");

// ----------------------
// BEGIN MEMORIES
// ----------------------

document.getElementById("beginMemoriesBtn")
.addEventListener("click",()=>{

journeyPage.style.display="none";

memoryPage.style.display="flex";

if(bgMusic){
bgMusic.play().catch(()=>{});
}

showPhoto();

});

// ----------------------
// BACK
// ----------------------

document.getElementById("backToJourney")
.addEventListener("click",()=>{

memoryPage.style.display="none";

journeyPage.style.display="flex";

if(bgMusic){
bgMusic.pause();
bgMusic.currentTime=0;
}

});

// ----------------------
// SHOW PHOTO
// ----------------------

function showPhoto(){

memoryImage.src=demoPhotos[currentPhoto];

memoryCount.innerHTML=
`Memory ${currentPhoto+1} of ${demoPhotos.length} ❤️`;

memoryCaption.innerHTML=
demoCaptions[currentPhoto];

if(currentPhoto===demoPhotos.length-1){

openLetterBtn.style.display="block";

}else{

openLetterBtn.style.display="none";

}

}

// ----------------------
// SWIPE
// ----------------------

let startX=0;

memoryImage.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

memoryImage.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>80 && currentPhoto<demoPhotos.length-1){

currentPhoto++;

showPhoto();

}

if(endX-startX>80 && currentPhoto>0){

currentPhoto--;

showPhoto();

}

});

// ----------------------
// LETTER PAGE
// ----------------------

const fullLetter = `
Some people enter our lives...

And change everything.

Thank you for every smile.

Thank you for every memory.

Thank you for simply being you.

No matter where life takes us...

You'll always have a place inside my heart. ❤️
`;

function typeLetter(){

    const letter=document.getElementById("letterText");

    if(!letter) return;

    letter.innerHTML="";

    let i=0;

    const typing=setInterval(()=>{

        letter.innerHTML += fullLetter.charAt(i);

        i++;

        if(i>=fullLetter.length){

            clearInterval(typing);

        }

    },35);

}

document.getElementById("openLetterBtn")
.addEventListener("click",()=>{

    memoryPage.style.display="none";

    letterPage.style.display="flex";

});

document.getElementById("backToMemory")
.addEventListener("click",()=>{

    letterPage.style.display="none";

    memoryPage.style.display="flex";

});

const envelope=document.getElementById("envelope");

if(envelope){

    envelope.addEventListener("click",()=>{

        envelope.classList.add("open");

        setTimeout(()=>{

            typeLetter();

        },700);

    });

}


