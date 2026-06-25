// ==========================
// FITNEXA SCRIPT.JS
// ==========================

// Sticky Header Effect
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.6)";
    } else {
        header.style.background = "#111";
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });
});

// Newsletter Form
const form = document.querySelector(".newsletter form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const email = form.querySelector("input").value.trim();

if(email===""){
alert("Please enter your email.");
return;
}

alert("Thank you for subscribing to Fitnexa!");

form.reset();

});

}

// Blog Card Hover Animation

const cards=document.querySelectorAll(".blog-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// Fade-in Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.blog-card,.newsletter").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="all .8s ease";

observer.observe(el);

});

// Current Year in Footer

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Fitnexa. All Rights Reserved.`;

}

console.log("Fitnexa Loaded Successfully 🚀");
