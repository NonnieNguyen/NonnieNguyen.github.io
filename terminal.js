$('body').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +
                  '. Wellcome to this terminal.');
    },
    info: function(){
        this.echo(about-me.innerHTML);
    },
    acknowledgement:function(){
        this.echo(acknowledgement.innerHTML);
    },
    help:function(){
        this.echo(commands.innerHTML);
    }

}, {
    greetings: greetings.innerHTML,
});