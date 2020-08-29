// 全局
//获取设备信息
var device_type = navigator.userAgent;//获取userAgent信息
//document.write(device_type);//打印到页面
// eslint-disable-next-line no-undef
var md = new MobileDetect(device_type);//初始化mobile-detect
var os = md.os();//获取系统
var model = "";
window.m = {
    ifIos:os,
    ifmodel:model,
    // 注册
}
