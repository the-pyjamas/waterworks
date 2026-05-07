const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")
const toggle = document.getElementById("sidebarToggle")


toggle.onclick = () => {

    sidebar.classList.toggle("open")
    overlay.classList.toggle("show")

}


overlay.onclick = () => {

    sidebar.classList.remove("open")
    overlay.classList.remove("show")

}


document.querySelectorAll(".menu-toggle").forEach(btn => {

    btn.onclick = () => {

        btn.parentElement.classList.toggle("open")

    }

})
