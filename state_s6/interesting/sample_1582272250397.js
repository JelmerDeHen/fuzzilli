function main() {
const v4 = {length:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v5 = {constructor:13.37,length:13.37,__proto__:v4,toString:Number,a:"N0Xx92zvHQ"};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__", "a"], withMethods: ["toString"])
let v6 = v5;
const v7 = {};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {isExtensible:Number};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible"])
const v11 = new Proxy(v6,v9);
// v11 = .unknown
let v12 = "species";
const v13 = new Proxy(v7,Reflect);
// v13 = .unknown
v12 = v13;
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
for (const v17 in "boolean") {
    let v20 = 0;
    const v23 = [1337];
    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v24 = v23;
    let v26 = undefined;
    v12[7] = v15;
    let v30 = 0;
    const v31 = v30 + 1;
    // v31 = .primitive
    v30 = v31;
    const v32 = v20 + 1;
    // v32 = .primitive
    v20 = v32;
}
}
%NeverOptimizeFunction(main);
main();
