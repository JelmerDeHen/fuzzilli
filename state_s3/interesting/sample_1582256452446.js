function main() {
const v2 = typeof 256;
// v2 = .string
const v4 = v2 === "string";
// v4 = .boolean
const v5 = "function".includes(v2);
// v5 = .boolean
}
%NeverOptimizeFunction(main);
main();
