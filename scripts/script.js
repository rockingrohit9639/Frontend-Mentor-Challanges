const linksContainer = document.querySelector("#linksContainer");

let html = ``;

data.forEach((item) => {
  html += `
    <div class="link">
        <h1 class="link__title">${item.title}</h1>
        <a href="${item.url}" class="link__visitButton" target="_blank"><img src="./assets/link.svg" alt="link" class="link__visiButtonImg"></a>
    </div>
    `;
});

linksContainer.innerHTML = html;
