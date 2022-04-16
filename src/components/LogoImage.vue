<template>
  <div class="flex items-center justify-center pt-8">
    <span class="relative anim">
      <span
        class="block absolute -inset-1 -skew-y-3 bg-sky-700 shadow-md shadow-gray-700 glow opacity-70"
        aria-hidden="true"
      ></span>
      <span class="relative text-white font-semibold font-mono text-xl px-1"
        >Дело</span
      >
    </span>
  </div>
  <div class="bg-gray-600 mt-8 w-8 h-[0.1rem] mx-auto"></div>
</template>

<style scoped>
.glow {
  box-shadow: 0 0 70px rgba(200, 200, 200, 0.5);
  filter: blur(10px);
}

/*.anim {
   animation: anim 5s linear infinite alternate; 
}

@keyframes anim {
  0% {
    filter: hue-rotate(-10deg);
  }
  100% {
    filter: hue-rotate(30deg);
  }
}*/
</style>
