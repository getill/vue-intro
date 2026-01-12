<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">

    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Acceuil</RouterLink>
          <RouterLink to="/methods">Methods</RouterLink>
          <RouterLink to="/first">1er exercice</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 1rem;
  margin-bottom: 2rem;
}

nav {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid #334155;
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

nav a {
  color: #94a3b8; /* Gris clair */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

nav a:hover {
  color: #fff;
}

nav a.router-link-active {
  color: #42b983;
  font-weight: bold;
}

main {
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>