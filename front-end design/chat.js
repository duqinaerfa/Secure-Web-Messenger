window.onload = function () {
    var user = ["user.jpg"];
    var num = 1;
    var portrait_position = 0;
    var now = -1;
    var send_btn = document.getElementById('send_btn');
    var send_txt = document.getElementById('send_txt');
    var chat_ul = document.getElementById('chat_ul');
    var chat_span = chat_ul.getElementsByTagName('span');
    var chat_img = chat_ul.getElementsByTagName('img');
    send_btn.onclick = function () {
        if (send_txt.value == '') {
            alert("please type in words");
        } else {
            chat_ul.innerHTML += '<li><img src="user.jpg"><span>' + send_txt.value + '</span>';
            now++;
            if (num==0) {
                chat_span[now].className = 'spanright';
                chat_img[now].className = 'imgright';
            }
            else {
                chat_span[now].className = 'spanleft';
                chat_img[now].className = 'imgleft';
            }
            send_txt.value = '';
        }
    }


}