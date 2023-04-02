const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
const menuBtn = document.querySelector('.mobile-menu');
const nav = document.querySelector('.main-nav');



accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {

        // Check if any accordion tab is open
        const currentlyActiveAccordionItemHeader = document.querySelector('.accordion-item-header.show');
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle('show');
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        // Toggle the show class
        accordionItemHeader.classList.toggle('show');

        // Generate the height for the accordion Body
        const accordionBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains('show')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0;
        }
    });
});



function toggleNav() {
    menuBtn.classList.toggle('change');
    if(menuBtn.classList.contains('change')) {
        menuBtn.src = './src/images/icon-close.svg';
    } else {
        menuBtn.src = './src/images/icon-hamburger.svg';
    }
    nav.classList.toggle('show');
    header.classList.toggle('show');
    // console.log(e.target);
}


menuBtn.addEventListener('click', toggleNav);