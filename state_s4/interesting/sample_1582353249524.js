function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = new ArrayBuffer(1337);
// v8 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v11 = v8.slice(1024,1337);
// v11 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v13 = undefined;
const v14 = new DataView(v11,v4,v13);
// v14 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setInt16", "setUint8", "getFloat64", "getInt16", "getUint32", "getUint8", "setFloat64", "getUint16", "setFloat32", "getInt8", "setUint32", "getFloat32", "setInt32", "getInt32", "setUint16"])
function v15(v16,v17) {
    let v21 = 0;
    for (const v23 of v1) {
    }
    let v25 = -2;
    while (v25 < 1337) {
        const v26 = v25 + 1;
        // v26 = .primitive
        v25 = v26;
    }
    do {
        const v27 = 3156875969 <= 8;
        // v27 = .boolean
        let v29 = v27;
        do {
            const v30 = v14.getInt16(v29,2454811828);
            // v30 = .integer
            const v31 = v29 + 1;
            // v31 = .primitive
            v29 = v31;
        } while (v29 < 7);
        const v32 = v21 + 1;
        // v32 = .primitive
        v21 = v32;
    } while (v21 < 8);
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v35 = v34;
const v36 = v15(v35);
// v36 = .unknown
const v37 = v15(v4);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
