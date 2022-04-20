let divsId = [];

export default {
  mounted(el, binding) {
    let div;

    function showHint(el, text) {
      div = document.createElement("div");
      div.id = `hint-directive-${Date.now()}`;
      divsId.push(div.id);
      div.className =
        "absolute z-30 w-fit py-1 px-2 text-[0.75rem] text-center whitespace-normal leading-3 text-white bg-gray-600 shadow-md rounded-md animate-hint-flyin";
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
  beforeUnmount() {
    divsId.forEach((divId) => {
      let div = document.getElementById(divId);
      if (div) div.remove();
    });
    divsId.length = 0;
  },
};
