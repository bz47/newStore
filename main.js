$(document).ready(() => {
  const $menuButton = $("#menu-btn");
  const $loginButton = $("#login-btn");
  const $menu = $("#hide-menu");
  const $login = $("#hide-login");
  const $redDetails = $("#red-details");
  const $redButton = $("#red-btn");
  const $runDetails = $("#run-details");
  const $runButton = $("#run-btn");
  const $swissDetails = $("#swiss-details");
  const $swissButton = $("#swiss-btn");

  $menuButton.on("click", () => {
    $menu.toggle();
  });

  $loginButton.on("click", () => {
    $login.toggle();
  });

  $redButton.on("click", () => {
    $redDetails.toggle();
  });

  $runButton.on("click", () => {
    $runDetails.toggle();
  });
  $swissButton.on("click", () => {
    $swissDetails.toggle();
  });

  $("p").on("click", function (e) {
    // Any <p> that has the clicked CSS, remove it:
    $("p.active").removeClass("active");
    // Then apply the CSS to the clicked element
    $(this).addClass("active");
  });
});
