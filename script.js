window.onload = () => {
  let autotext = document.getElementById("autotext")
  let text = "Hi! This is my portfolio!"
  let i = 0

  function typer() {
    if (i < text.length) {
      autotext.innerHTML += text.charAt(i)
      i++
      setTimeout(typer, 60)
    }
  }
  typer()
}

$(() => {
  $("#menu-button").on("click", function () {
    $("#menu, #menu-button").toggleClass("is-active");
  });
});


