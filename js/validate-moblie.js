const kakao_box = document.querySelector(".kakao-box");
const mail_box = document.querySelector(".mail-box");
const mobile = document.querySelector(".mobile");

const isMobile = () => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
};  

if(isMobile() === true) {
    kakao_box.style.display = "none";
    mail_box.style.display = "none";
    mobile.style.display = "none";
}

