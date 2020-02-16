const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
      browser.url('https://uwnrg.org/about-us')
      const titleAbout = browser.getTitle()
      assert.strictEqual(titleAbout, 'About Us - Nanorobotics Group')

      browser.url('https://uwnrg.org/maya')
      const titleMaya = browser.getTitle()
      assert.strictEqual(titleMaya, 'MAYA - Nanorobotics Group')

      browser.url('https://uwnrg.org/vision')
      const titleVision = browser.getTitle()
      assert.strictEqual(titleVision, 'Vision - Nanorobotics Group')

      browser.url('https://uwnrg.org/nims')
      const titleNims = browser.getTitle()
      assert.strictEqual(titleNims, 'NIMS - Nanorobotics Group')

      browser.url('https://uwnrg.org/our-sponsors')
      const titleSponsor = browser.getTitle()
      assert.strictEqual(titleSponsor, 'Our Sponsors - Nanorobotics Group')

      browser.url('https://uwnrg.org/contact-us-2')
      const titleContact = browser.getTitle()
      assert.strictEqual(titleContact, 'Contact Us - Nanorobotics Group')


    })
})

