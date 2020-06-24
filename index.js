(function (para) {
    var p = para.sdk_url,
        n = para.name,
        w = window,
        d = document,
        s = 'script',
        x = null,
        y = null;
    if (typeof (w['sensorsDataAnalytic201505']) !== 'undefined') {
        return false;
    }
    w['sensorsDataAnalytic201505'] = n; //'sensors'
    w[n] = w[n] || function (a) {
        return function () {
            (w[n]._q = w[n]._q || []).push([a, arguments]);
        }
    };
    var ifs = ['track', 'quick', 'register', 'registerPage', 'registerOnce', 'trackSignup', 'trackAbtest', 'setProfile', 'setOnceProfile', 'appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify', 'login', 'logout', 'trackLink', 'clearAllRegister', 'getAppStatus'];
    for (var i = 0; i < ifs.length; i++) {
        w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
    
    if (!w[n]._t) {
        x = d.createElement(s), y = d.getElementsByTagName(s)[0];
        x.async = 1;
        x.src = p;
        x.setAttribute('charset', 'UTF-8');
        w[n].para = para;
        y.parentNode.insertBefore(x, y);
    }
})({
    sdk_url:'https://cdn.jsdelivr.net/npm/sa-sdk-javascript@1.15.9/sensorsdata.min.js',
    name: 'sensors',
    is_track_device_id: true,
    source_channel: ['bd_vid'],
    source_type: {
        search: ['.baidu.com', '.google.', 'ecosia.org'],
        social: ['.kaixin001.com']
    },
    // server_url:'',
    server_url: 'https://test-syg.datasink.sensorsdata.cn/sa?project=liangshuang&token=27f1e21b78daf376',
    
    is_track_single_page: false,
    // heatmap:{},
    heatmap: {
        // clickmap:'not_collect',
        // scroll_notice_map:'not_collect',
        loadTimeout: 3000,
        // collect_url: function(){
        //     //如果只采集首页
        //     if(location.href === 'http://www.ls.com:8080/index.html'){
        //         return false;
        //     }else{
        //         return true;
        //     }
        // },
        collect_element: function (element_target) {
            // 如果这个元素有属性sensors-disable=true时候，不采集
            if (element_target.getAttribute('sensors-disable') === 'true') {
                return false;
            } else {
                return true;
            }
        },
        collect_input: function (element_target) {
            //例如如果元素的 id 是a，就采集这个元素里的内容
            // if(element_target.id === 'loginid'){
            //     return true;
            // }
            return true;
        },
        // element_selector:'not_use_id',
        renderRefreshTime: 1000,
        scroll_delay_time: 4000,
        useCapture: false
    },
    
    app_js_bridge:{
        white_list:['http://test-syg.datasink.sensorsdata.cn/sa?project=liangshuang&token=27f1e21b78daf376',
                    'http://newsdktest.datasink.sensorsdata.cn/sa?project=wenquan&token=5a394d2405c147ca'
        ]
    }
});

sensors.quick('autoTrack', {
    $title: 'mytest'
});
sensors.track('sdk_1152', {});
// sensors.quick('isReady',function(){
//     var pro = sensors.getPresetProperties();
//     console.log(pro);
// })
// sensors.setProfile()
// window.SensorsData_APP_JS_Bridge = {
//     sensorsdata_define_mode : function(data){
//     //    var data = JSON.parse(data);
//         console.log(data);

//     }
// };

// var webkit = {
//     messageHandlers :{
//         sensorsdataNativeTracker : {
//             postMessage : function(data){
//                 console.log('ios 成功接收数据');
//                 console.log(data);
//             }
//         }
//     }
// };
// var SensorsData_iOS_JS_Bridge = {
//     sensorsdata_app_server_url: 'http://test-syg.datasink.sensorsdata.cn/sa?project=liangshuang&token=27f1e21b78daf376',
// };

// var SensorsData_APP_JS_Bridge = {
//     // sensorsdata_track : function(data){
//     //     console.log('android接收数据',data);
//     // },
//     // sensorsdata_get_server_url:function(){
//     //     return 'https://test-syg.datasink.sensorsdata.cn/sa?project=liangshuang&token=27f1e21b78daf376';
//     // }
//     // sensorsdata_verify:function(data){
//     //     console.log('android verify 接收数据',data);
//     //     return true;
//     // }
// };
