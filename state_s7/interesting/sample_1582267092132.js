function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [1337,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {toString:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
const v9 = {a:v4,b:v6,__proto__:1,toString:1337,c:1,length:1,e:Int16Array};
// v9 = .object(ofGroup: Object, withProperties: ["length", "c", "b", "a", "e", "__proto__", "toString"])
let v10 = 13.37;
for (let v17 = 0; v17 < 3; v17++) {
    let v20 = 0;
    let v24 = undefined;
    const v28 = {valueOf:JSON,length:"search"};
    // v28 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__"])
    JSON[v28] = 13.37;
    const v32 = JSON.stringify(JSON,JSON,2153514987);
    // v32 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    const v33 = JSON.parse(v32,Object);
    // v33 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
