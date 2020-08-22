export default () => {
    const viewsNotFound = `
    <img src="img/result-screen.png" class="img-fluid mx-auto d-block" alt="Responsive image">
      `;
    const divElement = document.createElement("div");
    divElement.innerHTML = viewsNotFound;
    return divElement;
  };