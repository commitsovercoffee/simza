<script>
	import { index } from './store.js';

	import Stage from '$lib/components/Stage.svelte';
	import Prompt from '$lib/components/Prompt.svelte';
</script>

<Stage>
	{#if $index < 5}
		<Prompt />
	{:else}
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum natus dolores atque, optio
			suscipit necessitatibus alias cum dolorem? Odio, tempora laborum? Vero incidunt dolore
			suscipit sunt ex ipsa animi cupiditate.
		</p>
	{/if}
</Stage>
