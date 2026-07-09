// Small frontend behavior for the demo site
document.addEventListener('DOMContentLoaded',function(){
  // set year
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  if(navToggle && nav){
    navToggle.addEventListener('click',()=>{
      if(nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
    });
  }

  // demo add-to-cart
  document.querySelectorAll('.add-to-cart').forEach(btn=>{
    btn.addEventListener('click',()=>{
      btn.textContent = 'Added';
      btn.disabled = true;
      setTimeout(()=>{btn.textContent = 'Add to cart';btn.disabled = false},1200);
    });
  });

  // contact form (demo only)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Thanks — this demo does not send messages.');
      form.reset();
    });
  }
});
