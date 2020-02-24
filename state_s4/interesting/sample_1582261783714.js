function main() {
const v2 = "__proto__"["__proto__"];
// v2 = .unknown
const v4 = Object.freeze(v2);
// v4 = .undefined
}
%NeverOptimizeFunction(main);
main();
