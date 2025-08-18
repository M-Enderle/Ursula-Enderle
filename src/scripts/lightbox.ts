export function setupLightbox() {
	const gallery = document.getElementById('gallery');
	const lightbox = document.getElementById('lightbox');
	const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
	const closeBtn = document.getElementById('close-lightbox');

	if (!gallery || !lightbox || !lightboxImg || !closeBtn) return;

	gallery.addEventListener('click', (e) => {
		const target = e.target as HTMLElement | null;
		const img = target?.closest('img') as HTMLImageElement | null;
		if (img) {
			lightboxImg.src = img.src;
			lightboxImg.alt = img.alt;
			lightbox.classList.add('lightbox--active');
		}
	});

	closeBtn.addEventListener('click', () => {
		lightbox.classList.remove('lightbox--active');
	});

	lightbox.addEventListener('click', (e) => {
		if (e.target === lightbox) {
			lightbox.classList.remove('lightbox--active');
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && lightbox.classList.contains('lightbox--active')) {
			lightbox.classList.remove('lightbox--active');
		}
	});
}

// Auto-initialize when the module is loaded in the browser
if (typeof window !== 'undefined') {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', setupLightbox);
	} else {
		setupLightbox();
	}
}

