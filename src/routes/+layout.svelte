<script lang="ts">
	import '../styles.css';

	import Header from './Header.svelte';
	import jQuery from 'jquery?url';
	import parallax from '$lib/parallax.min.js?url';
	import { onMount } from 'svelte';

	onMount(() => {
		const cursorOutside = document.getElementById('cursor-outside');
		const cursorInside = document.getElementById('cursor-inside');

		const interactiveElements = ['a', 'input', 'button', 'select', 'label', 'summary', 'video'];

		document.onmousemove = e => {
			if (!e.target) return;

			let target = e.target as Element;
			let targetParent = target.parentElement;

			if (
				!interactiveElements.includes(target.tagName.toLowerCase()) &&
				!target.matches('[data-interactive]') &&
				!target.matches('[data-interactive="true"]') &&
				!targetParent?.matches('[data-interactive]') &&
				!targetParent?.matches('[data-interactive="true"]')
			)
				return;

			if (target.matches('[data-interactive="false"]')) return;

			console.log('a');

			// TODO: Continue implementation tomorrow.
		};
	});
</script>

<svelte:head>
	<script src={jQuery}></script>
	<script src={parallax}></script>
</svelte:head>

<main>
	<Header></Header>
	<slot></slot>

	<div class="cursor">
		<div id="cursor-inside"></div>
		<div id="cursor-outside"></div>
	</div>
</main>

<style></style>
