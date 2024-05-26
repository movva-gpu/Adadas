<script>
	import Logo from './Logo.svelte';
	import cap from '$lib/assets/img/cap.avif';
</script>

<section class="hero barely-full-page">
	<div class="hero-wp">
		<div class="logo-wp">
			<Logo classes="home-logo"></Logo>
			<img
				class="cap"
				src={cap}
				alt="I know nice cap r?"
				draggable="false"
			/>
		</div>
		<h1> AdadasCoach&trade; </h1>
		<p
			>Your own personalized smart-coach by Adadas&copy; powered by <a
				href="AI"
				class="AI">AI</a
			>!</p
		>
	</div>
</section>
<section class="full-page"></section>
<section class="full-page"></section>
