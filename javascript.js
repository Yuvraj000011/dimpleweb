// JavaScript for Lightbox
document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
      document.getElementById('lightbox').style.display = 'block';
      document.getElementById('lightbox-img').src = image.src;
    });
  });
  
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
  });
  
