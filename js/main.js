document.addEventListener('DOMContentLoaded', function () {
    let contentShown = false;

    function showContent() {
        if (!contentShown) {
            contentShown = true;
            const cursor = document.getElementById('cursor');
            cursor.style.opacity = '0';
            cursor.style.animation = 'none';
            document.getElementById('content').style.display = 'block';
        }
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            showContent();
        }
    });

    document.addEventListener('click', function (e) {
        showContent();
    });

    if (typeof loadGames === 'function') loadGames();
    if (typeof loadAbout === 'function') loadAbout();
});