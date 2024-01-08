<script>
	import { fade } from 'svelte/transition';
	import { tarots } from './content.js';
	const cardStyle =
		'rounded p-2 m-2 w-24 h-32 border border-slate-600 bg-gray-200 shadow transition-transform duration-200 ease-in delay-50 ';

	let cards = Array.from({ length: 78 }, (_, i) => i + 1);
	let selected = new Array();
	let chances = 3;

	function shuffleArray() {
		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[cards[i], cards[j]] = [cards[j], cards[i]];
		}
		console.log(cards);
		return cards;
	}

	function handleCardClick(index) {
		selected.push(index);
		if (selected[0] == -1) {
			selected[0] = index;
		} else if (selected[1] == -1) {
			selected[1] = index;
		} else if (selected[2] == -1) {
			selected[2] = index;
		}
		console.log(selected);
		chances--;
		selected = selected;
	}
</script>

{#each cards as card, index}
	<button
		on:click={() => {
			chances > 0 && handleCardClick(index);
		}}
		style="left:{index * 6.5}px; top:20px; position:absolute;"
		class={selected.includes(index)
			? cardStyle + ' bg-red-600 -translate-y-4 '
			: chances > 0
				? cardStyle + ' hover:-translate-y-4 '
				: cardStyle}
	>
		<p class="text-xs">{tarots[index].Name}</p>
	</button>
{/each}

<div class="flex mt-60">
	<div class="p-2 m-2 w-24 h-32 bg-teal-200">
		{#if selected[0] != null}
			<button transition:fade class={cardStyle}>{selected[0]}</button>
		{/if}
	</div>

	<div class="p-2 m-2 w-24 h-32 bg-teal-200">
		{#if selected[1] != null}
			<button transition:fade class={cardStyle}>{selected[1]}</button>
		{/if}
	</div>

	<div class="p-2 m-2 w-24 h-32 bg-teal-200">
		{#if selected[2] != null}
			<button transition:fade class={cardStyle}>{selected[2]}</button>
		{/if}
	</div>
</div>
