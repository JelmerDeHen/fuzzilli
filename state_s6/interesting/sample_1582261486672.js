function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,13.37,v3,-1155643050];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {__proto__:v5,constructor:Int32Array,toString:v3,c:v3,valueOf:-1155643050};
// v7 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__", "constructor", "c"])
const v8 = {__proto__:v6,constructor:v7,toString:Int32Array,c:-1155643050};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "toString", "constructor"])
let v9 = v3;
function v11(v12,v13) {
    const v16 = [13.37,13.37,13.37];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v18 = 0;
    const v21 = eval("undefined");
    // v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    const v23 = [1337,1337,1337,1337];
    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v24 = [1337,1337,v23];
    // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v25 = {length:"eTm8XK*Max",d:13.37,e:"eTm8XK*Max",a:v23,constructor:"eTm8XK*Max"};
    // v25 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__", "constructor", "a", "length"])
    const v26 = {__proto__:v23,toString:"eTm8XK*Max",e:v25,b:v24,a:v24,constructor:v5};
    // v26 = .object(ofGroup: Object, withProperties: ["b", "toString", "__proto__", "e", "a", "constructor"])
    for (let v30 = 0; v30 < 100; v30++) {
        function v31(v32,v33) {
            return v33;
        }
    }
    const v35 = Symbol.replace;
    // v35 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v36 = v16[v35];
    // v36 = .unknown
    const v37 = v36 === v26;
    // v37 = .boolean
    return v13;
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v41 = v40;
const v42 = v11(v41);
// v42 = .unknown
const v43 = v11(1024,4.0);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
