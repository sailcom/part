var wcc = JSON.parse($response.body);
console.log("原body_v3：");
console.log(wcc);
wcc.data.vipInfo.vipMemberType = 2;
wcc.data.vipInfo.isVipMember = true;
wcc.data.vipInfo.expirationDate = 4084380366000;
wcc.data.vipInfo.remainingDays = 666;
wcc.data.vipInfo.consecutiveDays = 8888;
//wc.data.response = "{\"userInfo\":{\"avatarUrl\":\"http:\/\/avatar.wacdn.com\/d4a508a6701f40e280467d9a4447143a\",\"nickName\":\"sailcom\"},\"uid\":1498214,\"vipInfo\":{\"adFreePermanentVip\":true,\"adFreeVipEnable\":0,\"vipType\":2,\"freeSendVipEnable\":0,\"matchVipTrial\":true,\"expireDaysDays\":null,\"freeSendAdFreeVipEnable\":0,\"continuousEnable\":0,\"continuousType\":0,\"expirationDate\":4084380366000,\"superExpireDate\":4084380366000,\"adFreeExpireDate\":4084380366000,\"normalExpireDate\":4084380366000,\"isPermanentVip\":true,\"vipMemberEnable\":0},\"ets\":1731152867216}";
console.log("替换后_v3：");
console.log(wcc);
$done({body: JSON.stringify(wcc)}); 

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
