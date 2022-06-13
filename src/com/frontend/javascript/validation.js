function validation(){
    var username = document.getElementById('username')
    var textRedUsername = document.getElementById('notice_username')
    
    var password = document.getElementById('password')
    var textRedPassword = document.getElementById('notice_password')
    
    if (username.value == "") {
        textRedUsername.style.display = 'block'
    } else {
        textRedUsername.style.display = 'none'
    }
}
