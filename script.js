document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const buttonSub = document.getElementById("button");
    const dtBox = document.getElementById("dsktp-box");
    const eMessage = document.getElementById("emsg");
    const dsktpThnks = document.getElementById("dsktp-msg");
    const dsktpBtn = document.getElementById("dsktp-btn");
    const mblMsg = document.getElementById("mobile-msg");
    const mblBtn = document.getElementById("mobile-btn");
    const eml2 = document.getElementById("email2");
    const btn2 = document.getElementById("button2");
    const rrmsg = document.getElementById("emsg2");

    buttonSub.addEventListener("click", function () {
        const eValue = emailInput.value.trim();
        const ePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (eValue === ""){
            eMessage.style.visibility = "visible";
        } else if (!ePattern.test(eValue)) {
            eMessage.style.visibility = "visible";
        } else {
            eMessage.style.visibility = "hidden";
            dsktpThnks.style.opacity = "1";
            dtBox.style.opacity = "0";
        }
    dsktpBtn.addEventListener("click", function () {
        dtBox.style.opacity = "1";
        dsktpThnks.style.opacity = "0";
    })    
    })
    btn2.addEventListener("click", function () {
        const eValue2 = eml2.value.trim();
        const ePattern2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (eValue2 === "") {
            rrmsg.style.visibility = "visible";
        } else if (!ePattern2.test(eValue2)) {
            rrmsg.style.visibility = "visible";
        } else {
            rrmsg.style.visibility = "hidden";
            mblMsg.style.opacity = "1";
        }
        mblBtn.addEventListener("click", function () {
            mblMsg.style.opacity = "0";
        })
    })
})
