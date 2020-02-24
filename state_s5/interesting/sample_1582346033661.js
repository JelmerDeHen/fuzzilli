function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v9 = v6.slice(1024,1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v11 = undefined;
const v12 = new DataView(v9,v2,v11);
// v12 = .object(ofGroup: DataView, withProperties: ["byteLength", "byteOffset", "__proto__", "buffer"], withMethods: ["getUint8", "setUint8", "setInt16", "setUint16", "getUint32", "setFloat32", "getInt8", "setFloat64", "getInt32", "setInt8", "getFloat32", "setInt32", "setUint32", "getInt16", "getUint16", "getFloat64"])
function v14(v15,v16) {
    let v21 = 0;
    do {
        const v22 = 3156875969 <= "pvU0UUjoya";
        // v22 = .boolean
        let v24 = v22;
        do {
            const v25 = v12.setUint32(0,2454811828);
            // v25 = .undefined
            const v26 = v24 + 1;
            // v26 = .primitive
            v24 = v26;
        } while (v24 < 7);
        const v27 = v21 + 1;
        // v27 = .primitive
        const v30 = [1337,1337,1337,1337];
        // v30 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        for (const v32 in "description") {
            const v33 = v30.fill("0KER+GR*qV");
            // v33 = .undefined
        }
        v21 = v27;
    } while (v21 < 8);
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v36 = v35;
const v37 = v14(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
