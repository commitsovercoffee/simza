<script>
	export let title = 'Title';
	export let prompt = 'Prompt';
</script>

<section class="h-screen flex justify-center">
	<div class="flex place-self-center">
		<section class="w-96">
			<h2 class="p-4 text-4xl font-bold">
				{title}
			</h2>
			<p class="p-4">
				{prompt}
			</p>
			<slot />
		</section>
	</div>
</section>
