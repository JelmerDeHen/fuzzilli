function main() {
const v5 = "c"[4096];
// v5 = .unknown
let v7 = undefined;
function v8(v9,v10) {
    for (const v12 in "boolean") {
        const v16 = Math.max(2055063519,1,1,v7);
        // v16 = .unknown
        for (let v19 = -1897264; v19 < 1; v19++) {
        }
        let v22 = 0;
        const v23 = {get:v16,set:Object,isExtensible:v5,preventExtensions:v5,setPrototypeOf:v8,has:v8,construct:v5,defineProperty:v5,ownKeys:v5};
        // v23 = .object(ofGroup: Object, withProperties: ["isExtensible", "ownKeys", "preventExtensions", "defineProperty", "construct", "__proto__", "get"], withMethods: ["has", "setPrototypeOf", "set"])
    }
}
const v25 = [-3185661035];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v26 = v25;
const v27 = v8(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();