function main() {
const v4 = [1337,1337,127,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v5(v6,v7) {
    function v10(v11,v12,v13,v14,v15) {
    }
    const v17 = [13.37];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v18 = {constructor:v17,e:v4,__proto__:"fRnbUEFsZm"};
    // v18 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "constructor"])
    let v21 = 0;
    const v22 = v21 + 1;
    // v22 = .primitive
    v21 = v22;
    let v25 = -1024;
    while (v25 < 5) {
        const v27 = {set:v10,get:gc};
        // v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v29 = Object.defineProperty(v17,"__proto__",v27);
        // v29 = .undefined
        let v31 = -3789366927;
        const v34 = String.fromCharCode(v31,-3789366927);
        // v34 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
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
// v39 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v40 = v39;
const v41 = v5(v40);
// v41 = .unknown
const v42 = v5(v41,1337);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
