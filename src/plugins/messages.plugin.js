export default {
  install: (app, options) => {
    app.config.globalProperties.$showMessage = (message) => {
      let div = document.createElement("div");
      let div2 = document.createElement("div");
      div.className = "fixed z-50 w-full flex justify-center my-4";
      div2.className =
        "w-64 px-4 py-3 text-sm text-white bg-gray-600 rounded-md shadow-md animate-message-flyin";
      div2.innerHTML = `<p>${options.messages[message] || ""}</p>`;
      div.prepend(div2);
      document.body.prepend(div);

      setTimeout(() => {
        div2.classList.remove("animate-message-flyin");
        div2.classList.add("animate-message-flyout");
        setTimeout(() => div.remove(), 500); // TODO делать remove не по таймауту, а по onanimationend
      }, 2000);
    };

    app.config.globalProperties.$showError = (error) => {
      function close() {
        div2.classList.remove("animate-message-flyin");
        div2.classList.add("animate-message-flyout");
        setTimeout(() => {
          div3.removeEventListener("click", close);
          div1.remove();
        }, 500);
      }

      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");

      div1.className = "fixed z-50 w-full flex justify-center my-4";
      div2.className =
        "w-64 relative px-4 py-3 text-sm text-white bg-red-600 rounded-md shadow-md animate-message-flyin";
      div3.className = "absolute top-1 right-1";
      div2.innerHTML = `<p>[ОШИБКА]: ${
        options.errors[error] || "Неизвестная ошибка"
      }</p>`;
      div3.innerHTML = `<span class="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                          </svg>
                        </span>`;

      div3.addEventListener("click", close);
      div1.prepend(div2);
      div2.prepend(div3);

      document.body.prepend(div1);

      setTimeout(() => close(), 5000);
    };
  },
};
