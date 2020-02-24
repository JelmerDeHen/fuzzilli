function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {length:512,b:v4,toString:512,d:v2,e:v2,a:13.37,__proto__:512};
// v5 = .object(ofGroup: Object, withProperties: ["e", "a", "length", "b", "toString", "d", "__proto__"])
function v6(v7,v8) {
    const v12 = [13.37,13.37,13.37,13.37,13.37];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v13 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v12,__proto__:v6};
    // v13 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "length"], withMethods: ["__proto__"])
    const v14 = [v13];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v15 = new Map(v14);
    // v15 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["values", "set", "keys", "delete", "entries", "clear", "get", "has", "forEach"])
    const v17 = [13.37,13.37,13.37,13.37];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v18(v19,v20) {
        let v25 = -128;
        const v28 = gc(...arguments);
        // v28 = .undefined
        let v30 = 0;
        const v31 = v30 + 1;
        // v31 = .primitive
        v30 = v31;
    }
    const v32 = v17.sort(v18);
    // v32 = .undefined
    const v33 = v15.delete(v8);
    // v33 = .boolean
}
let v34 = v5;
const v35 = v6(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
