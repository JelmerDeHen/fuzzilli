function main() {
const v5 = Object[1337];
// v5 = .unknown
const v6 = Uint16Array[4294967297];
// v6 = .unknown
"function"[4294967297] = Object;
}
%NeverOptimizeFunction(main);
main();
