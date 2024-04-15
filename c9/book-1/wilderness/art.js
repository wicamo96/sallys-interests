const logo = () => {
    console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************
 
                                                         ###
         ______                                         #o###
        /     /\     (              ______            #####o###
       /     /  \     )            /     /\          #o#\#|#/###
      /_____/----\_    (          /     /  \          ###\|/#o#
     "     "          ).         /_____/----\_         # }|{  #
    _ ___          O (:') o      "  "     "   "          }|{
   (@))_))        O ~/~~\~ o                             }|{
                   o     O                          ____/   \____
                      O`)
}

const trailBanner = () => {
    console.log('***************************************************')
    console.log('*****              T R A I L S                *****')
    console.log('***************************************************')
    console.log('')
}

const trailBreak = () => {
    console.log('TRAIL DETAILS')
    console.log('---------------------------------')
}

const riverBanner = () => {
    console.log('***************************************************')
    console.log('*****              R I V E R S                *****')
    console.log('***************************************************')
}

const riverBreak = () => {
    console.log('RIVER DETAILS:')
    console.log('---------------------------------')
}
module.exports = {
    logo, trailBanner, trailBreak, riverBanner, riverBreak
}