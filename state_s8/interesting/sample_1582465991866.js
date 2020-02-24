function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v13 = new ArrayBuffer(1337);
// v13 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v15 = v13.slice(1024,234126503);
// v15 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v17 = undefined;
const v18 = new DataView(v15,v2,v17);
// v18 = .object(ofGroup: DataView, withProperties: ["__proto__", "byteLength", "byteOffset", "buffer"], withMethods: ["getInt32", "setUint8", "getUint16", "getFloat32", "getUint8", "setFloat32", "setInt32", "setFloat64", "getInt16", "getFloat64", "setUint32", "setInt8", "setInt16", "getInt8", "getUint32", "setUint16"])
function v20(v21,v22) {
    let v26 = 0;
    do {
        const v27 = 3156875969 === -268435456;
        // v27 = .boolean
        let v29 = v27;
        do {
            const v30 = v18.getInt8(0,2454811828);
            // v30 = .integer
            const v31 = v29 + 1;
            // v31 = .primitive
            const v33 = "string".indexOf(v30,v30);
            // v33 = .integer
            let v34 = v30;
            const v35 = 8 + 1;
            // v35 = .primitive
            v34 = v35;
            v29 = v31;
        } while (v29 < 7);
        const v36 = v26 + 1;
        // v36 = .primitive
        for (const v38 in "description") {
        }
        v26 = v36;
    } while (v26 < 8);
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v41 = v40;
const v42 = v20(v41);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
