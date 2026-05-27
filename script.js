// Smooth scroll and active navigation link highlighting
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section, header, footer');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Copy-to-clipboard functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            
            // Copy to clipboard
            navigator.clipboard.writeText(textToCopy).then(() => {
                const feedback = this.querySelector('.copy-feedback');
                const originalText = this.querySelector('span:not(.icon):not(.copy-feedback)');
                
                // Show "Copied!" feedback
                originalText.style.opacity = '0';
                feedback.style.opacity = '1';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    originalText.style.opacity = '1';
                    feedback.style.opacity = '0';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    });
});
