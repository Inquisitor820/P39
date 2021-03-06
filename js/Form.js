class Form {

  constructor() {
    this.input = createInput("Enter Name");
    this.button = createButton('Ready!');
    this.greeting = createElement('h1');
    this.greeting2 = createElement('h2');
    this.title= createElement('h1');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.greeting2.hide();
  }

  display(){
    background(137,171,227)
    var title = createElement('h1')
    title.html("BLACK SPEEDER");
    title.position((displayWidth/2)-85,0);
    
    this.input.position((displayWidth/2)-40, (displayHeight/2)-80);
    this.button.position((displayWidth/2)+20, displayHeight/2-40);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      
      this.greeting.html("Welcome to Black Speeder " + player.name + "! Please Press F11.");
      this.greeting.position((displayWidth/2-260), displayHeight/3);

      this.greeting2.html("Waiting for all players to join...");
      this.greeting2.position((diplayWidth/2)-240, (displayHeight/2));
    });

  }
}
