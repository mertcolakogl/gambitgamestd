async function loadGames() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/mertcolakogl/gambitgamestd/main/data/games.json');
        if (!response.ok) throw new Error('Failed to fetch games');
        const data = await response.json();
        const gameListDiv = document.getElementById('gameList');

        data.games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.className = 'game-item';

            const gameName = document.createElement('span');
            gameName.textContent = `> ${game.name}`;
            gameName.className = 'game-name';
            gameItem.appendChild(gameName);

            const storeLinks = [];
            if (game.appstore) {
                const appLink = document.createElement('a');
                appLink.href = game.appstore;
                appLink.target = '_blank';
                appLink.textContent = 'App Store';
                appLink.className = 'store-link';
                storeLinks.push(appLink);
            }

            if (game.playstore) {
                const playLink = document.createElement('a');
                playLink.href = game.playstore;
                playLink.target = '_blank';
                playLink.textContent = 'Play Store';
                playLink.className = 'store-link';
                storeLinks.push(playLink);
            }

            if (storeLinks.length > 0) {
                const linkContainer = document.createElement('span');
                linkContainer.className = 'store-links';
                linkContainer.textContent = ' [ ';
                storeLinks.forEach((link, index) => {
                    linkContainer.appendChild(link);
                    if (index < storeLinks.length - 1) {
                        linkContainer.appendChild(document.createTextNode(' / '));
                    }
                });
                linkContainer.appendChild(document.createTextNode(' ]'));
                gameItem.appendChild(linkContainer);
            }

            gameListDiv.appendChild(gameItem);
        });

        const backLink = document.createElement('a');
        backLink.href = '#';
        backLink.className = 'back-link';
        backLink.textContent = 'back to home';
        backLink.onclick = (e) => {
            e.preventDefault();
            document.getElementById('mainMenu').style.display = 'block';
            document.getElementById('gameList').classList.remove('active');
        };
        gameListDiv.appendChild(backLink);

    } catch (error) {
        console.error('Error loading games:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const gamesLink = document.getElementById('gamesLink');
    if (gamesLink) {
        gamesLink.onclick = (e) => {
            e.preventDefault();
            document.getElementById('mainMenu').style.display = 'none';
            document.getElementById('gameList').classList.add('active');
        };
    }
});