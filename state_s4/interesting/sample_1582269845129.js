function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
const v7 = [13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = [Infinity,Infinity];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v11 = {e:13.37,d:Infinity,__proto__:v10};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
const v12 = {d:"e",e:1337,toString:Infinity,b:257};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "b", "d", "toString"])
let v13 = Infinity;
const v25 = [1337,1337];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v36 = typeof v25;
// v36 = .string
const v38 = v36 === "number";
// v38 = .boolean
for (let v45 = 0; v45 < 5; v45++) {
    const v46 = Object(v45,v45,13.37,Function);
    // v46 = .object()
}
let v49 = 0;
let v52 = 0;
const v53 = v52 + 1;
// v53 = .primitive
v52 = v53;
const v71 = Object(0,1337,v38);
// v71 = .object()
v49 = 0;
for (const v72 in Number) {
    const v73 = "number".codePointAt(1024);
    // v73 = .integer
}
Number.EPSILON = v13;
const v74 = Object % v38;
// v74 = .number
const v75 = gc();
// v75 = .undefined
const v76 = Number + 1;
// v76 = .primitive
const v77 = Function("N0Xx92zvHQ",v11,"number","number",v71);
// v77 = .unknown
}
%NeverOptimizeFunction(main);
main();
