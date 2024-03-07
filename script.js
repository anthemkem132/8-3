document.getElementById('movingButton').addEventListener('click', function(e) {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const newLeft = Math.random() * (vw - this.offsetWidth);
    const newTop = Math.random() * (vh - this.offsetHeight);

    this.style.position = 'absolute';
    this.style.left = newLeft + 'px';
    this.style.top = newTop + 'px';
});