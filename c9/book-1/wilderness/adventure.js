const { riverInfo } = require("./riverInfo.js")

const { logo, trailBanner, riverBanner} = require("./art.js")

const { trailInfo } = require("./trailInfo.js")

logo()
trailBanner()

trailInfo()

riverBanner()
console.log('')

riverInfo()