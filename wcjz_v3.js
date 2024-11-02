var wcc = JSON.parse($response.body);
console.log("原body_v3：");
console.log(wcc);
wcc.data.vipInfo.vipMemberType = 2;
wcc.data.vipInfo.isVipMember = true;
wcc.data.vipInfo.expirationDate = 4084380366000;
wcc.data.vipInfo.remainingDays = 666;
wcc.data.vipInfo.consecutiveDays = 8888;
console.log("替换后_v3：");
console.log(wcc);
$done({body: JSON.stringify(wcc)}); 

/*
guding = {
  "code": 0,
  "data": {
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
