var valuesStyles = jQuery("#values-styles");

// since window resize is called when the address bar is shown or hidden
jQuery(window).resize(function () {
  const dimensions = document
    .querySelector("#screenMf")
    .getBoundingClientRect();

  console.log(dimensions);

  if (window.outerWidth <= 768) {
    document.querySelector(".screen").style.top = `${dimensions.top - 16.5}%`;
  }

  valuesStyles.html(
    "#values:before { height:" + jQuery(window).height() + "px;}"
  );
});
