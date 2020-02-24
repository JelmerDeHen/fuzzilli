function main() {
const v1 = {b:1337,__proto__:1337};
// v1 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v3 = {length:isFinite};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v6 = [1337,v3,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v7(v8,v9) {
    let v11 = this;
    let v12 = v11;
    const v15 = new Proxy(v12,Object);
    // v15 = .unknown
    const v16 = Object.freeze(v15);
    // v16 = .undefined
    const v19 = [1337,1337,1337,1337,1337];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v20 = [1337,Object,v19];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v24 = [v20,-1541279359,-384261.2072134111];
    // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v27 = 0;
    while (v27 < 1337) {
        const v28 = v27 + 1;
        // v28 = .primitive
        v27 = v28;
    }
    const v29 = new Uint16Array(v24);
    // v29 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
}
const v30 = v6.forEach(v7,"eeeRbEqfAO");
// v30 = .undefined
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
let v37 = 0;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
const v39 = v7(v1,v37);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
