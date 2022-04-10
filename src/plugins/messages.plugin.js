export default {
  install: (app, options) => {
    app.config.globalProperties.$showMessage = (message) => {
      let div = document.createElement('div');
      div.className = "fixed z-50 w-full flex justify-center my-5";
      div.innerHTML = `<div class="w-64 px-4 py-3 text-sm text-white bg-gray-600 rounded-md shadow-md animate-flyin">
                        <p>${(options.messages[message] || '---')}</p></div>`;
      document.body.prepend(div);
      setTimeout(() => {
        div.innerHTML = `<div class="w-64 px-4 py-3 text-sm text-white bg-gray-600 rounded-md shadow-md animate-flyout">
                        <p>${(options.messages[message] || '')}</p></div>`;
        setTimeout(() => div.remove(), 500);
      }, 3000);
    }

    app.config.globalProperties.$showError = (error) => {
      let div = document.createElement('div');
      div.className = "fixed z-50 w-full flex justify-center my-5";
      div.innerHTML = `<div class="w-64 px-4 py-3 text-sm text-white bg-gray-600 rounded-md shadow-md animate-flyin">
                        <p>${('[ОШИБКА:] ' + (options.errors[error] || '---'))}</p></div>`;
      document.body.prepend(div);
      setTimeout(() => {
        div.innerHTML = `<div class="w-64 px-4 py-3 text-sm text-white bg-gray-600 rounded-md shadow-md animate-flyout">
                        <p>${('[ОШИБКА:] ' + (options.errors[error] || 'Неизвестная ошибка'))}</p></div>`;
        setTimeout(() => div.remove(), 500);
      }, 3000);
    }
  }
}
