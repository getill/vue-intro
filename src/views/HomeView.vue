<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home-container">

    <section class="hero">
      <div class="hero-content">
        <img src="https://vuejs.org/images/logo.png" alt="Vue Logo" class="vue-logo" />
        <h1>Mon Grimoire <span class="text-gradient">Vue.js 3</span></h1>
        <p class="subtitle">
          Exploration technique, cours et code.
        </p>

        <div class="badges">
          <span class="badge">Composition API</span>
          <span class="badge">Vue Router</span>
          <span class="badge badge-outline">Javascript</span>
        </div>
      </div>
    </section>

    <section class="dashboard">
      <div class="section-header">
        <h2>Mes Modules</h2>
        <div class="line"></div>
      </div>

      <div class="grid">
        <RouterLink to="/methods" class="card">
          <div class="card-content">
            <div class="icon-box">⚡️</div>
            <h3>Les Methods</h3>
            <p>Logique et réactivité.</p>
          </div>
          <div class="card-action">Explorer &rarr;</div>
        </RouterLink>

        <RouterLink to="/first" class="card">
          <div class="card-content">
            <div class="icon-box">🧪</div>
            <h3>Premier Exercice</h3>
            <p>Sandbox et tests initiaux.</p>
          </div>
          <div class="card-action">Explorer &rarr;</div>
        </RouterLink>

        <div class="card disabled">
          <div class="card-content">
            <div class="icon-box">🔒</div>
            <h3>Prochainement</h3>
            <p>Props, Pinia, Slots...</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.home-container {
  --bg-dark: #0f172a;       /* Fond très sombre (Slate 900) */
  --bg-card: #1e293b;       /* Fond des cartes (Slate 800) */
  --text-main: #f1f5f9;     /* Blanc cassé (Slate 100) */
  --text-muted: #94a3b8;    /* Gris moyen (Slate 400) */
  --accent: #42b983;        /* Vue Green */
  --accent-glow: rgba(66, 185, 131, 0.4);

  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Inter', sans-serif;
  color: var(--text-main);
}


.hero {
  text-align: center;
  margin-bottom: 4rem;
  padding: 4rem 1rem;
  background: radial-gradient(circle at center, #1e293b 0%, #0f172a 70%);
  border: 1px solid #334155;
  border-radius: 24px;
  box-shadow: 0 0 30px rgba(0,0,0,0.3);
}

.vue-logo {
  height: 90px;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 15px var(--accent-glow));
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
}

.text-gradient {
  background: linear-gradient(to right, #42b983, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.badges {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.badge {
  background-color: rgba(66, 185, 131, 0.15);
  color: var(--accent);
  border: 1px solid rgba(66, 185, 131, 0.3);
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

.badge-outline {
  background: transparent;
  color: var(--text-muted);
  border-color: #475569;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.8rem;
  margin: 0;
  color: var(--text-main);
}

.line {
  height: 1px;
  flex-grow: 1;
  background: linear-gradient(to right, #334155, transparent);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.card {
  background-color: var(--bg-card);
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5),
  0 0 20px var(--accent-glow);
}

.icon-box {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.05);
  width: 50px; height: 50px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 12px;
}

.card h3 {
  margin: 0 0 0.5rem 0;
  color: var(--text-main);
  font-size: 1.4rem;
}

.card p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.card-action {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--accent);
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.card:hover .card-action {
  opacity: 1;
  transform: translateX(0);
}

.card.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  border-style: dashed;
}
.card.disabled:hover {
  transform: none;
  box-shadow: none;
  border-color: #334155;
}
</style>