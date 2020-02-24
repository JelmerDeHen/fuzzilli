function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v13 = new ArrayBuffer(1337);
// v13 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v16 = v13.slice(1024,1337);
// v16 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v18 = undefined;
const v19 = new DataView(v16,v9,v18);
// v19 = .object(ofGroup: DataView, withProperties: ["byteOffset", "byteLength", "__proto__", "buffer"], withMethods: ["getInt16", "getUint32", "setFloat32", "getUint8", "setUint8", "setInt8", "setInt32", "setFloat64", "getUint16", "getInt32", "getFloat64", "setInt16", "setUint16", "setUint32", "getFloat32", "getInt8"])
let v20 = 0;
let v23 = 0;
function v24(v25,v26) {
    const v27 = [13.37];
    // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v31 = "pvU0UUjoya".__proto__;
    // v31 = .object()
    let v33 = 0;
    do {
        const v34 = 3156875969 <= "pvU0UUjoya";
        // v34 = .boolean
        let v36 = v34;
        do {
            let v37 = v31;
            try {
                const v38 = {constructor:v25,__proto__:v36,c:v19};
                // v38 = .object(ofGroup: Object, withProperties: ["c", "constructor", "__proto__"])
            } catch(v39) {
                v39[v37] = v24;
            }
            const v40 = v36 + 1;
            // v40 = .primitive
            v36 = v40;
        } while (v36 < 7);
        const v41 = v33 + 1;
        // v41 = .primitive
        v33 = v41;
    } while (v33 < 8);
    if (v26) {
    } else {
        const v43 = [1337];
        // v43 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v47 = [v43,3609309068,13.37];
        // v47 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v49 = [1337];
        // v49 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v50 = {a:3609309068,c:"undefined"};
        // v50 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "a"])
        const v51 = {e:1337,__proto__:v47,constructor:1337,a:v49,c:"undefined",valueOf:v50};
        // v51 = .object(ofGroup: Object, withProperties: ["c", "e", "valueOf", "a", "__proto__", "constructor"])
        const v52 = v51[-2147483647];
        // v52 = .unknown
        const v54 = new Float64Array(v51);
        // v54 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
        const v55 = v54.sort(v52);
        // v55 = .undefined
        const v56 = v24(v23,v27);
        // v56 = .unknown
    }
}
const v60 = [1337];
// v60 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v61 = v60;
const v62 = v24(v61);
// v62 = .unknown
const v63 = v24(v20,0);
// v63 = .unknown
}
%NeverOptimizeFunction(main);
main();
