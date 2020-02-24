function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v13 = v6.slice(1024,1337);
// v13 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v15 = undefined;
const v16 = new DataView(v13,v2,v15);
// v16 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["setUint32", "getUint16", "setUint8", "getInt16", "getInt32", "getFloat32", "setInt32", "setFloat32", "setUint16", "setFloat64", "setInt16", "getFloat64", "getUint8", "getUint32", "getInt8", "setInt8"])
function v18(v19,v20) {
    let v25 = 0;
    do {
        const v26 = 3156875969 === "pvU0UUjoya";
        // v26 = .boolean
        let v28 = v26;
        for (const v30 in "boolean") {
        }
        do {
            const v31 = v16.getInt8(0,2454811828);
            // v31 = .integer
            const v32 = v28 + 1;
            // v32 = .primitive
            let v34 = v31;
            while (v34 < 1) {
                const v35 = v34 + 1;
                // v35 = .primitive
                v34 = v35;
            }
            v28 = v32;
        } while (v28 < 7);
        const v36 = v25 + 1;
        // v36 = .primitive
        v25 = v36;
    } while (v25 < 8);
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v40 = v39;
const v41 = v18(v40);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
