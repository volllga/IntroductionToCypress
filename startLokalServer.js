// Basic Node.js Usage
// Node.js is a framework, which means that it doesn’t
// work as a normal application. Instead, it interprets commands that you write.
//     To test your new Node.js installation, create a Hello World script.
//
// 1. Start by launching a text editor of your choice.
// 2. Next, copy and paste the following into the text editor you’ve just opened:
// 3. Save the file, then exit. Open the PowerShell, and enter the following:
//
// It will look like nothing has happened. In reality, your script is running in the background.
// You may see a Windows Defender notice about allowing traffic – for now, click Allow.
// node \users\<your_username>\myprogram.js
//
// 4. Next, open a web browser, and enter the following into the address bar:
// http://localhost:8080
// In the very upper-left corner, you should see the text Hello World!
//     Right now, your computer is acting like a server.
//     Any other computer that tries to access your system on port 8080 will see the Hello World notice.
//
//     To turn off the program, switch back to PowerShell and press Ctrl+C.
//     The system will switch back to a command prompt. You can close this window whenever you are ready.

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);