function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [13.37,Object,v6,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {a:"object",b:v6,__proto__:13.37,d:v4};
// v8 = .object(ofGroup: Object, withProperties: ["a", "d", "b", "__proto__"])
const v9 = {length:v6,a:v7,valueOf:13.37,d:"object",constructor:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "length", "d", "valueOf"])
let v10 = Object;
const v12 = [13.37,13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v13 = v12;
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
for (const v18 of v13) {
    const v20 = [13.37,13.37];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v22 = "string";
    const v24 = gc();
    // v24 = .undefined
    let v28 = 0;
    const v29 = v28 + 1;
    // v29 = .primitive
    v28 = v29;
    v20[v22] = "string";
    let v32 = 0;
    function v33(v34,v35) {
        const v36 = v34 in v33;
        // v36 = .boolean
        for (const v38 in "boolean") {
            let v41 = 0;
            do {
                for (const v46 of "pvU0UUjoya") {
                }
                const v47 = v41 + 1;
                // v47 = .primitive
                v41 = v47;
            } while (v41 < 8);
        }
        const v51 = [13.37,13.37,13.37,13.37,13.37];
        // v51 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        for (const v53 in "object") {
            const v54 = ~v36;
            // v54 = .boolean
        }
        const v57 = 1337 == 13.37;
        // v57 = .boolean
        const v59 = Object();
        // v59 = .object()
        let v67 = 0;
        return v51;
        const v68 = v67 + 1;
        // v68 = .primitive
        v67 = v68;
    }
    const v70 = [1337];
    // v70 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v71 = v70;
    const v72 = v33(v71);
    // v72 = .unknown
    const v73 = v32 + 1;
    // v73 = .primitive
    v32 = v73;
    for (const v75 in "object") {
        for (const v77 in "replace") {
        }
    }
}
function v78(v79,v80) {
    const v83 = new Uint8ClampedArray(56474);
    // v83 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
    const v85 = {get:v78,valueOf:v80};
    // v85 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["get"])
    const v87 = Reflect.defineProperty(v83,-2147483648,v85);
    // v87 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
