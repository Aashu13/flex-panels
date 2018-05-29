var panels = document.querySelectorAll('.panel');

function togglePanel(e) {
    this.classList.toggle('open');
};

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

for (var i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", togglePanel);
    panels[i].addEventListener("transitionend", toggleActive);
}