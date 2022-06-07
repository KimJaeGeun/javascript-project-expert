function scopeConfirm() {
    const item = document.getElementById("app");

    // const let var
    for (let i = 0; i < 4; i += 1) {
        item.addEventListener('click', () => {
            alert(i);
        })
    }
}
