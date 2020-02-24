function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v10 = {b:1337,e:Uint16Array,a:4.0,length:"iterator",valueOf:4294967297};
// v10 = .object(ofGroup: Object, withProperties: ["a", "e", "__proto__", "b", "length", "valueOf"])
let v11 = 4294967297;
v10[-65537] = v11;
}
%NeverOptimizeFunction(main);
main();
