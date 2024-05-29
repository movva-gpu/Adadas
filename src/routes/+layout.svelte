<script>
	import '../styles.css';
	import Header from './Header.svelte';

	import jQuery from 'jquery?url';
	import parallax from '$lib/parallax.min.js?url';
</script>

<svelte:head>
	<script src={jQuery}></script>
	<script src={parallax}></script>
</svelte:head>

<main>
	<Header></Header>
	<slot></slot>
</main>

<style></style>
