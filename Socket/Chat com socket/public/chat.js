const room = document.location.pathname.replace(/\//g, "")
const socket = io(`http://localhost:3000/${room}`)
let user = null

socket.on('update_messages', (messages) => {
    updateMessagesOnScreen(messages);
})

function updateMessagesOnScreen(messages) {

    const div_messages = document.getElementById('messages')

    let messages_list = '<ul>'

    messages.forEach(message => {

        messages_list += `<li> ${message.user}: ${message.msg} </li>`
    });

    messages_list += '</ul>'

    div_messages.innerHTML = messages_list

}

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('message_form')

    form.addEventListener('submit', (e) => {

        if (!user) {
            alert('define an user')
            return
        }

        e.preventDefault()

        const message = document.getElementById('message_text').value

        if (!document.getElementById('message_text').value == '') {
            socket.emit('new_message', { msg: message, user: user })
            document.getElementById('message_text').value = ''
        }


    })
    const userForm = document.getElementById('user_form')


    userForm.addEventListener('submit', (e) => {

        e.preventDefault()
        if (!document.forms["user"]['user_name'].value == '') {


            user = document.forms["user"]['user_name'].value

            userForm.parentNode.removeChild(userForm)
        }

    })

})