function bullets(game) {

    this.bullet = game
    this.color = '#DC1ABE'
    this.x = game.player.x;
    this.y = game.player.y;
    this.vx = game.player.dx*10;
    this.vy = game.player.dy*10;
    this.bulletH = 10;
    this.bulletW = 10;
    this.cargador = [];
    this._speedX = Math.cos(((this.bullet.player.angle*-5.425)*Math.PI)/180)*12
    this._speedY = Math.sin(((this.bullet.player.angle*-5.425)*Math.PI)/180)*12
    this.img = new Image();
    this.img.src = './images/superbala.png'
    this.audio = new Audio('./sonido/laser (mp3cut.net).mp3')
}


bullets.prototype.draw = function () {

    this.bullet.ctx.save();
    this.bullet.ctx.beginPath();
    this.bullet.ctx.fillStyle = this.color
    /* this.bullet.ctx.fillRect(this.x, this.y, this.bulletW, this.bulletH, true); */
    this.bullet.ctx.drawImage(this.img, this.x, this.y , this.bulletW, this.bulletH )
    this.bullet.ctx.closePath();
    this.x += this._speedX;
    this.y += this._speedY;
}

bullets.prototype.creation = function () {


        this.cargador.push(new bullets(this.bullet));
        this.audio.play();

}


bullets.prototype.fire = function (){

    if (this.cargador.length > 0){
         for (var j = 0; j < this.cargador.length; j++){
        
            this.cargador[j].draw();

            if(this.cargador[j].x>1200 || this.cargador[j].y>600){
                this.cargador.splice(j,1);
            }

            if (this.cargador[j].x<0 || this.cargador[j].y<0){

                this.cargador.splice(j,1);
            }
  
        }
    }
}


