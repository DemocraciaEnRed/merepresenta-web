<script>
	export let background;
	export let title;
	export let subtitle;
	export let url;
	export let textColor;
	export let delay;
</script>

<div>
	<a
		style="background-image:url({background})"
		class="{delay} has-background-white mx-auto is-half background-trivia is-flex is-flex-direction-column is-justify-content-center"
		href={url}
		target="_blank"
	>
		<div class="background-effect" />
		<div class="content">
			<h1 class="is-size-2  is-4 has-text-{textColor} has-text-weight-bold">{@html title}</h1>
			<p class=" has-background-black is-size-5  has-text-white mt-5">{subtitle}</p>
		</div>
	</a>
</div>

<style>
	@keyframes anim {
		0% {
			box-shadow: none;
		}
		50% {
			box-shadow: 0 0 10px #ffffffcc, 0 0 21px #ffffff96, 0 0 21px #ffffff4a;
		}
		100% {
			box-shadow: none;
		}
	}
	a {
		border-radius: 10px;
		animation-name: anim;
		animation-duration: 5s;
		animation-iteration-count: infinite;
	}
	a.delay {
		animation-delay: 2.5s;
	}
	a {
		position: relative;
		background-repeat: no-repeat;
		background-size: cover;
		min-height: 250px;
	}
	.content {
		z-index: 2;
	}
	.background-effect {
		position: absolute;
		border-radius: 10px;
		background: radial-gradient(
			circle,
			rgba(255, 255, 255, 1) 0%,
			rgba(2, 0, 36, 0) 14%,
			rgba(73, 73, 73, 1) 100%
		);
		width: 100%;
		left: 0;
		height: 100%;
	}
	a {
		font-family: 'Nippo', Helvetica, Arial, sans-serif;
	}
</style>
