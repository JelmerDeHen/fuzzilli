function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [13.37,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {__proto__:Int32Array,a:v4,e:1337,valueOf:"Dex2ysmCFJ",constructor:v6,length:Int32Array};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "length", "constructor", "a"])
const v9 = {__proto__:v7,length:1337,c:1337,toString:v4,valueOf:1337,a:v4,constructor:Int32Array};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "length", "a", "__proto__", "valueOf", "c"])
let v10 = v4;
const v12 = [13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v13 = v10;
const v15 = -65536 | -65536;
// v15 = .integer
const v17 = Object();
// v17 = .object()
let v20 = 0;
do {
    v7.constructor = -65536;
    const v21 = v20 + 1;
    // v21 = .primitive
    v20 = v21;
} while (v20 < 7);
const v22 = ~v10;
// v22 = .boolean
const v25 = [13.37,13.37];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v26 = {b:v25};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v31 = [Reflect,13.37,64];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v32 = 7;
const v33 = [-2147483647];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v34 = v31.splice(v15,0,13.37,v33,v17,v13);
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
for (let v38 = 0; v38 < 9; v38++) {
}
if (v22) {
} else {
    for (const v39 in v32) {
    }
}
const v41 = {get:Reflect};
// v41 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v43 = Object.seal(v31,65537,v41);
// v43 = .object()
const v45 = v31.indexOf(-2147483647,v32,v31,"name",v26);
// v45 = .integer
}
%NeverOptimizeFunction(main);
main();
