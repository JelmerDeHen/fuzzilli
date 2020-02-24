function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v7 = 0;
function v8(v9,v10,v11,v12,...v13) {
    const v14 = v12 < v12;
    // v14 = .boolean
}
const v21 = v7 + 1;
// v21 = .primitive
v7 = v21;
const v23 = [1337,1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v27 = new ArrayBuffer(1337);
// v27 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v30 = v27.slice(1024,1337);
// v30 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v32 = undefined;
const v33 = new DataView(v30,v23,v32);
// v33 = .object(ofGroup: DataView, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["setInt32", "getFloat32", "getFloat64", "setInt8", "getUint32", "setInt16", "getUint16", "getInt8", "getUint8", "setFloat64", "getInt32", "setUint8", "getInt16", "setUint32", "setUint16", "setFloat32"])
function v34(v35,v36) {
    for (let v40 = 0; v40 < 10; v40++) {
        let v43 = 0;
        while (v43 < 9) {
            let v46 = 0;
            do {
                const v47 = v46 + 1;
                // v47 = .primitive
                const v48 = v35 % 0;
                // v48 = .number
                v43 = v47;
                const v49 = v33.getInt32(v36);
                // v49 = .integer
                v46 = v47;
            } while (v46 < 10);
        }
    }
    let v54 = 0;
    let v57 = -2;
    const v58 = v57 + 1;
    // v58 = .primitive
    v57 = v58;
    const v59 = 3156875969 <= "pvU0UUjoya";
    // v59 = .boolean
    let v61 = v59;
    const v62 = v61 + 1;
    // v62 = .primitive
    v61 = v62;
    const v63 = v54 + 1;
    // v63 = .primitive
    v54 = v63;
}
const v65 = [1337];
// v65 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v66 = v65;
const v67 = v34(v66);
// v67 = .unknown
}
%NeverOptimizeFunction(main);
main();
