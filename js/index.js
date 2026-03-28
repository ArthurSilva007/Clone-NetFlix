document.addEventListener('DOMContentLoaded', () => {
	const profileLinks = document.querySelectorAll('.profile');

	profileLinks.forEach((profileLink) => {
		profileLink.addEventListener('click', () => {
			const nameElement = profileLink.querySelector('figcaption');
			const imageElement = profileLink.querySelector('img');

			const nomePerfil = nameElement ? nameElement.textContent.trim() : '';
			const imagemPerfil = imageElement ? imageElement.src : '';

			if (nomePerfil) {
				localStorage.setItem('perfilAtivoNome', nomePerfil);
			}

			if (imagemPerfil) {
				localStorage.setItem('perfilAtivoImagem', imagemPerfil);
			}
		});
	});
});
