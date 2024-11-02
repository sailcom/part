var wc = JSON.parse($response.body);
console.log("原body：");
console.log(wc);
wc.data.response = "{\"userInfo\":{\"avatarUrl\":\"http:\/\/avatar.wacdn.com\/d4a508a6701f40e280467d9a4447143a\",\"nickName\":\"sail666\"},\"uid\":1498214,\"vipInfo\":{\"adFreePermanentVip\":true,\"adFreeVipEnable\":0,\"vipType\":2,\"freeSendVipEnable\":0,\"matchVipTrial\":true,\"expireDaysDays\":null,\"freeSendAdFreeVipEnable\":0,\"continuousEnable\":0,\"continuousType\":0,\"expirationDate\":4084380366000,\"isPermanentVip\":true,\"vipMemberEnable\":0},\"ets\":0}";
//wc.data.response = '{"userInfo":{"avatarUrl":"http://avatar.wacdn.com/d4a508a6701f40e280467d9a4447143a","nickName":"sail666"},"uid":1498214,"vipInfo":{"adFreePermanentVip":true,"adFreeVipEnable":0,"vipType":2,"freeSendVipEnable":0,"matchVipTrial":true,"expireDaysDays":null,"freeSendAdFreeVipEnable":0,"continuousEnable":0,"continuousType":0,"expirationDate":4084380366000,"isPermanentVip":true,"vipMemberEnable":0},"ets":0}';
console.log("替换后：");
console.log(wc);
$done({body: JSON.stringify(wc)}); 
/*
guding = {
  "code": 0,
  "data": {
    "sign": "yAREdgPUaq9Q27uQd8PUfWnAOav84JIi4nqjVOU1\/txpx8BUZ6J5BuvZlXi2DhPeB\/Vt\/w\/siCtL\/ZO0wWyij3hU\/t\/PM7QiOEoHCvBTscw3ylTS+iMBjK5ydAq6cWVde2M2CSL5wj7cVGyQVFU+c3CIQAExXcVDYdrtsAR0nGM=",
    "response": {
      "userInfo": {
        "avatarUrl": "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png",
        "nickName": "sail666"
      },
      "uid":1498214,
      "vipInfo": {
        "adFreeVipEnable": 0,
        "matchVipTrial": true,
        "adFreePermanentVip": true,
        "vipMemberEnable": 6,
        "continuousEnable": 0,
        "continuousType": 0,
        "expirationDate": "6666-06-06 06:06:06",
        "superExpireDate": "6666-06-06 06:06:06",
        "adFreeExpireDate": "6666-06-06 06:06:06",
        "normalExpireDate": "6666-06-06 06:06:06",
        "isPermanentVip": true,
        "freeSendAdFreeVipEnable": 0,
        "vipType": 2,
        "expireDaysDays": null,
        "freeSendVipEnable": 0
      }
    }
  }
  "error": null,
  "needRetry": null
}
$done({ body: JSON.stringify(guding) });
*/
