<script>
	import { index } from '../../routes/store.js';
	export let label = 'Next';
	function increment() {
		if ($index < 6) {
			index.update((n) => n + 1);
		}
	}
</script>

<button
	on:click={increment}
	class="px-4 py-2 m-2 rounded bg-unpressed hover:bg-pressed text-marker active:translate-y-2 transition-transform duration-100 ease-in"
>
	{label}
</button>
