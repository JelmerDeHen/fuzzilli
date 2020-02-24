function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
let v13 = 0;
while (v13 < 7) {
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
    const v17 = {c:1337};
    // v17 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
    const v21 = [13.37,13.37,13.37,13.37];
    // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v23 = [v21,471091797,DataView];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v24 = {c:1337};
    // v24 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
    const v25 = {constructor:v21,toString:v24,__proto__:471091797,length:v23};
    // v25 = .object(ofGroup: Object, withProperties: ["length", "constructor", "toString", "__proto__"])
    v25["undefined"] = v17;
    const v29 = [13.37,13.37,13.37,13.37];
    // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v31 = [v29,-1970853828,DataView];
    // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v32 = {c:1337};
    // v32 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
    const v33 = {constructor:v29,toString:v32,e:-1970853828,length:v31};
    // v33 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "toString", "constructor"])
    for (const v34 in v33) {
    }
}
const v37 = (100)[v0];
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
