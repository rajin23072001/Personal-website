// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    console.log('Nav toggle found:', navToggle);
    console.log('Nav menu found:', navMenu);

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Nav toggle clicked');
            
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = navToggle.querySelectorAll('.bar');
            navToggle.classList.toggle('active');
            
            console.log('Menu active:', navMenu.classList.contains('active'));
            
            bars.forEach((bar, index) => {
                if (navToggle.classList.contains('active')) {
                    if (index === 0) {
                        bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                    } else if (index === 1) {
                        bar.style.opacity = '0';
                    } else {
                        bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
                    }
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
    }
});

// Close mobile menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});



// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-item, .about-content, .hero-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    .project-card, .skill-item, .about-content {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .hero-content {
        opacity: 0;
        animation: fadeInUp 1s ease-out 0.5s forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Form handling (basic client-side validation)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Interactive code snippet
document.addEventListener('DOMContentLoaded', () => {
    const codeLines = document.querySelectorAll('.code-line');
    
    // Animate code lines appearing one by one
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            line.style.transition = 'all 0.6s ease-out';
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, (index + 1) * 500 + 1000);
    });
    
    // Interactive tech stack items - SIMPLIFIED VERSION
    setTimeout(() => {
        const techItems = document.querySelectorAll('.tech-item');
        console.log('Tech items found:', techItems.length);
        
        techItems.forEach((item, index) => {
            console.log('Setting up tech item:', item.textContent);
            
            // Add specific class based on text content for different colors
            const text = item.textContent.toLowerCase();
            if (text.includes('python')) item.classList.add('python');
            else if (text.includes('java')) item.classList.add('java');
            else if (text.includes('flutter')) item.classList.add('flutter');
            else if (text.includes('html')) item.classList.add('html');
            else if (text.includes('css')) item.classList.add('css');
            else if (text.includes('javascript')) item.classList.add('javascript');
            else if (text.includes('ccna')) item.classList.add('ccna');
            else if (text.includes('ros')) item.classList.add('ros2');
            
            // Click animation effects
            item.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('TECH ITEM CLICKED:', this.textContent);
                
                // Add ripple effect
                this.classList.add('ripple');
                
                // Add clicked state
                this.classList.add('clicked');
                
                // Force color change with inline styles as backup
                const text = this.textContent.toLowerCase();
                if (text.includes('python')) {
                    this.style.backgroundColor = '#4CAF50';
                    this.style.borderColor = '#4CAF50';
                    this.style.color = 'white';
                    this.style.boxShadow = '0 5px 15px rgba(76, 175, 80, 0.4)';
                } else if (text.includes('java')) {
                    this.style.backgroundColor = '#FF9800';
                    this.style.borderColor = '#FF9800';
                    this.style.color = 'white';
                    this.style.boxShadow = '0 5px 15px rgba(255, 152, 0, 0.4)';
                } else if (text.includes('flutter')) {
                    this.style.backgroundColor = '#2196F3';
                    this.style.borderColor = '#2196F3';
                    this.style.color = 'white';
                    this.style.boxShadow = '0 5px 15px rgba(33, 150, 243, 0.4)';
                } else if (text.includes('html')) {
                    this.style.backgroundColor = '#E94C3E';
                    this.style.borderColor = '#E94C3E';
                    this.style.color = 'white';
                    this.style.boxShadow = '0 5px 15px rgba(233, 76, 62, 0.4)';
                } else if (text.includes('css')) {
                    this.style.backgroundColor = '#1572B6';
                    this.style.borderColor = '#1572B6';
                    this.style.color = 'white';
                    this.style.boxShadow = '0 5px 15px rgba(21, 114, 182, 0.4)';
                } else if (text.includes('javascript')) {
                    this.style.backgroundColor = '#F0DB4F';
                    this.style.borderColor = '#F0DB4F';
                    this.style.color = 'black';
                    this.style.boxShadow = '0 5px 15px rgba(240, 219, 79, 0.4)';
                } else if (text.includes('ccna')) {
                    this.style.backgroundColor = '#1E90FF';
                    this.style.borderColor = '#1E90FF';
                    this.style.color = 'white';
                    this.style.boxShadow = '0 5px 15px rgba(30, 144, 255, 0.4)';
                } else if (text.includes('ros')) {
                    this.style.backgroundColor = '#9C27B0';
                    this.style.borderColor = '#9C27B0';
                    this.style.color = 'white';
                    this.style.boxShadow = '0 5px 15px rgba(156, 39, 176, 0.4)';
                }
                
                this.style.transform = 'scale(0.95)';
                
                console.log('Classes added:', this.className);
                
                // Remove ripple effect after animation
                setTimeout(() => {
                    this.classList.remove('ripple');
                }, 600);
                
                // Remove clicked state and reset styles after a short delay
                setTimeout(() => {
                    this.classList.remove('clicked');
                    this.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    this.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    this.style.color = 'var(--text-primary)';
                    this.style.boxShadow = 'none';
                    this.style.transform = 'translateY(0) scale(1)';
                }, 1500);
            });
            
            // Enhanced hover effects with color preview
            item.addEventListener('mouseenter', () => {
                if (!item.classList.contains('clicked')) {
                    console.log('Hovering over:', this.textContent);
                    
                    const text = item.textContent.toLowerCase();
                    if (text.includes('python')) {
                        item.style.background = 'rgba(76, 175, 80, 0.2)';
                        item.style.borderColor = 'rgba(76, 175, 80, 0.6)';
                        item.style.color = '#4CAF50';
                        item.style.boxShadow = '0 8px 25px rgba(76, 175, 80, 0.3)';
                    } else if (text.includes('java')) {
                        item.style.background = 'rgba(255, 152, 0, 0.2)';
                        item.style.borderColor = 'rgba(255, 152, 0, 0.6)';
                        item.style.color = '#FF9800';
                        item.style.boxShadow = '0 8px 25px rgba(255, 152, 0, 0.3)';
                    } else if (text.includes('flutter')) {
                        item.style.background = 'rgba(33, 150, 243, 0.2)';
                        item.style.borderColor = 'rgba(33, 150, 243, 0.6)';
                        item.style.color = '#2196F3';
                        item.style.boxShadow = '0 8px 25px rgba(33, 150, 243, 0.3)';
                    } else if (text.includes('html')) {
                        item.style.background = 'rgba(233, 76, 62, 0.2)';
                        item.style.borderColor = 'rgba(233, 76, 62, 0.6)';
                        item.style.color = '#E94C3E';
                        item.style.boxShadow = '0 8px 25px rgba(233, 76, 62, 0.3)';
                    } else if (text.includes('css')) {
                        item.style.background = 'rgba(21, 114, 182, 0.2)';
                        item.style.borderColor = 'rgba(21, 114, 182, 0.6)';
                        item.style.color = '#1572B6';
                        item.style.boxShadow = '0 8px 25px rgba(21, 114, 182, 0.3)';
                    } else if (text.includes('javascript')) {
                        item.style.background = 'rgba(240, 219, 79, 0.2)';
                        item.style.borderColor = 'rgba(240, 219, 79, 0.6)';
                        item.style.color = '#F0DB4F';
                        item.style.boxShadow = '0 8px 25px rgba(240, 219, 79, 0.3)';
                    } else if (text.includes('ccna')) {
                        item.style.background = 'rgba(30, 144, 255, 0.2)';
                        item.style.borderColor = 'rgba(30, 144, 255, 0.6)';
                        item.style.color = '#1E90FF';
                        item.style.boxShadow = '0 8px 25px rgba(30, 144, 255, 0.3)';
                    } else if (text.includes('ros')) {
                        item.style.background = 'rgba(156, 39, 176, 0.2)';
                        item.style.borderColor = 'rgba(156, 39, 176, 0.6)';
                        item.style.color = '#9C27B0';
                        item.style.boxShadow = '0 8px 25px rgba(156, 39, 176, 0.3)';
                    }
                    
                    item.style.transform = 'translateY(-8px) scale(1.05)';
                    item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                if (!item.classList.contains('clicked')) {
                    item.style.background = 'rgba(255, 255, 255, 0.08)';
                    item.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    item.style.color = 'var(--text-primary)';
                    item.style.boxShadow = 'none';
                    item.style.transform = 'translateY(0) scale(1)';
                    item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                }
            });
        });
    }, 1000); // Wait 1 second to ensure DOM is ready
});

// Hero accent line animation
document.addEventListener('DOMContentLoaded', () => {
    const accentLine = document.querySelector('.hero-accent-line');
    if (accentLine) {
        accentLine.style.width = '0';
        setTimeout(() => {
            accentLine.style.transition = 'width 1.5s ease-out';
            accentLine.style.width = '60px';
        }, 500);
    }
});

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Initialize counter animations when stats come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                const text = stat.textContent;
                const number = parseInt(text.replace('+', ''));
                
                setTimeout(() => {
                    animateCounter(stat, number, 1500);
                }, index * 300);
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
});

// Button color switching functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Button animation script loaded');
    
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    console.log('Found buttons:', buttons.length);
    
    buttons.forEach((button, index) => {
        console.log(`Setting up button ${index}:`, button);
        
        button.addEventListener('click', function(e) {
            console.log('Button clicked:', this);
            
            // Don't prevent default for navigation - let it work normally
            // Just add the visual effects
            
            // Add ripple effect
            this.classList.add('ripple');
            
            // Add clicked state
            this.classList.add('clicked');
            
            console.log('Added classes: ripple, clicked');
            
            // Remove ripple effect after animation
            setTimeout(() => {
                this.classList.remove('ripple');
                console.log('Removed ripple class');
            }, 300);
            
            // Remove clicked state after a short delay
            setTimeout(() => {
                this.classList.remove('clicked');
                console.log('Removed clicked class');
            }, 1000);
        });
    });
});


// Add parallax effect to hero section (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add skill items hover sound effect (optional - remove if not needed)
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Project card tilt effect on hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});