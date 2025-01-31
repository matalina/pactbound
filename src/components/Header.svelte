<script>
  import { Link } from 'svelte-routing';
</script>

<header>
  <div class="logo">Pactbound</div>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/calendar">Calendar</Link>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: var(--size-4);
  }

  nav {
    display: flex;
    gap: var(--size-3);
  }
</style>
