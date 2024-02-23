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

// message user
const send = document.getElementById('send');
send.addEventListener('click', e => {
    const user = document.getElementById('user-search');
    const message = document.getElementById('user-message');
    if (user.value === '' && message.value === '') {
        alert('Please fill out user and message fields before sending');
    } else if (user.value === '') {
        alert('Please fill out user field before sending');
    } else if (message.value === '') {
        alert('Please fill out message field before sending');
    }
    else {
        alert(`Your message has been sent to: ${user.value}`);
    }
})