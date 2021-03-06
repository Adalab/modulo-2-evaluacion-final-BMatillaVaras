"use strict";

//function to paint server data
let recomend = ["English", "Spanish", "Portuguese"];

function paintShows() {
  let html = "";
  for (let i = 0; i < showList.length; i++) {
    let classF = "";
    const favoriteIndex = favoritesList.findIndex(function (show) {
      return show.id === showList[i].show.id;
    });
    if (favoriteIndex !== -1) {
      classF = "show__item--favorite";
    } else {
      classF = "";
    }
    html += `<li class="shows-list js-show-item ${classF}" id="${showList[i].show.id}">`;
    html += `<h3 class="shows-list__title">${showList[i].show.name}</h3>`;
    const language = recomend.findIndex(function (show) {
      return show === showList[i].show.language;
    });
    if (language !== -1) {
      html += `<p>${showList[i].show.language}: Recomendada</p>`;
    } else {
      html += `<p>${showList[i].show.language}</p>`;
    }
    html += `<div class="shows-list__container">`;
    if (showList[i].show.image === null) {
      html += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?
      text=TV." alt="no existe imagen de la serie">`;
    } else {
      html += `<img src="${
        showList[i].show.image.medium || showList[i].show.image.original
      }" alt="imagen de la serie ${showList[i].show.name}" title="cartel de ${
        showList[i].show.name
      }">`;
    }
    html += `</div>`;
    html += `</li>`;
  }
  list.innerHTML = html;
  listenFavorites();
}
