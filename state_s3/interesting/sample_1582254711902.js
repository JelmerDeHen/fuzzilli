function main() {
const v87 = typeof 13.37;
// v87 = .string
const v89 = v87 === "number";
// v89 = .boolean
let v92 = 9007199254740993;
const v93 = 0 && v92;
// v93 = .boolean
}
%NeverOptimizeFunction(main);
main();
