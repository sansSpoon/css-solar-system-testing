const toggle2d = document.getElementById('toggle-2d');
const toggle3d = document.getElementById('toggle-3d');
const system = document.getElementById('system');


toggle2d.onclick = () => {
	system.classList.toggle('animate-2d');
}
toggle3d.onclick = () => {
	system.classList.toggle('animate-3d');
}

