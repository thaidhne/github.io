document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const elements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
elements.forEach(el => observer.observe(el));

const toggleDarkCheckbox = document.getElementById('toggle-dark');
const body = document.body;
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  toggleDarkCheckbox.checked = true;
}
toggleDarkCheckbox.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
});




const music = document.getElementById("bg-music");

  function playMusicOnce() {
    music.play();
    // Gỡ bỏ sự kiện sau khi phát 1 lần
    document.removeEventListener("click", playMusicOnce);
  }

  // Lắng nghe click trên toàn trang
  document.addEventListener("click", playMusicOnce);

  const form = document.querySelector(".contact-form");
  const sendBtn = document.getElementById("sendBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Gửi form bằng AJAX
    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(() => {
      sendBtn.classList.add("sent");
      sendBtn.disabled = true;
      setTimeout(() => {
        sendBtn.classList.remove("sent");
        sendBtn.disabled = false;
        form.reset();
      }, 4000);
    })
    .catch(() => {
      alert("Oops! Something went wrong. Please try again.");
    });
  });

