const message = `Khi kim đồng hồ điểm 22 giờ đêm ngày 03 tháng 07...

Bạn đã được triệu hồi tới Làng Hờ La 32.

Để tham dự một bữa tiệc dưới ánh trăng máu.

Nếu từ chối...

Ma Sói sẽ nuốt chửng bạn.`;

const typing = document.getElementById("typing");

let i = 0;

function typeText() {

    if(document.getElementById("scene3").classList.contains("active")){

        if(i < message.length){

            typing.innerHTML += message.charAt(i);

            i++;

            setTimeout(typeText,35);

        }else{

            document.getElementById("choices").style.display="block";

        }

    }

}

const observer = new MutationObserver(()=>{

    if(document.getElementById("scene3").classList.contains("active")){

        typing.innerHTML="";

        i=0;

        typeText();

    }

});

observer.observe(document.getElementById("scene3"),{
    attributes:true
});
