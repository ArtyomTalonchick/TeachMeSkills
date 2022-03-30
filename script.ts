




// const f = (value: string|number): string|number => {
//     console.log("f - ", value);
//     return value;
// }
  
// const x: number = f(10)



// T = string
// T = number
const f = <T>(value: T): T=> {
    const valueCopy:T = value;
    console.log("f - ", value);
    return value;
}
  
const x:number = f<number>(10);