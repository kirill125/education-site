export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector(".close");
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener("click", () => {
                const path = btn.getAttribute("data-url");
                this.createPlayer(path);
            });
        });

    }

    bindCloseBtns() {
        this.close.addEventListener("click", () => { 
            this.overlay.style.display = "none";
            this.player.stopVideo(); 
        });
    }

    createPlayer(url) {
        if (!this.player) {
            this.player = new YT.Player('frame', {
                height: '360',
                width: '640',
                videoId: `${url}`
    
            });
        }
        this.overlay.style.display = "flex";
    }

    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindCloseBtns();

    }
}