export function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    const label = document.getElementById('theme-label');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        toggle.checked = true;
        label.textContent = 'Dark Theme';
    }
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('dark');
            label.textContent = 'Dark Theme';
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.body.classList.remove('dark');
            label.textContent = 'Light Theme';
            localStorage.setItem('theme', 'light');
        }
    });
}
