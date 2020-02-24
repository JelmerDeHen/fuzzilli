function main() {
const v2 = new Uint32Array(27576);
// v2 = .object(ofGroup: Uint32Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["lastIndexOf", "slice", "keys", "map", "sort", "indexOf", "set", "join", "forEach", "reverse", "filter", "fill", "reduce", "every", "values", "copyWithin", "entries", "some", "subarray", "find", "findIndex", "includes", "reduceRight"])
function v6(v7,v8) {
    const v11 = v2.length;
    // v11 = .integer
    let v12 = 0;
    do {
        let v15 = 0;
        do {
            const v16 = v15 + 1;
            // v16 = .primitive
            const v17 = {constructor:3156875969,...v16,...8};
            // v17 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
            v15 = v16;
        } while (v15 < 7);
        const v18 = v12 + 1;
        // v18 = .primitive
        v12 = v18;
    } while (v12 < 8);
    return v11;
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v21 = v20;
const v22 = v6(v21);
// v22 = .unknown
const v23 = v6(1024,4.0);
// v23 = .unknown
const v24 = v6(v23,v21);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
