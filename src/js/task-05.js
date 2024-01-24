document.getElementById('name-input').addEventListener('input', function(e) {
    var name = e.target.value.trim();
    var output = document.getElementById('name-output');
    
    if (name.length > 0) {
        output.textContent = name;
    } else {
        output.textContent = 'Anonymous';
    }
});