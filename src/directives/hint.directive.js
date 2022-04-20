export default {
  mounted(el, binding) {
    let div;

    function showHint(el, text) {
      div = document.createElement("div");
      div.className =
        "absolute z-30 w-fit py-1 px-2 text-[0.75rem] text-center whitespace-normal leading-3 text-white bg-gray-600 shadow-md rounded-md animate-hint-flyin";
      console.log(el.getBoundingClientRect().top + window.pageYOffset + "px");
      div.style.top =
        el.getBoundingClientRect().top + window.pageYOffset - 25 + "px";
      div.style.left =
        el.getBoundingClientRect().left + window.pageXOffset + "px";
      div.innerHTML = text;
      document.body.prepend(div);
    }

    async function closeHint(el, text) {
      el.onmouseenter = null;
      el.onmouseleave = null;
      div.classList.remove("animate-hint-flyin");
      div.classList.add("animate-hint-flyout");

      await new Promise((res) =>
        setTimeout(() => {
          div.remove();
          el.onmouseenter = function () {
            showHint(el, text);
          };
          el.onmouseleave = function () {
            closeHint(el, text);
          };
          res();
        }, 300)
      );
    }

    el.onmouseenter = function () {
      showHint(el, binding.value);
    };
    el.onmouseleave = function () {
      closeHint(el, binding.value);
    };
  },
};

// div.onanimationend = () => {
//   el.onmouseenter = function () {
//     showHint(el, text);
//   };
//   el.onmouseleave = async function () {
//     closeHint(el, text);
//   };
//   div.remove();
// };
