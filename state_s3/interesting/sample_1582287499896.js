function main() {
const v2 = new ArrayBuffer(1337);
// v2 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
let v11 = 0;
do {
    const v16 = v2.slice(0,v11);
    // v16 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    let v19 = 0;
    const v21 = [13.37,13.37,13.37,13.37,13.37];
    // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v22 = v21;
    const v23 = v19 + 1;
    // v23 = .primitive
    v19 = v23;
    const v24 = v11 + 1;
    // v24 = .primitive
    v11 = v24;
} while (v11 < 8);
}
%NeverOptimizeFunction(main);
main();
