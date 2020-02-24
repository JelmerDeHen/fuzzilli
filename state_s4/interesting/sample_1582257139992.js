function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = ["e",3999259790,v4];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {constructor:"e",toString:v4,length:"e",a:Boolean,d:Boolean,c:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "constructor", "toString", "length"], withMethods: ["d", "a"])
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = v8.__proto__;
// v9 = .object()
const v16 = {get:RegExp,set:Array};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v18 = Object.defineProperty(Object,"d",v16);
// v18 = .undefined
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
Object[-9007199254740992] = v9;
}
%NeverOptimizeFunction(main);
main();
