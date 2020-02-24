function main() {
function v1(v2,v3) {
    let v8 = 0;
    const v9 = v8 + 1;
    // v9 = .primitive
    v8 = v9;
    const v12 = [13.37,13.37,13.37];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v14 = [1337,1337,1337,1337];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v15 = [1337,1337,v14];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v16 = {length:"eTm8XK*Max",d:13.37,e:"eTm8XK*Max",a:v14,constructor:"eTm8XK*Max"};
    // v16 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "constructor", "e", "d"])
    const v17 = {__proto__:v14,toString:"eTm8XK*Max",e:v16,b:v15,a:v15,constructor:13.37};
    // v17 = .object(ofGroup: Object, withProperties: ["e", "b", "a", "constructor", "toString", "__proto__"])
    for (let v21 = 0; v21 < 100; v21++) {
        function v22(v23,v24) {
        }
    }
    const v26 = Symbol.replace;
    // v26 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v27 = v12[v26];
    // v27 = .unknown
    const v28 = v27 === v17;
    // v28 = .boolean
    let v32 = 0;
    const v33 = v32 + 1;
    // v33 = .primitive
    v32 = v33;
    let v34 = 0;
    const v35 = v34 + 1;
    // v35 = .primitive
    let v41 = 0;
    const v42 = v41 + 1;
    // v42 = .primitive
    v41 = v42;
    v34 = v35;
}
const v45 = [1337];
// v45 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v46 = v45;
const v47 = v1(v46);
// v47 = .unknown
const v48 = v1();
// v48 = .unknown
const v49 = v1(1337,Reflect);
// v49 = .unknown
const v51 = [13.37,13.37,13.37,13.37,13.37];
// v51 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v52 = v51;
}
%NeverOptimizeFunction(main);
main();
