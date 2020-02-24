function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [v4,13.37,Boolean,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {__proto__:Boolean,valueOf:v6,e:v4,d:1337,b:v4};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "d", "e"], withMethods: ["__proto__"])
const v9 = {constructor:v6};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
let v10 = 1075001128;
const v13 = new Uint32Array(27576);
// v13 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
const v17 = [1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v18 = ["e",3999259790,v17];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v23(v24,v25) {
    const v29 = [3156875969,3156875969,1337,DataView];
    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v32 = v13.length;
    // v32 = .integer
    v29[8] = Int16Array;
    const v33 = v29.includes(v18);
    // v33 = .boolean
    let v34 = 0;
    do {
        let v37 = 0;
        do {
            const v38 = v37 + 1;
            // v38 = .primitive
            const v39 = {constructor:3156875969,...v38,...8};
            // v39 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
            v37 = v38;
        } while (v37 < 7);
        const v40 = v34 + 1;
        // v40 = .primitive
        v34 = v40;
    } while (v34 < 8);
    return 3156875969;
}
const v42 = [1337];
// v42 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v43 = v42;
const v44 = v23(v43);
// v44 = .unknown
const v45 = v23(1024,4.0);
// v45 = .unknown
const v46 = v23(v45,v43);
// v46 = .unknown
const v47 = typeof v43;
// v47 = .string
const v49 = v47 === "number";
// v49 = .boolean
const v50 = v17[149017330];
// v50 = .unknown
const v52 = [13.37];
// v52 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v55 = 0;
while (v55 < 2) {
    const v56 = v45[v50];
    // v56 = .unknown
    const v57 = v55 + 1;
    // v57 = .primitive
    v55 = v57;
}
}
%NeverOptimizeFunction(main);
main();
