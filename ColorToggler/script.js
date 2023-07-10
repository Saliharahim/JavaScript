function toggleRed() {
    let cbox=document.querySelector("#id_colorbox")
    cbox.classList.remove("bg-dark","bg-success")
    cbox.classList.add("bg-danger")
}

function toggleGreen() {
    let cbox=document.querySelector("#id_colorbox")
    cbox.classList.remove("bg-dark","bg-danger")
    cbox.classList.add("bg-success")
}