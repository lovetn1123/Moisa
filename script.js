const scenes = document.querySelectorAll(".scene");

function showScene(id) {
    scenes.forEach(scene => scene.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

const intro = document.getElementById("intro");

intro.addEventListener("click", () => {

    playBackgroundMusic();

    intro.classList.add("hide");

    showScene("scene1");

    setTimeout(() => {

        showScene("scene2");

    },8000);

}, { once:true });

// Bấm vào Scene 2 để mở Scene 3
document.getElementById("scene2").addEventListener("click", () => {
paperSound.currentTime = 0;
paperSound.play();
    const scene2 = document.getElementById("scene2");

    scene2.classList.add("zoom");

    setTimeout(() => {

    scene2.classList.remove("zoom");

    showScene("scene3");

    wolfSound.currentTime = 0;
    wolfSound.play();

}, 400);

});
// Khi vào Scene 3, sau 3 giây hiện nút
const choices = document.getElementById("choices");

const observer = new MutationObserver(() => {

    if(document.getElementById("scene3").classList.contains("active")){

        choices.classList.remove("show");

        setTimeout(() => {
            choices.classList.add("show");
        },3000);

    }

});

observer.observe(document.getElementById("scene3"),{
    attributes:true
});

// Chọn kết thúc
document.getElementById("fearBtn").addEventListener("click",()=>{

    showScene("scene4");
    badEndingSound.currentTime = 0;
badEndingSound.volume = 0.45;
badEndingSound.play();
    
    setTimeout(()=>{
        document.getElementById("badEnding").classList.add("show");
    },1000);

});

document.getElementById("joinBtn").addEventListener("click",()=>{

    showScene("scene5");
    goodEndingSound.currentTime = 0;
goodEndingSound.volume = 0.45;
goodEndingSound.play();

    setTimeout(()=>{
        document.getElementById("goodEnding").classList.add("show");
    },1000);

});
// ===== Nhạc nền =====

const bgm = document.getElementById("bgm");
const paperSound = document.getElementById("paperSound");
const wolfSound = document.getElementById("wolfSound");
const badEndingSound = document.getElementById("badEndingSound");
const goodEndingSound = document.getElementById("goodEndingSound");
function playBackgroundMusic() {
    bgm.volume = 0.35;

    bgm.play().catch(() => {
        console.log("Trình duyệt đang chờ người dùng tương tác.");
    });
}
