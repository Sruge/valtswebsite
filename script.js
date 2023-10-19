$(document).ready(function() {
    // Initial fade-in for the page
    $('body').css('opacity', 0).animate({opacity: 1}, 1500);

    // Handle link clicks
    $('a').on('click', function(event) {
        event.preventDefault();  // Prevent the default link behavior immediately
        var href = $(this).attr('href');

        // Fade out the page
        $('body').addClass('fade-out');

        // After the animation completes, navigate to the link
        setTimeout(function() {
            window.location.href = href;
        }, 500);  // This delay should match the duration of the fade-out transition in the CSS
    });
});

