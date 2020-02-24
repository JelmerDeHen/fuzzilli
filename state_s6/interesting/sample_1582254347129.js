function main() {
let v14 = 0;
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v19 = v14 + 1;
// v19 = .primitive
v14 = v19;
function v26(v27,v28,v29,v30,v31) {
    const v32 = {set:v30,ownKeys:v26,get:v26,defineProperty:v26,isExtensible:v28,apply:v29,construct:v28,getOwnPropertyDescriptor:v27,deleteProperty:v26,setPrototypeOf:v31,preventExtensions:v31};
    // v32 = .object(ofGroup: Object, withProperties: ["preventExtensions", "isExtensible", "apply", "getOwnPropertyDescriptor", "setPrototypeOf", "construct", "set", "__proto__"], withMethods: ["ownKeys", "deleteProperty", "get", "defineProperty"])
}
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
let v41 = 0;
const v43 = v41 + 1;
// v43 = .primitive
v41 = v43;
let v48 = 0;
const v49 = v48 + 1;
// v49 = .primitive
v48 = v49;
for (let v54 = 0; v54 < 3; v54++) {
    const v57 = [13.37,13.37,13.37,13.37,13.37];
    // v57 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v59 = v57;
    const v60 = 1337 == 13.37;
    // v60 = .boolean
    function v63(v64,v65,v66,v67,v68) {
        delete v59[10];
    }
    const v70 = v26();
    // v70 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
