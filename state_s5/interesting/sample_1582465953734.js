function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v13 = new ArrayBuffer(1337);
// v13 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v15 = v13.slice(1024,234126503);
// v15 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v17 = undefined;
const v18 = new DataView(v15,v2,v17);
// v18 = .object(ofGroup: DataView, withProperties: ["byteLength", "byteOffset", "__proto__", "buffer"], withMethods: ["getUint8", "setUint8", "setInt16", "setUint16", "getUint32", "setFloat32", "getInt8", "setFloat64", "getInt32", "setInt8", "getFloat32", "setInt32", "setUint32", "getInt16", "getUint16", "getFloat64"])
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
// v40 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v41 = v40;
const v42 = v20(v41);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
