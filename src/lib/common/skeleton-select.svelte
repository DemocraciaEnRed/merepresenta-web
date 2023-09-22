<script>
export let text
export let img
</script>

<div class="fill-select pt-2">
    <div class="skeleton-candidate">
        <figure class="image is-96x96 my-6">
            <img src={img} alt={text} style="filter: opacity(0.5);" />
        </figure>
        <h2 class="is-size-4">{text}</h2>
    </div>
</div>

<style>
    .fill-select {
		width: 100%;
		height: 400px;
		text-align: center;
		display: flex;
		justify-content: center;
	}
	.skeleton-candidate {
		background-color: #d9d9d980;
		border: 3px dashed #9f9f9f;
		border-radius: 10px;
		min-height: 90%;
		width: 60%;
		display: flex;
		padding: 16px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #00000071;
	}
    .skeleton-candidate h2 {
		width: 50%;
	}
    @media screen and (max-width: 768px) {
		.skeleton-candidate {
			width: 90%;
		}
		.skeleton-candidate h2 {
			width: 100%;
		}
	}
</style>