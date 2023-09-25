// Generate short url
const original_link = document.getElementById('original_link');
const generate = document.getElementById('generate');
const shorten_link = document.getElementById('shorten_link');
const copy = document.getElementById('copy');

generate.addEventListener('click', ()=>{
    const url = original_link.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then(res => res.json())
    .then(data => {
        shorten_link.value = data.result.short_link;
    }).catch((error) => {
        shorten_link.value = "Something went wrong!";
    })
});

// Enabling copy button
copy.addEventListener('click', ()=> {
    navigator.clipboard.writeText(shorten_link.value);
    copy.innerHTML = "Copied!";
    
    setTimeout(()=>{
        copy.innerHTML = "Copy";
    }, 1000);
});




