<script lang="ts">
  import { Route, Router } from 'svelte-routing';
  import Footer from './components/Footer.svelte';
  import Header from './components/Header.svelte';
  import Calendar from './pages/Calendar.svelte';
  import Home from './pages/Home.svelte';

  let { url } = $props();
</script>

<div class="main">
  <Router {url}>
    <Header />

    <main>
      <Route path="/" component={Home}>Home</Route>
      <Route path="/calendar" component={Calendar}>Calendar</Route>
    </main>

    <Footer />
  </Router>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
  }
  .main > :global(*) {
    padding-left: var(--size-3);
    padding-right: var(--size-3);
  }

  main {
    flex-grow: 1;
  }
</style>
