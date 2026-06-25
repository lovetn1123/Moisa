
setTimeout(()=>switchScene('scene2'),5000);

function switchScene(id){
 document.querySelectorAll('.scene').forEach(x=>x.classList.remove('active'));
 document.getElementById(id).classList.add('active');
}

document.addEventListener('click',e=>{
 if(e.target.id==='letter') switchScene('scene3');
});

function fear(){switchScene('fearScene');}
function join(){switchScene('campScene');}
