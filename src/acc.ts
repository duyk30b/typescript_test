import { decrypt } from "./helper/string.helper";

// Nguyên 0362090292
const nguyen_secret = "{z!W};jW<'l,yq(8bG358MS3gXlt";
const nguyen_pass = decrypt(nguyen_secret, "bsnguyen");

// Huế 0389979282
const hue_secret = `<uNN_bNQJa}/'#ky1Ms7$u}fPRj{[<QGJEBK<G`;
const hue_pass = decrypt(hue_secret, "admin");

// Yến 0916299616
const yen_secret = `.%<<#OviJW/VXo}Q3PJzmGw0DG0!`;
const yen_pass = decrypt(yen_secret, "elenahaiyen");

// Đại 0906881508
const dai_secret = `UdzzX:M2gtGV;OwvmeyuKp-`;
const dai_pass = decrypt(dai_secret, "lddai");

// Loan 0379615345
const loan_secret = `<uNN_bdDJaz87!/j]t_(2-&]_`;
const loan_pass = decrypt(loan_secret, "admin");

// Quan 0396962047
const quan_secret = `<uNN_b>"05q88)c"]S_CV^hgx_V`;
const quan_pass = decrypt(quan_secret, "admin");

console.log("Nguyen-0362090292: bsnguyen /", nguyen_pass);
console.log("hue: 0389979282 / admin /", hue_pass);
console.log("yen Pass: ", yen_pass);
console.log("dai Pass: ", dai_pass);
console.log("loan Pass: ", loan_pass);
console.log("quan Pass: ", quan_pass);
console.log("lequangdai: 0906881508 / lddai /", decrypt("UdzzX:M2gtGV;OwvmeyuKp-", "lddai"));
console.log("Chị Hồng Tạp hóa: 0398208578 / admin /", decrypt('<uNN_b!.r@Y8:"/)]G?y[/]', "admin"));
console.log("10. Long: 0888666390 / admin /", decrypt('<uNN_b!.r@Y8:"/)]G?y[/]', "admin"));
console.log("11. Long: 0983364383 / hongthai /", decrypt('CiTN<kc(9X"cUPH*RT_IZ6$', "hongthai"));
console.log("12. Hiền: 0866547802 / admin /", decrypt('<uNN_b!.r@Y8:"/)]G?y[/]', "admin"));
