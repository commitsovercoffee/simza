<script>
	import { tarots } from './content.js';
	import Card from './Card.svelte';
	const cardStyle =
		'rounded p-2 m-2 w-24 h-32 border border-slate-600 bg-gray-200 shadow transition-all duration-200 ease-in delay-50 ';

	let cards = Array.from({ length: 78 }, (_, i) => i + 1);
	let selected = new Array();
	let chances = 3;

	let innerWidth = 0;

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

<svelte:window bind:innerWidth />

{#each cards as card, index}
	<button
		on:click={() => {
			chances > 0 && handleCardClick(index);
		}}
		style="left:{index * (innerWidth / 200)}px; top:20px; position:absolute;"
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
			<Card label={tarots[selected[0]].Name} />
		{/if}
	</div>

	<div class="p-2 m-2 w-24 h-32 bg-teal-200">
		{#if selected[1] != null}
			<Card label={tarots[selected[1]].Name} />
		{/if}
	</div>

	<div class="p-2 m-2 w-24 h-32 bg-teal-200">
		{#if selected[2] != null}
			<Card label={tarots[selected[2]].Name} />
		{/if}
	</div>
</div>
