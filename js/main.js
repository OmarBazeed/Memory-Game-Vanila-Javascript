/* 

- Start Memory Game With Vanilla Javascript

*/
let GameDivs = document.querySelectorAll(".game div")
let Zname = document.querySelector(".name")
let WrongTry = document.querySelector(".tries span")
let GameHeaderSpan = document.querySelector(".Game-Container .start")
let Overlay = document.querySelector(".Game-Container .overlay");
let TheGame = document.querySelector(".game")

let GameContainer = document.querySelector(".Game-Container")

// Getting LeaderBoard Info From LocalStorage
// if (localStorage.getItem("best-score") && localStorage.getItem("player-name")) {
//     let PlayerInfo = document.createElement("div");
//     PlayerInfo.className = "PlayerInfo";
//     let Zname = document.querySelector("span")
//     Zname.innerHTML = localStorage.getItem("player-name");
//     let Zscore = document.querySelector("span");
//     Zscore.innerHTML = localStorage.getItem("best-score");
//     PlayerInfo.append(Zname, Zscore)
//     document.querySelector(".leaderBoard").append(PlayerInfo)
// }




window.onload = function() {
    GameHeaderSpan.style.display = "block";
    Overlay.style.display = "block"
}

// Adding Information Game To The Spans , Overlay And Start-Game 
GameHeaderSpan.addEventListener("click", () => {
    let TheName = window.prompt("Enter Your Name");
    TheName === "" || TheName == null ? Zname.innerHTML = `Hello player !` : Zname.innerHTML = `Hello ${TheName}`;
    GameHeaderSpan.remove();
    Overlay.remove();

    for (let i = 0; i < GameDivs.length; i++) {
        GameDivs[i].style.order = Math.floor(Math.random() * GameDivs.length)
    }
})


WrongTry.innerHTML = 0;
// Dealling With Game Divs (Pics)
GameDivs.forEach(el => {

    el.addEventListener("click", () => {
        el.classList.add("rotate");
        let rotatedBlocks = [...GameDivs].filter((ele) => ele.classList.contains("rotate"))

        if (rotatedBlocks.length == 2) {
            if (rotatedBlocks[0].children[0].children[0].src === rotatedBlocks[1].children[0].children[0].src) {
                rotatedBlocks.forEach((div) => {
                    div.classList.add("finished");
                    div.classList.remove("rotate");
                    document.getElementById("success").play()
                })
            } else {
                WrongTry.innerHTML++;
                // حركه السيت تايم اووت هنا جميله جداً لان من غيرها هو كان بيزود الروونج تراى ب 1 قبل ما العنصر يلف اصلا (و دا لان الامر بتاع ريموف كلاس روتيت بيتم فى اقل من ثانيه ) انما الامر بتاع ان العنصر يلف و انك تديله روتيت بيتم فى الترانسيشين تايم الى انتا محدده و الى هو مثلا تانيه ف بالتالى انتا كدا بتحط الكلاس روتيت فى ثانيه و تمسحه فى اقل من ثانيه يبقى كدا كانه متضافش اصلا للعنصر و بالتالى هو بيحسب الروونج تراى او بيزودها و ملوش دعوه بموضوع لف الاعنصر او لا هو بيتشك على الصور يبقى احنا الى لازم ناخر موضوع او الكوود بتاع حذف الروتريت كلاس ثانيه مثلا ( فى هنا حلين الاول انك تشيل الترانسيشين تايم بس هيخلى شكل العناصر و هى بتلف مش حلو او انك تعمل سيت تايم اووت تخلى الخطوه بتاع حذف الكلاس روتيت تقعد ثانيه و بعدين تتحذف و دا بيتم من خلال السيت تايم اووت )
                setTimeout(() => {
                    rotatedBlocks.forEach((div) => div.classList.remove("rotate"));
                }, 500)
                document.getElementById("lose").play()
            }

        }

        let WinnerArray = [...GameDivs].filter((ele) => !ele.classList.contains("finished"))
        if (WinnerArray.length === 0) {
            let Wdiv = document.createElement("div");
            Wdiv.className = "Wdiv";
            let Span1 = document.createElement("span");
            Span1.className = "Span1"
            Span1.textContent = "You Win Bro!"
            let Span2 = document.createElement("span")
            Span2.className = "Span2"
            Span2.textContent = "Play Again"

            Wdiv.append(Span1, Span2);

            GameContainer.prepend(Wdiv)

            document.getElementById("congrats").play()
            setTimeout(() => {
                document.getElementById("hip").play()
            }, 500)

            Span2.addEventListener("click", () => {
                location.reload();
            })

            // Adding LeaderBoard Info to localStorage
            // window.localStorage.setItem("best-score", WrongTry);
            // window.localStorage.setItem("player-name", Zname);

            // let PlayerInfo = document.createElement("div");
            // PlayerInfo.className = "PlayerInfo";
            // let ZName = document.querySelector("span")
            // ZName.innerHTML = Zname;
            // let Zscore = document.querySelector("span");
            // Zscore.innerHTML = WrongTry;
            // PlayerInfo.append(ZName, Zscore)
            // document.querySelector(".leaderBoard").append(PlayerInfo)
        }
    });

})

/* End Memory Game With Vanilla Javascript */





// الحمد لله حمداً كثيراً مباركاً فيه
// الحمد لله حمداً ملئ السموات و الارض
// الحمد لله عدد ما كان و عدد ما يكون و عدد الحركات و السكون
// الحمد لله حمداً طيباً مباركاً فيه 
// الحمد لله حتى يرضى و الحمد لله عند الرضى و الحمد لله بعد الرضى
// الحمد لله حمداً تطيب به النفوس 
// الحمد لله حتى يبلغ الحمد منتهاه
// اللهم انى استودعك ما حفظت و ما فهمت و ما قرأت و ما كتبت أمانه و وديعه عندك و أسالك ان ترضه على عند حاجتى اليه فانت حسبى و نعم الوكيل ....