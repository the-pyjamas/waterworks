"use strict";

const ANIMATION_DURATION = 300;
const sidebar = document.getElementById("sidebar");
let mainContentDiv = document.querySelector(".app-content-area");
const slideHasSub = document.querySelectorAll(".nav > ul > .slide.has-sub");
const firstLevelItems = document.querySelectorAll(".nav > ul > .slide.has-sub > a");
const innerLevelItems = document.querySelectorAll(".nav > ul > .slide.has-sub .slide.has-sub > a");

class PopperObject {
    instance = null;
    reference = null;
    popperTarget = null;

    constructor(reference, popperTarget) {
        this.init(reference, popperTarget);
    }

    init(reference, popperTarget) {
        this.reference = reference;
        this.popperTarget = popperTarget;
        this.instance = Popper.createPopper(this.reference, this.popperTarget, {
            placement: "bottom",
            strategy: "relative",
            resize: true,
            modifiers: [
                {
                    name: "computeStyles",
                    options: {
                        adaptive: false,
                    },
                },
            ],
        });

        document.addEventListener("click", (e) => this.clicker(e, this.popperTarget, this.reference), false);

        const ro = new ResizeObserver(() => {
            this.instance.update();
        });

        ro.observe(this.popperTarget);
        ro.observe(this.reference);
    }

    clicker(event, popperTarget, reference) {
        if (
            sidebar.classList.contains("collapsed") &&
            !popperTarget.contains(event.target) &&
            !reference.contains(event.target)
        ) {
            this.hide();
        }
    }

    hide() {
        // this.instance.state.elements.popper.style.visibility = "hidden";
    }
}

class Poppers {
    subMenuPoppers = [];

    constructor() {
        this.init();
    }

    init() {
        slideHasSub.forEach((element) => {
            this.subMenuPoppers.push(new PopperObject(element, element.lastElementChild));
            this.closePoppers();
        });
    }

    togglePopper(target) {
        if (window.getComputedStyle(target).visibility === "hidden") {
            target.style.visibility = "visible";
        } else {
            target.style.visibility = "hidden";
        }
    }

    updatePoppers() {
        this.subMenuPoppers.forEach((element) => {
            element.instance.state.elements.popper.style.display = "none";
            element.instance.update();
        });
    }

    closePoppers() {
        this.subMenuPoppers.forEach((element) => {
            element.hide();
        });
    }
}

const slideUp = (target, duration = ANIMATION_DURATION) => {
    const { parentElement } = target;
    parentElement.classList.remove("open");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = `${duration}ms`;
    target.style.boxSizing = "border-box";
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = "none";
        target.style.removeProperty("height");
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
    }, duration);
};

const slideDown = (target, duration = ANIMATION_DURATION) => {
    const { parentElement } = target;
    parentElement.classList.add("open");
    target.style.removeProperty("display");
    let { display } = window.getComputedStyle(target);
    if (display === "none") display = "block";
    target.style.display = display;
    const height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = `${duration}ms`;
    target.style.height = `${height}px`;
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-property");
        target.style.removeProperty("transition-duration");
    }, duration);
};

const slideToggle = (target, duration = ANIMATION_DURATION) => {
    if (window.getComputedStyle(target).display === "none") {
        return slideDown(target, duration);
    }
    return slideUp(target, duration);
};

const PoppersInstance = new Poppers();

const updatePoppersTimeout = () => {
    setTimeout(() => {
        PoppersInstance.updatePoppers();
    }, ANIMATION_DURATION);
};

const defaultOpenMenus = document.querySelectorAll(".slide.has-sub.open");
defaultOpenMenus.forEach((element) => {
    element.lastElementChild.style.display = "block";
});

firstLevelItems.forEach((element) => {
    element.addEventListener("click", () => {
        const parentMenu = element.closest(".nav.sub-open");
        if (parentMenu)
            parentMenu.querySelectorAll(":scope > ul > .slide.has-sub > a").forEach((el) => {
                if (el.nextElementSibling.style.display === "block" || window.getComputedStyle(el.nextElementSibling).display === "block") {
                    slideUp(el.nextElementSibling);
                }
            });
        slideToggle(element.nextElementSibling);
    });
});

innerLevelItems.forEach((element) => {
    element.addEventListener("click", () => {
        const innerMenu = element.closest(".sidebar-menu");
        if (innerMenu)
            innerMenu.querySelectorAll(":scope .slide.has-sub > a").forEach((el) => {
                if (el.nextElementSibling && el.nextElementSibling?.style.display === "block") {
                    slideUp(el.nextElementSibling);
                }
            });
        slideToggle(element.nextElementSibling);
    });
});

const setNavActive = () => {
    let currentPath = window.location.pathname.split("/")[0];
    currentPath = location.pathname === "/" ? "index.html" : location.pathname.substring(1);
    currentPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);
    let sidemenuItems = document.querySelectorAll(".sidebar-menu-item");

    sidemenuItems.forEach((e) => {
        if (currentPath === "/") {
            currentPath = "index.html";
        }
        if (e.getAttribute("href") === currentPath) {
            e.classList.add("active");
            e.parentElement.classList.add("active");
            let parent = e.closest("ul");
            let hasParent = true;

            if (parent) {
                parent.classList.add("active");
                parent.previousElementSibling.classList.add("active");
                parent.parentElement.classList.add("active");

                if (parent.parentElement.classList.contains("has-sub")) {
                    let elementRef = parent.parentElement.parentElement.parentElement;
                    elementRef.classList.add("open", "active");
                    elementRef.firstElementChild.classList.add("active");

                    if (elementRef.children[1]) {
                        elementRef.children[1].style.display = "block";
                        Array.from(elementRef.children[1].children).forEach((child) => {
                            if (child.classList.contains("active") && child.children[1]) {
                                child.children[1].style.display = "block";
                            }
                        });
                    }
                }

                parent = parent.parentElement.closest("ul");
                if (!parent) hasParent = false;
            } else {
                hasParent = false;
            }
        }
    });
};

setNavActive();

/* for menu scroll to top active page */
let customScrollTop = () => {
    document.querySelectorAll(".sidebar-menu-item").forEach((ele) => {
        if (ele.classList.contains("active")) {
            let elemRect = ele.getBoundingClientRect();
            if (
                ele.children[0] &&
                ele.parentElement.classList.contains("slide") &&
                elemRect.top > 350
            ) {
                ele.scrollIntoView({ behavior: "smooth" });
            }
        } 0
    });
};
setTimeout(() => {
    customScrollTop();
}, 300);