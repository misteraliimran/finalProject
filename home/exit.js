let form = document.getElementById("crateAccountForm")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form)
    let obj = {}

    for (const [key, value] of formData) {
        obj[key] = value;
    }

    console.log(obj);

    fetch("http://195.26.245.5:9505/api/clients",{
        method:"POST",
        "headers":{
           "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    
})


