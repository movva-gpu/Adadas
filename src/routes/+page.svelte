<script>
	import Logo from './Logo.svelte';
	import cap from '$lib/assets/img/cap.avif';
	import pushUp from '$lib/assets/img/push-up.avif';
	import heroImage from '$lib/assets/img/hero-image.avif';
</script>

<section
	class="hero barely-full-page"
	data-parallax="scroll"
	data-image-src={heroImage}
>
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
				href="#b"
				class="AI">AI</a
			>!</p
		>
	</div>
</section>
<section
	class="full-page after-line"
	id="b"
	data-parallax="scroll"
	data-image-src={pushUp}
	data-position-y="center"
	data-speed="0.5"
	data-ios-fix
	data-android-fix
>
	<h2>Title</h2>
</section>
<section class="full-page"></section>
