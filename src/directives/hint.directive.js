let div;

function showHint(el, text) {
  el.classList.add("relative");
  div = document.createElement("div");
  // TODO сделать реакцию на границы окна
  div.className =
    "absolute inset-x-0 bottom-[120%] z-30 w-fit py-1 px-2 text-[0.75rem] text-center whitespace-normal leading-3 text-white bg-gray-600 shadow-md rounded-md animate-flyin";
  div.innerHTML = text;
  el.prepend(div);
}

function closeHint(el, text) {
  // el.onmouseenter = null;
  // el.onmouseleave = null;
  // div.onanimationend = () => {
  //   el.onmouseenter = function () {
  //     showHint(el, text);
  //   };
  //   el.onmouseleave = function () {
  //     closeHint(el, text);
  //   };
  //   div.remove();
  // };
  // div.classList.remove("animate-flyin"); // FIXME Если с тамаутом, то плодятся div'ы
  // div.classList.add("animate-flyout");
  div.remove();
}

export default {
  mounted(el, binding) {
    // el.addEventListener("mouseenter", function () {
    //   showHint(el, binding.value);
    // });
    // el.addEventListener("mouseleave", function () {
    //   closeHint(el);
    // });
    el.onmouseenter = function () {
      showHint(el, binding.value);
    };
    el.onmouseleave = function () {
      closeHint(el, binding.value);
    };
  },
  unmounted(el) {
    console.log("Unmounted");
  },
};
