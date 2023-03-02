$('body').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what + '. Welcome to this terminal.');
    }
    ,
    Wordless: function(Hated){
        this.echo('Todays hated word is: '+ Hated);
           
    }
    ,
    Commands: function(){
        this.echo('Current Commands:');
        this.echo('hello (word): Terminal will say hello to you');
        this.echo('Wordless (Hated Word Of The Day): Finds all possible Wordless solutions of given word');
        this.echo('Commands: Shows all commands for this terminal');
    }
    ,rpc: "Wordless.js" 
}, {
    greetings: 'Welcome to your terminal\nType Commands to see all commands'
});