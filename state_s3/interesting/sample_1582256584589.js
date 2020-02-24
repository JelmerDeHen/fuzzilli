function main() {
const v13 = Number();
// v13 = .number
const v25 = (9)[v13];
// v25 = .unknown
const v26 = v25 >> 1337;
// v26 = .integer
}
%NeverOptimizeFunction(main);
main();
