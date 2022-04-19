let div;

function showHint(el, text) {
  el.classList.add("relative");
  div = document.createElement("div");
  // TODO сделать реакцию на границы окна
  div.className =
    "absolute inset-x-0 bottom-[120%] z-30 w-fit py-1 px-2 text-[0.75rem] text-center whitespace-normal leading-3 text-white bg-gray-600 shadow-md rounded-md";
  div.innerHTML = text;
  el.prepend(div);
}

function closeHint(el) {
  div.remove();
}

export default {
  mounted(el, binding) {
    el.addEventListener("mouseenter", function () {
      showHint(el, binding.value);
    });
    el.addEventListener("mouseleave", function () {
      closeHint(el);
    });

    // setTimeout(() => {
    //   div2.classList.remove("animate-flyin");
    //   div2.classList.add("animate-flyout");
    //   setTimeout(() => div.remove(), 500);
    // }, 2000);
  },
  unmounted(el) {
    console.log("Unmounted");
  },
};
