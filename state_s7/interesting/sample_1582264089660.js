function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,"Jkpn+sbYGJ"];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {c:Proxy,valueOf:-128,d:v7,__proto__:-128,e:"Jkpn+sbYGJ"};
// v8 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "d", "__proto__", "c"])
const v9 = {a:v8,valueOf:v6,length:v6,d:v8,constructor:1337,__proto__:"Jkpn+sbYGJ",c:1337,e:v8};
// v9 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "length", "e", "valueOf", "constructor", "a", "d"])
let v10 = v6;
const v12 = [-128];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v13 = v12;
let v15 = undefined;
let v25 = 10;
const v29 = [13.37,13.37];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v30 = ["boolean",v29];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v31 = Function("symbol",v30);
// v31 = .unknown
let v32 = 0;
let v38 = v8;
let v41 = 0;
let v42 = 0;
const v47 = v32 + 1;
// v47 = .primitive
v32 = v47;
const v48 = Function(v31);
// v48 = .unknown
v38.constructor = v31;
let v49 = 8;
try {
    "symbol"[-1339398818] = undefined;
    v49 = "object";
} catch(v50) {
    const v51 = !v4;
    // v51 = .boolean
    v49 = Proxy;
}
const v52 = v48(v7,0,8,"boolean",8);
// v52 = .unknown
}
%NeverOptimizeFunction(main);
main();
