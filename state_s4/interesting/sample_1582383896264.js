function main() {
const v4 = [1337,"unscopable"];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = new ArrayBuffer(1337);
// v8 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v11 = v8.slice(1024,1337);
// v11 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v13 = undefined;
const v14 = new DataView(v11,v4,v13);
// v14 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setInt16", "setUint8", "getFloat64", "getInt16", "getUint32", "getUint8", "setFloat64", "getUint16", "setFloat32", "getInt8", "setUint32", "getFloat32", "setInt32", "getInt32", "setUint16"])
function v15(v16,v17) {
    let v22 = 0;
    do {
        const v23 = 3156875969 <= "pvU0UUjoya";
        // v23 = .boolean
        let v25 = v23;
        do {
            const v26 = v14.setUint32(NaN,2454811828);
            // v26 = .undefined
            const v27 = v25 + 1;
            // v27 = .primitive
            v25 = v27;
        } while (v25 < 7);
        const v28 = v22 + 1;
        // v28 = .primitive
        const v31 = [1337,1337,1337,1337];
        // v31 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        for (const v33 in "description") {
            const v34 = v31.fill("0KER+GR*qV");
            // v34 = .undefined
        }
        v22 = v28;
    } while (v22 < 8);
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v37 = v36;
const v38 = v15(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
