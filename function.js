let count = 0;

function increaseCount() {
    count += 1;
    document.getElementById('count-el').innerHTML = count;
}

function decreaseCount() {
    count += - 1;
    document.getElementById('count-el').innerHTML = count;
    if (count === -1) {
        alert('There can not be negative people -_-');
        count = 0;
        document.getElementById('count-el').innerHTML = count;
    }  

}

function saveCount() {
    let savedCount = document.getElementById('saved-count');
    savedCount.textContent += count + ' - ';
    
    document.getElementById('count-el').textContent = 0;
    count = 0;

}
