(function () {
    let showUniverse = localStorage.getItem('showUniverse');
    let universeNav;

    function applyUniverse(value) {
        if (value.toString() === 'true') {
            document.body.classList.add('show-universe');
        } else {
            document.body.classList.remove('show-universe');
        }
        updateIcon();
    }

    function updateIcon() {
        var icon = document.getElementById('universe-icon');
        if (!icon) return;
        var on = document.body.classList.contains('show-universe');
        icon.className = on ? 'fas fa-star' : 'far fa-star';
    }

    function findUniverseNav() {
        universeNav = document.getElementById('universe-nav');
        if (!universeNav) {
            setTimeout(findUniverseNav, 100);
        } else {
            universeNav.addEventListener('click', switchUniverse);
        }
    }

    function switchUniverse() {
        showUniverse = showUniverse ? showUniverse.toString() !== 'true' : true;
        applyUniverse(showUniverse);
        localStorage.setItem('showUniverse', showUniverse);
    }

    findUniverseNav();
    if (showUniverse) applyUniverse(showUniverse);
})();
