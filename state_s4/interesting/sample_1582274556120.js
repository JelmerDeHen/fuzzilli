function main() {
const v4 = "hasInstance".charCodeAt(1073741824);
// v4 = .integer
const v5 = "hasInstance"[-1509508343];
// v5 = .unknown
const v6 = [1073741824,Uint16Array,1073741824];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
for (const v7 in v5) {
    const v8 = v5(v5);
    // v8 = .unknown
}
"hasInstance".length = Uint16Array;
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v11 = [1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = ["hasInstance",v11,v11,1073741824];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v13 = {constructor:Uint16Array,c:v12,valueOf:13.37,toString:v9,length:Uint16Array,b:v9};
// v13 = .object(ofGroup: Object, withProperties: ["toString", "c", "__proto__", "length", "constructor", "valueOf", "b"])
const v14 = {b:1073741824,a:v9,e:v13,toString:v9,c:1337};
// v14 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b", "toString", "a", "c"])
let v15 = v12;
function v16(v17,v18) {
    for (const v20 in "boolean") {
        let v23 = 0;
        do {
            const v24 = v23 + 1;
            // v24 = .primitive
            for (const v26 in "e") {
            }
            v23 = v24;
        } while (v23 < 8);
        for (const v29 in "boolean") {
            const v30 = v29 / -65537;
            // v30 = .number
            delete v15[v30];
        }
    }
    return "boolean";
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v33 = v12;
const v34 = v16(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
