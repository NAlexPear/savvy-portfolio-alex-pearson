function buildLinks(linkArray){
    var i = 0;
    var links = '';

    while(i < linkArray.length){
        links += `<li><a href='/${linkArray[i]}'>${linkArray[i]}</a></li>`;

        i++;
    }

    return links;
}

export default function Navigation(state){
    return `
    <div id="navigation">
        <ul>
            ${buildLinks(state.links)}
        </ul>
    </div>
    `;
}
