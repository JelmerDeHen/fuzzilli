function main() {
function v2(v3,v4) {
    let v9 = -2;
    const v10 = v9 + 1;
    // v10 = .primitive
    v9 = v10;
    const v11 = 3156875969 <= 8;
    // v11 = .boolean
    let v13 = v11;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v17 = v16;
const v18 = v2(v17);
// v18 = .unknown
const v20 = (-2.2250738585072014e-308).toLocaleString();
// v20 = .unknown
let v24 = 0;
const v25 = v24 + 1;
// v25 = .primitive
v24 = v25;
let v27 = Float32Array;
try {
    let v30 = 0;
    const v32 = {set:v2,get:v18};
    // v32 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["set"])
    const v34 = Object.defineProperty("symbol",-493963045,v32);
    // v34 = .undefined
} catch(v35) {
    v27 = v35;
}
const v36 = JSON.parse(v20,v27);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
