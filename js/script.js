const buttons = [...document.querySelectorAll('.button')]
const listKeycode = buttons.map(button => button.dataset.key)
const screen = document.querySelector('.screen')

document.addEventListener('keydown', (e) => {
    const valeur = e.key
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key
    calculer(valeur)
})

const calculer = (valeur) => {
    if(listKeycode.includes(valeur)){
        switch(valeur) {
            case '46':
                screen.textContent = ""
                break
            case '8':
                const newTextContent = screen.textContent.slice(0, -1)
                screen.textContent = newTextContent
            case '13':
                const calcul = eval(screen.textContent)
                screen.textContent = calcul
                break
            default:
                const indexKeycode = listKeycode.indexOf(valeur)
                const button = buttons[indexKeycode]
                screen.textContent +=button.innerHTML
        }
    }
}

window.addEventListener('error', (e) => {
    alert('une erreur est survenu dans votre calcul')
})
const yea = document.querySelectorAll