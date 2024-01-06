<script>
	let cards = Array.from({ length: 78 }, (_, i) => i + 1);
	let currentCard = -1;

	function shuffleArray() {
		for (let i = cards.length - 1; i > 0; i--) {
			// Generate a random index lower than the current element's index
			const j = Math.floor(Math.random() * (i + 1));

			// Swap the elements at indices i and j
			[cards[i], cards[j]] = [cards[j], cards[i]];

			currentCard = j;
		}
		currentCard = -1;
		console.log(cards);
		return cards;
	}
</script>

{#each cards as card, index}
	<div
		style="left:{index * 6.5}px; top:{currentCard == index ? '10px' : '0px'}  "
		class="absolute rounded p-2 m-2 w-12 h-18 bg-gray-200 odd:bg-gray-400 hover:translate-y-8 transition-transform duration-200 ease-in delay-50"
	>
		<p>{card}</p>
	</div>
{/each}
