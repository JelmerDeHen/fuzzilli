function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [v6,1337,13.37,Object];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
for (const v9 in v6) {
    const v10 = Object(1337,13.37,-4294967295);
    // v10 = .object()
}
const v11 = v6[-2964670730];
// v11 = .unknown
const v12 = {get:Object,set:Object};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v14 = Object.defineProperty(v4,4294967295,v12);
// v14 = .undefined
const v15 = Object[4294967295];
// v15 = .unknown
const v16 = {constructor:Object,__proto__:v6};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["constructor"])
const v17 = {__proto__:13.37,constructor:v6,d:v16,b:v6};
// v17 = .object(ofGroup: Object, withProperties: ["constructor", "d", "__proto__", "b"])
let v18 = "EPSILON";
function v19(v20,v21) {
    let v25 = 0;
    let v31 = 0;
    do {
        const v32 = v17 - 1;
        // v32 = .primitive
        const v33 = v31 + 1;
        // v33 = .primitive
        v31 = v33;
    } while (v31 < 7);
    Object.toString = Object;
    const v34 = !0;
    // v34 = .boolean
    const v35 = [13.37,13.37,13.37,13.37,13.37];
    // v35 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v37 = [1337];
    // v37 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v38 = {length:v37,b:v37,e:2552665081,c:v37,valueOf:RegExp,a:v35};
    // v38 = .object(ofGroup: Object, withProperties: ["e", "c", "length", "__proto__", "a", "b"], withMethods: ["valueOf"])
    let v39 = RegExp;
    const v41 = [v37];
    // v41 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    v6[v35] = RegExp;
    const v42 = v6[705320412];
    // v42 = .unknown
    const v43 = v14 | 8;
    // v43 = .integer
    const v44 = [v43];
    // v44 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v47 = 0;
    while (v47 < 5) {
        const v48 = RegExp.call("EPSILON");
        // v48 = .unknown
        const v49 = v47 + 1;
        // v49 = .primitive
        v47 = v49;
    }
    v41.length = 8;
    const v51 = v39.apply(v38,v41);
    // v51 = .unknown
}
const v53 = v19(v19);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
