function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = {valueOf:13.37};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v4 = v3;
function v5(v6,v7) {
    let v11 = 0;
    function v12(v13,v14,v15,v16,v17) {
        const v20 = [13.37,13.37,13.37,13.37];
        // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v22 = ["number",v20,1337,v17];
        // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    }
    do {
        const v23 = v11 + 1;
        // v23 = .primitive
        v11 = v23;
        const v25 = [13.37];
        // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        let v28 = -1024;
        while (v28 < 5) {
            const v30 = {set:v12,get:gc};
            // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
            const v32 = Object.defineProperty(v25,"__proto__",v30);
            // v32 = .undefined
            v25.__proto__ = v4;
            v2.__proto__ = v25;
            const v33 = v28 + 1;
            // v33 = .primitive
            v28 = v33;
        }
        function v34(v35,v36) {
        }
        v4 = v11;
    } while (v11 < 8);
    return gc;
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v39 = v38;
const v40 = v5(v39);
// v40 = .unknown
const v41 = v40();
// v41 = .unknown
const v42 = v5(Map,v4);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
