function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {constructor:Uint16Array,b:v6,c:v7,length:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["b", "length", "c", "__proto__", "constructor"])
const v9 = {length:v4,d:Uint16Array,constructor:v7,b:v4,toString:v7,__proto__:v4};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "d", "__proto__", "constructor", "b", "length"])
let v10 = v7;
const v16 = {b:2147483647};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v17 = {__proto__:isFinite,a:v16,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v17 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "__proto__", "b", "d", "constructor"], withMethods: ["__proto__"])
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v21 = v20;
let v23 = undefined;
let v27 = 0;
const v31 = [1337,1337,1337];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v34 = 0;
const v36 = v34 + 1;
// v36 = .primitive
v34 = v36;
let v37 = 0;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
const v39 = v27 + 1;
// v39 = .primitive
v27 = v39;
v23 = gc;
let v42 = 0;
v17.length = -266896362;
const v45 = [13.37,13.37,13.37,13.37,13.37];
// v45 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v46 = v45;
let v49 = 0;
const v50 = v49 + 1;
// v50 = .primitive
v49 = v50;
let v55 = 0;
do {
    const v56 = 1337 === v23;
    // v56 = .boolean
    let v57 = "undefined";
    if (v56) {
        v57 = v57;
        v57 = v57;
    } else {
        const v58 = gc(v56);
        // v58 = .undefined
        v57 = v4;
    }
    const v59 = v55 + 1;
    // v59 = .primitive
    v55 = v59;
} while (v55 < 10);
const v60 = gc();
// v60 = .undefined
}
%NeverOptimizeFunction(main);
main();
