const eyesLayer = document.getElementById("eyesLayer");

const positions = [
    [12,72],
    [28,78],
    [45,70],
    [60,82],
    [76,74],
    [88,79],
    [20,60],
    [70,62],
    [38,84],
    [55,66]
];

positions.forEach((pos,index)=>{

    const eye=document.createElement("div");

    eye.className="eye";

    eye.style.left=pos[0]+"%";
    eye.style.top=pos[1]+"%";

    eye.style.animationDelay=(index*0.6)+"s";

    eyesLayer.appendChild(eye);

});
