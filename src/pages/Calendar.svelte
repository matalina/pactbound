<script lang="ts">
  import Month from '../components/calendar/Month.svelte';
  import { months } from '../data/calendar';
</script>

<h1>Calendar</h1>

<div class="calendar">
  {#each months as month}
    <Month {month} />
  {/each}
</div>
