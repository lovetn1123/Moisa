const scenes = document.querySelectorAll(".scene");

function showScene(id) {
    scenes.forEach(scene => scene.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// Bắt đầu với Scene 1
showScene("scene1");

// Sau 8 giây sang Scene 2
setTimeout(() => {
    showScene("scene2");
}, 8000);

// Bấm vào Scene 2 để mở Scene 3
document.getElementById("scene2").addEventListener("click", () => {

    const scene2 = document.getElementById("scene2");

    scene2.classList.add("zoom");

    setTimeout(() => {

        scene2.classList.remove("zoom");

        showScene("scene3");

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
});

document.getElementById("joinBtn").addEventListener("click",()=>{
    showScene("scene5");
});
