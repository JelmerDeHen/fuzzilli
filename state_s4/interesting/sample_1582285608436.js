function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = Symbol.species;
// v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v8 = [1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = [v8];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = {toString:"1t/yEFbOw4",a:v4,b:13.37,e:v9};
// v10 = .object(ofGroup: Object, withProperties: ["e", "a", "b", "toString", "__proto__"])
const v11 = {constructor:v10,c:13.37,valueOf:"1t/yEFbOw4",__proto__:"1t/yEFbOw4",b:"1t/yEFbOw4",e:1337};
// v11 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "b", "c", "valueOf", "e"])
let v12 = v10;
const v15 = [13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v17 = [1337,1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v18 = [];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v19 = {b:v18,length:1337,valueOf:1337,toString:RegExp};
// v19 = .object(ofGroup: Object, withProperties: ["b", "length", "valueOf", "__proto__"], withMethods: ["toString"])
const v20 = {length:v15,valueOf:v19,c:v17,e:1337,__proto__:v18};
// v20 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "c", "e"])
for (let v25 = 0; v25 < 10; v25++) {
    const v27 = Symbol.unscopables;
    // v27 = .unknown
    for (let v31 = 0; v31 < 7; v31++) {
        const v32 = v18.unshift(v31,-1024,v31,v31);
        // v32 = .integer
    }
}
let v35 = 13.37;
}
%NeverOptimizeFunction(main);
main();
