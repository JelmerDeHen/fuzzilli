function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1337,Promise];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {constructor:-4294967295,__proto__:v4,toString:-4294967295,d:-4294967295,length:v4,a:-4294967295};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "d", "length", "a", "constructor"])
const v9 = {e:-4294967295,b:Promise,d:13.37,toString:1337,constructor:v6,__proto__:Promise};
// v9 = .object(ofGroup: Object, withProperties: ["b", "e", "toString", "constructor", "__proto__", "d"])
let v12 = 0;
do {
    const v15 = new Int8Array(20625);
    // v15 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
    const v16 = v12 + 1;
    // v16 = .primitive
    v12 = v16;
} while (v12 < 1);
function v17(v18,v19,v20) {
    const v21 = v8.__proto__;
    // v21 = .object()
    return v21;
}
const v22 = typeof -4294967295;
// v22 = .string
const v24 = v22 === "boolean";
// v24 = .boolean
const v25 = {e:13.37,valueOf:v4,__proto__:v6,toString:v6,a:v4,d:v4};
// v25 = .object(ofGroup: Object, withProperties: ["toString", "a", "valueOf", "__proto__", "e", "d"])
let v26 = v7;
try {
    const v29 = Int16Array(v8);
    // v29 = .unknown
} catch(v30) {
    let v33 = 0;
    const v34 = v33 + 1;
    // v34 = .primitive
    v33 = v34;
}
const v35 = v6.includes();
// v35 = .boolean
const v36 = [v25,v6,Int16Array,1337];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
v12 = v25;
let v39 = 0;
while (v39 < 5) {
    for (const v40 of v6) {
        let v43 = 0;
        do {
            for (let v47 = 0; v47 < 8; v47++) {
                const v48 = v4.shift();
                // v48 = .unknown
            }
            const v49 = v43 + 1;
            // v49 = .primitive
            v43 = v49;
        } while (v43 < 10);
    }
    const v50 = v39 + 1;
    // v50 = .primitive
    v39 = v50;
}
}
%NeverOptimizeFunction(main);
main();
