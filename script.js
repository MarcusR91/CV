let originalDiv = document.getElementById('repos');
fetch('https://api.github.com/users/MarcusR91/repos')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
          for(i = 0; i < data.length; i++){
            let repo = document.createElement('li');
            repo.innerHTML = `<a href="${data[i].html_url}">${data[i].name}</a>`;
            originalDiv.appendChild(repo);
          }    
    });