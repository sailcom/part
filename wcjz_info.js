var wci = JSON.parse($response.body);
console.log("原body_info：");
console.log(wci);
wci.data.isVip = 1;
console.log("替换后_info：");
console.log(wci);
$done({body: JSON.stringify(wci)}); 
