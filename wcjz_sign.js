var wc = JSON.parse($response.body);
console.log("原body：");
console.log(wc);
wc.data.response = "{\"userInfo\":{\"avatarUrl\":\"http:\/\/avatar.wacdn.com\/d4a508a6701f40e280467d9a4447143a\",\"nickName\":\"sail\"},\"uid\":1498214,\"vipInfo\":{\"adFreePermanentVip\":true,\"adFreeVipEnable\":1,\"vipType\":2,\"freeSendVipEnable\":0,\"matchVipTrial\":true,\"expireDaysDays\":99999,\"freeSendAdFreeVipEnable\":0,\"continuousEnable\":1,\"continuousType\":1,\"expirationDate\":4092599349000,\"superExpireDate\":4092599349000,\"adFreeExpireDate\":4092599349000,\"normalExpireDate\":4092599349000,\"isPermanentVip\":true,\"vipMemberEnable\":1},\"ets\":1731152867216}";
console.log("替换后：");
console.log(wc);
$done({body: JSON.stringify(wc)}); 
