function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {toString:Uint8Array,d:"symbol",c:v4,a:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "d", "a", "c"])
const v9 = {length:v6,toString:Uint8Array,e:Uint8Array,__proto__:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["length", "toString", "__proto__", "e"])
let v10 = -9007199254740991;
function v12(v13,v14) {
    let v18 = 0;
    const v19 = v18 + 1;
    // v19 = .primitive
    v18 = v19;
    const v20 = [1337];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v23 = 0;
    const v24 = v23 + 1;
    // v24 = .primitive
    v23 = v24;
    let v27 = 0;
    while (v27 < 10) {
        v20.length = 2147483648;
        const v29 = v27 + 1;
        // v29 = .primitive
        v27 = v29;
    }
    const v33 = {length:"N0Xx92zvHQ"};
    // v33 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v34 = {constructor:13.37,length:13.37,__proto__:v33,toString:Number,a:"N0Xx92zvHQ"};
    // v34 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a", "length"], withMethods: ["toString"])
    let v35 = v34;
    for (const v37 in "object") {
        const v38 = v37 + 1;
        // v38 = .primitive
        break;
    }
    return v12;
}
for (let v42 = 0; v42 < 100; v42++) {
    const v43 = v12();
    // v43 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
