const colors = {
    p: '#FF5733',
    div: '#9CFF33',
    span: '#F3FF33',
    section: '#33FFC7',
    ul: '#33C1FF',
    ol: '#3377FF',
    header: '#9633FF',
    nav: '#D433FF',
    main: '#F933FF',
    footer: '#FF339C',
    form: '#FF3333',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})