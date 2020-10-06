module.exports = {
    name: 'clearspam',
    description: "this is a clear command",
    execute(message, args, client){
        message.channel.messages.fetch().then(messages => {
            const botMessages = messages.filter(msg => msg.author.bot);
            message.channel.bulkDelete(botMessages);
        }).catch(error => {
            console.log('Error while doing Bulk Delete');
            console.log(error);
        });
        message.delete();
    }
}