function loadJS() {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "root");
  document.body.appendChild(wrapper);

  const scripts = ["main"];

  scripts.forEach((scriptName) => {
    const currentScript = document.createElement("script");
    currentScript.setAttribute(
      "src",
      `https://teststatic12.herokuapp.com/static/${scriptName}.js`
    );
    document.body.appendChild(currentScript);
  });

  const runtime = document.createElement("script");
}

function loadCSS() {
  const styles = document.createElement("link");
  styles.setAttribute(
    "href",
    "https://teststatic12.herokuapp.com/static/main.css"
  );
  styles.setAttribute("rel", "stylesheet");
  document.head.appendChild(styles);
}

function loadFonts() {
  const fonts = document.createElement("link");
  fonts.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Mulish:wght@400;600&display=swap"
  );
  fonts.setAttribute("rel", "stylesheet");
  document.head.appendChild(fonts);
}

window.addEventListener("DOMContentLoaded", function (event) {
  loadJS();
  loadCSS();
  loadFonts();
});
