const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }
];



const ulListContainer = document.querySelector('.article__list');
if(ulListContainer) {

const ulElement = document.createElement('ul');

list.forEach(listElement => {
    if(listElement.parentId === null) {
        const li = document.createElement('li');
        li.dataset.id = listElement.id;
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', listElement.link);
        linkElement.textContent = listElement.text;
        li.appendChild(linkElement);

       const children = list.filter(function(child) {
            return Number(child.parentId) === Number(listElement.id)})

        if(children.length > 0) {
            const secondUL = document.createElement('ul');

            children.forEach(childElement => {
                const childLi = document.createElement('li');
                const childLinkElement = document.createElement('a');
                childLinkElement.setAttribute('href', childElement.link);
                childLinkElement.textContent = childElement.text;
                childLi.appendChild(childLinkElement);

                secondUL.appendChild(childLi);
            })

            li.appendChild(secondUL);
        }

        ulElement.appendChild(li);

    }
})

ulListContainer.appendChild(ulElement);
}
