async function preLoad(){
    var loading = document.getElementById("loading");  
    var body = document.body;
    body.style.overflow = "hidden";
    await setTimeout(() => { 
        loading.style.display = "none";
        body.style.overflow = "auto";
        }, 2000);
}