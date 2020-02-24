function main() {
const v5 = [13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v11 = Object();
// v11 = .object()
let v16 = 0;
for (const v17 in "boolean") {
    v11.length = v17;
    const v20 = {get:gc};
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v22 = Object.defineProperty(v7,9007199254740992,v20);
    // v22 = .undefined
    v16 = 0;
    with (Object) {
        const v23 = "object".replace("boolean",v17);
        // v23 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    }
    const v24 = gc();
    // v24 = .undefined
    let v26 = 0;
    do {
        let v29 = 0;
        do {
            const v30 = v29 + 1;
            // v30 = .primitive
            v29 = v30;
        } while (v29 < 7);
        let v32 = 0;
        const v33 = {get:13.37,b:v5,a:0,length:1,__proto__:"boolean"};
        // v33 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "length", "get", "a"])
        const v34 = v26 + 1;
        // v34 = .primitive
        v26 = v34;
    } while (v26 < 8);
}
const v35 = [13.37,13.37,13.37];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v38 = [];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v39 = {toString:Uint8Array,d:"symbol",c:v35,a:13.37};
// v39 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "d", "a", "toString"])
const v40 = {length:v37,toString:Uint8Array,e:Uint8Array,__proto__:13.37};
// v40 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "length", "e"])
let v41 = -9007199254740991;
const v43 = [13.37,13.37,13.37];
// v43 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
delete v43.length;
let v47 = 0;
const v48 = v47 + 1;
// v48 = .primitive
v47 = v48;
}
%NeverOptimizeFunction(main);
main();
