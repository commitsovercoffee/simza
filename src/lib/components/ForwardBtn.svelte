<script>
	import { index } from '../../routes/store.js';
	export let label = 'button label';
	function increment() {
		if ($index < 6) {
			index.update((n) => n + 1);
		}
	}
</script>

<button
	on:click={increment}
	class="p-2 m-2 rounded shadow-md bg-blue-200 hover:bg-blue-400 active:translate-y-2 transition-transform duration-100 ease-in"
>
	{label}{$index}
</button>
