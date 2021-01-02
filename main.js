/*when the document in the page is ready, it will execute this following function */
$(document).ready(function(){
    $nav = $('.nav'); /*create object nav from class .nav in css */
    $hamburger = $('.hamburger');

    /*create "click event" on hamburger icon */
    /**when click hamburger, the function below will be executed */
    $hamburger.click(function(){
        $nav.toggleClass('.collapse'); /**obj nav call function "toggleClass" which has class "collapse" in css as a parameter >> this function will increase height of nav section*/
    })

    /**call owl carousel function */
    $('.owl-carousel').owlCarousel();
});