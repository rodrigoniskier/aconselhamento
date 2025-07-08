function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active', 'fade-in');
    });
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('active', 'fade-in');
}

// Initialize with the first section visible
showSection('fundamentos');
