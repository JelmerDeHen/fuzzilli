function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v2 = {valueOf:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v3 = v2;
function v4(v5,v6) {
    let v10 = 0;
    function v11(v12,v13,v14,v15,v16) {
        const v20 = [13.37,13.37,13.37,13.37];
        // v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v22 = ["number",v20,1337,1073741824];
        // v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    }
    do {
        const v23 = v10 + 1;
        // v23 = .primitive
        v10 = v23;
        const v25 = [13.37];
        // v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v28 = -1024;
        while (v28 < 5) {
            const v30 = {set:v11,get:gc};
            // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
            const v32 = Object.defineProperty(v25,"__proto__",v30);
            // v32 = .undefined
            v25.__proto__ = v3;
            v1.__proto__ = v25;
            const v36 = v28 + 1;
            // v36 = .primitive
            v28 = v36;
        }
        function v37(v38,v39) {
        }
        v3 = v10;
        let v43 = 0;
    } while (v10 < 8);
}
const v45 = [1337];
// v45 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v46 = v45;
const v47 = v4(v46);
// v47 = .unknown
}
%NeverOptimizeFunction(main);
main();