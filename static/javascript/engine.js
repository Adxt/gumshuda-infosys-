function show(){
    const hamburger_menu=document.getElementsByClassName('hamburger');
    const mobile_nav=document.getElementsByClassName('menu');
    mobile_nav[0].classList.toggle('is-activemenu');
    hamburger_menu[0].classList.toggle('is-active');
}