function main() {
const v5 = {b:2147483647};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v6 = {__proto__:Uint8Array,a:v5,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "__proto__", "a", "b", "constructor"])
const v9 = Symbol.iterator;
// v9 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v6[v9] = 0;
}
%NeverOptimizeFunction(main);
main();
