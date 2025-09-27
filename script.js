
window.onload = () => {
  console.log("مرحباً بكم في موقع فندق البستان!");
};


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".booking-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("تم إرسال الحجز بنجاح ✅ سنتواصل معك قريباً.");
      form.reset();
    });
  }
});