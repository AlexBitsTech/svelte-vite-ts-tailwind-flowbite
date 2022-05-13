<script lang="ts">
import SvgIcon from '@jamescoyle/svelte-icon'
import { mdiHome } from '@mdi/js'

</script>

<main>
    <h1 class="text-3xl text-center font-bold pt-6">Template</h1>
    <div class="m-8">
        <h2 class="text-xl font-bold">Description</h2>
        <div class="ml-4 mt-4">
            <p>Thank you for using the <code>svelte-vite-ts-tailwind-flowbite</code> Wails template.</p>
            <p>This template comes pre-configured with Svelte, Vite, TypeScript, Tailwindcss and the flowbite component library.</p>
            <p>For more information about Wails feel free to visit their <a class="text-blue-700 underline" href="https://www.wails.io/">official website</a>.</p>
            <p>For more information about Tailwindcss, <a class="text-blue-700 underline" href="https://tailwindcss.com/docs/installation">right this way</a>!</p>
            <p>Finally, to see everything that the FlowBite framework can offer, <a class="text-blue-700 underline" href="https://flowbite.com/docs/getting-started/quickstart/">click here</a>.</p>
        </div>
    </div>
    <div class="m-8">
        <h2 class="text-xl font-bold">Test</h2>
        <div class="ml-4 mt-4">
            <p>If you see a blue house icon and a blue "Default" button below, then everything was correctly installed.</p>
        </div>
        <div class="mt-4 flex items-center justify-center gap-8">
            <div class="text-blue-700">
                <SvgIcon type="mdi" path={mdiHome}></SvgIcon>
            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
        </div>
    </div>
    <div class="m-8">
        <h2 class="text-xl font-bold">More...</h2>
        <div class="mt-4">
            <p>For more information, please see the <code>README.md</code> file of the project.</p>
        </div>
    </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>