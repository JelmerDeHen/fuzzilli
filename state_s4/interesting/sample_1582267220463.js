function main() {
try {
    let v5 = 0;
    let v8 = 0;
    const v9 = v8 + 1;
    // v9 = .primitive
    v8 = v9;
    const v10 = v5 + 1;
    // v10 = .primitive
    v5 = v10;
    const v11 = {deleteProperty:eval,setPrototypeOf:eval,apply:eval,construct:eval,ownKeys:eval,getOwnPropertyDescriptor:eval};
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "construct", "apply", "getOwnPropertyDescriptor", "ownKeys", "setPrototypeOf"])
    const v13 = new Proxy(JSON,v11);
    // v13 = .unknown
    v13.toString = v13;
} catch(v14) {
    let v17 = 0;
    const v18 = v17 + 1;
    // v18 = .primitive
    v17 = v18;
}
const v23 = ["c",1337,3488870410];
// v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v24 = {constructor:Uint32Array,c:v23};
// v24 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "constructor"])
let v27 = 0;
let v30 = 0;
}
%NeverOptimizeFunction(main);
main();
