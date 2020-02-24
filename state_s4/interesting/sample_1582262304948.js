function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v7 = 0;
const v8 = "MIN_VALUE".__proto__;
// v8 = .object()
const v9 = v7 + 1;
// v9 = .primitive
v7 = v9;
const v10 = ["MIN_VALUE",v4,-2335287802];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v11 = v10[65535];
// v11 = .unknown
const v12 = v10.__proto__;
// v12 = .object()
let v13 = v12;
v13[3749298801] = NaN;
let v16 = 0;
while (v16 < 9) {
    v10.valueOf = v11;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
}
const v20 = [1337,1337,1337,1337];
// v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
for (const v21 in "object") {
    const v22 = [1337,...v20,...v21];
    // v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
}
}
%NeverOptimizeFunction(main);
main();
