
/* For Skills Skection */

window.addEventListener('DOMContentLoaded', () => {
    const progresses = document.querySelectorAll('.progress');
    const percents = document.querySelectorAll('.percent');
  
    percents.forEach((el, index) => {
      const percent = parseInt(el.dataset.percent);
      const progress = progresses[index];
      
      let current = 0;
      const interval = setInterval(() => {
        if (current >= percent) {
          clearInterval(interval);
        } else {
          current++;
          el.textContent = `${current}%`;
          progress.style.width = `${current}%`;
        }
      }, 20); 
    });
  });
  //hiii






/* For contact and submit */

  document.getElementById("contactform").addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("formStatus");
  
    status.textContent = "Sending...";
    setTimeout(() => {
      status.textContent = "Message sent! ✅";
      this.reset();
    }, 1000);
  });
  




 