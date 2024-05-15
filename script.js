

      document.querySelector('secret').addEventListener('click', () => {
            fetch('https://api.example.com/secret') // Zmień na właściwy URL API
                .then(response => response.json())
                .then(data => {
                    document.getElementById('secret').textContent = data.secret;
                })
                .catch(error => {
                    console.error('Error fetching the secret:', error);
                });
        });
