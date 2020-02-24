function main() {
const v4 = [1337,1337,127,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v5(v6,v7) {
    function v10(v11,v12,v13,v14,v15) {
    }
    const v17 = [13.37];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v18 = {constructor:v17,e:v4,__proto__:"fRnbUEFsZm"};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "constructor"])
    let v21 = 0;
    const v22 = v21 + 1;
    // v22 = .primitive
    v21 = v22;
    let v25 = -1024;
    while (v25 < 5) {
        const v27 = {set:v10,get:gc};
        // v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
        const v29 = Object.defineProperty(v17,"__proto__",v27);
        // v29 = .undefined
        let v31 = -3789366927;
        const v34 = String.fromCharCode(v31,-3789366927);
        // v34 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
        const v35 = v34[v34];
        // v35 = .unknown
        const v36 = v25 + 1;
        // v36 = .primitive
        v25 = v36;
    }
    const v37 = v17.__proto__;
    // v37 = .object()
    return 8;
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v40 = v39;
const v41 = v5(v40);
// v41 = .unknown
const v42 = v5(v41,1337);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
