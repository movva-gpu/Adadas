<script>
	/** @type {'check-out'|'lower-price'|null} */
	export let variant = 'check-out';
</script>

<div
	class="ad {variant}"
	hidden={!variant}
>
	<p
		>{@html (() => {
			switch (variant) {
				case 'check-out':
					return 'Hey! Don\' forget to check out our new service, <a href="#">AdadasStore&trade;</a>!';
				case 'lower-price':
					return 'There\'s a 50% promotion on <a href="#">AdadasClub&trade;</a>';
				default:
					break;
			}
		})()}</p
	>
</div>

<style>
	.ad {
		display: flex;
		align-items: center;
		justify-content: center;

		background-color: var(--color-dark);
		color: var(--color-light);

		height: 2.2em;

		& p {
			position: relative;
			width: fit-content;
			margin-inline: auto;

			& a {
				color: var(--color-important);
			}
		}

		& p::after,
		& p::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			right: -16px;
			width: 12px;
			aspect-ratio: 1;
			border-radius: 100%;
			background-color: var(--color-important);
		}

		& p::before {
			animation: pulsing 1.1s ease-out infinite forwards;
		}
	}
</style>
