module.exports = {
    name: 'spam',
    description: "this is a spam command",
    execute(message, args){
        const prefix = '!';
        const msg = message.content.slice(prefix.length).split(/ +/);
        if (msg.length < 3)
        {
            message.channel.send('YOU DUMB FUCK THE FORMAT NEEDED IS !spam "Message" "Number"');
        }
        else if (/^\d+$/.test(msg[msg.length - 1])) {
            var num = parseFloat(msg[msg.length - 1]);
            var string = "";
            for (i = 1; i < msg.length - 1; i++) {
                string = string + " " + msg[i];
            }
            message.delete();
            if (num < 1000) {
                for (i = 0; i < num; i++){
                message.channel.send(string);
                }
            }
            else {
                message.channel.send('Error 423: You Have Entered A Value Greater Than 999');
            }
        }
        else {
            message.channel.send('Error 999: You Have Entered An Invalid Number');
        }
    }
}