function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [4096,v6,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {valueOf:13.37,c:v4,constructor:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "valueOf", "constructor"])
const v9 = {valueOf:parseInt,c:13.37,length:1337};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "length"], withMethods: ["valueOf"])
let v10 = v9;
const v13 = [1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v17 = new ArrayBuffer(1337);
// v17 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v20 = v17.slice(1024,1337);
// v20 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v22 = undefined;
const v23 = new DataView(v20,v13,v22);
// v23 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "__proto__", "byteLength"], withMethods: ["getUint8", "getInt8", "getInt32", "setInt16", "setFloat32", "getFloat64", "getUint32", "setInt32", "getInt16", "setUint8", "getUint16", "setUint32", "setInt8", "setUint16", "getFloat32", "setFloat64"])
function v25(v26,v27) {
    let v32 = 0;
    do {
        const v33 = 3156875969 === "pvU0UUjoya";
        // v33 = .boolean
        let v35 = v33;
        do {
            const v36 = v23.getUint16(0,2454811828);
            // v36 = .integer
            const v37 = v35 + 1;
            // v37 = .primitive
            v35 = v37;
            const v39 = [13.37];
            // v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v41 = "symbol"[-4294967295];
            // v41 = .unknown
            const v42 = [1337,1337,1337,1337,1337];
            // v42 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            function v43(v44,v45,v46,v47) {
                'use strict'
                return v33;
            }
        } while (v35 < 7);
        const v50 = v32 + 1;
        // v50 = .primitive
        for (const v52 in "description") {
            delete v23[9007199254740993];
            v26[856926041] = 7;
            const v53 = v52 == v52;
            // v53 = .boolean
            let v54 = v4;
            if (v53) {
                const v55 = "description"[8];
                // v55 = .unknown
                v54 = v55;
            } else {
                const v56 = (8)[0];
                // v56 = .unknown
                v54 = parseInt;
            }
            for (let v60 = 0; v60 < 4; v60++) {
                const v61 = new ArrayBuffer(0);
                // v61 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
            }
        }
        v32 = v50;
    } while (v32 < 8);
    return undefined;
}
const v63 = [1337];
// v63 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v64 = v63;
const v65 = v25(v64);
// v65 = .unknown
}
%NeverOptimizeFunction(main);
main();
