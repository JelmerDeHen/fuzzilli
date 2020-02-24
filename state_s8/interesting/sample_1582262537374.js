function main() {
let v4 = 0;
let v5 = "boolean";
const v6 = v5[3];
// v6 = .unknown
const v10 = "d".lastIndexOf("d");
// v10 = .integer
}
%NeverOptimizeFunction(main);
main();
