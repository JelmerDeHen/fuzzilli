function main() {
function v0(v1,v2) {
    let v6 = 0;
    function v7(v8,v9,v10,v11,v12) {
    }
    do {
        const v13 = v6 + 1;
        // v13 = .primitive
        v6 = v13;
        const v15 = [13.37];
        // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        v15.__proto__ = v1;
        let v21 = -1024;
        while (v21 < 5) {
            const v23 = {set:v7,get:gc};
            // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
            const v25 = Object.defineProperty(v15,"__proto__",v23);
            // v25 = .undefined
            const v26 = v21 + 1;
            // v26 = .primitive
            v21 = v26;
        }
        const v27 = [13.37,13.37,13.37,13.37,13.37];
        // v27 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v28 = [v27,v27,v27];
        // v28 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v29 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v27,__proto__:v28};
        // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "valueOf"])
        const v30 = [v29];
        // v30 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v31 = new WeakMap(v30);
        // v31 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["get", "delete", "has", "set"])
        v15.__proto__ = v31;
    } while (v6 < 8);
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v34 = v33;
const v35 = v0(v34);
// v35 = .unknown
const v36 = v0();
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
