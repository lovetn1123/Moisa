const scenes = document.querySelectorAll(".scene");

function showScene(id) {
    scenes.forEach(scene => scene.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// Hiện Scene 1
showScene("scene1");

// Sau 8 giây chuyển sang Scene 2
setTimeout(() => {
    showScene("scene2");
}, 8000);
