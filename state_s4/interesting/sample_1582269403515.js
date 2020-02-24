function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [v4];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {constructor:1337,length:3269227210,valueOf:3269227210,e:3269227210,toString:3269227210,b:"arguments",d:v6,a:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["length", "d", "e", "__proto__", "toString", "b", "constructor", "a", "valueOf"])
const v9 = {a:3269227210,length:v8};
// v9 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__"])
let v10 = JSON;
const v13 = {valueOf:eval};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["valueOf"])
const v17 = [-4294967296,-4294967296,-4294967296,-4294967296,-4294967296];
// v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
v17[128] = 13.37;
const v18 = new Uint8Array(v17);
// v18 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
let v23 = 0;
for (const v24 in v18) {
    const v25 = typeof 512;
    // v25 = .string
    const v27 = v25 === "number";
    // v27 = .boolean
    let v28 = v13;
    let v34 = 0;
    do {
        let v35 = v27;
        const v36 = v34 + 1;
        // v36 = .primitive
        v34 = v36;
    } while (v34 < 5);
    const v37 = "number".padEnd(v23,"number");
    // v37 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    const v39 = [1337,1337,1337,1337];
    // v39 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    v10["number"] = 3269227210;
    for (let v41 = 0; v41 < 100; v41++) {
        const v42 = eval(v24);
        // v42 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    }
}
const v43 = v23 + 1;
// v43 = .primitive
const v44 = {e:"arguments",length:v9,constructor:v43};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "e"])
const v45 = v17.flat(0);
// v45 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
}
%NeverOptimizeFunction(main);
main();
