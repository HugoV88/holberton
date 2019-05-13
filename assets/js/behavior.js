document.addEventListener("DOMContentLoaded", (event) => {

    // Navbar responsivo
    
    let iconBar = document.getElementById('icon');

    iconBar.addEventListener('click', () => {
	
	iconBar.classList.toggle('fa-bars');
	iconBar.classList.toggle('fa-times');

	let navBar = document.getElementById('barra');
	navBar.classList.toggle('animacion');
	navBar.classList.toggle('fadeIn');
	navBar.classList.toggle('barra-abre');
	navBar.classList.toggle('mobile-btn');
    });
    
});


   


