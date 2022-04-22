import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
//import { defineAsyncComponent } from 'vue'
import App from "./App.vue";
import { initializeApp } from "firebase/app";

import messagesPlugin from "./plugins/messages.plugin";
import messages from "./plugins/messages";
import dateFormatPlugin from "./plugins/date-format.plugin";
import hintDirective from "./directives/hint.directive";
import focusDirective from "./directives/focus.directive";

import {
  MenuIcon,
  PlusIcon,
  ChevronDownIcon,
  ChartSquareBarIcon,
  ClipboardCheckIcon,
  DocumentTextIcon,
  DocumentIcon,
  XIcon,
  InboxInIcon,
  ExternalLinkIcon,
  DocumentDuplicateIcon,
  PencilIcon,
  SwitchVerticalIcon,
  TrashIcon,
  UserIcon,
  KeyIcon,
} from "@heroicons/vue/solid";
import { LogoutIcon, LoginIcon } from "@heroicons/vue/outline";

import HintBox from "./components/utils/HintBox.vue";
import "./assets/app.css";

initializeApp({
  apiKey: "AIzaSyBW2zMZAqu1eBhYo1j_jNgt2gDQKRKusDE",
  authDomain: "delo-c0c2e.firebaseapp.com",
  projectId: "delo-c0c2e",
  storageBucket: "delo-c0c2e.appspot.com",
  messagingSenderId: "1060057817341",
  appId: "1:1060057817341:web:3e6bc9da47ae05368f5e94",
});

const app = createApp(App);

app
  .use(createPinia())
  .use(router)
  .use(messagesPlugin, messages)
  .use(dateFormatPlugin);

app.directive("hint", hintDirective);
app.directive("focus", focusDirective);

app
  .component("HintBox", HintBox)
  .component("MenuIcon", MenuIcon)
  .component("PlusIcon", PlusIcon)
  .component("ChevronDownIcon", ChevronDownIcon)
  .component("ChartSquareBarIcon", ChartSquareBarIcon)
  .component("ClipboardCheckIcon", ClipboardCheckIcon)
  .component("XIcon", XIcon)
  .component("DocumentTextIcon", DocumentTextIcon)
  .component("DocumentIcon", DocumentIcon)
  .component("InboxInIcon", InboxInIcon)
  .component("ExternalLinkIcon", ExternalLinkIcon)
  .component("DocumentDuplicateIcon", DocumentDuplicateIcon)
  .component("PencilIcon", PencilIcon)
  .component("SwitchVerticalIcon", SwitchVerticalIcon)
  .component("TrashIcon", TrashIcon)
  .component("UserIcon", UserIcon)
  .component("LogoutIcon", LogoutIcon)
  .component("LoginIcon", LoginIcon)
  .component("KeyIcon", KeyIcon);

//app.component('DialogBox', defineAsyncComponent(() => import('@/components/utils/DialogBox.vue')))
//app.component('DocumentsAddForm', defineAsyncComponent(() => import('@/components/documents/DocumentsAddForm.vue')))

app.mount("#app");
