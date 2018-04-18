const toggleButton = document.querySelector('.toggle');
const system = document.getElementById('system');


toggleButton.onclick = () => {
	system.classList.toggle('view-2d');
}