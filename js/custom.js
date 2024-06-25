$("#basicDate").flatpickr({
      enableTime: false,
      dateFormat: "F, d Y",
      disableMobile: "true"
      
  });
  $("#basicDate2").flatpickr({
      enableTime: false,
      dateFormat: "F, d Y",
      disableMobile: "true"
      
  });
  
  $( ".section-box" ).on( "click", function() {
    $(this).addClass( "active" );
  } );

  const scrollContainer = document.getElementById('scroll-container');

  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      scrollContainer.classList.add('active');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = 'grabbing';
  });

  scrollContainer.addEventListener('mouseleave', () => {
      isDown = false;
      scrollContainer.style.cursor = 'grab';
  });

  scrollContainer.addEventListener('mouseup', () => {
      isDown = false;
      scrollContainer.style.cursor = 'grab';
  });

  scrollContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      scrollContainer.scrollLeft = scrollLeft - walk;
  });

// Select all elements with class 'arw-prev' and attach event listeners
document.querySelectorAll('.arw-prev').forEach(function(element) {
  element.addEventListener('click', function() {
      document.querySelector('.scroll-container').scrollBy({
          left: -100,
          behavior: 'smooth'
      });
  });
});

// Select all elements with class 'arw-next' and attach event listeners
document.querySelectorAll('.arw-next').forEach(function(element) {
  element.addEventListener('click', function() {
      document.querySelector('.scroll-container').scrollBy({
          left: 100,
          behavior: 'smooth'
      });
  });
});

const hamburger = document.querySelector('.hamburger-main');
const sidebar = document.querySelector('.sidebar');

// Toggle sidebar on hamburger click
hamburger.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const body = document.body;

    hamburger.addEventListener('click', function() {
        body.classList.toggle('active-main');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cross = document.getElementById('cross');
    const body = document.body;

    cross.addEventListener('click', function() {
        body.classList.remove('active-main');
    });
});

// Close sidebar on body click
document.body.addEventListener('click', function(event) {
    // Check if the click target is not the sidebar or hamburger
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.mbl-calender-main ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove 'bg-active' class from all links
            links.forEach(link => link.classList.remove('bg-active'));

            // Add 'bg-active' class to the clicked link
            link.classList.add('bg-active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Remove 'active' class from all nav-links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked nav-link
            link.classList.add('active');

            // Show or hide the submenu
            const submenu = link.nextElementSibling;
            if (submenu) {
                if (submenu.classList.contains('show')) {
                    submenu.classList.remove('show');
                } else {
                    // Hide all other submenus
                    document.querySelectorAll('.submenu').forEach(sub => {
                        sub.classList.remove('show');
                    });
                    submenu.classList.add('show');
                }
            }
        });
    });
});
