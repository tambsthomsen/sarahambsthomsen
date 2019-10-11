<template>
  <div class="layout-sidebar-button-hamburger" @click="$emit('toggle-sidebar')">
    <div class="icon menu-icon">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
        style="enable-background:new 0 0 50 50;"
        xml:space="preserve"
      >
        <g>
          <rect y="3" class="menu-icon__top" width="50" height="2" />
          <rect y="17" class="menu-icon__top menu-icon__top--second" width="50" height="2" />
          <rect y="31" class="menu-icon__bottom" width="50" height="2" />
          <rect y="45" class="menu-icon__bottom menu-icon__bottom--second" width="50" height="2" />
        </g>
      </svg>
    </div>
  </div>
</template>
