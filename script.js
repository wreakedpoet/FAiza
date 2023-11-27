const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "তাইলে, Date এ যাচ্ছি কবে হুম?";
    gif.src =
        "https://media.giphy.com/media/evCPQk1auQyRwpelDr/giphy.gif?cid=ecf05e477zdjpmj0s5hiz7htwd47o3usn857gma8ro8atzut&ep=v1_stickers_search&rid=giphy.gif&ct=s";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    let okButton = document.querySelector('.yes-btn');
    let counter = 0;

    okButton.addEventListener('click', function() {
        counter++;

        if (counter === 1) {} else if (counter === 2) {
            okButton.removeEventListener('click', arguments.callee);
            okButton.addEventListener('click', function() {
                window.location.href = "mailto:shariarmehedi0@gmail.com?subject=la di da di daa.. la di da da di&body=i%20need%20to%20know%20time%20and%20date%20badly :) ";
            });

            okButton.textContent = "বলো কবে?";
        }
    });

});