function main() {
const v3 = (-2.2250738585072014e-308).toLocaleString();
// v3 = .unknown
const v4 = v3.substring(v3,-312163617);
// v4 = .unknown
const v5 = "OdpgkUVnOW".endsWith(v4,v3);
// v5 = .boolean
}
%NeverOptimizeFunction(main);
main();
