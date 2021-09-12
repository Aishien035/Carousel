import configData from './data.json';

console.log(configData.length);

const wrap = document.querySelector('.swiper-wrapper');

let div, icn;

for (let i = 0; i < configData.length; i++) {

    // Create swiper-slide //
    div = document.createElement('div');
    let att = document.createAttribute('class');
    let id = document.createAttribute('id');
    att.value = "swiper-slide";
    id.value = "slide"+i;
    div.setAttributeNode(id);
    div.setAttributeNode(att);


    /* Button for opening details */
    icn = document.createElement('i');
    att = document.createAttribute('class');
    att.value = "fas fa-angle-double-left";
    icn.setAttributeNode(att);
    div.appendChild(icn);

    
    /* Developer Profile */
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    att = document.createAttribute('src');
    att.value = configData[i].image;
    img.setAttributeNode(att);
    figure.appendChild(img);
    div.appendChild(figure);


    /* Developer Details */
    const details = document.createElement('div');
    att = document.createAttribute('class');
    att.value = "swiper-details";
    details.setAttributeNode(att);
    div.appendChild(details);

    const h1 = document.createElement('h1');
    const name = document.createTextNode(configData[i].name);
    h1.append(name);
    details.appendChild(h1);

    const h3 = document.createElement('h3');
    name = document.createTextNode(configData[i].role);
    h3.append(name);
    details.appendChild(h3);

    const p = document.createElement('p');
    name = document.createTextNode(configData[i].description);
    p.append(name);
    details.appendChild(p); 


    /* Social Links */
    let links = document.createElement('div');
    att = document.createAttribute('class');
    att.value = "swiper-links";
    links.setAttributeNode(att);
    details.appendChild(links);

    icn = document.createElement('i');
    att = document.createAttribute('class');
    att.value = "fab fa-facebook-f";
    icn.setAttributeNode(att);
    links.appendChild(icn);

    icn = document.createElement('i');
    att = document.createAttribute('class');
    att.value = "fab fa-instagram";
    icn.setAttributeNode(att);
    links.appendChild(icn);

    icn = document.createElement('i');
    att = document.createAttribute('class');
    att.value = "fab fa-twitter";
    icn.setAttributeNode(att);
    links.appendChild(icn);

    icn = document.createElement('i');
    att = document.createAttribute('class');
    att.value = "far fa-heart";
    icn.setAttributeNode(att);
    links.appendChild(icn);
    
    
    /* Attach all elements in parent element */
    wrap.appendChild(div);
}

