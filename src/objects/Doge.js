/*
 * The doge.
 */

export default class Doge extends Phaser.Sprite {

  constructor(game, x, y) {
    super(game, x, y, 'dog-wow-astronaut')
    this.scale.setTo(0.25)
    this.anchor.set(0.5)
    this.blendMode = this.blendMode.NORMAL
    game.physics.arcade.enable(this)
    this.body.collideWorldBounds = true

    this.body.gravity.y = 10
    // this.body.velocity.x = config.player.speed

    const assFire = game.add.emitter(0, 100, 1000)
    assFire.makeParticles('explosions')
    this.addChild(assFire)
    assFire.y = 100
    assFire.x = 0
    assFire.lifespan = 1000
    assFire.maxParticleSpeed = new Phaser.Point(-100, 50)
    assFire.minParticleSpeed = new Phaser.Point(-200, -100)
    this.assFire = assFire
  }

  update() {
    this.rotation = this.game.physics.arcade.angleToPointer(this)
    if (this.game.input.activePointer.isDown) {
      this.game.physics.arcade.accelerateToPointer(this)

      this.body.drag.setTo(0, 0)

      // emit a single particle every frame that the mouse is down
      this.assFire.emitParticle()

    } else {
      this.body.acceleration.set(0, 0)
      this.body.drag.setTo(25, 25)
    }

  }

  flyDogeFly() {
    this.body.velocity.y = -100
  }

  turnRight() {
    this.angle += 2
  }

  turnLeft() {
    this.angle -= 2
  }


}
