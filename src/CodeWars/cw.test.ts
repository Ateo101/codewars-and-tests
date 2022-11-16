import {zeroFuel} from "./cw";

test ('is it possible to get to the pump?', () => {
    // data
    const distanceToPump = 50;
    const mpg = 25;
    const fuelLeft = 2;

    //action
    const result = zeroFuel(distanceToPump, mpg, fuelLeft);

    //expected result
    expect(result).toBe(true)
})
