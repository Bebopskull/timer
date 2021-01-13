
///takes the arvgs imput
let beeps = process.argv.slice(2);
///set the timer function
const timer = function(){

  ///slice the arvgs input
  let cue = beeps[0];
  ////set the callback function to be passed to the loop through the input array
  let setTimes = (n, cue) =>{
    ///executes the setTimeout only if the input value is number and bigger||equal than 0
    if(cue >= 0 || cue===Number){
      setTimeout( () => {
        process.stdout.write('\x07 🔔 ');
        // console.log('\x07 🔔  \n')
      }, cue);
    }
  }

  // setTimes(beeps);
  ///loop trhough the inputs and feed them to the setTimes function
  for(let b in beeps ){
    // multiplies the number input for 1k to make it seconds relative.
    let cue = beeps[b]*1000;
    ///call the setTimes function for each number in the input array
    setTimes(b,cue);
  }
};
//let's call the function and pass it the input array
timer(beeps)