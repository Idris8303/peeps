const peeps = [
  { name: " Han Solo",
    type: "starwars"
  },
  {name:"Darth Vader",
  type:"starwars"
  },
  { name: "Spawk",
  type: "startrack"
  },
  {name: "Scotty",
  type:"startrack"
  },
  { name: "The Doctor",
  type: "DoctorWho"
  },
  {name: "Riversong",
  type: "DoctorWho"
  }
];

function aFunction(name){
  let starWarsCharacters = [];

  for (var i = 0; i < peeps.length; i++) {
    if(peeps[i].type === 'starwars'){
    starWarsCharacters.push(peeps[i]);
    }
  }
  return starWarsCharacters;
}

function  ST(name2) {
  let startrackCharacters = [];

  for (var i = 0; i < peeps.length; i++) {
    if(peeps[i].type === 'startrack'){
      startrackCharacters.push(peeps[i]);
    }
  }
  return startrackCharacters;
}

function DW(rose){
  let doctorWhoCharacters = [];

  for (var i = 0; i <peeps .length; i++) {
    if(peeps[i].type === 'DoctorWho'){
      doctorWhoCharacters.push(peeps[i]);
      }
  }
  return doctorWhoCharacters;
}


module.exports = {
  name: peeps,
  starWars: aFunction
}
