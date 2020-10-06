const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Yehaw is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'spam'){
        client.commands.get('spam').execute(message, args);
    } 
    else if(command === 'clearspam'){
        client.commands.get('clearspam').execute(message, args, client);
    } 
});

client.login('NzYyODIyNDQzMjczOTQ1MTA4.X3uvww.6Pbbbkdy00HNJCq8vg2NFNjrb8A');