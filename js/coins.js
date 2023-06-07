class Coins {
  constructor(x, y, width, height) {
    this.ctx = canvas.getContext("2d");
    this.coinXpos = x;
    this.coinYpos = y;
    this.coinWidth = width;
    this.coinHeight = height;

    this.coinImage = new Image();
    this.coinImage.src = "Images/coin.png";
  }

  drawCoin() {
    this.ctx.drawImage(
      this.coinImage,
      this.coinXpos,
      this.coinYpos,
      this.coinWidth,
      this.coinHeight
    );
  }
}
