function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v9 = v6.slice(1024,1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v11 = undefined;
const v12 = new DataView(v9,v2,v11);
// v12 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "__proto__", "byteLength"], withMethods: ["getUint8", "getInt8", "getInt32", "setInt16", "setFloat32", "getFloat64", "getUint32", "setInt32", "getInt16", "setUint8", "getUint16", "setUint32", "setInt8", "setUint16", "getFloat32", "setFloat64"])
function v14(v15,v16) {
    const v21 = [1337,1337];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    function v22(v23,v24) {
        const v26 = Object.is(v21,v23);
        // v26 = .boolean
        const v28 = 3156875969 | v26;
        // v28 = .integer
        let v30 = -2;
        while (v30 < 1337) {
            const v31 = v30 + 1;
            // v31 = .primitive
            v30 = v31;
        }
    }
    const v33 = [1337];
    // v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v34 = v33;
    const v35 = v22(v34);
    // v35 = .unknown
    let v38 = 0;
    do {
        const v39 = 3156875969 === "pvU0UUjoya";
        // v39 = .boolean
        let v41 = v39;
        const v42 = v12.getUint16(0,2454811828);
        // v42 = .integer
        let v44 = v42;
        const v45 = !v44;
        // v45 = .boolean
        v44 = v45;
        const v46 = v38 + 1;
        // v46 = .primitive
        for (const v48 in "description") {
        }
        v38 = v46;
    } while (v38 < 8);
}
const v50 = [1337];
// v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v51 = v50;
const v52 = v14(v51);
// v52 = .unknown
const v53 = v14();
// v53 = .unknown
const v54 = v14(1337);
// v54 = .unknown
}
%NeverOptimizeFunction(main);
main();
