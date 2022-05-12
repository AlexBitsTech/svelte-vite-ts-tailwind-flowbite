<script lang="ts">
import SvgIcon from '@jamescoyle/svelte-icon'
import { mdiHome } from '@mdi/js'

</script>

<main>
	<SvgIcon type="mdi" path={mdiHome}></SvgIcon>

	<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>