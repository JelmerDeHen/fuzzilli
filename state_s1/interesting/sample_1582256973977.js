function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [v4,v4,-2,Float32Array];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {__proto__:"hasInstance",d:v4};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v7 = {__proto__:v6};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v8 = v7;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
let v15 = 0;
const v16 = new Float32Array(v5);
// v16 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "constructor", "__proto__", "buffer", "byteOffset", "length"], withMethods: ["entries", "sort", "fill", "some", "reduceRight", "map", "values", "includes", "copyWithin", "reverse", "indexOf", "filter", "findIndex", "find", "every", "set", "keys", "subarray", "reduce", "slice", "forEach", "join", "lastIndexOf"])
const v17 = v15 + 1;
// v17 = .primitive
v15 = v17;
const v20 = new Uint32Array(50213);
// v20 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
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
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
