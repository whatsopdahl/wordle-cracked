function reveal() {
    const body = document.getElementsByTagName('body')[0]
    const answerDiv = document.createElement('div')
    answerDiv.className = 'wordle-answer'
    if (!/.*nytimes.com\/games\/wordle\/.*/.test(window.location.href)){
        return
    }
    answerDiv.onclick = function() {
        const app = new window.wordle.bundle.GameApp()
        answerDiv.innerText = app.solution
    }
    answerDiv.innerText = 'Reveal'
    body.appendChild(answerDiv)
}

reveal()
