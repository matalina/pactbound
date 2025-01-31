<script lang="ts">
  import type { PbDate } from '@data/types';

  interface DayProps {
    date: PbDate;
  }
  let { date } = $props();
</script>

{date.day}
