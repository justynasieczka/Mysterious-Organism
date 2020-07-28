// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

//console.log(returnRandBase());

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//console.log(mockUpStrand());

//3-4
const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    DNA: array,

    mutate() {
      let index = Math.floor(Math.random() * 15);
      let x = this.DNA[index];
      let y = '';
      do {
        y = returnRandBase();
      } while (x === y);
      if (x !== y) {
        this.DNA.splice(index, 1, y);
      }
      return this.DNA;
     },

//5
    compareDNA(obj) {
      let match = 0
      for (i = 0; i < this.DNA.length; i++) {
        if (this.DNA[i] === obj.DNA[i]) {
          match++;
        }
      }
      let percent = (match/obj.DNA.length * 100).toFixed(2);
      return `The two DNA strands have ${percent}% DNA in common.`
    },

//6
    willLikelySurvive(obj) {
      let match = 0
      for (i=0; i < this.DNA.length; i++) {
        if (this.DNA[i] === 'C' || this.DNA[i] === 'G') {
          match++
        }
      }
      let percent = match/this.DNA.length * 100;
      if (percent < 60) {
        return false;
      } else {
        return true;
      }
    },

//9
    complementStrand() {
      let obj1 = [];
      let obj2 = this.DNA;
      for (i=0; i < this.DNA.length; i++) {
        if (obj2[i] === 'A') {
          obj1.push('T');
        } else if (obj2[i] === 'T') {
          obj1.push('A');
        } else if (obj2[i] === 'G') {
          obj1.push('C');
        } else if (obj2[i] === 'C') {
          obj1.push('G');
        }
      };
      return obj1;
    }
   }
  };

//test

let species1 = pAequorFactory(1, mockUpStrand());
console.log(species1.DNA)
//species1.mutate();
species1.complementStrand();
console.log(species1.complementStrand());

//let species2 = pAequorFactory(2, mockUpStrand());
//console.log(species2.DNA)
//species2.mutate();

//console.log(species1.compareDNA(species2));


//7
/*
const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)
*/
