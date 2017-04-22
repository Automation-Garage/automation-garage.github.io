window.onload = function () {
    let blogEntry = document.querySelector('#blogs-entry');
    let blogList = document.querySelector('#blogs-list');
    blogEntry.onclick = function () {
        blogList.style.display = 'flex';
    }
}