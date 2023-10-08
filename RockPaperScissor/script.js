let randomIcon;
let yourPoint = 0
let pcPoint = 0
let gamePoint = 0;


var showElement = () => {
    document.getElementsByClassName('startGamebtn')[0].hidden = true
    document.getElementsByClassName('title')[0].hidden = false
    document.getElementsByClassName('threeScore')[0].hidden = false
    document.getElementsByClassName('fiveScore')[0].hidden = false
    document.getElementsByClassName('rock')[0].disabled = false
    document.getElementsByClassName('paper')[0].disabled = false
    document.getElementsByClassName('scissors')[0].disabled = false
}

var showGame = () => {
    document.getElementsByClassName('startGamebtn')[0].hidden = true
    document.getElementsByClassName('title')[0].hidden = true
    document.getElementsByClassName('threeScore')[0].hidden = true
    document.getElementsByClassName('fiveScore')[0].hidden = true
    document.getElementsByClassName('rock')[0].hidden = false
    document.getElementsByClassName('paper')[0].hidden = false
    document.getElementsByClassName('scissors')[0].hidden = false
    document.getElementsByClassName('resetGamebtn')[0].hidden = true
    document.getElementsByClassName('showScore')[0].hidden = false

}

var resetGane = () => {
    yourPoint = 0
    pcPoint = 0
    gamePoint = 0
    document.getElementById('yourScore').innerHTML = yourPoint
    document.getElementById('pcScore').innerHTML = pcPoint
    document.getElementById('result').innerHTML = ''
    document.getElementsByClassName('startGamebtn')[0].hidden = false
    document.getElementsByClassName('title')[0].hidden = true
    document.getElementsByClassName('threeScore')[0].hidden = true
    document.getElementsByClassName('fiveScore')[0].hidden = true
    document.getElementsByClassName('rock')[0].hidden = true
    document.getElementsByClassName('paper')[0].hidden = true
    document.getElementsByClassName('scissors')[0].hidden = true
    document.getElementsByClassName('resetGamebtn')[0].hidden = true
    document.getElementsByClassName('showScore')[0].hidden = true
    document.getElementById("computerPlay").hidden = true
}

var startGame = () => {
    document.getElementById('reset').hidden = false
    document.getElementById("computerPlay").hidden = false
}
var threeScore = () => {
    gamePoint = 3
}
var fiveScore = () => {
    gamePoint = 5
}
var randomize = () => {
    const random = [
        '<img src="/RockPaperScissor/img/rock.png"/>',
        '<img src="/RockPaperScissor/img/paper.png"/>',
        '<img src="/RockPaperScissor/img/scissors.png">'
    ];
    randomIcon = random[Math.floor(Math.random() * random.length)];
    document.getElementById('computerPlay').innerHTML = randomIcon;
}

var showResult = () => {
    document.getElementById('yourScore').innerHTML = yourPoint
    document.getElementById('pcScore').innerHTML = pcPoint
    if (gamePoint === 3 || gamePoint === 5) {
        if (yourPoint === gamePoint) {
            document.getElementById('result').innerHTML = 'هوراااا برنده شدی :)'
            document.getElementsByClassName('rock')[0].disabled = true
            document.getElementsByClassName('paper')[0].disabled = true
            document.getElementsByClassName('scissors')[0].disabled = true
        }
        if (pcPoint === gamePoint) {
            document.getElementById('result').innerHTML = 'متاسفم! باختی :('
            document.getElementsByClassName('rock')[0].disabled = true
            document.getElementsByClassName('paper')[0].disabled = true
            document.getElementsByClassName('scissors')[0].disabled = true
        }
    }
}

var rock = () => {

    if (randomIcon === '<img src="/RockPaperScissor/img/scissors.png">') {
        yourPoint++
    }
    if (randomIcon === '<img src="/RockPaperScissor/img/paper.png"/>') {
        pcPoint++
    }
    if (randomIcon === '<img src="/RockPaperScissor/img/rock.png"/>') {
        yourPoint += 0
        pcPoint += 0
    }
    showResult()
}

var paper = () => {
    if (randomIcon === '<img src="/RockPaperScissor/img/rock.png"/>') {
        yourPoint++
    }
    if (randomIcon === '<img src="/RockPaperScissor/img/scissors.png">') {
        pcPoint++
    }
    if (randomIcon === '<img src="/RockPaperScissor/img/paper.png"/>') {
        yourPoint += 0
        pcPoint += 0
    }
    showResult()
}
var scissors = () => {
    if (randomIcon === '<img src="/RockPaperScissor/img/paper.png"/>') {
        yourPoint++
    }
    if (randomIcon === '<img src="/RockPaperScissor/img/rock.png"/>') {
        pcPoint++
    }
    if (randomIcon === '<img src="/RockPaperScissor/img/scissors.png">') {
        yourPoint += 0
        pcPoint += 0
    }
    showResult()
}