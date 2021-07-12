const quickDiv = (() => {
  const create = (parent, type, text, classList, id) => {
    const parentDiv = document.querySelector(parent);
    const childDiv = document.createElement(type);
    childDiv.innerHTML = text;
    childDiv.classList.add(classList);
    parentDiv.appendChild(childDiv);
    if (id) {
      childDiv.id(id);
    }
    return childDiv;
  };

  const clear = (parent) => {
    const parentDiv = document.querySelector(parent);
    parentDiv.innerHTML = "";
    return parentDiv;
  };

  return {
    create,
    clear,
  };
})();

export default quickDiv;
