function controlRobot(direction) {
    fetch('/record_direction.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `direction=${direction}`,
    })
    .then(response => response.text())
    .then(data => {
        fetchLastDirection(); 
    })
    .catch(error => console.error('Error:', error));
}

function fetchLastDirection() {
    fetch('/get_last_direction.php')
    .then(response => response.text())
    .then(data => {
        document.getElementById("lastDirection").innerText = "Last Direction: " + data;
    })
    .catch(error => console.error('Error:', error));
}
window.onload = fetchLastDirection;
