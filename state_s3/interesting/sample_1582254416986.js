function main() {
const v3 = {};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v4 = v3;
const v5 = {...13.37,...v3,..."symbol",...1337,...v4};
// v5 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "padStart", "split", "startsWith", "padEnd", "charCodeAt", "indexOf", "replace", "substring", "repeat", "includes", "lastIndexOf", "slice", "charAt", "concat", "codePointAt", "endsWith"])
}
%NeverOptimizeFunction(main);
main();
