function setTheme() {
    const root = document.body;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    
    document.querySelector('.themeName').textContent = newTheme;
  }
  
  document.querySelector('.themeToggle').addEventListener('click', setTheme)

  document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('nav.transparent ul.right').classList.toggle('active');
  });
  