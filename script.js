let feature_arrow_down = document.getElementById('feature-arrow-down');
let feature_dropdown = document.getElementById('feature-dropdown-id');
let company_dropdown = document.getElementById('company-dropdown-id');
let company_arrow_down = document.getElementById('company-arrow-down');
let feature_dropdown_mobile = document.getElementById('feature-dropdown-mobile-id');
let company_dropdown_mobile = document.getElementById('company-dropdown-mobile-id')
let feature_mobile_arrow_down = document.getElementById('feature-mobile-arrow-down');
let company_mobile_arrow_down = document.getElementById('company-mobile-arrow-down');

document.getElementById('feature-arrow').addEventListener("click",()=>{

  feature_dropdown.classList.toggle("display");
  if(feature_dropdown.classList.contains("display")){
    feature_arrow_down.src = `images/icon-arrow-up.svg`;
  }else{
    feature_arrow_down.src = `images/icon-arrow-down.svg`;
  }
})


document.getElementById('company-arrow').addEventListener("click",()=>{

  company_dropdown.classList.toggle("display");
  if(company_dropdown.classList.contains("display")){
    company_arrow_down.src = `images/icon-arrow-up.svg`
  }else{
    company_arrow_down.src = `images/icon-arrow-down.svg`
  }
})


document.getElementById('feature-mobile-arrow').addEventListener("click",()=>{
  feature_dropdown_mobile.classList.toggle("display");
  if(feature_dropdown_mobile.classList.contains("display")){
    feature_mobile_arrow_down.src = `images/icon-arrow-up.svg`
  }else{
    feature_mobile_arrow_down.src = `images/icon-arrow-down.svg`
  }
})


document.getElementById('company-mobile-arrow').addEventListener("click",()=>{
  company_dropdown_mobile.classList.toggle("display");
  if(company_dropdown_mobile.classList.contains("display")){
    company_mobile_arrow_down.src = `images/icon-arrow-up.svg`
  }else{
    company_mobile_arrow_down.src = `images/icon-arrow-down.svg`
  }
})


document.getElementById('menu-icon').addEventListener("click",()=>{
  document.getElementById('menu').style.display = "block";
  document.body.classList.add('mobile-menu-body');
})

document.getElementById('menu-close').addEventListener("click",()=>{
  document.getElementById('menu').style.display = "none";
  document.body.classList.remove('mobile-menu-body');
})
