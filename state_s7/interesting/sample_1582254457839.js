function main() {
const v1 = {d:1337};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v3 = {c:127};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
v3[4202048570] = 13.37;
}
%NeverOptimizeFunction(main);
main();
