let btnBack=document.getElementById('btnBack');
let product =JSON.parse(localStorage.getItem('product'));
let productSection =document.getElementById('productSection');

let container = `
            <div class=" my-5 border-bottom companyNameP2 fw-bolde border-info w-50 m-auto text-center">
                <h1>${product.title}</h1>
            </div>
            <div class="row d-flex justify-content-center align-items-center py-3 ">
                <div class="col-md-5  mt-md-0 mt-4 ">
                    <img class="w-100 border-0 rounded-3"src=${product.image} >
                </div>
            <div class="col-md-7  productDesc  p-4 shadow-sm   rounded-3">
                <p class="productFs text-start">
                ${product.body}
                </p>
                <p class="companyNameP2 fw-bold">
                ${product.indicationsTitle}
                </p>
                <p class="productFs text-start">
                ${product.indicationDesc}
                </p>
                <p class="companyNameP2 fw-bold">
                ${product.doseTitle}
                </p>
                <p class="productFs text-start">
                ${product.dose}
                </p>
                <p class="companyNameP2 fw-bold">
                ${product.PackingTitle}
                </p>
                <p class="productFs text-start">
                ${product.PackingDesc}
                </p>
            </div>
            </div>
            
`
document.getElementById("productSection").innerHTML = container;


// !---------Drop Down ContactUs
$(".contactInfo").slideUp();

$("#contactUs").on("click", function (event) {
event.preventDefault();
$(".contactInfo").toggleClass("d-none").slideDown();
});