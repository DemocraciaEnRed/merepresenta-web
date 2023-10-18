<script>
    export let height = 'auto'

</script>

<div class="progress" style="height: {height};">
	<img src="/favicon.png" alt="" />
</div>

<style>
	.progress {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.progress img {
        height: 200px;
		animation: spin 2s linear infinite;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
