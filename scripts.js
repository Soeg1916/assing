document.addEventListener('DOMContentLoaded', function() {
    // This script only adds a data attribute to HTML when scrolled
    // The actual hiding animation is still controlled by CSS
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            document.documentElement.setAttribute('data-scroll', '1');
        } else {
            document.documentElement.removeAttribute('data-scroll');
        }
    });

    // Make sure mobile button is always visible on mobile
    function checkMobileMenu() {
        if (window.innerWidth <= 768) {
            const mobileButton = document.querySelector('.mobile-nav-button');
            if (mobileButton) {
                mobileButton.style.display = 'block';
            }
        }
    }
    
    // Run on page load and resize
    checkMobileMenu();
    window.addEventListener('resize', checkMobileMenu);

    // Mobile navigation functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    
    if (mobileMenuToggle) {
        // Make sure people can see the button by adding a small animation on load
        setTimeout(function() {
            mobileMenuToggle.classList.add('attention');
            setTimeout(function() {
                mobileMenuToggle.classList.remove('attention');
            }, 1000);
        }, 2000);
        
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a mobile menu element
            let mobileMenu = document.getElementById('mobile-menu');
            
            if (!mobileMenu) {
                mobileMenu = document.createElement('div');
                mobileMenu.id = 'mobile-menu';
                mobileMenu.className = 'mobile-menu';
                
                // Current page path
                const currentPath = window.location.pathname;
                const isHomePage = currentPath === '/' || currentPath.includes('index.html');
                
                // Create menu items
                const menuItems = [
                    { href: isHomePage ? '#home' : 'index.html', text: 'Home' },
                    { href: isHomePage ? '#about' : 'index.html#about', text: 'About' },
                    { href: isHomePage ? '#map' : 'index.html#map', text: 'Map' },
                    { href: isHomePage ? '#population' : 'index.html#population', text: 'Population' },
                    { href: 'places.html', text: 'Places to Visit' },
                    { href: isHomePage ? '#culture' : 'index.html#culture', text: 'Culture' },
                    { href: 'education.html', text: 'Education' },
                    { href: 'transport.html', text: 'Transport' },
                    { href: 'food.html', text: 'Local Food' },
                    { href: 'festivals.html', text: 'Festivals' },
                    { href: 'lifestyle.html', text: 'Lifestyle' },
                    { href: 'gallery.html', text: 'Gallery' },
                    { href: isHomePage ? '#contact' : 'index.html#contact', text: 'Contact' }
                ];
                
                // Create menu list
                const menuList = document.createElement('ul');
                
                // Add close button
                const closeItem = document.createElement('li');
                closeItem.className = 'close-menu';
                const closeButton = document.createElement('a');
                closeButton.href = '#';
                closeButton.innerHTML = '<i class="fas fa-times"></i> Close Menu';
                closeButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    mobileMenu.classList.remove('open');
                });
                closeItem.appendChild(closeButton);
                menuList.appendChild(closeItem);
                
                // Add menu items
                menuItems.forEach(item => {
                    const menuItem = document.createElement('li');
                    const menuLink = document.createElement('a');
                    menuLink.href = item.href;
                    menuLink.textContent = item.text;
                    menuLink.addEventListener('click', function() {
                        mobileMenu.classList.remove('open');
                    });
                    menuItem.appendChild(menuLink);
                    menuList.appendChild(menuItem);
                });
                
                mobileMenu.appendChild(menuList);
                document.body.appendChild(mobileMenu);
            }
            
            // Toggle mobile menu visibility
            mobileMenu.classList.toggle('open');
        });
    }
});