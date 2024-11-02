var wc = JSON.parse($response.body);
wc.data.response.userInfo.nickName = "sail666";
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
