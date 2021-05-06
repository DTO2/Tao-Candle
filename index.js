const get = element => document.getElementById(element);

let open = get("nav-btn");

let nav = get("nav");

let exit = get("close-btn");

open.addEventListener ("click", ()=> {

    
    nav.classList.add("open-nav")
    
} )

exit.addEventListener ("click", ()=> {

    nav.classList.remove("open-nav")
})


