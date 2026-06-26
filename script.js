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
    showScene("scene3");
});
