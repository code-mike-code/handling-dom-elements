const tooltipsElements = document.querySelectorAll('.tooltip');
if(tooltipsElements) {

tooltipsElements.forEach(tooltip => {
    const url = tooltip.dataset.url
    const tooltipContent = tooltip.dataset.tooltipContent
    const textContent = tooltip.textContent
    const tooltipType = tooltip.dataset.tooltipType

    const linkElement = document.createElement('a');
    linkElement.href = url;
    linkElement.textContent = textContent;

    const tooltipBox = document.createElement('span')
    tooltipBox.classList.add('tooltip__box', 'tooltip__box--' + tooltipType)

    if(tooltipType === 'image') {
        const img = document.createElement('img')
        img.classList.add('tooltip__image')
        img.src = tooltipContent
        tooltipBox.appendChild(img)
    } else {
        tooltipBox.textContent = tooltipContent
    }
    
    tooltip.innerHTML = ''
    tooltip.appendChild(linkElement)
    tooltip.appendChild(tooltipBox)

})
}