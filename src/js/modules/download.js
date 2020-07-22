export default class Downnload {
    constructor(triggers, container) {
        this.triggers = document.querySelectorAll(triggers);
        this.path = "assets/img/Bitmap.jpg";
    }

    downloadItem(path) {
        let newHref = document.createElement("a");
        newHref.setAttribute("href", path);
        newHref.setAttribute("download", "downloaded file");
        newHref.style.display = "none";
        document.body.appendChild(newHref);
        newHref.click(e => e.preventDefault());
        document.body.removeChild(newHref);
    }

    init() {
        this.triggers.forEach(item => {
            item.addEventListener("click", () => {
                this.downloadItem(this.path);
            });
        });
    }
}