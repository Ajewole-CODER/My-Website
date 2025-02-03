const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.body;
const toggleText = document.getElementById('toggleText');

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Update toggle label based on current theme
    if (body.classList.contains('dark-mode')) {
        toggleText.textContent = 'Dark Mode';
    } else {
        toggleText.textContent = 'Light Mode';
    }
});