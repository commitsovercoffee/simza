<script>
	import { index } from './store.js';

	import Stage from '$lib/components/Stage.svelte';
	import Prompt from '$lib/components/Prompt.svelte';
	import Deck from '$lib/components/Deck.svelte';
</script>

<Stage>
	{#if $index < 5}
		<Prompt />
	{:else}
		<div class="flex justify-center items-center relative">
			<!-- Card Deck -->
			<Deck />
		</div>
	{/if}
</Stage>
