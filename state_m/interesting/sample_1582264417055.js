function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = ["toString",v3,13.37,isNaN];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v6(v7,v8) {
    const v9 = v7 in v6;
    // v9 = .boolean
    const v15 = [3156875969,3156875969,1337,DataView];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v16 = {constructor:v15,c:v15,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v16 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "a", "d", "constructor", "c"])
    const v17 = v16.__proto__;
    // v17 = .object()
    for (const v22 in "boolean") {
        let v25 = 0;
        do {
            try {
                const v26 = Boolean === v7;
                // v26 = .boolean
                const v27 = v8 == v4;
                // v27 = .boolean
                for (const v28 of v17) {
                }
                let v31 = 0;
            } catch(v32) {
            }
            const v40 = v25 + 1;
            // v40 = .primitive
            const v43 = eval(1337);
            // v43 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
            v25 = v40;
        } while (v25 < 8);
    }
}
const v45 = [1337];
// v45 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v46 = v45;
const v47 = v6(v46);
// v47 = .unknown
}
%NeverOptimizeFunction(main);
main();
