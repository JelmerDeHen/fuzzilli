function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [v4,v4,-2,Float32Array];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = {__proto__:"hasInstance",d:v4};
// v6 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v7 = {__proto__:v6};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v8 = v7;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
let v15 = 0;
const v16 = new Float32Array(v5);
// v16 = .object(ofGroup: Float32Array, withProperties: ["constructor", "length", "byteLength", "buffer", "byteOffset", "__proto__"], withMethods: ["values", "copyWithin", "find", "some", "subarray", "findIndex", "reduce", "indexOf", "includes", "forEach", "every", "join", "sort", "reverse", "keys", "entries", "slice", "fill", "map", "lastIndexOf", "filter", "set", "reduceRight"])
const v17 = v15 + 1;
// v17 = .primitive
v15 = v17;
const v20 = new Uint32Array(50213);
// v20 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "__proto__", "byteLength", "byteOffset", "constructor"], withMethods: ["includes", "forEach", "every", "some", "subarray", "lastIndexOf", "values", "copyWithin", "findIndex", "reverse", "sort", "keys", "filter", "join", "indexOf", "reduce", "reduceRight", "set", "slice", "find", "fill", "map", "entries"])
function v21(v22,v23) {
    for (const v26 in "boolean") {
        let v29 = 0;
        do {
            let v31 = 3156875969;
            const v32 = v20.indexOf(v26,v23);
            // v32 = .integer
            const v33 = v29 + 1;
            // v33 = .primitive
            v29 = v33;
        } while (v29 < 8);
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v36 = v35;
const v37 = v21(v36);
// v37 = .unknown
const v38 = v21(v8,Float32Array);
// v38 = .unknown
const v39 = v21();
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
