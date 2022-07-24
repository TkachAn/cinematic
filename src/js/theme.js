import { loadLs, saveLs } from './storage';
const themeBtn = document.getElementById('toggle-theme-btn');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const bodyClass = document.querySelector('.body')

const themeValue = loadLs('theme') ? loadLs('theme') : 'light';
console.log('themeValue',themeValue);
saveLs('theme', themeValue);
bodyClass.classList.add(themeValue);
if (themeValue === 'light') {
	sun.style.visibility = 'hidden';
} else {
	moon.style.visibility = 'hidden';
}
themeBtn.addEventListener('click', () => {
	const val = loadLs('theme');
	if (val === 'light') {
		document.body.classList.add('dark');
		moon.style.visibility = 'hidden';
		sun.style.visibility = 'visible';
		saveLs('theme', 'dark');
		document.querySelector('.modal').classList.add('dark');
		// if(location.pathname.split("/").slice(-1) == 'index.html') {
		// 	document.querySelector('.pagination-section').classList.add('dark');
		// }
	} else {
		document.body.classList.remove('dark');
		sun.style.visibility = 'hidden';
		moon.style.visibility = 'visible';
		saveLs('theme', 'light');
		document.querySelector('.modal').classList.remove('dark');
		// if(location.pathname.split("/").slice(-1) == 'index.html') {
		// 	document.querySelector('.pagination-section').classList.remove('dark');
		// }
	}
});

if(location.pathname.split("/").slice(-1) == 'index.html') {
	if(loadLs('theme') === 'dark')
	document.querySelector('.pagination-section').classList.add('dark')
}