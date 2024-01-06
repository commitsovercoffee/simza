<script>
	const cardStyle =
		'absolute rounded p-2 m-2 w-12 h-18 border border-slate-600 bg-gray-200 shadow transition-transform duration-200 ease-in delay-50 ';

	let cards = Array.from({ length: 78 }, (_, i) => i + 1);
	let selected = Array(3).fill(-1);
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
		if (selected[0] == -1) {
			selected[0] = index;
		} else if (selected[1] == -1) {
			selected[1] = index;
		} else if (selected[2] == -1) {
			selected[2] = index;
		}
		console.log(selected);
		chances--;
	}
</script>

{#each cards as card, index}
	<button
		on:click={() => {
			chances > 0 && handleCardClick(index);
		}}
		style="left:{index * 6.5}px; top:20px"
		class={selected.includes(index)
			? cardStyle + ' bg-red-600 translate-y-32'
			: chances > 0
				? cardStyle + ' hover:translate-y-8 '
				: cardStyle}
	>
		<p>{card}</p>
	</button>
{/each}
