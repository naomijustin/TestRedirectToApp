document.getElementById("btnOpenApp").addEventListener("click", function(){
  //alert(deviceOS());
  var os = deviceOS();
  if (os == 'Windows') {    
    window.location.replace("https://apps.apple.com/au/app/instagram/id389801252");
    //window.location.replace("https://addzme.me");
    return
    alert('open app');
    window.location.replace("instagram://");
    setTimeout(() => {
      alert('open app store');
      //window.location.replace("https://apps.apple.com/us/app/instagram/id389801252");
      //window.location.replace("https://addzme.me/");
      window.location.replace("https://apps.apple.com/au/app/instagram/id389801252");
    }, 10000);
  }
});
function deviceOS() {
   var userAgent = window.navigator.userAgent,
      platform = window.navigator?.userAgentData?.platform || window.navigator.platform,      
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;
    alert("platform = " + platform);
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }
    return os;
}
