import { minecraftPlans, vpsPlans, features } from './config.js';

function renderPlans() {
  const minecraftContainer = document.querySelector('#minecraft-plans');
  if (minecraftContainer) {
    minecraftContainer.innerHTML = minecraftPlans.map(plan => `
      <div class="plan-card ${plan.comingSoon ? 'coming-soon' : ''}">
        <h4>${plan.name}</h4>
        <div class="price">${plan.price ? `$${plan.price}<span>/mo</span>` : ''}</div>
        <ul class="features-list">
          ${plan.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        ${plan.comingSoon 
          ? '<button class="cta-button plan-button" disabled>More Coming Soon!</button>' 
          : '<a href="https://discord.gg/QhU6dcP4Vp" class="cta-button plan-button" target="_blank" rel="noopener noreferrer">Go to Discord – Make Ticket (Cash App Only)</a>'}
      </div>
    `).join('');
  }
  const vpsContainer = document.querySelector('#vps-plans');
  if (vpsContainer) {
    vpsContainer.innerHTML = vpsPlans.map(plan => `
      <div class="plan-card coming-soon">
        <h4>${plan.name}</h4>
        <div class="price">${plan.price}</div>
        <ul class="features-list">
          ${plan.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <button class="cta-button plan-button" disabled>Coming Soon</button>
      </div>
    `).join('');
  }
  
  // Add scroll-triggered animation for plan cards
  const animateOnScroll = () => {
    const cards = document.querySelectorAll('.plan-card');
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight - 100) {
        card.style.opacity = '1';
      }
    });
  };
  
  document.querySelectorAll('.plan-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.6s ease, transform 0.4s ease';
  });
  
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

  // Removed the event listener that prompted for payment proof
}

document.addEventListener('DOMContentLoaded', () => {
  renderPlans();
});