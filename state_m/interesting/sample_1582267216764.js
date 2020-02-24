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
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "getOwnPropertyDescriptor", "construct", "apply", "ownKeys", "deleteProperty"])
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
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v24 = {constructor:Uint32Array,c:v23};
// v24 = .object(ofGroup: Object, withProperties: ["c", "constructor", "__proto__"])
let v27 = 0;
let v30 = 0;
}
%NeverOptimizeFunction(main);
main();
