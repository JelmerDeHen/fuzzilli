function main() {
function v1(v2,v3) {
    const v5 = {has:v2,call:v1,deleteProperty:isFinite,setPrototypeOf:v2,ownKeys:isFinite,get:v2,construct:v2,isExtensible:v3,preventExtensions:isFinite,apply:v2};
    // v5 = .object(ofGroup: Object, withProperties: ["construct", "__proto__", "get", "setPrototypeOf", "isExtensible", "apply", "has"], withMethods: ["call", "ownKeys", "deleteProperty", "preventExtensions"])
    const v6 = v5.preventExtensions(3156875969);
    // v6 = .unknown
    function v9(v10,v11,v12) {
        const v14 = {get:v12};
        // v14 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
        const v16 = Object.defineProperty(Number,-256,v14);
        // v16 = .undefined
    }
    for (let v20 = 0; v20 < 100; v20++) {
        const v21 = v9(v6);
        // v21 = .unknown
    }
    let v31 = 0;
    let v34 = 0;
    const v35 = v34 + 1;
    // v35 = .primitive
    v34 = v35;
    const v39 = v31 + 1;
    // v39 = .primitive
    v31 = v39;
}
const v42 = [1337];
// v42 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v43 = v42;
const v44 = v1(v43);
// v44 = .unknown
let v48 = 0;
let v51 = 0;
}
%NeverOptimizeFunction(main);
main();
