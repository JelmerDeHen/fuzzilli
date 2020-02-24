function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,v3];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {c:v1,e:v4,a:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "a", "e"])
const v6 = typeof v5;
// v6 = .string
function v9(v10,v11) {
    for (const v13 in "POSITIVE_INFINITY") {
        let v16 = 0;
        const v17 = v16 + 1;
        // v17 = .primitive
        v16 = v17;
    }
    let v21 = 0;
    function v22(v23,v24,v25,v26,v27) {
    }
    do {
        const v28 = v21 + 1;
        // v28 = .primitive
        v21 = v28;
        const v30 = [13.37];
        // v30 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v36 = 0;
        const v40 = v36 + 1;
        // v40 = .primitive
        v36 = v40;
        let v43 = 0;
        while (v43 < 5) {
            const v45 = {set:v22,get:gc};
            // v45 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
            const v47 = Object.defineProperty(v30,"__proto__",v45);
            // v47 = .undefined
            const v48 = v43 + 1;
            // v48 = .primitive
            v43 = v48;
        }
        const v49 = [13.37,13.37,13.37,13.37,13.37];
        // v49 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v50 = [v49,v49,v49];
        // v50 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v51 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v49,__proto__:v50};
        // v51 = .object(ofGroup: Object, withProperties: ["length", "b", "valueOf", "__proto__"])
        const v52 = [v51];
        // v52 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v53 = new WeakMap(v52);
        // v53 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["get", "delete", "set", "has"])
        v30.__proto__ = v53;
    } while (v21 < 8);
}
const v56 = [1337];
// v56 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v57 = v56;
const v58 = v9(v57);
// v58 = .unknown
const v59 = v9(1024,4.0);
// v59 = .unknown
const v60 = v6 === "function";
// v60 = .boolean
let v66 = 0;
}
%NeverOptimizeFunction(main);
main();
