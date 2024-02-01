// code your solution here
function saturdayFun(activity){
    // const a = `This Saturday, I want to `
    if(activity === null || activity === undefined){
        switch (activity){
            case activity:
                return 'This Saturday, I want to roller-skate!';
        }
    }
    else{
        return `This Saturday, I want to ${activity}!`;
    }
}
saturdayFun(activity)

function mondayWork(activity){
    if(activity === null || activity === undefined){
        switch (activity){
            case activity:
                return 'This Monday, I will go to the office.';
        }
    }
    else{
        return `This Monday, I will work from home.`;
    }
}
mondayWork(activity)

function wrapAdjective(string = "*"){
    const innerF = function (def = "special"){
        return `You are ${string}${def}${string}!`
    }
   return innerF 
}
