function visitorCounter() {
    fetch("https://cs2a6solv1.execute-api.us-east-1.amazonaws.com/visitorCounter")
        .then(response => response.text())
        .then(body => {
            document.getElementById('visitor-counter').innerHTML = body;
        })
}