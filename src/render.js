import './render.css'

export function render(text = 'hello world') {
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = text
}