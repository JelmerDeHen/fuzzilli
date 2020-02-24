function main() {
let v2 = "string";
const v5 = (13.37)[13.37];
// v5 = .unknown
const v6 = v5 <= "string";
// v6 = .boolean
const v7 = v2[-790437715];
// v7 = .unknown
}
%NeverOptimizeFunction(main);
main();
