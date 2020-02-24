function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v13 = new ArrayBuffer(1337);
// v13 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v16 = v13.slice(1024,1337);
// v16 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v18 = undefined;
const v19 = new DataView(v16,v9,v18);
// v19 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setInt16", "setUint8", "getFloat64", "getInt16", "getUint32", "getUint8", "setFloat64", "getUint16", "setFloat32", "getInt8", "setUint32", "getFloat32", "setInt32", "getInt32", "setUint16"])
let v20 = 0;
let v23 = 0;
function v24(v25,v26) {
    const v27 = [13.37];
    // v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
        // v43 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v47 = [v43,3609309068,13.37];
        // v47 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v49 = [1337];
        // v49 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v50 = {a:3609309068,c:"undefined"};
        // v50 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__"])
        const v51 = {e:1337,__proto__:v47,constructor:1337,a:v49,c:"undefined",valueOf:v50};
        // v51 = .object(ofGroup: Object, withProperties: ["c", "constructor", "e", "a", "__proto__", "valueOf"])
        const v52 = v51[-2147483647];
        // v52 = .unknown
        const v54 = new Float64Array(v51);
        // v54 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
        const v55 = v54.sort(v52);
        // v55 = .undefined
        const v56 = v24(v23,v27);
        // v56 = .unknown
    }
}
const v60 = [1337];
// v60 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v61 = v60;
const v62 = v24(v61);
// v62 = .unknown
const v63 = v24(v20,0);
// v63 = .unknown
}
%NeverOptimizeFunction(main);
main();
