const toggle=document.querySelector('.menu-toggle');const navigation=document.querySelector('.navlinks');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open)});
navigation?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navigation.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
const modal=document.querySelector('.lightbox');let opener;
document.querySelectorAll('.shot').forEach(button=>button.addEventListener('click',()=>{opener=button;const original=button.querySelector('img');const enlarged=modal.querySelector('img');enlarged.src=original.src;enlarged.alt=original.alt;modal.showModal()}));
modal?.querySelector('button').addEventListener('click',()=>modal.close());modal?.addEventListener('click',event=>{if(event.target===modal)modal.close()});modal?.addEventListener('close',()=>opener?.focus());
