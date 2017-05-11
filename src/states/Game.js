/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

import Doge from '../objects/Doge'

export default class Game extends Phaser.State {

  create() {
    this.game.stage.backgroundColor = '#f9fffd'

    const { centerX: x, centerY: y } = this.world
    const doge = new Doge(this.game, x/2, y)
    this.add.existing(doge)

    this.game.debug.text('Don\'t fly to close to sun', 20, 20)

    let space = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR)
    let right = this.game.input.keyboard.addKey(Phaser.KeyCode.RIGHT)
    let left = this.game.input.keyboard.addKey(Phaser.KeyCode.LEFT)
    space.onDown.add(() => doge.flyDogeFly())
    right.onDown.add(() => doge.turnRight())
    left.onDown.add(() => doge.turnLeft())


  }

}
