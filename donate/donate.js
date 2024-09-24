document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.don-item'); // Changed from '.nav-item' to '.don-item' to match your HTML

    // Function to load content
    function loadContent(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('contents').innerHTML = data; // Changed from 'content' to 'contents' to match your HTML
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    }

    // Function to set active button
    function setActiveButton(event) {
        // Remove active class from all buttons
        navItems.forEach(item => item.classList.remove('active'));
        
        // Add active class to the clicked button
        event.currentTarget.classList.add('active');
    }

    // Add event listener to each button
    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            const page = item.getAttribute('data-target');
            loadContent(page);
            setActiveButton(event); // Set active button
        });
    });

    // Load default page
    loadContent('donate/donate.html');

    // Function to get URL parameters
    function getUrlParams() {
        const currentUrl = new URL(window.location.href);
        const urlParams = new URLSearchParams(currentUrl.search);
        return {
            vicPercentage: urlParams.get('vicPercentage'),
            uahPercentage: urlParams.get('uahPercentage')
        };
    }

    // Function to update progress bars
    function updateProgressBars() {
        const { vicPercentage, uahPercentage } = getUrlParams();

        const vicProgress = document.getElementById('vic-progress');
        const uahProgress = document.getElementById('uah-progress');

        vicProgress.style.width = vicPercentage + '%';
        uahProgress.style.width = uahPercentage + '%';
    }

    // Call the updateProgressBars function when the page loads
    window.addEventListener('load', updateProgressBars);
});