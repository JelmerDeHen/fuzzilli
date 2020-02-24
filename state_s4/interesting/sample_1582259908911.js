function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [13.37,7];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {valueOf:v6,toString:Float64Array,e:v6,d:v4,__proto__:1337};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "e", "__proto__", "valueOf", "d"])
const v9 = {valueOf:v7,b:Float64Array,__proto__:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf"])
let v10 = 13.37;
const v14 = [13.37,13.37];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
v14.__proto__ = 13.37;
function v15(v16,v17) {
    const v19 = [13.37,13.37,13.37];
    // v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v23(v24,v25,v26,v27,...v28) {
        let v71 = 0;
        do {
            function v72(v73,v74,v75,v76,v77) {
            }
        } while (v71 > 7);
    }
    for (let v81 = 0; v81 < 100; v81++) {
        v19.length = 5;
        function v82(v83,v84) {
        }
    }
    const v86 = Symbol.replace;
    // v86 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v87 = v19[v86];
    // v87 = .unknown
}
const v90 = [1337];
// v90 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v91 = v90;
const v92 = v15(v91);
// v92 = .unknown
const v93 = v15(1024,4.0);
// v93 = .unknown
}
%NeverOptimizeFunction(main);
main();
