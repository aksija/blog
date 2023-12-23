// Homies
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}
// About Me //
function Like1() {
    var likeButton = document.getElementById('like1Button');
    likeButton.classList.toggle('activelike');

    removeActiveClassExcept1('like1Button');
}

function Heart1() {
    var heartButton = document.getElementById('heart1Button');
    heartButton.classList.toggle('activeheart');

    removeActiveClassExcept1('heart1Button');
}

function Wow1() {
    var wowButton = document.getElementById('wow1Button');
    wowButton.classList.toggle('activewow');

    removeActiveClassExcept1('wow1Button');
}

function Sad1() {
    var sadButton = document.getElementById('sad1Button');
    sadButton.classList.toggle('activesad');

    removeActiveClassExcept1('sad1Button');
}

function Angry1() {
    var angryButton = document.getElementById('angry1Button');
    angryButton.classList.toggle('activeangry');

    removeActiveClassExcept1('angry1Button');
}

function removeActiveClassExcept1(clickedButtonId) {

    var buttonIds = ['like1Button', 'heart1Button', 'wow1Button', 'sad1Button', 'angry1Button'];

    buttonIds.forEach(function (buttonId) {

        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike', 'activeheart', 'activewow', 'activesad', 'activeangry');
        }
    });
}

// Gallery //
function Like2() {
    var like2Button = document.getElementById('like2Button');
    like2Button.classList.toggle('activelike2');

    removeActiveClassExcept('like2Button');
}

function Heart2() {
    var heart2Button = document.getElementById('heart2Button');
    heart2Button.classList.toggle('activeheart2');

    removeActiveClassExcept('heart2Button');
}

function Haha2() {
    var haha2Button = document.getElementById('haha2Button');
    haha2Button.classList.toggle('activehaha2');

    removeActiveClassExcept('haha2Button');
}

function Sad2() {
    var sad2Button = document.getElementById('sad2Button');
    sad2Button.classList.toggle('activesad2');

    removeActiveClassExcept('sad2Button');
}

function Angry2() {
    var angry2Button = document.getElementById('angry2Button');
    angry2Button.classList.toggle('activeangry2');

    removeActiveClassExcept('angry2Button');
}

function removeActiveClassExcept(clickedButtonId) {
   
    var buttonIds = ['like2Button', 'heart2Button', 'haha2Button', 'sad2Button', 'angry2Button'];

    buttonIds.forEach(function (buttonId) {
       
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike2', 'activeheart2', 'activehaha2', 'activesad2', 'activeangry2');
        }
    });
}
// 3 //

function Like3() {
    var like3Button = document.getElementById('like3Button');
    like3Button.classList.toggle('activelike3');

    removeActiveClassExcept3('like3Button');
}

function Heart3() {
    var heart3Button = document.getElementById('heart3Button');
    heart3Button.classList.toggle('activeheart3');

    removeActiveClassExcept3('heart3Button');
}

function Haha3() {
    var haha3Button = document.getElementById('haha3Button');
    haha3Button.classList.toggle('activehaha3');

    removeActiveClassExcept3('haha3Button');
}

function Sad3() {
    var sad3Button = document.getElementById('sad3Button');
    sad3Button.classList.toggle('activesad3');

    removeActiveClassExcept3('sad3Button');
}

function Angry3() {
    var angry3Button = document.getElementById('angry3Button');
    angry3Button.classList.toggle('activeangry3');

    removeActiveClassExcept3('angry3Button');
}

function removeActiveClassExcept3(clickedButtonId) {
   
    var buttonIds = ['like3Button', 'heart3Button', 'haha3Button', 'sad3Button', 'angry3Button'];

    buttonIds.forEach(function (buttonId) {
       
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike3', 'activeheart3', 'activehaha3', 'activesad3', 'activeangry3');
        }
    });
}

// 4 //

function Like4() {
    var like4Button = document.getElementById('like4Button');
    like4Button.classList.toggle('activelike4');

    removeActiveClassExcept4('like4Button');
}

function Heart4() {
    var heart4Button = document.getElementById('heart4Button');
    heart4Button.classList.toggle('activeheart4');

    removeActiveClassExcept4('heart4Button');
}

function Haha4() {
    var haha4Button = document.getElementById('haha4Button');
    haha4Button.classList.toggle('activehaha4');

    removeActiveClassExcept4('haha4Button');
}

function Sad4() {
    var sad4Button = document.getElementById('sad4Button');
    sad4Button.classList.toggle('activesad4');

    removeActiveClassExcept4('sad4Button');
}

function Angry4() {
    var angry4Button = document.getElementById('angry4Button');
    angry4Button.classList.toggle('activeangry4');

    removeActiveClassExcept4('angry4Button');
}

function removeActiveClassExcept4(clickedButtonId) {
   
    var buttonIds = ['like4Button', 'heart4Button', 'haha4Button', 'sad4Button', 'angry4Button'];

    buttonIds.forEach(function (buttonId) {
       
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike4', 'activeheart4', 'activehaha4', 'activesad4', 'activeangry4');
        }
    });
}

function Like5() {
    var like5Button = document.getElementById('like5Button');
    like5Button.classList.toggle('activelike5');

    removeActiveClassExcept5('like5Button');
}

function Heart5() {
    var heart5Button = document.getElementById('heart5Button');
    heart5Button.classList.toggle('activeheart5');

    removeActiveClassExcept5('heart5Button');
}

function Haha5() {
    var haha5Button = document.getElementById('haha5Button');
    haha5Button.classList.toggle('activehaha5');

    removeActiveClassExcept5('haha5Button');
}

function Sad5() {
    var sad5Button = document.getElementById('sad5Button');
    sad5Button.classList.toggle('activesad5');

    removeActiveClassExcept5('sad5Button');
}

function Angry5() {
    var angry5Button = document.getElementById('angry5Button');
    angry5Button.classList.toggle('activeangry5');

    removeActiveClassExcept5('angry5Button');
}

function removeActiveClassExcept5(clickedButtonId) {
    var buttonIds = ['like5Button', 'heart5Button', 'haha5Button', 'sad5Button', 'angry5Button'];

    buttonIds.forEach(function (buttonId) {
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike5', 'activeheart5', 'activehaha5', 'activesad5', 'activeangry5');
        }
    });
}

function Like6() {
    var like6Button = document.getElementById('like6Button');
    like6Button.classList.toggle('activelike6');
    removeActiveClassExcept6('like6Button');
}

function Heart6() {
    var heart6Button = document.getElementById('heart6Button');
    heart6Button.classList.toggle('activeheart6');
    removeActiveClassExcept6('heart6Button');
}

function Haha6() {
    var haha6Button = document.getElementById('haha6Button');
    haha6Button.classList.toggle('activehaha6');
    removeActiveClassExcept6('haha6Button');
}

function Sad6() {
    var sad6Button = document.getElementById('sad6Button');
    sad6Button.classList.toggle('activesad6');
    removeActiveClassExcept6('sad6Button');
}

function Angry6() {
    var angry6Button = document.getElementById('angry6Button');
    angry6Button.classList.toggle('activeangry6');
    removeActiveClassExcept6('angry6Button');
}

function removeActiveClassExcept6(clickedButtonId) {
    var buttonIds = ['like6Button', 'heart6Button', 'haha6Button', 'sad6Button', 'angry6Button'];
    
    buttonIds.forEach(function (buttonId) {
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike6', 'activeheart6', 'activehaha6', 'activesad6', 'activeangry6');
        }
    });
}

function Like7() {
    var like7Button = document.getElementById('like7Button');
    like7Button.classList.toggle('activelike7');
    removeActiveClassExcept7('like7Button');
}

function Heart7() {
    var heart7Button = document.getElementById('heart7Button');
    heart7Button.classList.toggle('activeheart7');
    removeActiveClassExcept7('heart7Button');
}

function Haha7() {
    var haha7Button = document.getElementById('haha7Button');
    haha7Button.classList.toggle('activehaha7');
    removeActiveClassExcept7('haha7Button');
}

function Sad7() {
    var sad7Button = document.getElementById('sad7Button');
    sad7Button.classList.toggle('activesad7');
    removeActiveClassExcept7('sad7Button');
}

function Angry7() {
    var angry7Button = document.getElementById('angry7Button');
    angry7Button.classList.toggle('activeangry7');
    removeActiveClassExcept7('angry7Button');
}

function removeActiveClassExcept7(clickedButtonId) {
    var buttonIds = ['like7Button', 'heart7Button', 'haha7Button', 'sad7Button', 'angry7Button'];
    
    buttonIds.forEach(function (buttonId) {
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike7', 'activeheart7', 'activehaha7', 'activesad7', 'activeangry7');
        }
    });
}

function Like8() {
    var like8Button = document.getElementById('like8Button');
    like8Button.classList.toggle('activelike8');
    removeActiveClassExcept8('like8Button');
}

function Heart8() {
    var heart8Button = document.getElementById('heart8Button');
    heart8Button.classList.toggle('activeheart8');
    removeActiveClassExcept8('heart8Button');
}

function Haha8() {
    var haha8Button = document.getElementById('haha8Button');
    haha8Button.classList.toggle('activehaha8');
    removeActiveClassExcept8('haha8Button');
}

function Sad8() {
    var sad8Button = document.getElementById('sad8Button');
    sad8Button.classList.toggle('activesad8');
    removeActiveClassExcept8('sad8Button');
}

function Angry8() {
    var angry8Button = document.getElementById('angry8Button');
    angry8Button.classList.toggle('activeangry8');
    removeActiveClassExcept8('angry8Button');
}

function removeActiveClassExcept8(clickedButtonId) {
    var buttonIds = ['like8Button', 'heart8Button', 'haha8Button', 'sad8Button', 'angry8Button'];
    
    buttonIds.forEach(function (buttonId) {
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike8', 'activeheart8', 'activehaha8', 'activesad8', 'activeangry8');
        }
    });
}

function Like9() {
    var like9Button = document.getElementById('like9Button');
    like9Button.classList.toggle('activelike9');
    removeActiveClassExcept9('like9Button');
}

function Heart9() {
    var heart9Button = document.getElementById('heart9Button');
    heart9Button.classList.toggle('activeheart9');
    removeActiveClassExcept9('heart9Button');
}

function Haha9() {
    var haha9Button = document.getElementById('haha9Button');
    haha9Button.classList.toggle('activehaha9');
    removeActiveClassExcept9('haha9Button');
}

function Sad9() {
    var sad9Button = document.getElementById('sad9Button');
    sad9Button.classList.toggle('activesad9');
    removeActiveClassExcept9('sad9Button');
}

function Angry9() {
    var angry9Button = document.getElementById('angry9Button');
    angry9Button.classList.toggle('activeangry9');
    removeActiveClassExcept9('angry9Button');
}

function removeActiveClassExcept9(clickedButtonId) {
    var buttonIds = ['like9Button', 'heart9Button', 'haha9Button', 'sad9Button', 'angry9Button'];
    
    buttonIds.forEach(function (buttonId) {
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike9', 'activeheart9', 'activehaha9', 'activesad9', 'activeangry9');
        }
    });
}

function Like10() {
    var like10Button = document.getElementById('like10Button');
    like10Button.classList.toggle('activelike10');
    removeActiveClassExcept10('like10Button');
}

function Heart10() {
    var heart10Button = document.getElementById('heart10Button');
    heart10Button.classList.toggle('activeheart10');
    removeActiveClassExcept10('heart10Button');
}

function Haha10() {
    var haha10Button = document.getElementById('haha10Button');
    haha10Button.classList.toggle('activehaha10');
    removeActiveClassExcept10('haha10Button');
}

function Sad10() {
    var sad10Button = document.getElementById('sad10Button');
    sad10Button.classList.toggle('activesad10');
    removeActiveClassExcept10('sad10Button');
}

function Angry10() {
    var angry10Button = document.getElementById('angry10Button');
    angry10Button.classList.toggle('activeangry10');
    removeActiveClassExcept10('angry10Button');
}

function removeActiveClassExcept10(clickedButtonId) {
    var buttonIds = ['like10Button', 'heart10Button', 'haha10Button', 'sad10Button', 'angry10Button'];
    
    buttonIds.forEach(function (buttonId) {
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike10', 'activeheart10', 'activehaha10', 'activesad10', 'activeangry10');
        }
    });
}

// Foods //
function Like01() {
    var like01Button = document.getElementById('like01Button');
    like01Button.classList.toggle('activelike01');
    removeActiveClassExcept01('like01Button');
}

function Heart01() {
    var heart01Button = document.getElementById('heart01Button');
    heart01Button.classList.toggle('activeheart01');
    removeActiveClassExcept01('heart01Button');
}

function Haha01() {
    var haha01Button = document.getElementById('haha01Button');
    haha01Button.classList.toggle('activehaha01'); // Corrected class name
    removeActiveClassExcept01('haha01Button');
}

function Wow01() {
    var wow01Button = document.getElementById('wow01Button');
    wow01Button.classList.toggle('activewow01');
    removeActiveClassExcept01('wow01Button');
}

function Delicious01() {
    var delicious01Button = document.getElementById('delicious01Button');
    delicious01Button.classList.toggle('activedelicious01');
    removeActiveClassExcept01('delicious01Button');
}

function removeActiveClassExcept01(clickedButtonId) {
    var buttonIds = ['like01Button', 'heart01Button', 'haha01Button', 'wow01Button', 'delicious01Button'];
    
    buttonIds.forEach(function (buttonId) {
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike01', 'activeheart01', 'activehaha01', 'activewow01', 'activedelicious01');
        }
    });
}

// 02 //
function Like02() {
    var like02Button = document.getElementById('like02Button');
    like02Button.classList.toggle('activelike02');
    removeActiveClassExcept02('like02Button');
}

function Heart02() {
    var heart02Button = document.getElementById('heart02Button');
    heart02Button.classList.toggle('activeheart02');
    removeActiveClassExcept02('heart02Button');
}

function Haha02() {
    var haha02Button = document.getElementById('haha02Button');
    haha02Button.classList.toggle('activehaha02');
    removeActiveClassExcept02('haha02Button');
}

function Wow02() {
    var wow02Button = document.getElementById('wow02Button');
    wow02Button.classList.toggle('activewow02');
    removeActiveClassExcept02('wow02Button');
}

function Delicious02() {
    var delicious02Button = document.getElementById('delicious02Button');
    delicious02Button.classList.toggle('activedelicious02');
    removeActiveClassExcept02('delicious02Button');
}

function removeActiveClassExcept02(clickedButtonId) {
    var buttonIds = ['like02Button', 'heart02Button', 'haha02Button', 'wow02Button', 'delicious02Button'];
    
    buttonIds.forEach(function (buttonId) {
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike02', 'activeheart02', 'activehaha02', 'activewow02', 'activedelicious02');
        }
    });
}

// 03 //
function Like03() {
    var like03Button = document.getElementById('like03Button');
    like03Button.classList.toggle('activelike03');
    removeActiveClassExcept03('like03Button');
}

function Heart03() {
    var heart03Button = document.getElementById('heart03Button');
    heart03Button.classList.toggle('activeheart03');
    removeActiveClassExcept03('heart03Button');
}

function Haha03() {
    var haha03Button = document.getElementById('haha03Button');
    haha03Button.classList.toggle('activehaha03');
    removeActiveClassExcept03('haha03Button');
}

function Wow03() {
    var wow03Button = document.getElementById('wow03Button');
    wow03Button.classList.toggle('activewow03');
    removeActiveClassExcept03('wow03Button');
}

function Delicious03() {
    var delicious03Button = document.getElementById('delicious03Button');
    delicious03Button.classList.toggle('activedelicious03');
    removeActiveClassExcept03('delicious03Button');
}

function removeActiveClassExcept03(clickedButtonId) {
    var buttonIds = ['like03Button', 'heart03Button', 'haha03Button', 'wow03Button', 'delicious03Button'];
    
    buttonIds.forEach(function (buttonId) {
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activelike03', 'activeheart03', 'activehaha03', 'activewow03', 'activedelicious03');
        }
    });
}

// Gallery //
// 01//
function Emoji1() {
    var emojiButton = document.getElementById('Emoji1Button');
    emojiButton.classList.toggle('activeEmoji1');

    removeActiveClassExcept1('Emoji1Button');
}

function Emoji2() {
    var emojiButton = document.getElementById('Emoji2Button');
    emojiButton.classList.toggle('activeEmoji2');

    removeActiveClassExcept1('Emoji2Button');
}

function Emoji3() {
    var emojiButton = document.getElementById('Emoji3Button');
    emojiButton.classList.toggle('activeEmoji3');

    removeActiveClassExcept1('Emoji3Button');
}

function Emoji4() {
    var emojiButton = document.getElementById('Emoji4Button');
    emojiButton.classList.toggle('activeEmoji4');

    removeActiveClassExcept1('Emoji4Button');
}

function Emoji5() {
    var emojiButton = document.getElementById('Emoji5Button');
    emojiButton.classList.toggle('activeEmoji5');

    removeActiveClassExcept1('Emoji5Button');
}

function removeActiveClassExcept1(clickedButtonId) {
    var buttonIds = ['Emoji1Button', 'Emoji2Button', 'Emoji3Button', 'Emoji4Button', 'Emoji5Button'];

    buttonIds.forEach(function (buttonId) {
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activeEmoji1', 'activeEmoji2', 'activeEmoji3', 'activeEmoji4', 'activeEmoji5');
        }
    });
}

// 02 //
function Emoji01() {
    var emojiButton = document.getElementById('Emoji01Button');
    emojiButton.classList.toggle('activeEmoji01');

    removeActiveClassExcept01('Emoji01Button');
}

function Emoji02() {
    var emojiButton = document.getElementById('Emoji02Button');
    emojiButton.classList.toggle('activeEmoji02');

    removeActiveClassExcept01('Emoji02Button');
}

function Emoji03() {
    var emojiButton = document.getElementById('Emoji03Button');
    emojiButton.classList.toggle('activeEmoji03');

    removeActiveClassExcept01('Emoji03Button');
}

function Emoji04() {
    var emojiButton = document.getElementById('Emoji04Button');
    emojiButton.classList.toggle('activeEmoji04');

    removeActiveClassExcept01('Emoji04Button');
}

function Emoji05() {
    var emojiButton = document.getElementById('Emoji05Button');
    emojiButton.classList.toggle('activeEmoji05');

    removeActiveClassExcept01('Emoji05Button');
}

function removeActiveClassExcept01(clickedButtonId) {
    var buttonIds = ['Emoji01Button', 'Emoji02Button', 'Emoji03Button', 'Emoji04Button', 'Emoji05Button'];

    buttonIds.forEach(function (buttonId) {
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activeEmoji01', 'activeEmoji02', 'activeEmoji03', 'activeEmoji04', 'activeEmoji05');
        }
    });
}

// 03 //
function Emoji001() {
    var emojiButton = document.getElementById('Emoji001Button');
    emojiButton.classList.toggle('activeEmoji001');

    removeActiveClassExcept001('Emoji001Button');
}

function Emoji002() {
    var emojiButton = document.getElementById('Emoji002Button');
    emojiButton.classList.toggle('activeEmoji002');

    removeActiveClassExcept001('Emoji002Button');
}

function Emoji003() {
    var emojiButton = document.getElementById('Emoji003Button');
    emojiButton.classList.toggle('activeEmoji003');

    removeActiveClassExcept001('Emoji003Button');
}

function Emoji004() {
    var emojiButton = document.getElementById('Emoji004Button');
    emojiButton.classList.toggle('activeEmoji004');

    removeActiveClassExcept001('Emoji004Button');
}

function Emoji005() {
    var emojiButton = document.getElementById('Emoji005Button');
    emojiButton.classList.toggle('activeEmoji005');

    removeActiveClassExcept001('Emoji005Button');
}

function removeActiveClassExcept001(clickedButtonId) {
    var buttonIds = ['Emoji001Button', 'Emoji002Button', 'Emoji003Button', 'Emoji004Button', 'Emoji005Button'];

    buttonIds.forEach(function (buttonId) {
        if (buttonId !== clickedButtonId) {
            var button = document.getElementById(buttonId);
            button.classList.remove('activeEmoji001', 'activeEmoji002', 'activeEmoji003', 'activeEmoji004', 'activeEmoji005');
        }
    });
}
