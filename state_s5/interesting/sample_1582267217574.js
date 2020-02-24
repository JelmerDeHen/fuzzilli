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
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "getOwnPropertyDescriptor", "construct", "setPrototypeOf", "ownKeys", "deleteProperty"])
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
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v24 = {constructor:Uint32Array,c:v23};
// v24 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "c"])
let v27 = 0;
let v30 = 0;
}
%NeverOptimizeFunction(main);
main();
