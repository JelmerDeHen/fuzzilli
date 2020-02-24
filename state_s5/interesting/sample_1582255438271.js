function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [13.37,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {toString:v4,b:"PI",valueOf:v6};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__", "b"])
const v9 = {c:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
let v10 = v8;
const v15 = [3219736693,3219736693,3219736693,3219736693,3219736693];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v19 = RegExp("eeeRbEqfAO");
// v19 = .object()
const v22 = {constructor:"number",length:9007199254740993};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
v22.toString = v19;
delete v22.length;
v22[65537] = "number";
let v26 = v15;
if (3219736693) {
    v26.toString = RegExp;
    v26 = 3219736693;
} else {
    function v27(v28,v29,v30) {
        v26.__proto__ = 3219736693;
        return 1337;
    }
    v26 = 5;
}
const v31 = "number"[v6];
// v31 = .unknown
const v32 = v15.splice(65537,1,"number",v15,65537,100);
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
v15[2147483647] = RegExp;
const v33 = RegExp("eeeRbEqfAO");
// v33 = .object()
}
%NeverOptimizeFunction(main);
main();
