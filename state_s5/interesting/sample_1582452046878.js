function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v2(v3,v4) {
    let v8 = 0;
    function v9(v10,v11,v12,v13,v14) {
        for (const v15 of v1) {
        }
    }
    do {
        const v19 = v8 + 1;
        // v19 = .primitive
        v8 = v19;
        const v21 = [13.37];
        // v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        v21.__proto__ = v3;
        let v27 = -1024;
        while (v27 < 5) {
            const v29 = {set:v9,get:gc};
            // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
            const v31 = Object.defineProperty(v21,"__proto__",v29);
            // v31 = .undefined
            const v32 = v27 + 1;
            // v32 = .primitive
            v27 = v32;
        }
        const v33 = [13.37,13.37,13.37,13.37,13.37];
        // v33 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v34 = [v33,v33,v33];
        // v34 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v35 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v33,__proto__:v34};
        // v35 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "b"])
        const v36 = [v35];
        // v36 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v37 = new WeakMap(v36);
        // v37 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["get", "delete", "has", "set"])
        v21.__proto__ = v37;
    } while (v8 < 8);
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v40 = v39;
const v41 = v2(v40);
// v41 = .unknown
const v42 = v2();
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
