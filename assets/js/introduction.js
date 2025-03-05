const tooltipsElements = document.querySelectorAll('.tooltip');
if(tooltipsElements.length) {


// function preparing tooltip
function prepareTooltip(tooltip) {
    const url = tooltip.dataset.url
    const tooltipContent = tooltip.dataset.tooltipContent
    const textContent = tooltip.textContent
    const tooltipType = tooltip.dataset.tooltipType

    const linkElement = createTooltipLink(url, textContent)
    const tooltipBox = createTooltipBox(tooltipContent, tooltipType)

    tooltip.innerHTML = '';
    tooltip.appendChild(linkElement);
    tooltip.appendChild(tooltipBox);
}

// function creating link
function createTooltipLink(url, textContent) {
    const linkElement = document.createElement('a');
    linkElement.href = url;
    linkElement.textContent = textContent;
    return linkElement;
}

// function creating tooltip box
function createTooltipBox(tooltipContent, tooltipType) {
    const tooltipBox = document.createElement('span');
    tooltipBox.classList.add('tooltip__box', 'tooltip__box--' + tooltipType);

    if (tooltipType === 'image') {
        const img = createTooltipImage(tooltipContent);
        tooltipBox.appendChild(img);
    } else {
        tooltipBox.textContent = tooltipContent;
    }

    return tooltipBox;
}

// function creating image
function createTooltipImage(tooltipContent) {
    const img = document.createElement('img');
    img.classList.add('tooltip__image');
    img.src = tooltipContent;
    return img;
}

tooltipsElements.forEach(tooltip => {
    prepareTooltip(tooltip);
});


// tooltipsElements.forEach(tooltip => {
//     const url = tooltip.dataset.url
//     const tooltipContent = tooltip.dataset.tooltipContent
//     const textContent = tooltip.textContent
//     const tooltipType = tooltip.dataset.tooltipType



    // const linkElement = document.createElement('a');
    // linkElement.href = url;
    // linkElement.textContent = textContent;

    // const tooltipBox = document.createElement('span')
    // tooltipBox.classList.add('tooltip__box', 'tooltip__box--' + tooltipType)



    // if(tooltipType === 'image') {
    //     const img = document.createElement('img')
    //     img.classList.add('tooltip__image')
    //     img.src = tooltipContent
    //     tooltipBox.appendChild(img)
    // } else {
    //     tooltipBox.textContent = tooltipContent
    // }
    
    // tooltip.innerHTML = ''
    // tooltip.appendChild(linkElement)
    // tooltip.appendChild(tooltipBox)

}
