<script>
	// More concise and clear state handling
	let isFlipped = false;

	// Flip transition as a reusable function
	function flipTransition(node, { delay = 0, duration = 500 } = {}) {
		return {
			delay,
			duration,
			css: (t, u) => `
                transform: rotateY(${180 * u}deg);
                opacity: ${1 - u};
            `
		};
	}
</script>

<div class="card-container" on:click={() => (isFlipped = !isFlipped)}>
	<div class="card">
		{#if isFlipped}
			<div class="side" transition:flipTransition>Side A</div>
		{:else}
			<div class="side back" transition:flipTransition>Side B</div>
		{/if}
	</div>
</div>

<style>
	.card-container {
		position: relative;
		height: 400px;
		width: 600px;
		cursor: pointer; /* Indicates the element is clickable */
	}

	.card {
		width: 100%;
		height: 100%;
		position: absolute;
		perspective: 600px; /* Added 'px' for consistency */
	}

	.side {
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: orange;
		overflow: hidden;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		backface-visibility: hidden; /* Improves the flip effect */
	}

	.back {
		background-color: grey;
		transform: rotateY(180deg); /* Pre-rotate the back side */
	}
</style>
