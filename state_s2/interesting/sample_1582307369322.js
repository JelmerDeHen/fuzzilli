function main() {
let v7 = 0;
function v9(v10,v11) {
    const v15 = [-2588121454];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v16 = v15;
    const v17 = {setPrototypeOf:v10,preventExtensions:v9,set:v9,deleteProperty:v10,call:v10};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "call", "setPrototypeOf", "deleteProperty"], withMethods: ["set", "preventExtensions"])
    const v20 = [13.37,1337,-0.0];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    v20[255] = 0;
    let v22 = -65537;
    while (v22 < 1337) {
        const v23 = v20.push(v16);
        // v23 = .integer
        let v26 = 0;
        const v27 = v26 + 1;
        // v27 = .primitive
        v26 = v27;
        const v28 = v22 + 1;
        // v28 = .primitive
        v22 = v28;
    }
}
const v29 = v9(Proxy);
// v29 = .unknown
function v30(v31,v32) {
}
function v33(v34,v35,v36) {
}
const v39 = new Uint16Array(1000);
// v39 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
const v41 = {get:v30,set:v33};
// v41 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
let v51 = 0;
const v52 = v51 + 1;
// v52 = .primitive
v51 = v52;
const v53 = v9(Number,13.37);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
