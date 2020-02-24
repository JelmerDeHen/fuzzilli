function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v11 = v4;
            do {
                const v12 = v11 + 1;
                // v12 = .primitive
                for (const v14 in "boolean") {
                }
                v11 = v12;
            } while (v11 < 7);
            const v15 = v9 + 1;
            // v15 = .primitive
            v9 = v15;
        } while (v9 < 8);
    }
}
const v16 = [13.37];
// v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v17 = v16;
const v18 = v2(v17);
// v18 = .unknown
const v22 = [13.37];
// v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v24 = [1337,1337];
// v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v25 = ["e",3999259790,v22];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v26 = {constructor:"e",toString:v24,length:"e",a:Boolean,d:Boolean,c:v25};
// v26 = .object(ofGroup: Object, withProperties: ["constructor", "c", "length", "toString", "__proto__"], withMethods: ["d", "a"])
const v27 = {constructor:Boolean,toString:v25,a:1337,__proto__:3999259790};
// v27 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "toString"], withMethods: ["constructor"])
let v28 = 3999259790;
const v31 = Boolean.prototype;
// v31 = .object()
const v32 = "species".__proto__;
// v32 = .object()
v28[256] = v31;
const v34 = [13.37,13.37,13.37,13.37,13.37];
// v34 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v35 = v34;
for (const v37 in "object") {
}
}
%NeverOptimizeFunction(main);
main();
