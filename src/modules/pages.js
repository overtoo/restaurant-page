import quickDiv from "./quickdiv";

const page = (() => {
  const home = () => {
    const imageUrl =
      "https://images.squarespace-cdn.com/content/v1/5dd321c53bd3a8750e66c6f6/1574734802619-1GP94M8M46W7FB86U76B/20191118-Rumi-Logo-%28Black%29.png?format=1000w";

    const copyText =
      "Rumi is a Middle Eastern restaurant serving a sharing menu of a la carte (small, medium or large sharing plates) or banquet dishes. Specialising in charcoal meats/seafood and a large variety of vegetable and grain dishes, Rumi caters for a casual weeknight meal, after work drinks and snacking, special occasion dining and private or corporate functions. Rumi Brunswick also has catering for private or corporate events.";

    // createDiv("div.page", "h1", "headline", "headline");
    quickDiv.create("div.page", "div", `<img src=${imageUrl} width="152">`, "img");
    quickDiv.create("div.page", "p", copyText, "copy");
    console.log("here");
  };

  function contact() {
    // quickDiv.create("div.page", "h1", "Contact Us", "headline");
    quickDiv.create("div.page", "p", "Contact Info", "copy");
  }

  function about() {
    // quickDiv.create("div.page", "h1", "About Us", "headline");
    quickDiv.create("div.page", "p", "Rumi was first opened...", "copy");
  }

  return {
    home,
    contact,
    about,
  };
})();

export default page;
