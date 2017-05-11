/*
 * `assets` module
 * ===============
 *
 * Declares static asset packs to be loaded using the `Phaser.Loader#pack`
 * method. Use this module to declare game assets.
 */

export default {
  // -- Splash screen assets used by the Preloader.
  boot: [{
    key: 'splash-screen',
    type: 'image'
  }, {
    key: 'progress-bar',
    type: 'image'
  }],

  // -- General assets used throughout the game.
  game: [
    {
      key: 'starfield',
      type: 'image'
    },
    {
      key: 'dog-wow-astronaut',
      type: 'image'
    },
    {
      key: 'fire1',
      type: 'image'
    },
    {
      key: 'fire2',
      type: 'image'
    },
    {
      key: 'fire3',
      type: 'image'
    },
    {
      key: 'smoke-puff',
      type: 'image'
    },

  ]
}
