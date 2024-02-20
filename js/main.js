// alert notification
const alertBanner = document.getElementById('alert');
alertBanner.innerHTML = `<div class="alert-banner">
<p><span>Alert:</span> You have unread messages</p>
<p class="alert-banner-close">x</p>
</div>`;
alertBanner.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
})