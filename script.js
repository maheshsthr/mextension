function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    document.getElementById('date-time').innerHTML = formattedDateTime;
}

setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial call to display immediately