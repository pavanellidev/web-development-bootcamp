function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
   this.yearsOfExperience = yearsOfExperience
   this.name = name
   this.cleaningRepertoire = cleaningRepertoire
   this.clean = function() {
      alert('Cleaning in progress...')
   }
}  

let houseKeeper1 = new HouseKeeper (12, "Jane", ['Bathroom', 'Lobby', 'Bedroom'])

console.log(houseKeeper1.clean())