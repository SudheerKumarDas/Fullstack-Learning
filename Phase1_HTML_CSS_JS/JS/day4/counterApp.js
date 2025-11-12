function counterApp(){
    let count = 0;
    return{
        increment : function(){
            count++;
            console.log("Count ",count);
        },
        getCount : function(){
            return count;
        },
        reset : function(){
            count = 0;
            console.log("Count Reset to 0");
        }
    };
}

function delayAction(action, delay, callback){
    console.log(`⏳ Waiting ${delay / 1000} seconds...`);
    setTimeout(()=>{
        action();
        callback();
    },delay);
}

const counter = counterApp();

function afterIncrement(){
    console.log("✅ Increment complete. Current count:", counter.getCount());
}
function afterReset() {
  console.log("🔄 Counter has been reset. Ready to start again.");
}

// simulate actions with delays
delayAction(counter.increment, 2000, afterIncrement); // waits 2s then increments
delayAction(counter.increment, 4000, afterIncrement); // waits 4s then increments again
delayAction(counter.reset, 6000, afterReset);         // waits 6s then resets