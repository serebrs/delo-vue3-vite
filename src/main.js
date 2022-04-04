import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import { defineAsyncComponent } from 'vue'

import App from './App.vue'
import router from './router'

import {
  MenuIcon, PlusIcon, ChevronDownIcon, ChartSquareBarIcon, ClipboardCheckIcon, DocumentTextIcon, DocumentIcon, XIcon,
  InboxInIcon, ExternalLinkIcon, DocumentDuplicateIcon, PencilIcon, SwitchVerticalIcon, TrashIcon, UserIcon, KeyIcon
} from "@heroicons/vue/solid";
import { LogoutIcon, LoginIcon } from "@heroicons/vue/outline";

import HintBox from "./components/utils/HintBox.vue"
import "./assets/app.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('HintBox', HintBox)
  .component('MenuIcon', MenuIcon)
  .component('PlusIcon', PlusIcon)
  .component('ChevronDownIcon', ChevronDownIcon)
  .component('ChartSquareBarIcon', ChartSquareBarIcon)
  .component('ClipboardCheckIcon', ClipboardCheckIcon)
  .component('XIcon', XIcon)
  .component('DocumentTextIcon', DocumentTextIcon)
  .component('DocumentIcon', DocumentIcon)
  .component('InboxInIcon', InboxInIcon)
  .component('ExternalLinkIcon', ExternalLinkIcon)
  .component('DocumentDuplicateIcon', DocumentDuplicateIcon)
  .component('PencilIcon', PencilIcon)
  .component('SwitchVerticalIcon', SwitchVerticalIcon)
  .component('TrashIcon', TrashIcon)
  .component('UserIcon', UserIcon)
  .component('LogoutIcon', LogoutIcon)
  .component('LoginIcon', LoginIcon)
  .component('KeyIcon', KeyIcon)

//app.component('DialogBox', defineAsyncComponent(() => import('@/components/utils/DialogBox.vue')))
//app.component('DocumentsAddForm', defineAsyncComponent(() => import('@/components/documents/DocumentsAddForm.vue')))

app.mount('#app')
