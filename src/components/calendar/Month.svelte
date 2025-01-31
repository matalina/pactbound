<script lang="ts">
  import Day from './Day.svelte';

  let { month } = $props();
</script>

<h2>{month}</h2>
<table>
  <tbody>
    {#each Array.from({ length: 4 }) as _, week}
      <tr>
        {#each Array.from({ length: 7 }) as _, day}
          <td>
            <Day date={{ day: week * 7 + day + 1, month }} />
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
