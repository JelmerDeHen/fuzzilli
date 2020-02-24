function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {a:-4294967297,valueOf:"function",b:1337,length:v6,d:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["length", "b", "a", "d", "valueOf", "__proto__"])
const v9 = {a:"function",c:v7};
// v9 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__"])
let v10 = "function";
function v11(v12,v13) {
    const v18 = v7.slice(v12,-4294967297);
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v20 = {getOwnPropertyDescriptor:v11,defineProperty:v12,setPrototypeOf:Array,preventExtensions:v11};
    // v20 = .object(ofGroup: Object, withProperties: ["defineProperty", "__proto__"], withMethods: ["getOwnPropertyDescriptor", "setPrototypeOf", "preventExtensions"])
    const v22 = new Proxy(v4,v20);
    // v22 = .unknown
    const v23 = v10[-4294967297];
    // v23 = .unknown
    let v29 = 0;
    for (const v30 in "boolean") {
        let v33 = 0;
        do {
            let v36 = 0;
            const v41 = {e:13.37};
            // v41 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
            let v42 = 1337;
            let v45 = 0;
            const v46 = v45 + 1;
            // v46 = .primitive
            v45 = v46;
            const v47 = {length:gc,a:v41,constructor:0,b:v42,__proto__:1337,b:v45,e:"object",valueOf:3};
            // v47 = .object(ofGroup: Object, withProperties: ["e", "b", "a", "valueOf", "__proto__", "constructor"], withMethods: ["length"])
            const v48 = v36 + 1;
            // v48 = .primitive
            v36 = v48;
            let v54 = 0;
            const v64 = v33 + 1;
            // v64 = .primitive
            v33 = v64;
        } while (v33 < 8);
    }
    const v65 = v29 + 1;
    // v65 = .primitive
    v29 = v65;
    return 0;
}
const v68 = [1337];
// v68 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v69 = v68;
const v70 = v11(v69);
// v70 = .unknown
}
%NeverOptimizeFunction(main);
main();
