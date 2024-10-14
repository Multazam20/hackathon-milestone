var toogleButton = document.getElementById('toogle-skills');
var skills = document.getElementById('Skill');
toogleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
