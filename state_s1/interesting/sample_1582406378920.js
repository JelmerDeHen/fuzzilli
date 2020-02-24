function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {valueOf:13.37,length:v5,toString:"boolean",b:Number,a:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "toString", "valueOf"], withMethods: ["b"])
const v8 = [-626451.5348324453,-626451.5348324453,-626451.5348324453];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v10 = [-1000000000.0,-1000000000.0,-1000000000.0,-1000000000.0];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
v6.__proto__ = v8;
const v14 = [196654.93047159188,196654.93047159188,196654.93047159188,3797639666];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v15 = [13.37,v0,v14];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v17 = v8.push(-1000000000.0);
// v17 = .integer
let v19 = -65537;
while (v19 != 4096) {
    const v20 = v15.push(v19);
    // v20 = .integer
    const v21 = v19 + 1;
    // v21 = .primitive
    v8[v20] = v10;
    v19 = v21;
}
}
%NeverOptimizeFunction(main);
main();
