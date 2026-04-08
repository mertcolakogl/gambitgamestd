async function loadAbout() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/mertcolakogl/gambitgamestd/main/data/about.json');
        if (!response.ok) throw new Error('Failed to fetch about');
        const data = await response.json();
        const aboutListDiv = document.getElementById('aboutList');

        data.about.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.className = 'about-member';

            const ascii = document.createElement('pre');
            ascii.className = 'about-ascii';
            ascii.textContent = member.ascii;
            memberDiv.appendChild(ascii);

            const name = document.createElement('div');
            name.className = 'about-name';
            name.textContent = `> ${member.name}`;
            memberDiv.appendChild(name);

            const role = document.createElement('div');
            role.className = 'about-role';
            role.innerHTML = `<strong>role:</strong> ${member.role}`;
            memberDiv.appendChild(role);

            const bio = document.createElement('div');
            bio.className = 'about-bio';
            bio.innerHTML = `<strong>bio:</strong> ${member.bio}`;
            memberDiv.appendChild(bio);

            const quote = document.createElement('div');
            quote.className = 'about-quote';
            quote.innerHTML = `<strong>fav quote:</strong> ${member.quote}`;
            memberDiv.appendChild(quote);

            aboutListDiv.appendChild(memberDiv);
        });

        const backLink = document.createElement('a');
        backLink.href = '#';
        backLink.className = 'back-link';
        backLink.textContent = 'back to home';
        backLink.onclick = (e) => {
            e.preventDefault();
            document.getElementById('mainMenu').style.display = 'block';
            document.getElementById('aboutList').classList.remove('active');
        };
        aboutListDiv.appendChild(backLink);

    } catch (error) {
        console.error('Error loading about:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const aboutLink = document.getElementById('aboutLink');
    if (aboutLink) {
        aboutLink.onclick = (e) => {
            e.preventDefault();
            document.getElementById('mainMenu').style.display = 'none';
            document.getElementById('aboutList').classList.add('active');
        };
    }
});