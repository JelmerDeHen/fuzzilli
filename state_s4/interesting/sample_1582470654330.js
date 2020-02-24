function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = new ArrayBuffer(1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v11 = v9.slice(1024,234126503);
// v11 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v13 = undefined;
const v14 = new DataView(v11,v2,v13);
// v14 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setInt16", "setUint8", "getFloat64", "getInt16", "getUint32", "getUint8", "setFloat64", "getUint16", "setFloat32", "getInt8", "setUint32", "getFloat32", "setInt32", "getInt32", "setUint16"])
function v16(v17,v18) {
    let v22 = 0;
    do {
        const v23 = 3156875969 === -268435456;
        // v23 = .boolean
        let v25 = v23;
        do {
            const v26 = v14.getInt16(0,2454811828);
            // v26 = .integer
            const v27 = v25 + 1;
            // v27 = .primitive
            const v28 = "string".indexOf(v26,v26);
            // v28 = .integer
            v25 = v27;
        } while (v25 < 7);
        const v29 = v22 + 1;
        // v29 = .primitive
        for (const v31 in "description") {
        }
        v22 = v29;
    } while (v22 < 8);
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v34 = v33;
const v35 = v16(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
