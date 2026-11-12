const menuButton=document.querySelector('.menu-button');
const menuPanel=document.querySelector('.menu-panel');
if(menuButton&&menuPanel){menuButton.addEventListener('click',()=>{const open=menuPanel.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});document.addEventListener('click',e=>{if(!menuButton.contains(e.target)&&!menuPanel.contains(e.target)){menuPanel.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}})}
