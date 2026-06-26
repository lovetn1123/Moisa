const scenes = document.querySelectorAll(".scene");

function showScene(id) {
    scenes.forEach(scene => scene.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ===== Scene 1 =====
// Sau 8 giây chuyển sang Scene 2
setTimeout(() => {
    showScene("scene2");
}, 8000);

// ===== Scene 2 =====
// Click ảnh mũi tên để mở thư
document.addEventListener("click", (e) => {
    if (e.target.closest("#scene2")) {
        showScene("scene3");

        setTimeout(() => {
            document.getElementById("letterText").style.display = "block";
        }, 500);
    }
});

// ===== Nút lựa chọn =====
document.getElementById("fearBtn").onclick = () => {
    showScene("scene4");
};

document.getElementById("joinBtn").onclick = () => {
    showScene("scene5");
};
