function main() {
let v2 = undefined;
const v5 = {length:"N0Xx92zvHQ"};
// v5 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
for (const v8 in "boolean") {
    let v11 = 0;
    let v14 = 0;
    const v15 = v14 + 1;
    // v15 = .primitive
    v14 = v15;
    let v18 = 0;
    const v19 = v18 + 1;
    // v19 = .primitive
    v18 = v19;
    const v25 = [1337];
    // v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v26 = [3156875969,3156875969,1337,Uint8Array];
    // v26 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v27 = v25;
    const v31 = {setPrototypeOf:"boolean",apply:3156875969,construct:1337,set:v26,preventExtensions:13.37,ownKeys:"boolean",getOwnPropertyDescriptor:v27,deleteProperty:13.37};
    // v31 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "set", "deleteProperty", "ownKeys", "construct", "preventExtensions", "getOwnPropertyDescriptor", "apply", "__proto__"])
    const v33 = new Proxy(Uint8Array,v31);
    // v33 = .unknown
    const v35 = {set:v33,get:v33};
    // v35 = .object(ofGroup: Object, withProperties: ["__proto__", "set", "get"])
    const v37 = Object.defineProperty(v31,"constructor",v35);
    // v37 = .undefined
    let v40 = 0;
    const v41 = v40 + 1;
    // v41 = .primitive
    v40 = v41;
    const v42 = v11 + 1;
    // v42 = .primitive
    v11 = v42;
}
}
%NeverOptimizeFunction(main);
main();
