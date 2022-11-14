const isMobile = () => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
};

if(isMobile() === true) {
    document.querySelector(".kakao-box").style.display = "none";
    document.querySelector(".mail-box").style.display = "none";
}