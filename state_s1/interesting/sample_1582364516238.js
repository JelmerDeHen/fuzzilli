function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v9 = v6.slice(1024,1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v11 = undefined;
const v12 = new DataView(v9,v2,v11);
// v12 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setUint8", "setUint16", "setFloat64", "getUint16", "setInt32", "getFloat32", "setUint32", "getInt32", "getFloat64", "getInt16", "getInt8", "getUint8", "getUint32", "setInt16", "setFloat32"])
function v14(v15,v16) {
    let v21 = 0;
    do {
        const v22 = 3156875969 <= "pvU0UUjoya";
        // v22 = .boolean
        let v24 = v22;
        do {
            const v25 = v12.setInt16(0,2454811828);
            // v25 = .undefined
            const v26 = v24 + 1;
            // v26 = .primitive
            v24 = v26;
        } while (v24 < 7);
        const v27 = v21 + 1;
        // v27 = .primitive
        for (const v29 in "description") {
        }
        v21 = v27;
    } while (v21 < 6);
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v32 = v31;
const v33 = v14(v32);
// v33 = .unknown
const v34 = v14(1337,v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
