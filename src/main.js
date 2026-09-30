
const btn = document.getElementById('btn')
const menuo = document.getElementById('menuo')
const btn_close = document.getElementById('btn_close')
btn.addEventListener('click',()=>{
    menuo.classList.toggle('active')
   
})
 btn_close.addEventListener('click',()=>{
    menuo.classList.remove('active')
 
 })

// ------------------------cart-------------------------------


const products = document.querySelectorAll(".product-card");

products.forEach((product) => {
    const image = product.querySelector(".product-image");

    const originalImage = image.dataset.original;
    const hoverImage = image.dataset.hover;

    const QuickAdd = product.querySelector(".QuickAdd");

    product.addEventListener("mouseenter", () => {
        image.src = hoverImage;
        QuickAdd.classList.remove("opacity-0", "translate-y-3");
        QuickAdd.classList.add("opacity-100", "translate-y-0");
    });

    product.addEventListener("mouseleave", () => {
        image.src = originalImage;
        QuickAdd.classList.remove("opacity-100", "translate-y-0");
        QuickAdd.classList.add("opacity-0", "translate-y-3");
    });
});
