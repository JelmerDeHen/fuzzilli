function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = ["MAX_VALUE",v2];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {b:"MAX_VALUE",length:v4,c:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "b", "length"])
let v7 = v6;
const v11 = new Int8Array(30755);
// v11 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
for (let v18 = 0; v18 < 3; v18++) {
    let v21 = 0;
    while (v21 < 9) {
        const v22 = v21 % 9;
        // v22 = .number
        const v23 = v21 + 1;
        // v23 = .primitive
        v21 = v23;
    }
}
let v27 = 0;
while (v27 < 7) {
    const v28 = v27 + 1;
    // v28 = .primitive
    v27 = v28;
}
for (const v29 in "object") {
}
const v31 = v11[13.37];
// v31 = .unknown
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
let v37 = 0;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
}
%NeverOptimizeFunction(main);
main();
