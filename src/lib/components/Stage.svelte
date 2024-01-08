<script>
	import ForwardBtn from './ForwardBtn.svelte';
	import BackwardBtn from './BackwardBtn.svelte';
</script>

<div class="px-8 py-4 rounded-xl shadow-md flex flex-col justify-between bg-card h-2/5 w-full">
	<div>
		<!-- space for prompts & the deck -->
		<slot />
	</div>
	<div>
		<BackwardBtn />
		<ForwardBtn />
	</div>
</div>
