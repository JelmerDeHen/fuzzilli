function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = new ArrayBuffer(1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v11 = v9.slice(1024,234126503);
// v11 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v13 = undefined;
const v14 = new DataView(v11,v2,v13);
// v14 = .object(ofGroup: DataView, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["setInt32", "getFloat32", "getFloat64", "setInt8", "getUint32", "setInt16", "getUint16", "getInt8", "getUint8", "setFloat64", "getInt32", "setUint8", "getInt16", "setUint32", "setUint16", "setFloat32"])
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
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v34 = v33;
const v35 = v16(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
