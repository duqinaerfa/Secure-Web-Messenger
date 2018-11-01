# Secure-Web-Messenger
    Secure Web Messenger project for BU, EC601
## System Architecture
1.Front-end development to build a UI<br>
2.Setup our own server<br>
3.Connect the UI and server to implement data transmission(use signal protocol to make sure the security
## Technologies
### 1.Front-end development
HTML5, CSS, JavaScript(using bootstrap)
### 2.Deploy a server
Clone directly from our GitHub’s repository and build it with makefile
### 3.Signal protocol
The Signal Protocol improves security by using true end-to-end encryption with perfect forward secrecy, which means the encryption keys used to scramble communication can’t be captured through a server, and no single key gives access to past messages. In addition, Signal Protocol uses a double ratchet algorithm — which creates temporary key exchanges continually during each session — minimizing the amount of information that can be decrypted if one of the keys were to be compromised.
### 4.Firebase
Using firebase to do back-end design
## Code
1.Basically implement a UI which includes a log in interface and a chat interface in the folder front-end-design.(useless now)
2.Using firebase to finish all the functions except signal protocol in the folder Web.
