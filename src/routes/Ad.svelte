<script>
	/** @type {'check-out'|'lower-price'|null} */
	export let variant = 'check-out';
</script>

{#if !!variant}
	<div
		class="ad {variant}"
		hidden={!variant}
	>
		<p class={variant}>
			{@html (() => {
				switch (variant) {
					case 'check-out':
						return 'Hey! Don\'t forget to check out our new service, <a href="#">AdadasStore&trade;</a>!';
					case 'lower-price':
						return 'There\'s a 50% promotion on <a href="#">AdadasClub&trade;</a>!';
					default:
						break;
				}
			})()}
		</p>
	</div>
{/if}

<style>
	.ad {
		display: flex;
		align-items: center;
		justify-content: center;

		background-color: var(--color-dark);
		color: var(--color-light);

		height: 2.2em;

		& p {
			--_color: var(--color-important);

			position: relative;
			width: fit-content;
			margin-inline: auto;

			& a {
				color: var(--_color);
			}

			&.lower-price {
				--_color: var(--color-club);
			}

			&::after,
			&::before {
				content: '';
				display: block;
				position: absolute;
				top: 0;
				right: -16px;
				width: 12px;
				aspect-ratio: 1;
				border-radius: 100%;
				background-color: var(--_color);
			}

			&::before {
				animation: pulsing 1.1s ease-out infinite forwards;
			}
		}
	}
</style>
