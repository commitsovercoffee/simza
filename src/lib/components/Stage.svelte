<script>
	import ForwardBtn from './ForwardBtn.svelte';
	import BackwardBtn from './BackwardBtn.svelte';
</script>

<div class="flex flex-col justify-between">
	<div class="bg-amber-200 h-96 p-4">
		<!-- space for prompts & the deck -->
		<slot />
	</div>
	<div>
		<BackwardBtn />
		<ForwardBtn />
	</div>
</div>
