function main() {
const v2 = Symbol.toStringTag;
// v2 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v3 = Symbol[v2];
// v3 = .unknown
const v4 = {getPrototypeOf:v3,get:eval};
// v4 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "__proto__"], withMethods: ["get"])
const v6 = new Proxy(eval,v4);
// v6 = .unknown
this.__proto__ = v6;
const v10 = eval("kF9YtH+28n");
// v10 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
