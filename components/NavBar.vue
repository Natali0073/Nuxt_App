<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
            Home
          </nuxt-link>
        </li>
        <li class="nav-item active">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/about">
            About
          </nuxt-link>
        </li>
        <li class="nav-item active">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">
            Users
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

