(function(t){function e(e){for(var o,i,l=e[0],s=e[1],u=e[2],m=0,d=[];m<l.length;m++)i=l[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("音乐专辑管理")]),t._v(" | "),n("router-link",{attrs:{to:"/crawler"}},[t._v("爬虫程序")]),t._v(" | "),n("router-link",{attrs:{to:"/import"}},[t._v("存入程序")]),t._v(" | "),n("router-link",{attrs:{to:"/mocha"}},[t._v("Mocha测试")]),t._v(" | "),n("router-link",{attrs:{to:"/api"}},[t._v("音乐专辑接口测试")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),l={},s=Object(i["a"])(l,r,a,!1,null,null,null),u=s.exports,c=n("c478"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mocha"}},[n("pre",{staticStyle:{"text-align":"left","font-size":"18px"}},[t._v("        const mongoose=require('mongoose')\n        require('../model')\n        let albumDao=require('../dao/AlbumDao');\n        const assert=require('assert')\n\n        describe(\"测试AlbumDao\",function () {\n        before(function () {\n            mongoose.connect('mongodb://localhost/albums',function (err) {\n\n            })\n        })\n            after(function () {\n                mongoose.disconnect()\n            })\n\n            it('测试查询所有专辑',function (done) {\n            albumDao.findAllAlbums(function (albums) {\n                assert.ok(albums.length>0)\n                albums.forEach(album=>console.log(album._id))\n                done()\n            })\n            })\n            it(\"测试删除\",function (done) {\n                albumDao.deleteAlbum(\"5e167d1f3f6d4be333994741\",function ({}) {\n                    console.log({})\n                    done()\n                })\n            })\n\n\n        })\n    ")])])}],p={name:"Mocha"},f=p,b=Object(i["a"])(f,m,d,!1,null,"1a3d35a8",null),h=b.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:"详细信息",visible:t.detailDia,width:"30%"},on:{"update:visible":function(e){t.detailDia=e}}},[n("div",[t._v("ID:"+t._s(this.detail.id))]),n("div",[t._v("名称:"+t._s(this.detail.name))]),n("div",[t._v("价格:"+t._s(this.detail.price))]),n("div",[t._v("发布日期:"+t._s(this.detail.public_time))]),n("div",[t._v("week:"+t._s(this.detail.week))]),n("div",[t._v("封面:")]),n("img",{attrs:{src:this.detail.cover,alt:""}}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.detailDia=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.detailDia=!1}}},[t._v("确 定")])],1)]),n("h1",[t._v("音乐专辑管理")]),n("el-table",{staticStyle:{width:"90%"},attrs:{data:t.albums}},[n("el-table-column",{attrs:{prop:"album_id",label:"ID",width:"180"}}),n("el-table-column",{attrs:{prop:"album_name",label:"专辑名称",width:"300"}}),n("el-table-column",{attrs:{prop:"price",label:"价格"}}),n("el-table-column",{attrs:{prop:"singers[0].singer_name",label:"歌手名"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.showDetail(e.row)}}},[t._v("详细内容")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.deleteAlbum(e.row)}}},[t._v("删除")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("追加歌手")])]}}])})],1)],1)},_=[],g=(n("c740"),n("a434"),n("b0c0"),n("d3b7"),{name:"AlbumManger",created:function(){var t=this;fetch(this.url,{type:"GET"}).then((function(t){return t.json()})).then((function(e){return t.albums=e}))},data:function(){return{url:"http://39.99.194.217:3000/albums",maxId:2,book:{name:"",price:""},detailDia:!1,albums:[],detail:{id:"",name:"",price:"",public_time:"",singers:[],week:"",cover:""}}},methods:{deleteAlbum:function(t){var e=this;fetch(this.url+"/"+t._id,{method:"DELETE"}).then((function(t){return t.json()})).then((function(){var n=e.albums.findIndex((function(e){return e._id==t._id}));e.albums.splice(n,1)}))},addSinger:function(t){var e=this;fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.book)}).then((function(t){return t.json()})).then((function(t){return e.albums.push(t)}))},showDetail:function(t){this.detailDia=!0,this.detail.id=t.album_id,this.detail.name=t.album_name,this.detail.price=t.price,this.detail.public_time=t.public_time,this.detail.week=t.week,this.detail.cover=t.cover}}}),w=g,y=Object(i["a"])(w,v,_,!1,null,"bb1ed32e",null),k=y.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"api"}},[n("pre",{staticStyle:{"text-align":"left","font-size":"18px"}},[t._v("        # For a quick start check out our HTTP Requests collection (Tools|HTTP Client|Open HTTP Requests Collection) or\n        # paste cURL into the file and request will be converted to HTTP Request format.\n        #\n        # Following HTTP Request Live Templates are available:\n        # * 'gtrp' and 'gtr' create a GET request with or without query parameters;\n        # * 'ptr' and 'ptrp' create a POST request with a simple or parameter-like body;\n        # * 'mptr' and 'fptr' create a POST request to submit a form with a text or file field (multipart/form-data);\n\n        GET http://localhost:3000/albums\n        Accept: application/json\n\n        ###\n\n        DELETE http://localhost:3000/albums/3751508\n        Accept: application/json\n\n        ###\n\n\n    ")])])}],T={name:"Api"},D=T,O=Object(i["a"])(D,x,S,!1,null,"b96a3e62",null),j=O.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"crawler"}},[n("pre",{staticStyle:{"text-align":"left","font-size":"18px"}},[t._v("        const http = require('http');\n        const mongoose = require('mongoose')\n\n        var albumDao = require('./model') // 导入DAO\n\n        const options = {\n            host: 'johnyu.cn',\n            port: 3000,\n            path: '/albums'\n        };\n\n        const req = http.request(options);\n        req.end();\n\n        req.on('response', (info) => {\n            info.on('data', chunk => {\n                console.log(chunk.toString());\n                let list = chunk.toString()\n                let data = {\n                        \"data\": list\n                    }\n                mongoose.connect(\"mongodb://39.99.194.217/albums\", function(err) {\n                    console.log(\"mongodb已连接!\")\n                    if (!err) {\n                        albumDao.saveData(data)\n                    }\n                })\n\n            })\n        });\n    ")])])}],P={name:"Crawler"},A=P,M=Object(i["a"])(A,q,E,!1,null,"78ddd8b6",null),$=M.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mocha"}},[n("pre",{staticStyle:{"text-align":"left","font-size":"18px"}},[t._v("        const mongoose = require('mongoose')\n\n        let ablumSchema = new mongoose.Schema({\n             album_id: Number,\n             album_name: String,\n             public_time: String,\n             week: Number,\n             price: Number,\n             cover: String,\n             singers: Mixed\n        })\n\n        let ablumsModel = mongoose.model(\"ablum\", ablumSchema)\n\n        function importData(list) {\n            ablumsModel.insertMany(list, { ordered: true })\n                .then()\n        }\n\n        module.exports = { importData }  \n    ")])])}],H={name:"Import"},I=H,R=Object(i["a"])(I,z,C,!1,null,"77b975fb",null),L=R.exports;o["default"].use(c["a"]);var N=[{path:"/",name:"albumManager",component:k},{path:"/crawler",name:"crawler",component:$},{path:"/import",name:"import",component:L},{path:"/mocha",name:"mocha",component:h},{path:"/api",name:"api",component:j}],G=new c["a"]({mode:"hash",base:"/",routes:N}),J=G,F=n("2ca7"),V=n.n(F);n("46c6");o["default"].config.productionTip=!1,o["default"].use(V.a),new o["default"]({router:J,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.60e7f857.js.map