export default class Accordeon {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);
    }

    bindTrigger() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener("click", () => {
                let textContainer = trigger.closest(".module__info-show").nextElementSibling;
                textContainer.style.display = textContainer.style.display === "block" ? "none" : "block";
            });
        });
        
    }

    init() { 
        this.bindTrigger();
    }
}