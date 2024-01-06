<script>
	import Prompt from '$lib/components/Prompt.svelte';

	let index = 0;

	const pages = [
		{
			title: 'Step into the Mystical Realm of Tarot!',
			prompt:
				"Embark on a mystical journey with Tarot, an ancient art rich in symbolism and insight. Each card is a mirror to the soul, offering a glimpse into the depths of life's mysteries. Let the Tarot guide you through its enigmatic symbols and hidden meanings, as you uncover the secrets that lie within its wisdom.",
			button: 'Begin Journey'
		},
		{
			title: 'Pose Your Heartfelt Query to the Tarot',
			prompt:
				'Craft a thoughtful, open-ended question for the Tarot, seeking to uncover truths and deeper insights. Let it be a query that resonates with your soul, encompassing any sphere of your life craving clarity. Hold this question close to your heart, and prepare to connect deeply with the Tarot.',
			button: 'Ask Question'
		},
		{
			title: 'Shuffle the Cards to Align with Your Energy',
			prompt:
				"As you ponder your question, shuffle the Tarot deck, blending your energies with the cards. This ritual is more than a mere shuffling; it's an intimate dance of your spirit with the cards. Let your intuition guide your hands, feeling the cards' rhythm and energy, until the moment feels just right to stop.",
			button: 'Shuffle Cards'
		},
		{
			title: 'Draw and Arrange Your Tarot Spread',
			prompt:
				'With your question in mind, gracefully draw a card from the deck, placing it in your chosen spread. This is a sacred act, setting the stage for the card to unveil its profound message in response to your query.',
			button: 'Draw Card'
		},
		{
			title: "Unveil and Interpret the Tarot's Wisdom",
			prompt:
				'Gently reveal the cards, immersing yourself in their imagery and symbols. Observe the emotions and thoughts they evoke, as each element of the card whispers secrets and guidance. Let these revelations open doors to deeper understanding and self-awareness.',
			button: 'Reveal Cards'
		}
	];
</script>

<section>
	{#if index < pages.length}
		<Prompt title={pages[index].title} prompt={pages[index].prompt}>
			<button
				class="m-4 p-2 px-8 border-2 border-black rounded-xl hover:bg-black hover:text-white text-black active:translate-y-1 delay-50 ease-in duration-200"
				on:click={() => {
					index = index + 1;
				}}
				aria-label={`Navigate to ${pages[index + 1]?.title || 'end of pages'}`}
			>
				{pages[index].button}
			</button>
		</Prompt>
	{:else}
		<p>Card Deck</p>
	{/if}
</section>
