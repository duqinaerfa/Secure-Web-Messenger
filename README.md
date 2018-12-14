# Secure-Web-Messenger
Secure Web Messenger project for BU, EC601<br>
using by accessing [demo](https://funforme-d8b9c.firebaseapp.com/)<br>
Note: only a two people size chat room is available. Now we two are taking up in the chat room. If you also want to join the chat, you could contact us to sign out one of our account. Or you could use our code and deploy a new firebase project on it, then you could enjoy secure chatting.
## System Architecture
1.Front-end development to build a UI<br>
2.Connect with firebase to store data<br>
3.Implement encryption by using WebCryptoAPI<br>
## Technologies
### 1.Front-end development
HTML5, CSS, JavaScript based on friendly-chat.
### 2.Firebase
Firebase gives you functionality like analytics, databases, messaging and crash reporting so you can move quickly and focus on your users.
In these project, we created two firebase project, one for the group chat without encryption to deploy, the other is for the one-to-one secure chat.<br>
click the link below to see more detail.<br>
[firebase](https://firebase.google.com/)
### 3.Web Crypto API
The Web Crypto API is an interface allowing a script to use cryptographic primitives in order to build systems using cryptography.<br> 
A fundamental feature of this API is to allow the manipulation and storage of private and secret keys without requiring the underlying bits of the key to be made available to JavaScript.<br>
## Achievement
1. A Secure Web one-to-one chat room application based on firebase which also demonstrates end-to-end encryption where the content of messages is completely hidden from the server.<br>
The welcome page<br>
![welcomepage](https://github.com/joshem/Secure-Web-Messenger/blob/master/screenshot/welcomepage.png)<br>
Inform users to join in a chat room<br>
![newchat](https://github.com/joshem/Secure-Web-Messenger/screenshot/newchat.png)<br>
Password<br>
![password](https://github.com/joshem/Secure-Web-Messenger/screenshot/password.png)<br>
Secure chat user interface<br>
![securechat](https://github.com/joshem/Secure-Web-Messenger/screenshot/securechat.png)<br>
The firebase screenshot(As you can see, it completely hides the information from the firebase server)<br>
![firebase](https://github.com/joshem/Secure-Web-Messenger/screenshot/securechatfirebase.png)<br>  
2. A group chat web application based on firebase which could implement multiple people online chatting at the same time, which could be access on the welcome page.(without encryption, could not hide from firebase server)
The group chat user interface<br>
![group chat](https://github.com/joshem/Secure-Web-Messenger/screenshot/groupchat.png)<br>
The firebase screenshot<br>(by comparing with the firebase of the one-to-one chat room with encryption, you could see the firebase server knows anything)
![firebase](https://github.com/joshem/Secure-Web-Messenger/screenshot/groupchatfirebase.png)<br>
3. These messengers are all able for users to easily sign in with Google account.

