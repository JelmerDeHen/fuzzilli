function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v10 = [v6,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v11 = {__proto__:13.37,a:v10,constructor:"object",b:Promise,toString:v10,length:v10};
// v11 = .object(ofGroup: Object, withProperties: ["toString", "length", "constructor", "__proto__", "a", "b"])
const v12 = {__proto__:v6,a:v6,valueOf:13.37,length:v6,toString:Promise};
// v12 = .object(ofGroup: Object, withProperties: ["length", "toString", "a", "__proto__", "valueOf"])
let v13 = 13.37;
for (let v19 = 0; v19 < 3; v19++) {
    function v20(v21,v22,v23) {
    }
}
}
%NeverOptimizeFunction(main);
main();
