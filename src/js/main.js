import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Difference from "./modules/difference";
import Form from "./modules/form";
import Accordeon from "./modules/accordeon";
import Downnload from "./modules/download";

window.addEventListener("DOMContentLoaded", () => {
    const slider = new MainSlider({container: ".page", btns: ".next"});
    slider.render();

    const modulePageSlider = new MainSlider({container: ".moduleapp", btns: ".next"});
    modulePageSlider.render();

    const showupSlider = new MiniSlider({
        container: ".showup__content-slider",
        prev: ".showup__prev",
        next: ".showup__next",
        activeClass: "card-active", 
        animate: true
    });
    showupSlider.init();

    const modulesSlider = new MiniSlider({
        container: ".modules__content-slider",
        prev: ".modules__info-btns .slick-prev",
        next: ".modules__info-btns .slick-next",
        activeClass: "card-active", 
        animate: true,
        autoplay: true
    });

    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: ".feed__slider",
        prev: ".feed__slider .slick-prev",
        next: ".feed__slider .slick-next",
        activeClass: "feed__item-active"
    });

    feedSlider.init();

    new VideoPlayer(".showup .play", ".overlay").init();
    new VideoPlayer(".module__video .play", ".overlay").init();

    new Difference(".officerold", ".officernew", ".officer__card-item").init();

    new Form(".form").init();
    new Accordeon(".module__info-show .plus__content").init();
    new Downnload(".module__info-book .download").init();
    
});