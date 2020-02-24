function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v13 = new ArrayBuffer(1337);
// v13 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v16 = v13.slice(1024,1337);
// v16 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v18 = undefined;
const v19 = new DataView(v16,v9,v18);
// v19 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setUint8", "setUint16", "setFloat64", "getUint16", "setInt32", "getFloat32", "setUint32", "getInt32", "getFloat64", "getInt16", "getInt8", "getUint8", "getUint32", "setInt16", "setFloat32"])
let v20 = 0;
let v23 = 0;
function v24(v25,v26) {
    const v27 = [13.37];
    // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
                // v38 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "constructor"])
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
        // v43 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v47 = [v43,3609309068,13.37];
        // v47 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v49 = [1337];
        // v49 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v50 = {a:3609309068,c:"undefined"};
        // v50 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "a"])
        const v51 = {e:1337,__proto__:v47,constructor:1337,a:v49,c:"undefined",valueOf:v50};
        // v51 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "__proto__", "a", "c", "constructor"])
        const v52 = v51[-2147483647];
        // v52 = .unknown
        const v54 = new Float64Array(v51);
        // v54 = .object(ofGroup: Float64Array, withProperties: ["constructor", "buffer", "__proto__", "byteOffset", "length", "byteLength"], withMethods: ["findIndex", "slice", "map", "find", "includes", "entries", "forEach", "some", "indexOf", "subarray", "reduce", "reduceRight", "fill", "join", "sort", "values", "keys", "copyWithin", "reverse", "filter", "set", "lastIndexOf", "every"])
        const v55 = v54.sort(v52);
        // v55 = .undefined
        const v56 = v24(v23,v27);
        // v56 = .unknown
    }
}
const v60 = [1337];
// v60 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v61 = v60;
const v62 = v24(v61);
// v62 = .unknown
const v63 = v24(v20,0);
// v63 = .unknown
}
%NeverOptimizeFunction(main);
main();
