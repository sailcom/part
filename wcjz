var chxm1023 = JSON.parse($response.body);
const my = /api\/my\/v\d/;
const vip = /(vipmember\/v\d\/index|jz-activity\/bkk-frontier\/api\/vipmember\/v\d\/index)/;
const user = /usercenter\/userInfo/;

if(my.test($request.url)){
  chxm1023.data.vipInfo = {
    "vipMemberType" : "挖财记账超级年会员",
    "isVipMember" : true,
    "expirationDate" : 4092599349000,
    "continuous" : true,
    "remainingDays" : 99999,
    "consecutiveDays" : 99999
  };
}

if(vip.test($request.url)){
  console.log("原body_info：");
  console.log(chxm1023.data);
  chxm1023.data.vipInfo = {
    ...chxm1023.data.vipInfo,
    "adFreeVipEnable" : 1,
    "adFreePermanentVip" : true,
    "vipMemberEnable" : 1,
    "continuousEnable" : 1,
    "continuousType" : 1,
    "expirationDate" : 4092599349000,
    "superExpireDate" : 4092599349000,
    "adFreeExpireDate" : 4092599349000,
    "isPermanentVip" : true,
    "freeSendAdFreeVipEnable" : 0,
    "vipType" : 2,
    "expireDaysDays" : 99999,
    "freeSendVipEnable" : 0
  };
  console.log("修改后：");
  console.log(chxm1023.data);
}

if(user.test($request.url)){
  chxm1023.data.isVip = 1;
}

$done({body : JSON.stringify(chxm1023)});
