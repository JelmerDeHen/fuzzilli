function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v9 = v6.slice(1024,1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v11 = undefined;
const v12 = new DataView(v9,v2,v11);
// v12 = .object(ofGroup: DataView, withProperties: ["byteOffset", "byteLength", "__proto__", "buffer"], withMethods: ["getInt16", "getUint32", "setFloat32", "getUint8", "setUint8", "setInt8", "setInt32", "setFloat64", "getUint16", "getInt32", "getFloat64", "setInt16", "setUint16", "setUint32", "getFloat32", "getInt8"])
function v14(v15,v16) {
    const v21 = [1337,1337];
    // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
    // v33 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
// v50 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
