function main() {
const v8 = typeof 1337;
// v8 = .string
const v10 = v8 === "symbol";
// v10 = .boolean
const v12 = Math.tan(13.37);
// v12 = .number
}
%NeverOptimizeFunction(main);
main();
