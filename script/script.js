document.querySelector('.icon_eye').addEventListener('click', function(e){
    let input = document.querySelector('#password')
    let input_type = input.type
    let input_value = input.value
    if(input_type == 'password'){
        document.querySelector('#password').type = 'text'
        document.querySelector('#password').value = input_value
    }else{
        document.querySelector('#password').type = 'password'
        document.querySelector('#password').value = input_value
    }
})