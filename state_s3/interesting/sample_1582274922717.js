function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [13.37,Object,v6,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {a:"object",b:v6,__proto__:13.37,d:v4};
// v8 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "d", "b"])
const v9 = {length:v6,a:v7,valueOf:13.37,d:"object",constructor:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "d", "constructor", "length", "__proto__"])
let v10 = Object;
function v15(v16,v17) {
    let v20 = 0;
    const v23 = [13.37,13.37,13.37];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v24 = v23[Function];
    // v24 = .unknown
    const v26 = Function(v24);
    // v26 = .unknown
    for (const v28 in v9) {
        const v30 = {set:v10,get:Object};
        // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v32 = Object.defineProperty(Object,-128,v30);
        // v32 = .undefined
    }
    const v34 = [13.37,13.37,13.37,13.37,13.37];
    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v35 = v34;
    let v37 = 3156875969;
    const v39 = gc();
    // v39 = .undefined
    let v41 = 635647037;
    const v43 = new Int8Array(v41);
    // v43 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
    const v44 = v26(3,v35,v37);
    // v44 = .unknown
    do {
        let v47 = 0;
        do {
            const v48 = v47 + 1;
            // v48 = .primitive
            const v49 = {constructor:3156875969,...v48,...8};
            // v49 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
            v47 = v48;
        } while (v47 < 7);
        const v52 = v20 + 1;
        // v52 = .primitive
        v20 = v52;
    } while (v20 < 8);
    return 0;
}
const v54 = [1337];
// v54 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v55 = v54;
const v56 = v15(v55);
// v56 = .unknown
const v57 = v15(1024,4.0);
// v57 = .unknown
const v58 = v15(v57,v55);
// v58 = .unknown
}
%NeverOptimizeFunction(main);
main();
