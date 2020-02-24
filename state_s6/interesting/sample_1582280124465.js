function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = ["undefined",v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
delete v6.length;
v4.__proto__ = 1337;
const v9 = (13.37)[3609309068];
// v9 = .unknown
const v10 = new Function(v9);
// v10 = .object(ofGroup: Function, withProperties: ["arguments", "constructor", "name", "prototype", "caller", "length", "__proto__"], withMethods: ["bind", "call", "apply"]) + .function([.anything...] => .unknown) + .constructor([.anything...] => .unknown)
const v11 = {a:3609309068,c:"undefined"};
// v11 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c"])
const v12 = {e:1337,__proto__:v4,constructor:1337,a:v6,c:"undefined",valueOf:v11};
// v12 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "c", "__proto__", "a", "e"])
let v13 = 3609309068;
function v14(v15,v16) {
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v24 = 0;
            const v25 = v24 + 1;
            // v25 = .primitive
            v24 = v25;
            const v27 = "pvU0UUjoya".indexOf(v24,10);
            // v27 = .integer
            for (const v28 of "pvU0UUjoya") {
            }
            const v29 = v9 + 1;
            // v29 = .primitive
            v22 = v29;
        } while (v22 < 8);
    }
    let v38 = 0;
    const v41 = new Int16Array(19873);
    // v41 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
    const v42 = v38 + 1;
    // v42 = .primitive
    v38 = v42;
    return v16;
}
const v44 = [1337];
// v44 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v45 = v44;
const v46 = v14(v45);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
