function getCalibration(calibrations) {
    const total = 0
    calibrations.forEach(val => {
        //remove strings from arr
        let numArr = []
        let strArr = []
        console.log("val is: ", val)
        let i = val.length;
        [...val].forEach(c => {
            if(isNaN(c) === true){
                console.log("String Found", c)
                strArr.push(c)
            } else {
                console.log("number found: ", c)
                numArr.push(c)
            }
        })
        console.log("Only numbers is now: ", numArr)
        console.log("Only characters is now: ", strArr)
        
        //get first and last in numArr 
        

    });
}

const mock = ["1asda3d3", "2dasf3", "dda2sdas2"]

getCalibration(mock)