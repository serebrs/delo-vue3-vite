export default {
  install: (app, options) => {
    app.config.globalProperties.$showMessage = (message) => {
      let div = document.createElement('div');
      let div2 = document.createElement('div');
      let bgColor = "bg-gray-600";
      
      div.className = "fixed z-50 w-full flex justify-center my-4";
      div2.className = "w-64 px-4 py-3 text-sm text-white rounded-md shadow-md animate-flyin";
      
      if (~message.indexOf("err-")) {  // проверка на отличие от -1 (трюк с побитовым сдвигом)
        bgColor = "bg-red-600";
        div2.innerHTML = `<p>${('[ОШИБКА:] ' + (options.errors[message] || 'Неизвестная ошибка'))}</p>`;
      }
      else {
        bgColor = "bg-gray-600";
        div2.innerHTML = `<p>${(options.messages[message] || '...')}</p>`;
      }

      div2.classList.add(bgColor);
      div.prepend(div2);
      document.body.prepend(div);

      setTimeout(() => {
        div2.classList.remove("animate-flyin");
        div2.classList.add("animate-flyout");
        setTimeout(() => div.remove(), 500);
      }, 3000);
    }
  }
}
