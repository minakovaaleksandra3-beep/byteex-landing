import { fetchContent } from './js/api.js';
import { renderBanner } from './js/components/banner.js';
import { renderHeader } from './js/components/header.js';
import { renderHero } from './js/components/hero.js';
import { renderPartners } from './js/components/partners.js';
import { renderFeatures } from './js/components/features.js';
import { renderFAQ } from './js/components/faq.js';
import { renderThirdSection } from './js/components/thirdSection.js';
import { renderFourthSection } from './js/components/fourthSection.js';
import { renderFifthSection } from './js/components/fifthSection.js';
import { renderGreenImpact } from './js/components/greenImpact.js';
import { renderFindSomething } from './js/components/findSomething.js';


async function init() {
  const app = document.getElementById('app');
  
  try {
    const data = await fetchContent();
    
    app.innerHTML = `
      ${renderBanner(data.banner)}
      ${renderHeader(data.header)}
      ${renderHero(data.hero)}
      ${renderPartners(data.partners)}
      ${renderFeatures(data.features)}
      ${renderThirdSection(data.thirdSection)}
      ${renderFourthSection(data.fourthSection)}
      ${renderFifthSection(data.fifthSection)}
      ${renderFAQ(data.faq)}
      ${renderGreenImpact(data.greenImpact)}
      ${renderFindSomething(data.findSomething)}
    `;
    
    initInteractivity();  
  } catch (error) {
    console.error('Failed to load content:', error);
    app.innerHTML = '<p>Failed to load content. Please refresh.</p>';
  }
}

function initInteractivity() {


  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const icon = question.querySelector('.faq-icon');
    
    question.addEventListener('click', () => {
      const wasActive = item.classList.contains('active');
      

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherIcon = otherItem.querySelector('.faq-icon');
          otherIcon.textContent = '+';
        }
      });
      
 
      if (wasActive) {
        item.classList.remove('active');
        icon.textContent = '+';
      } else {
        item.classList.add('active');
        icon.textContent = '−';
      }
    });
  });

  const ctaButtons = document.querySelectorAll('[data-scroll]');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(btn.dataset.scroll);
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const mainImage = document.getElementById('mainGalleryImage');
  const thumbnails = document.querySelectorAll('.gallery__thumbnail');
  const prevBtn = document.querySelector('.gallery__nav--prev');
  const nextBtn = document.querySelector('.gallery__nav--next');
  
  if (!mainImage || !thumbnails.length) return;
  
  let currentIndex = 0;
  
  function changeImage(index) {
    currentIndex = index;
    mainImage.src = thumbnails[index].src;
    

    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      changeImage(index);
    });
  });
  

  prevBtn?.addEventListener('click', () => {
    const newIndex = currentIndex === 0 ? thumbnails.length - 1 : currentIndex - 1;
    changeImage(newIndex);
  });
  

  nextBtn?.addEventListener('click', () => {
    const newIndex = currentIndex === thumbnails.length - 1 ? 0 : currentIndex + 1;
    changeImage(newIndex);
  });

  const prevArrow = document.querySelector('.fifth-section__arrow--prev');
  const nextArrow = document.querySelector('.fifth-section__arrow--next');
  const track = document.querySelector('.fifth-section__testimonials-track');
  
  if (prevArrow && nextArrow && track) {
    let currentPosition = 0;
    const testimonials = document.querySelectorAll('.fifth-section__testimonial');
    const visibleCards = 3;
    const maxPosition = Math.max(0, testimonials.length - visibleCards);
    
    function updateButtons() {
      if (currentPosition === 0) {
        prevArrow.classList.add('disabled');
      } else {
        prevArrow.classList.remove('disabled');
      }
      
      if (currentPosition >= maxPosition) {
        nextArrow.classList.add('disabled');
      } else {
        nextArrow.classList.remove('disabled');
      }
    }
    
    function updateCarousel() {
      if (testimonials.length > 0) {
        const cardWidth = testimonials[0].offsetWidth;
        const gap = 30;
        const offset = -(currentPosition * (cardWidth + gap));
        track.style.transform =  `translateX(${offset}px)`;
        updateButtons();
      }
    }
    
    prevArrow.addEventListener('click', () => {
      if (currentPosition > 0) {
        currentPosition--;
        updateCarousel();
      }
    });
    
    nextArrow.addEventListener('click', () => {
      if (currentPosition < maxPosition) {
        currentPosition++;
        updateCarousel();
      }
    });
    
 
    updateButtons();
  }
}

init();