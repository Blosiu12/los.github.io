


            fetch('https://cors.szurek.local/10/') 
                .then(response => response.json())
                .then(data => {
                    document.querySelector('#secret-text').textContent = data.secret;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
