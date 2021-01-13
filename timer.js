
// console.log(`🔔🔔🔔🔔`)
let beeps = process.argv.slice(2);

const timer = function(){
  let cue = beeps[0];
  let setTimes = (n, cue) =>{
    if(cue > 0 || cue===Number){
      setTimeout( () => {
        process.stdout.write('\x07 🔔  \n');
        // console.log('\x07 🔔  \n')
      }, cue);
    }
  }

  // setTimes(beeps);

  for(let b in beeps ){
    
    let cue = beeps[b]*1000;
    setTimes(b,cue);
  }
};

timer(beeps)