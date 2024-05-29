<script>
	import Ad from './Ad.svelte';
	import Login from './Login.svelte';
	import Logo from './Logo.svelte';
</script>

<header>
	<Ad variant="lower-price"></Ad>
	<nav>
		<label
			class="hamburger"
			for="nav-0"
		>
			<span class="line-1"></span>
			<span class="line-2"></span>
			<span class="line-3"></span>
		</label>

		<div class="nav-sub nav-sub-0">
			<label
				class="outside-clicker"
				for="nav-0"
			>
			</label>
			<label
				class="cross"
				for="nav-0"
			>
				<span class="line-1"></span>
				<span class="line-2"></span>
			</label>
			<input
				type="checkbox"
				id="nav-0"
				hidden
			/>

			<h2>Adadas</h2>

			<a href="http://google.fr">Link 1</a>
			<a href="http://google.fr">Link 2</a>
			<a href="http://google.fr">Link 3</a>
			<a href="http://google.fr">Link 4</a>
		</div>

		<Logo size={92}></Logo>

		<Login size={32}></Login>
	</nav>
</header>

<style>
	.cross,
	.hamburger {
		& span {
			display: block;

			height: 4px;
			width: 100%;

			border-radius: 100lvw;

			background-color: var(--color-dark);

			transition: 0.67s ease translate;
		}
	}

	.hamburger {
		display: flex;
		flex-direction: column;
		gap: 8px;

		list-style-type: none;

		width: 48px;

		cursor: pointer;

		&:hover {
			& .line-1 {
				translate: 0 -4px;
			}

			& .line-3 {
				translate: 0 4px;
			}
		}

		&:active {
			transition-duration: 0.5s;

			& .line-1 {
				translate: 0 2px;
				transition-duration: inherit;
			}

			& .line-3 {
				translate: 0 -2px;
				transition-duration: inherit;
			}
		}
	}

	header {
		position: fixed;
		inset: 0 0 unset;

		width: 100%;

		background-color: var(--color-light);

		z-index: 10;
	}

	nav {
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		padding: 1em;

		font-size: 1.2em;
		text-decoration: none transparent 0;

		& a {
			text-decoration: inherit;
		}
	}

	.nav-sub {
		display: flex;
		flex-direction: column;

		position: fixed;
		top: 0;
		left: 0;

		height: 100vh;
		height: 100dvh;
		height: 100svh;

		padding: 1.2em;

		min-width: 33%;

		font-family: var(--ff-headings);
		font-weight: bolder;
		letter-spacing: 3px;

		background-color: var(--color-light);

		box-shadow:
			-37px 0 40px 40px black,
			0 0 0 100vw rgba(0, 0, 0, 0.7);
		box-shadow:
			-37px 0 40px 40px var(--color-dark),
			0 0 0 100vw color-mix(in srgb, var(--color-dark), transparent 30%);

		transition:
			translate 1s ease,
			box-shadow 1s;

		z-index: 100;

		& h2 {
			margin-bottom: 0.5em;
		}

		& .cross {
			position: absolute;
			top: 1.2em;
			right: 1.2em;

			width: 1.2em;
			aspect-ratio: 1;

			transition: rotate 1.8s cubic-bezier(0.19, 1, 0.22, 1);

			cursor: pointer;

			&:hover {
				transition: rotate 667ms cubic-bezier(0.25, 0.1, 0.25, 1);
			}

			& span {
				position: absolute;
				top: 50%;
				left: 50%;
				translate: -50% -50%;
				transition: inherit;
			}

			& .line-1 {
				rotate: 45deg;
			}

			&:hover .line-1 {
				rotate: 225deg;
			}

			& .line-2 {
				rotate: -45deg;
			}

			&:hover .line-2 {
				rotate: 135deg;
			}
		}

		&:has(a:hover) a:not(:hover) {
			opacity: 0.5;
			transition:
				padding 889ms ease,
				opacity 667ms;
		}

		& a {
			margin-bottom: 0.8em;

			line-height: 1;

			transition:
				padding 1s ease,
				opacity 667ms;

			&:hover {
				padding-inline-start: 1.5em;
				transition:
					padding 889ms ease,
					opacity 667ms;
			}

			&::before {
				content: '- ';
			}
		}

		&::before {
			content: '';

			position: absolute;
			inset: 0;

			background-color: inherit;

			z-index: -1;
		}

		& .outside-clicker {
			display: block;

			position: fixed;
			inset: 0;

			cursor: auto;

			z-index: -5;
		}

		&.nav-sub-0:has(#nav-0:not(:checked)) {
			translate: calc(-100% - 1px) 0;

			box-shadow:
				-37px 0 40px 40px transparent,
				0 0 0 100vw transparent;

			transition:
				translate 1s ease,
				box-shadow 1s;
		}
	}
</style>
