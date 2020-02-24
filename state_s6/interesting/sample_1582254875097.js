function main() {
const v3 = "undefined"[2147483647];
// v3 = .unknown
const v6 = {__proto__:2147483647};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v7 = {__proto__:1337,...v3,...2147483647};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"])
}
%NeverOptimizeFunction(main);
main();
