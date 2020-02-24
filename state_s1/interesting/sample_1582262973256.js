function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = v2[Function];
// v3 = .unknown
const v4 = Function(v3);
// v4 = .unknown
const v6 = [13.37,13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v7 = v6;
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v13 = v12;
let v15 = undefined;
let v22 = 0;
let v25 = 0;
const v26 = v22 + 1;
// v26 = .primitive
v22 = v26;
let v29 = 0;
let v32 = 0;
const v38 = [3156875969,3156875969,-3663700340,DataView];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v39 = {constructor:v38,c:v38,e:13.37,d:-3663700340,a:3156875969,__proto__:"boolean"};
// v39 = .object(ofGroup: Object, withProperties: ["constructor", "d", "c", "a", "e", "__proto__"])
try {
    let v42 = 0;
    with (v39) {
        const v45 = v4(DataView,b,7);
        // v45 = .unknown
    }
} catch(v46) {
}
const v47 = v32 + 1;
// v47 = .primitive
v32 = v47;
const v48 = v29 + 1;
// v48 = .primitive
v29 = v48;
}
%NeverOptimizeFunction(main);
main();
