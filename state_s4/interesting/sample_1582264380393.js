function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = ["toString",v4,13.37,isNaN];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {d:1337,toString:257,e:v6,valueOf:v7,constructor:13.37,b:v4};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "valueOf", "b", "d", "__proto__", "e"])
const v9 = {length:13.37,e:v4,toString:v6,a:isNaN,valueOf:1337};
// v9 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "toString", "e", "__proto__"], withMethods: ["a"])
let v11 = v4;
const v15 = String.fromCharCode(1351830868,1351830868);
// v15 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v16 = v15.codePointAt(1337);
// v16 = .integer
const v17 = [v16,String];
// v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v18 = v17 & v15;
// v18 = .integer
String[257] = v7;
let v21 = 0;
do {
    for (let v25 = 0; v25 < 100; v25++) {
    }
    const v26 = v21 + 1;
    // v26 = .primitive
    v21 = v26;
} while (v21 < 7);
const v31 = [1337,1337];
// v31 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v33 = new Object(0,1,0,isNaN);
// v33 = .object()
const v34 = (1337)[257];
// v34 = .unknown
const v35 = (1)[7];
// v35 = .unknown
const v36 = !Object;
// v36 = .boolean
const v38 = String();
// v38 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
"toString"[65535] = v18;
v9[1240943000] = 257;
const v39 = v15 + 100;
// v39 = .primitive
Object.__proto__ = v31;
const v40 = Object(isNaN,0);
// v40 = .object()
}
%NeverOptimizeFunction(main);
main();
