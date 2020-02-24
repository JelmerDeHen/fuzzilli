function main() {
const v6 = Object[3];
// v6 = .unknown
let v9 = 0;
let v10 = 0;
try {
    v10 = v6;
} catch(v11) {
    let v14 = 0;
    const v15 = {getOwnPropertyDescriptor:v11,setPrototypeOf:Array,getPrototypeOf:Array};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "getOwnPropertyDescriptor"], withMethods: ["setPrototypeOf", "getPrototypeOf"])
    const v17 = Proxy(v10,v15);
    // v17 = .unknown
    const v18 = v14 + 1;
    // v18 = .primitive
    v14 = v18;
    v10 = v14;
}
const v19 = v9 + 1;
// v19 = .primitive
v9 = v19;
const v20 = gc();
// v20 = .undefined
}
%NeverOptimizeFunction(main);
main();
