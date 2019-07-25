#  使用Vue全家桶+Node.js搭建的小型全栈项目



## 前言

接触vue框架也有一个多月的时间了，整理下之前做过的一个小demo，主要是熟悉vue全家桶技术，界面布局模仿的是猫眼，数据使用的是豆瓣开发者提供的后台接口。整个过程从搭建脚手架到最后项目打包上线，是一个完整的开发流程，中间涉及到的知识点比较多，也比较零碎，通过这个项目对我自己的知识体系做一个梳理和总结。

项目已上传github，欢迎大家下载交流。

前端项目地址：https://github.com/Hanxueqing/Douban-Movie

后台数据地址：https://github.com/Hanxueqing/Douban-API



## 项目技术栈

- Vue.js全家桶：vue-cli、vue-router、vue-resource（新版已替换成axios）、vuex
- 语言：ES6
- UI：Mint-UI、Vant部分组件
- 后台接口：express、MongoDB。关于如何制作数据接口可以参考我之前的这篇文章：[《不会写API数据接口的前端攻城狮不是好程序猿》](https://www.jianshu.com/p/966a03327c76)。
- 打包上线：阿里云服务器。关于如何申请、配置阿里云服务器，并且将项目打包上线可以参考我之前的这篇文章：[《从0到1：阿里云服务器部署web项目全过程》](https://www.jianshu.com/p/3693dad9b574)。



## 项目运行

```
# 克隆到本地
git clone git@github.com:Hanxueqing/Douban-Movie.git

# 安装依赖
npm install

# 开启本地服务器localhost:8080
yarn serve

# 发布环境
yarn build
```



## 项目开发

### 1、安装vue-cli3脚手架

现在使用前端工程化开发项目是主流的趋势，也就是说，我们需要使用一些工具来搭建vue的开发环境，一般情况下我们使用webpack来搭建，在这里我们直接使用vue官方提供的，基于webpack的脚手架工具：vue-cli。

#### （1）全局安装webpack

```
cnpm install webpack -g
```

#### （2）全局安装yarn

```
cnpm install yarn  -g
```

#### （3）全局安装vue-cli

```
cnpm install -g @vue/cli

OR

yarn global add @vue/cli
```

#### （4）查看安装结果

我的电脑已经安装过了，依次执行命令：

```
node -v
yarn -v
vue -V （注意这里是大写的“V”）
```

*注意：要求node.js版本8或者8+*



出现相应的版本号，则说明安装成功

![](http://ww4.sinaimg.cn/large/006tNc79ly1g58ujsv6p4j30hw050gnc.jpg)



### 2.用vue-cli来构建项目

#### （1）创建项目

```
vue create douban（项目名称）
```

（注意这里的名字不能有大写字母，如果有会报错*Sorry, name can no longer contain capital letters*）

![](http://ww3.sinaimg.cn/large/006tNc79ly1g58um3khlij30mw044js1.jpg)

阮一峰老师博客[为什么文件名要小写](https://link.jianshu.com?t=http://www.ruanyifeng.com/blog/2017/02/filename-should-be-lowercase.html)可以参考一下。

第一个vue-model是我保存过的设置，第一次create的时候是没有的。 default是默认设置，会给你安装babel和eslint模块，我们选择第三个Manually select features自己手动配置。

![](http://ww2.sinaimg.cn/large/006tNc79ly1g58ummhyctj30ms07q3zh.jpg)

输入空格是选择当前选项，输入a是全选。 



（加粗的是要选择的配置项）

**Babel** 安装这个模块后就可以识别ES6的语法，不然只能识别ES5的语法 

TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准。

Progressive Web App （PWA） Support 渐进式增强的前端网页技术PWA，是一个专门的学科，可以做离线存储的功能，手机断网的情况下也可以访问这个页面，我们目前用不到，先不安装了。 

**Router** 路由 

**Vuex** 全局状态管理 

**CSS Pre-processors** CSS预处理语言 

Linter / Formatter 格式化工具，帮助我们更好的编写代码 

Unit Testing 单元测试 

E2E Testing 

选择好这四项之后输入enter回车 



接下几项配置依次是：

1. 是否使用history模式配置路由，输入**n**，回车 

2. 由于我们刚才选择了CSS预处理语言，所以这里我们就选择**Sass/SCSS（with node-sass）**这个稳定版本 

3. 你需要在哪里存储你的这些配置文件，我们选择**in package.json**

4. 最后是你想将这些配置保存为一个预设应用于以后的文件吗，保存以后就不用再手动配置这些选项，以后直接使用即可，我之前保存过了，这里就先选择**n**。 

   ![](http://ww3.sinaimg.cn/large/006tNc79ly1g58uzqnavzj31as03swfw.jpg)

回车之后就进入了下载状态，速度取决于你当前的网速。

![](http://ww3.sinaimg.cn/large/006tNc79ly1g58v8glgr7j30r408ota6.jpg)

安装成功后会提示我们进入douban这个文件夹下运行yarn serve启动监听。

![](http://ww3.sinaimg.cn/large/006tNc79ly1g58v96amr2j30iy0fc40s.jpg)

#### （2）加载编译文件

将Vue.config.js编译文件拷贝到douban文件夹下



### 3、整理下src文件夹

#### （1）router

新建router文件夹，将router.js文件拖进去，重命名为index.js，routes里面的内容删掉。

![](http://ww3.sinaimg.cn/large/006tNc79ly1g58vbmvsqnj30zc0f0abz.jpg)

#### （2）views

views文件夹下的两个.vue文件删掉，assets文件夹下的logo图删掉，components文件夹下的HelloWorld组件删掉 。



#### （3）App.vue

App.vue文件样式删掉，id名为app的div内容删掉。

![](http://ww4.sinaimg.cn/large/006tNc79ly1g58vglxkqrj30qc0fcjsw.jpg)

#### （4）在views中新建页面

在views文件夹下依次创建首页、书影音、广播、小组、我的页面，文件夹下创建index.vue文件，以vue为后缀名的文件包含template、script、style三部分，webpack在解析.vue文件时以vue-loader加载器加载。



#### （5）在router中配置路由

在router文件夹下依次创建首页、书影音、广播、小组、我的页面js路由文件，每一个路由配置一个name名字，方便我们以后通过具名路由的方式找到这个路由组件，最后在index.js中引入。



#### （6）在App.vue中引入<router-view>



#### （7）编写样式文件

新建stylesheets文件夹

webpack在打包的过程中不会处理前面加下划线的文件，避免重复进行打包

依次创建：_base.scss基本样式

_commons.scss通用样式

_mixins.scss混合样式

_reset.scss重置样式

最后在main.scss文件夹下依次引入

```scss
@import "_base.scss";
@import "_mixins.scss";
@import "_reset.scss";
@import "_commons.scss";
```



在main.js中将样式作为一个模块引入

```javascript
//引入main.scss文件
import "./stylesheets/main.scss"
```



###  4、Tabbar组件

#### （1）slot插槽：具名槽口、匿名槽口

首先我们将正常状态图标和选中状态图标依次引入，写好样式，给正常状态图标命名为normalImg，选中状态图标命名为activeImg，这里我们用到了slot插槽。在子组件中写上slot标签，并赋上name值，作为具名槽口，就可以在父组件传入要插入的内容。

子组件：

```js
<span><slot name = "normalImg"></slot></span>
<span><slot name = "activeImg"></slot></span>
```

父组件：

```js
<TabItem>
            <img slot = "normalImg" src = "../../assets/ic_tab_home_normal.png" alt = "">
            <img slot = "activeImg" src = "../../assets/ic_tab_home_active.png" alt = "">
</TabItem>
```

#### （2）v-if/v-else指令：控制显示和隐藏

第一步实现点击图标由普通样式切换为选中样式，需要设置一个flag属性，来控制normalImg与activeImg的显示，这里我们用到了v-if和v-else指令

```js
<span v-if = "!flag"><slot name = "normalImg"></slot></span>
<span v-else><slot name = "activeImg"></slot></span>
```

#### （3）父组件给子组件传值的两种方式：事件绑定、自定义事件

在父组件中给子组件传递唯一txt、mark、sel属性值以及changeSelected方法，父组件通过属性绑定的方法把selected值传递给sel：

父组件：

```js
<TabItem txt = "我的" mark = "mine" :sel = "selected" :changeSelected = "changeSelected">
```

子组件依次接收：

```js
props:["txt","mark","sel","changeSelected"]
```

在子组件中通过绑定点击事件change，让父组件去更改selected的值再传递给子组件，通过与mark值进行匹配来确定返回值，从而控制当前图标状态。

子组件绑定点击事件触发change方法：

```js
<div class = "tabitem" @click = "change">
```

子组件change方法：

```js
change(){
            //让父组件去更改sel值
            this.changeSelected(this.mark);
        }
```

父组件改变sel值：

```js
changeSelected(val){
            this.selected = val;
        }
```

父组件也可以利用自定义事件给子组件传递方法，子组件就不用再通过props中接收，而是直接在方法中通过this.$emit来使用，第一个参数是绑定在父级自身的事件名，第二个参数是传给父级的参数，通过这种方法在子组件中触发父组件的方法。

父组件：

```js
<TabItem txt = "小组" mark = "group" :sel = "selected" @changeSelected = "changeSelected">
```

子组件：

```js
change(){
            //自定义事件通信方法
            this.$emit("changeSelected",this.mark)
        }
```

#### （4）computed计算属性

子组件进行判断，返回falg值，由于需要依赖外部值而产生变化，所以我们将flag写在计算属性computed中：

```js
computed:{
        flag(){
            if(this.mark === this.sel){
                return true
            }
            return false
        }
    }
```

#### （5）编程式导航

子组件中通过编程式导航，依据不同的mark属性，匹配不同的路由，实现点击图标跳转相应页面

```js
change(){
            //自定义事件通信方法
            this.$emit("changeSelected",this.mark)
            //编程式导航
            this.$router.push("/" + this.mark)
        }
```

由于我们之前把Tabbar写在App.vue中，它只被创建了一次，在全部页面都会出现，但是我们有的页面中不需要Tabbar，所以我们不能把它写在全局中，哪个页面需要就在哪个页面引入，这时候我们会发现虽然能实现点击跳转页面，但是底部的图标无法实现点击变色，这是由于每一次跳转Tabbar都经历了一次由创建到销毁的过程，所以这时候我们就不能再在data中给它赋值为固定值了。

原代码：

```js
data(){
        return{
            selected:"home"
        }
    }
```

由于我们之前配置路由的时候给每个路由都设置了name属性，所以当我们打印this的时候可以在$route中获取到它的name值，我们把这个name值赋值给data，直接传递给子组件进行判断，就不需要再传递方法了。

![](http://ww2.sinaimg.cn/large/006tNc79ly1g58vmzd7ztj30ig084js6.jpg)

通过this.$route.name决定父组件中哪一个元素被选中。

父组件：

```js
data(){
        return{
            selected:this.$route.name,
        }
    }
```

将引入的子组件数据全部写在template中显然是既繁琐又臃肿，这个时候我们可以将数据写在data对象中，然后使用v-for循环指令依次在页面上加载：

data中，创建一个footers数组，将对象数据都放在数组中：

```js
footers:[
                {id:1,txt:"首页",mark:"home",normalImg:"../../assets/ic_tab_home_normal.png",activeImg:"../../assets/ic_tab_home_active.png"},
                {id:2,txt:"书影音",mark:"audio",normalImg:"../../assets/ic_tab_audio_normal.png",activeImg:"../../assets/ic_tab_audio_active.png"},
                {id:3,txt:"广播",mark:"broadcast",normalImg:"../../assets/ic_tab_broadcast_normal.png",activeImg:"../../assets/ic_tab_broadcast_active.png"},
                {id:4,txt:"小组",mark:"group",normalImg:"../../assets/ic_tab_group_normal.png",activeImg:"../../assets/ic_tab_group_active.png"},
                {id:5,txt:"我的",mark:"mine",normalImg:"../../assets/ic_tab_mine_normal.png",activeImg:"../../assets/ic_tab_mine_active.png"}
            ]
```

#### （6）v-for指令

TabItem标签中循环遍历footers：

```js
<TabItem
            v-for="foot in footers"
            :key = "foot.id"
            :txt = "foot.txt"
            :sel = "selected"
            :mark = "foot.mark"
        >
            <img slot = "normalImg" :src = "foot.normalImg" alt = "">
            <img slot = "activeImg" :src = "foot.activeImg" alt = "">
        </TabItem>
```

但是这个时候刷新网页就会发现图标都加载不出来，原因是webpack在打包过程中不识别我们的相对路径，它会将引号里的内容原样输出

![](http://ww4.sinaimg.cn/large/006tNc79ly1g58vpxvmhrj30ns05idg2.jpg)

我们需要使用require加载路径，把图片当作一个模块来引入

```js
{id:1,txt:"首页",mark:"home",normalImg:require("../../assets/ic_tab_home_normal.png"),activeImg:require("../../assets/ic_tab_home_active.png")}
```

并且webpack会将我们引入的图片转成base64位格式，相当于把一段文字放在网页中，再次访问的时候就不需要向远程发送请求了。

![](http://ww2.sinaimg.cn/large/006tNc79ly1g58vni2jc3j30qg0b0mzz.jpg)

转换之后它的体积会变大，但是不会比之前大很多，网络请求时间减少，Time变成0ms，加快访问效率，提升用户体验。这个主要是针对小图片，20kb以内。

![](http://ww3.sinaimg.cn/large/006tNc79ly1g58vpd6mplj30ug092dia.jpg)



### 5、404页面

#### （1）redirect：路由重定向

当我们访问不存在的路径时，将页面重定向到notfound，也就是说，当用户输入路由表中不存在的路径时一律会跳转到404页面。

在views中新建Notfound文件夹，在index.vue中编写404页面，在router中配置路由。

在index.js中写入：

```js
 routes: [
    {path:"/",redirect:"/home"},
    home,audio,broadcast,group,mine,
    {path:"/notfound",component:()=>import("@/views/Notfound")},
    {path:"*",redirect:"/notfound"},
  ]
```

星号代表任意路径,配置的时候{path:"*",redirect:"/notfound"}要放在最后面，不然所有路径都会跳转到404页面，路由是按顺序从上至下依次查找页面的。

#### （2）router-link：路由标签

增加一个点击返回首页的功能

```js
<router-link to = "/">点我返回首页</router-link>
```



### 6、编写header头部

#### （1）rem：响应式布局

这里我们使用rem来计算尺寸，实现移动端的响应式布局。

首先我们新建一个modules文件夹，编写rem.js，以iphone6为主

```js
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + "px"
window.onresize = function(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + "px"
}
```

在main.js中引入rem.js文件

```js
//引入rem.js文件
import "./modules/rem.js"
```

#### （2）font-awsome：字体图标库

在font-awsome官网下载css文件包，放入public文件夹中，在index.html中引入样式。

![](http://ww2.sinaimg.cn/large/006tNc79ly1g58vsxnvssj31ps0mmaj4.jpg)

使用font-awsome：

```js
<i :class = "['fa','fa-' + home]"></i>
```

现在我们想实现当路由变化的时候，头部信息动态更改，我们先把内容改成这种形式：

template中：

```js
<div class = "left">
            <i :class = "['fa','fa-' + icon]"></i>
            <span>{{title}}</span>
        </div>
```

data中：

```js
data(){
        return{
            icon:"home",
            title:"豆瓣首页",
        }
    },
```

这时候就需要用到路由守卫，当路由切换的时候可以做一些业务逻辑，首先需要在页面中引入全局路由：

```js
import router from  "@/router"
```

写全局前置路由守卫router.beforeEach，使用switch语句来匹配：

```js
created(){
        router.beforeEach((to,from,next)=>{
            switch(to.name){
                case "home":
                    this.title = "豆瓣首页"
                    this.icon = "home"
                    break;
                case "audio":
                    this.title = "豆瓣影音"
                    this.icon = "audio-description"
                    break;
                case "broadcast":
                    this.title = "豆瓣广播"
                    this.icon = "caret-square-o-left"
                    break;
                case "group":
                    this.title = "豆瓣小组"
                    this.icon = "group"
                    break;
                case "mine":
                    this.title = "豆瓣我的"
                    this.icon = "cog"
                    break;
                default:
                    break;

            }
            next();
        })
    }
```

由于我们把Header组件写在了全局App中，所以它在每个页面上都会显示，但是我们希望它只在匹配到指定路由的时候显示，这时候我们就需要设置一个isShow的参数值来控制它的显示与隐藏。

data中：

```js
data(){
        return{
            icon:"home",
            title:"豆瓣首页",
            isShow:true
        }
    }
```

switch中：匹配到case的isShow值都为true，default就是除了以上的几种情况，给isShow赋值为false

```js
switch(to.name){
                case "home":
                    this.title = "豆瓣首页"
                    this.icon = "home"
                    this.isShow = true
                    break;
                case "audio":
                    this.title = "豆瓣影音"
                    this.icon = "audio-description"
                    this.isShow = true
                    break;
                case "broadcast":
                    this.title = "豆瓣广播"
                    this.icon = "caret-square-o-left"
                    this.isShow = true
                    break;
                case "group":
                    this.title = "豆瓣小组"
                    this.icon = "group"
                    this.isShow = true
                    break;
                case "mine":
                    this.title = "豆瓣我的"
                    this.icon = "cog"
                    this.isShow = true
                    break;
                default:
                    this.isShow = false
                    break;

            }
```

然后div 中添加v-if，赋值为isShow值

```js
<div class = "app-header" v-if = "isShow">
```

所以实现组件的显示与隐藏有两种办法：

（1）哪里需要就在哪里引用，例如Tabbar。

（2）switch配合路由守卫做判断，哪个地方需要就使用v-if显示，例如Header。



### 7、Banner轮播图

#### （1）swiper：轮播图组件

先安装下载两个模块swiper、axios：

```
cnpm i swiper -S或者yarn add swiper -S

cnpm i axios -S 
```

*最好不要混用，一开始使用了cnpm就一直使用cnpm安装*

安装成功显示

![](http://ww1.sinaimg.cn/large/006tNc79ly1g58vvnu9zij30t20h8djp.jpg)

在main.js中引入swiper样式

```js
//引入swiper.min.css样式文件
import 'swiper/dist/css/swiper.min.css'
```

在components组件中新建Banner文件夹，编写index.vue文件，引入swiper：

```js
import Swiper from "swiper"
```

编写swiper内容，将banners图片循环渲染到页面上

```js
<div class = "swiper-container">
        <div class = "swiper-wrapper">
            <div
                class = 'swiper-slide'
                v-for = "banner in banners"
                :key = "banner.id"
            >
                <img width = "100%" :src = "getImages(banner.images.small)" alt = "">
            </div>
        </div>
        <div class = "swiper-pagination"></div>
```

由于我们使用的是豆瓣api，会遇到图片403的问题，具体解决办法请参考这篇文章：

https://blog.csdn.net/jsyxiaoba/article/details/79628983

文章中给我们提供了一个方法解决这个问题，这里我们就引入一下

```js
methods:{
        // 解决403图片缓存问题
        getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    },
```

由于之后我们还会用到这个函数，所以将它写在module中导出：

```js
export default (_url) => {
    if (_url !== undefined) {
        let _u = _url.substring(7);
        return 'https://images.weserv.nl/?url=' + _u;
    }
    return true
}
```

之后使用的时候只需要引入：

```
import getImages from "@/modules/getImg"
```

再在methods中注册一下该方法：

```
 methods:{
        getImages
    }
```

使用的时候直接写函数名，将图片的src作为参数传入即可：

```
<img width = "100%" :src = "getImages(movie.images.small)" alt = "">
```

接下来我们就把Swiper实例化

```
new Swiper(".home-banner",{
                    loop:true,
                    pagination:{
                        el:".swiper-pagination"
                    }
                })
```

这时候会出现，划不动现象，产生的原因是**本来这个地方是没有swiper-slide这个数据的，后续我们发送了ajax请求，他才会动态生成六个swiperslide，banners数据立马改变了，它内部会生成新的虚拟dom和上一次虚拟dom结构作对比，然后产生新的真实dom，这个过程需要时间，但是我们立马实例化了，所以等到真实dom渲染完成后实例化早就结束了。**

解决方法就是**我们必须要等到因为数据改变了引发新的真实dom渲染完成后才会执行的操作，就可以避免这样的问题。**

#### （2）this.$nextTick函数

所以我们需要把实例化的过程写在this.$nextTick的回调函数中，在这个函数里面进行的操作就是等到数据更新而引发的页面当中新的虚拟dom所渲染成的真实dom真正渲染出来之后才执行，简单来说就是等到页面全部渲染完成后，再进行实例化操作。

```
this.$nextTick(()=>{//在这个函数里面，因为数据改变导致页面生成新的真实dom，全部渲染完成了
                new Swiper(".home-banner",{
                    loop:true,
                    pagination:{
                        el:".swiper-pagination"
                    }
                })
            })
```

banner轮播图运行效果：

![](http://ww2.sinaimg.cn/large/006tNc79ly1g5b7244ftzg30pw10wx6p.gif)

#### （3）axios：发送ajax异步请求数据

> Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

它的主要功能：

- 从浏览器中创建 `XMLHttpRequests` 
- 从 node.js 创建 `http`请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 `XSRF` 

因为有很多地方都需要用到数据请求，每次都需要引入很麻烦，可以直接把axios绑定到vue的原型属性prototype上去，以后就可以通过this.$http来访问：

```
//引入axios
import axios from "axios"
Vue.prototype.$http = axios;
```



#### （4）解决跨域：反向代理

由于我们现在是在本地访问远程端口的图片，所以会产生跨域问题，这里我们通过反向代理的方式解决跨域问题，在Vue.config.js配置文件中配置代理，

```
proxy: {//反向代理的方式解决跨域
            "/api":{
                target:"http://47.96.0.211:9000", //目标域名
                changeOrigin:true,//是否改变域名
                pathRewrite:{//以什么开头
                    "^/api":""
                }
            }
        }, // 设置代理
```

最终访问的时候会自动把/api清除，把后面的路径拼接到目标域名上：

```
this.$http.get("/api/db/in_theaters",{
```

*一旦配置文件更改，我们就需要手动重新启动监听！*

#### （5）loading图片

刚开始进入页面的时候，没有数据加载进来，会显示空的一块，这里可以加一个loading图，提示用户数据正在加载，当数据加载进来时候隐藏，提升用户体验。

loading图片放在assests文件夹下，在其他地方也可以使用这个loading图，所以我们在公共样式中引入它：

```
.loading{
    background:url(../assets/index.svg) no-repeat center;
    background-size:10%;
    height:2.4rem
}
```

之后只需要给标签添加loading的class名即可，由于我们在data中给banner初始值设置为null，所以可以根据banner的值配合v-if/v-else指令来决定标签的显示和隐藏：

```
<div class = "loading" v-if = "!banners"></div>
        <div class = "swiper-wrapper" v-else>
```

在首页引入Banner组件

```
<Banner></Banner>
```

Loading图运行效果：

![](http://ww3.sinaimg.cn/large/006tNc79ly1g5b73robl2g30pw10wn6e.gif)

### 8、首页列表

#### （1）filter：过滤器

我们需要在首页编写MovieBox组件，里面再嵌套MovieItem组件，在MovieBox中请求数据，以属性的方式传递给MovieItem。

```
data(){
        return{
            movies:null
        }
    },
    created(){
        this.$http.get("/api/db/in_theaters",{
            params:{
                limit:6
            }
        }).then(res=>{
            this.movies = res.data.object_list
        })
    }
```

MovieItem接收movies对象：

```
props:{
        movie:Object
    }
```

把数据插入到页面中：

```
<div class = "movieitem">
        <div class = "main_block">
            <div class = "img-box">
                <img width = "100%" :src = "getImages(movie.images.small)" alt = "">
            </div>
            <div class = "info">
                <div class = "info-left">
                    <div class = "title line-ellipsis">{{movie.title}}</div>
                    <div class = "detail">
                        <div class = "count line-height">播放量<span class = "sc">{{movie.collect_count | filterData}}</span></div>
                        <div class = "actor line-height line-ellipsis">
                            <span class = "a_title">导演:</span>
                            <span class = "a_star line-ellipsis">{{movie.directors[0].name}}</span>
                        </div>
                        <div class = "rating line-height">评分：{{movie.rating.average}}</div>
                    </div>
                </div>
                
                <div class = "info-right"> 
                    <div class = "btn">
                        <span>购票</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
```

在MovieBox中循环渲染到页面上：

```
<div class = "moviebox">
        <div class="loading" v-if="!movies"></div>
        <MovieItem
            v-else
            v-for = "movie in movies"
            :key = "movie.id"
            :movie = "movie"
        ></MovieItem>
    </div>
```

我们从后端请求到数据，有的时候会不符合我们的实际需求，比如播放量返回一个很大的数字，不方便阅读和观看，这时候我们就需要设置一个filter过滤器，将数据处理成我们想要的格式。这里我们设置一个filterData方法，如果接收到的数据大于10000，我们就把当前这个数字除以10000，通过.toFixed（）保留一位小数，再拼接一个“万”显示在页面上。filter必须要有返回值，处理完之后我们要将data数据返回。

```
filters:{
        filterData(data){
            // console.log(typeof data) //num数字类型
            if(data > 10000){
                data = data /10000;
                data = data.toFixed(1)
                data += "万"
            }
            return data;
        }
    }
```

在组件中通过“|”来使用：

```
<div class = "count line-height">播放量<span class = "sc">{{movie.collect_count | filterData}}</span></div>
```

#### （2）mint-ui：UI库

安装mint-ui：

```
cnpm i mint-ui -S
```

安装成功后显示：

![](http://ww1.sinaimg.cn/large/006tNc79ly1g58w4tbyqjj30q2066ab3.jpg)

官网提供了两种引入mint-ui组件的方式，第一种是完整引入，体积比较大，第二种是按需引入，只引入需要用到的组件，推荐使用第二种。

![](http://ww1.sinaimg.cn/large/006tNc79ly1g59hbdk9baj30xa0u0q6y.jpg)

使用第二种方式的时候还需要安装一个插件：

```
npm install babel-plugin-component -D
```

![](http://ww3.sinaimg.cn/large/006tNc79ly1g59hbsu30gj30vg060gmr.jpg)

之后把下面的内容添加到babel.config.js文件中:

```
"plugins": [["component", 
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]
```

这里插一个小BUG，如果你在安装babel模块的时候遇到了如下问题，请参考这篇文章解决：

https://segmentfault.com/a/1190000016458913，原因就是babel升级后舍弃了以前的命名方式，修改依赖和babel.config.js配置文件后就可以正常启动项目了，关于这个坑网上有不少解决方法，尝试过了之后发现只有这篇文章完美解决问题。

![](http://ww4.sinaimg.cn/large/006tNc79ly1g59hcdbp3sj313k0jijwf.jpg)

#### （3）Lazyload：懒加载组件

实现懒加载功能

首先引入Mint-UI中的懒加载模块

```
//引入mint-ui相关的模块
import {Lazyload} from "mint-ui"
Vue.use(InfiniteScroll);
```

将图片的src属性换为v-lazy指令

```
<img width = "100%" v-lazy = "getImages(movie.images.small)" alt = "">
```

这样页面在渲染图片的时候就可以实现懒加载的效果，只有用户下滑需要加载图片的时候才加载

![](http://ww2.sinaimg.cn/large/006tNc79ly1g59hcsfpt2j30nm0d478l.jpg)

未加载的图片，真正的src属性暂时存放在data-src中

![](http://ww1.sinaimg.cn/large/006tNc79ly1g59hczloekj30lo06w0uf.jpg)

#### （4）InfiniteScroll：无限加载

mint-ui中也提供了一个插件，实现上拉加载功能，叫做InfiniteScorll，还是在main.js中引用

```
//引入mint-ui相关的模块
import { Lazyload, InfiniteScroll } from "mint-ui"
Vue.use(Lazyload);
Vue.use(InfiniteScroll);
```

在MovieBox模块中为最外层的div标签添加v-infinite-scroll 指令，即可使用无限滚动。

```
<div class = "moviebox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
```

![](http://ww4.sinaimg.cn/large/006tNc79ly1g59he3a6f1j31ea0gqgpm.jpg)

v-infinite-scroll：滚动距离小于阈值的时候会触发的方法，默认值为false

infinite-scroll-disabled：若为真，则无限滚动不会被触发

infinite-scroll-distance：触发加载方法的滚动距离阈值（像素）

infinite-scroll-immediate-check：若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。，默认值为true，改成false则不会执行loadMore方法

我们在methods中编写loadMore方法实现无限滚动

```
methods:{
        loadMore(){
            console.log("loadmore")
            }
        },
    }
```

只要无限滚动开启，loadMore方法在页面创建的时候就会默认执行一次，所以我们把之前在created中写的代码封装成一个getMovies的方法写在methods中，在loadMore中触发

```
methods:{
        loadMore(){
            console.log("loadMore")
            this.getMovies();
        },
        getMovies(){
            this.$http.get("/api/db/in_theaters",{
            params:{
                limit:6
            }
            }).then(res=>{
                this.movies = res.data.object_list
            })
        }
    }
```

当infinite-scroll-disabled值为false的时候无限滚动才会被出发，我们给它赋值loading，所以需要在data中定义loading并赋值false，让它默认触发无限滚动。

```
data(){
        return{
            movies:null,
            loading:false,//默认触发无限滚动
        }
    }
```

当我们往下继续滑动的时候需要请求第二页的参数，所以需要用到page属性，当我们请求数据的时候需要实现动态加载，所以我们要把limit和page拿出来单独进行配置。

```
data(){
        return{
            movies:null,
            loading:false,//默认触发无限滚动
            limit:6,
            page:1,
        }
    }
```

利用解构赋值给params,在.then函数中执行page++

```
getMovies(){
            // 解构的写法
            let{page,limit} = this;
            this.$http.get("/api/db/in_theaters",{
            params:{
                limit,
                page
            }
            }).then(res=>{
                this.movies = res.data.object_list
                this.page++
            })
        }
```

这时候我们发现后请求到的数据把之前的数据覆盖了，我们要实现的效果是在第一页的基础上累加，所以我们需要给movies初始化成一个空数组。

```
movies:[],
```

利用数组的concat方法在原有的基础上拼接数组，并且返回新数组赋值给movies。

```
//在原来的基础上拼接数组，并且返回新数组
                this.movies = this.movies.concat(res.data.object_list)
```

这时候我们就可以实现下滑加载新内容的效果，但是又出现了另一个问题，从数据请求结果来看，同一个loadMore方法被多次触发

![](http://ww3.sinaimg.cn/large/006tNc79ly1g59heqq04tj30qa02k3yv.jpg)

而我们只需要请求一次，所以在我们请求数据的时候就需要暂时把loadMore关闭

```
this.loading = true;
```

当数据回来的时候在.then函数中再开启

```
this.loading = false;
```

这样才不会频繁触发无限滚动的方法，但是现在即使之后没有数据了，它还是会发送数据请求，所以我们需要设置一个参数来监控是否还有更多数据，没有数据的时候提示用户，同时阻止后续操作

```
hasMore:true //是否有更多数据，默认有更多数据
```

在.then函数中编写判断语句，limit乘以page是否大于总数，如果大于就给给hasMore赋值为false，同时return false阻止后续操作，这一步需要放在page++前面

```
if(this.limit * this.page >= res.data.total){ //判断是否有更多数据
                        this.hasMovies = false //没有更多数据时将hasMovies赋值为false，返回false，不执行接下来的page++
                        return false
                    }
this.page++
```

在loadMore中写判断语句，如果hasMore为false则关闭无限滚动，同时停止getMovies方法，不用再发送ajax请求了，也不会频繁触发loadMore方法

```
loadMore(){
            if(!this.hasMore){
                this.loading = true //没有更多数据的时候关闭无限滚动，同时返回false，不执行接下来的操作
                return false
            }
            this.getMovies();
        }
```

![](http://ww4.sinaimg.cn/large/006tNc79ly1g59hf3ukgcj30q608iabm.jpg)

#### （5）Toast：弹出框组件

为了给用户一个好的使用体验，需要在数据加载完毕的时候给用户一个提示，这时候就要用到Toast弹出框组件，先在MovieBox中加载模块，因为*Toast*无法像全局变量一样使用,只能即时*引入*。

```
import {Toast} from "mint-ui"
```

duration是持续的毫秒数，如果想让它一直显示只需要赋值为-1，执行 Toast 方法会返回一个 Toast 实例，每个实例都有 close 方法，用于手动关闭 Toast。

![](http://ww1.sinaimg.cn/large/006tNc79ly1g59hfcf8prj31500jqtbq.jpg)

在请求数据之前，放置一个Toast，提示用户数据正在加载

```
let instance = Toast({
                message: '正在加载中...',
                duration: -1,
                iconClass:"fa fa-cog fa-spin"
            })
```

加载完成之后在.then函数中调用close方法，关闭弹出框

```
instance.close();
```

由于我使用mint-ui中的toast样式出错，所以这里改使用Vant，它是一个轻量、可靠的移动端 Vue 组件库，参数设置和mint-ui差不多，通过vant.Toast来定义：

```
const toast1 = vant.Toast.loading({
                message: '正在加载中',
                duration: 0,
            })
```

duration为0时不会自动关闭，将它赋值给一个常量，通过.clear（）方法关闭。

```
toast1.clear();
```

![](http://ww2.sinaimg.cn/large/006tNc79ly1g59hfr4sorj316f0u0459.jpg)

toast弹窗效果：

![](http://ww3.sinaimg.cn/large/006tNc79ly1g5b709pcixg30pw10wnb2.gif)



###  9、选项卡切换

#### （1）watch监控数据变化

我们需要给首页添加一个正在热映和即将上映的选项卡，采用数据动态加载的方法，在data中定义一个navs的数组

```
data(){
      return{
        type:"in_theaters",
        navs:[
          {id:1,title:"正在热映",type:"in_theaters"},
          {id:2,title:"即将上映",type:"coming_soon"},
        ],
      }
    }
```

在span中循环遍历这个数组，在页面渲染数据，同时添加“active”的calss名，和点击事件的方法，鼠标点击选项时，更改type值，同时class判断type是否等于nav.type，等于的时候添加active选中样式，实现被点击的选项变为选中态的效果。

```
<div class = "navbar"">
          <span
            v-for = "nav in navs"
            :key = "nav.id"
            :class  = "{'active':type === nav.type}"
            @click = "type = nav.type"
          >{{nav.title}}</span>
        </div>
```

由于我们在MovieBox中请求数据是使用了/api/db/in_theaters这个地址，所以现在只能请求到正在热映的数据，我们需要将type值传递给MovieBox

```
<MovieBox :type = "type"></MovieBox>
```

MovieBox接收

```
props:["type"],
```

然后将intheaters改为this.type，实现动态切换请求接口

```
this.$http.get("/api/db/" + this.type,{
```

想实现点击切换的时候显示不同数据，就需要让MovieBox这个组件根据type值的变化做后续操作，这个时候我们就需要用到watch来监控type值的变化，让type值变化的时候就要做一些业务逻辑处理，让原来的movies数组清空，page从第一页开始，hasMore赋值为true，再重新触发getMovies方法请求更多数据。

```
watch:{
        type(){
            this.movies = [];
            this.page = 1;
            this.hasMore = true;
            this.getMovies();
        }
    }
```

选项卡切换效果：

![](http://ww1.sinaimg.cn/large/006tNc79ly1g5b6xrzjh8g30pw126npe.gif)

### 10、**固定选项栏**

#### （1）created钩子函数

当页面向下滚动到一定高度的时候我们需要将选项栏固定，要实现这个效果，我们首先要在data中定义一个数据isfixed，初始值为false

```
isfixed:false,
```

当滚动到一定高度的时候，值为true，同时给选项栏和页面内容动态绑定class，添加固定定位样式

```
<div class = "tab" :class = "{fixedTop:isfixed}">
<div :class = "{fixedBox:isfixed}">
```

我们在created函数中监听scroll事件，获取页面的滚动高度，同时为了避免重复触发这个事件，当同时满足滚动高度大于50并且isfixed值为false的时候才触发这个事件。

```
 created(){//初始化一些生命周期相关的事件
      window.addEventListener("scroll",e=>{
        //获取滚动高度
let sTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(sTop >= 50 && !this.isfixed){
          this.isfixed = true;
        }else if(sTop < 50 && this.isfixed){
          this.isfixed = false;
        }
    })
```

现在可以实现滚动一定距离，选项栏固定效果，但是，我们会发现在其他页面滚动的时候也会触发这个效果，所以我们要将这个函数写在methods中，重新定义一个方法listenScroll()：

```
methods:{
      listenScroll(e){
        //获取滚动高度
        let sTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(sTop >= 330 && !this.isfixed){
          this.isfixed = true;
        }else if(sTop < 300 && this.isfixed){
          this.isfixed = false;
        }
      }
    }
```

在created中添加这个方法：

```
created(){//初始化一些生命周期相关的事件
      window.addEventListener("scroll",this.listenScroll)
    },
```

#### （2）beforeDestory钩子函数

然后在离开当前页面的时候将这个方法销毁：

```
beforeDestory(){//组件替换，相当于组件被销毁的时候，执行销毁操作
      window.removeEventListener("scroll",this.listenScroll)
    },
```

这样它就不会干涉其他页面的业务逻辑



### 11、**记录缓存**


#### （1）keep-alive：缓存标签

当我们在组件之间进行切换的时候，我们想保持首页的浏览状态，不要让它重复渲染，这时候我们就需要用到keep-alive标签，将需要被缓存的内容包裹起来，通过include属性来选择name匹配的组件

```
<keep-alive include = "home">
      <router-view></router-view>
</keep-alive>
```

此时我们的home组件就会被缓存，所以他的created函数只会执行一次，它不会被销毁，beforeDestory方法也不会执行，所以我们之前的方法需要写在activated 和 deactivated 这两个生命周期钩子函数中。

#### （2）activated和deactived生命周期函数

**activated** **和** **deactivated** **只会在** **<keep-alive>** 树内的嵌套组件中触发。

```
activated(){
      window.addEventListener("scroll",this.listenScroll)
    },
    deactivated(){
      window.removeEventListener("scroll",this.listenScroll)
    }
```

这时候会发现一个问题，当我们离开这个组件的时候，他会一次性把数据请求完毕，所以我们需要在deactived方法中将this.loading值赋为true，关闭无限滚动，在activated中再开启。

```
activated(){
      window.addEventListener("scroll",this.listenScroll)
      this.loading = false;//开启无限滚动
    },
    deactivated(){
      window.removeEventListener("scroll",this.listenScroll)
      this.loading = true;//关闭无限滚动
    }
```

同时从别的组件中进入的时候需要给this.isfixed重新赋值为false，不然它一直是固定定位。

```
deactivated(){
      window.removeEventListener("scroll",this.listenScroll)
      this.isfixed = false;
      this.loading = true;//关闭无限滚动
    }
```

#### （3）beforeRouteLeave钩子函数

我们在beforeRouteLeave中通过document.documentElement.scrollTop获得滚动高度

```
beforeRouteLeave(to,from,next){
      this.homeTop = document.documentElement.scrollTop;
      next();
    }
```

#### （4）scrollTo方法

在activated添加window.scrollTo方法记录滚动条位置

```
activated(){
      window.addEventListener("scroll",this.listenScroll)
      window.scrollTo(0,this.homeTop)
    }
```

或者也可以通过给document.documentElement.scrollTop赋值为this.homeTop实现跳转记录滚动条位置

```
document.documentElement.scrollTop = this.homeTop
```

keep-alive标签缓存效果：

![](http://ww2.sinaimg.cn/large/006tNc79ly1g5b7199srcg30pw10wash.gif)

### 12、**返回顶部**


#### （1）自定义指令

我们需要给首页添加一个返回顶部的组件，同时在data中定义一个isShow参数搭配v-if指令控制返回顶部按钮显示与隐藏，默认一开始是不出现的。

```
data(){
        return {
            isShow:false
        }
    }
```

因为我们在父组件中添加了keep-alive，所以在子组件中也可以使用activated和deactivated方法，还是在methods中添加listenScroll方法，规定在滚动到200px的时候显示。

```
methods:{
        listenScroll(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop
            //避免重复触发
            if(sTop >= 200 && !this.isShow){
                this.isShow = true;
            }else if(sTop < 200 && this.isShow){
                this.isShow = false;
            }
        },
    }
```

在两个钩子函数中进行添加和移除操作。

```
activated(){
        window.addEventListener("scroll",this.listenScroll)
    },
    deactivated(){
        window.removeEventListener("scroll",this.listenScroll)
    }
```

我们需要实现点击按钮返回顶部的操作，就需要给按钮绑定点击事件

```
<div class="back-top-box" v-if = "isShow" @click = "backTop">
```

同时在methods中编写backTop方法

```
backTop(){
            window.scrollTo(0,0)
        }
```

但是如果页面中也可以双击选项栏返回顶部，重复绑定事件比较麻烦，这时候我们就可以将这个方法写成一个自定义指令，再需要这个功能的标签上添加指令即可。

即在modules中封装自定义指令，通过binding.arg获取时间类型，默认是click：

```
//v-backtop 就可以实现返回顶部功能
import Vue from "vue"
Vue.directive("backtop",{
    bind(el,binding,vnode){
        let eventType = binding.arg || "click";
        el.addEventListener(eventType,e=>{
            window.scrollTo(0,0)
        })
    }
})
```

在main.js中注册

```
//引入directive
import "./modules/directive"
```

在按钮中添加自定义指令，实现点击返回顶部

```
<div class="back-top-box" v-if = "isShow" v-backtop>
```

在选项栏中添加自定义指令，实现双击返回顶部

```
<div class = "tab" :class = "{fixedTop:isfixed}" v-backtop:dblclick>
```

返回顶部运行效果：

![](http://ww2.sinaimg.cn/large/006tNc79ly1g5b72s879kg30pw10w1kx.gif)

### 13、**电影详情页**


#### （1）动态路由

创建MovieDetail页面，通过：id配置动态路由

```
export default {
    name:"moviedetail",
    path:"/moviedetail/:id",
    component:()=>import("@/views/Movie/MovieDetail")
}
```

在index中引入、注册，

```
import moviedetail from "./moviedetail"
```

在MovieItem中添加router-link，动态传递参数movie.id

```
<router-link 
        :to = "{name:'moviedetail',params:{id:movie.id}}"
        tag = "div"
        class = "main_block">
```

将获取到的res.data赋值给movie

```
getMovie(){
            this.$http.get("/api/db/movie_detail/" + this.$route.params.id).then(res => {
                this.movie = res.data
            })
        }
```

将我们需要的数据动态渲染到页面上，之后我们再添加一个Mint-UI中的Header组件，标题赋值为movie.title，添加返回按钮，在main.js中引入Header组件

```
import { Lazyload, InfiniteScroll, Header, Button } from "mint-ui"
Vue.component("mt-header", Header);
Vue.component("mt-button", Button);
```

在页面中插入mt-header标签，现在已经可以实现点击跳转到对应电影详情页的效果。

```
<mt-header fixed :title="movie.title">
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
```

详情页运行效果：

![](http://ww2.sinaimg.cn/large/006tNc79ly1g5b6zql3ywg30pw1267v9.gif)

### 14、**购物车效果**

#### （1）vuex 官方状态管理工具

> vue提供的一个全局的状态管理工具，主要处理项目中多组件间状态共享

Vuex是vue官方的一款状态管理工具，什么是状态呢？我们在前端开发中有一个概念：数据驱动，页面中任意的显示不同，都应该有一条数据来控制，而这条数据又叫做state，状态。

在vue中。组件间进行数据传递、通信很频繁，而父子组件和非父子组件的通信功能也比较完善，但是，唯一困难的就是多组件间的数据共享，这个问题由vuex来处理。

接下来我们需要实现一个购物车效果，先配置一个底部导航栏:

在mine组件中再新建两个组件，一个是购物车car页面，一个是购物列表list页面，在mine路由中，配置二级路由。

```
//配置二级路由
    children:[
        {path:"",redirect:"list"},
        {path:"list",component:()=>import("@/views/Mine/List"),name:"list"},
        {path:"car",component:()=>import("@/views/Mine/Car"),name:"car"},
    ]
```

在mine中用router-view来显示二级组件页面，引入mint-ui中的tabbar底部导航组件，在main.js中注册。

```
//引入mint-ui相关的模块
import { Lazyload, InfiniteScroll, Header, Button, Tabbar, TabItem } from "mint-ui"
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
```

在mine页面中引用，将item数据动态加载到页面上，添加router-link实现点击跳转功能

```
<mt-tabbar>
           <mt-tab-item
            v-for="nav in navs"
            :key="nav.id"
           >
            <router-link :to = "{name:nav.name}" active-class = "active">
              <img :src = "nav.src">
              {{nav.title}}
            </router-link>
           </mt-tab-item>
 </mt-tabbar>
```





可以安装Vue Devtools插件来查看vuex的状态

![](http://ww1.sinaimg.cn/large/006tNc79ly1g59i4uolkpj310e0tk41c.jpg)

#### （2）vuex的创建

1. 创建store：

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions 
})
```



2. 设置state

state就是一个纯对象，上面有一些状态挂载，声明一条共享数据

```
export default {
    num:0//声明一条共享数据
}
```

3. 在根实例里配置store

这样，我们就可以在任意的组件中通过this.$store来使用关于store的api

![](http://ww1.sinaimg.cn/large/006tNc79ly1g59i7asiaej30zm0f4q6j.jpg)

4. 在组件中使用state

因为在组件中可以通过this.$store来访问store

所以我们也可以通过this.$store.state来使用state中管理的数据，将它写在data中

```
data(){
        return{
            num:this.$store.state.num
        }
    }
```

之后就可以通过{{num}}来获取数据

但是我们发现，这样使用的话，当state的数据更改的时候，vue组件并不会重新渲染

也就是说，如果想要在组件中响应式的使用的时候，我们需要通过计算属性（computed）来使用

```
computed:{
    num(){
        return this.$store.state.num
    }
}
```

这样的写法很无趣，而且如果使用的状态较多会产生冗余的感觉，所以vuex提供了mapState辅助函数，帮助我们在组件中获取并使用vuex的store中保存的状态，但是mapState也是一个对象，对象不能嵌套对象

```
computed:{
        mapState({
            num:state => state.num
        })
    }
```

所以我们可以这样写：

```
computed:mapState(["num"])
```

或者将mapState使用...展开：

```
computed:{
        ...mapState({
            num:state => state.num
        })
    }
```

但是如果组件中已经有了num这个数据了，而state中的数据名字也叫num就会照成冲突，这个时候我们可以在组件使用state的时候，给状态起个别名：

```
computed:{
        ...mapState({
            _num:state => state.num //相当于通过this.$store.state.num来获取num的方法
        })
    }
```

5. getters

有的时候，我们需要根据state中的某一个状态派生出一个新的状态，例如，我们state中有一个num，在某些组件中需要用到是num的二倍的一个状态，我们就可以通过getters来创建。

```
export default{
    doubleNum(state){
        return state.num*2
    }
}
```

创建了之后，在组件中通过this.$store.getters.doubleNum来获取里面的数据

当然vuex也提供了mapGetters辅助函数来帮助我们在组件中使用getters里的状态，且使用的方法和mapState一模一样，展开后赋值即可。

```
import {mapState,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState({
            _num:state => state.num //相当于通过this.$store.state.num来获取num的方法
        }),
        ...mapGetters(["doubleNum"])
    }
```

使用的时候直接双括号里面写方法名

```
{{doubleNum}}
```



6. 使用mutations更改state

我们不能直接在组件中更改state：this.$store.state.num=2,而是需要使用mutations来更改，mutations也是一个纯对象，里面包含很多更改state 的方法。

```
export default{
    changeNum(state) {
        state.num++
    }
}
```



这些方法的形参接收到state，在函数体里更改，这时，组件用到的数据也会更改，实现响应式。

但是我们也不能直接调用mutations 的方法，需要使用this.$store.commit来调用，第一个参数为调用的方法名，第二个参数为传递参数。

```
methods:{
        changeNum(){
            this.$store.commit("changeNum")
        }
    }
```



vuex提供了mapMutations方法来帮助我们在组件中调用mutations 的方法,使用方法和mapState、mapGetters一样，但是它要写在methods中。

```
methods:{
        ...mapMutations(["changeNum"])
    }
```

7. 将方法名定义为一个常量

为了防止方法名被更改，我们一般将它单独定义在一个常量文件const.js中，使用的时候引入

```
import { CHANGE_NUM} from "./const"
export default{
    CHANGE_NUM(state) {
        state.num++
    }
}
```

但是这样定义之后只能使用CHANGE_NUM这个名字，当常量中的名字改变时，它不会同步更改，所以我们要在外部给它包裹一个中括号，让它成为一个变量[CHANGE_NUM]，方便我们维护和管理。

```
//引入
import {CHANGE_NUM} from "@/store/const"
//注册
methods:{
        ...mapMutations([CHANGE_NUM])
    }
//使用
<button @click = "CHANGE_NUM">点击NUM!</button>
```



8. 使用actions来处理异步操作

Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。 Action 可以包含任意异步操作。

也就是说，如果有这样的需求：在一个异步处理之后，更改状态，我们在组件中应该先调用actions，来进行异步动作，然后由actions调用mutation来更改数据

```
import { RANDOM_NUM } from "./const"
export default{
    getNumFromBackend(store){//actions一般做异步请求获取数据，然后派发mutations里面具体的更改状态的方法
        setTimeout(()=>{
            //获取一个随机值100
            let randomNum = Math.floor(Math.random()*100)
            store.commit(RANDOM_NUM, randomNum)//actions中的store参数用来派发mutations里面具体的方法，才能去更改state的值
        },1000)
    }
}
```

mutations接收到actions中传来的随机数，赋值给状态

```
import { CHANGE_NUM, RANDOM_NUM} from "./const"
export default{
    [CHANGE_NUM](state) {
        state.num++
    },
    [RANDOM_NUM](state,randomNum){
        state.num = randomNum//给状态赋值随机数
    }
}
```

前端页面中点击button触发事件

```
<button @click = "getRandom">随机出现num值！</button>
```



state变化之后，执行render，视图重新渲染，就可以拿到最新的state

```
getRandom(){
            //派发action
            this.$store.dispatch("getNumFromBackend")
        }
```

在组件中通过this.$store.dispatch方法调用actions的方法

当然也可以使用mapActions来辅助使用

```
...mapActions(["getNumFromBackend"])
```

使用的时候直接写actions中的方法名即可

```
<button @click = "getNumFromBackend">随机出现num值！</button>
```



9. 使用modules来进行模块化划分

当数据信息比较多的时候，我们将属于同一个模块的文件放到一个modules中进行管理，创建myNum文件夹，将actions、const、getters、mutations、state直接放到myNum中去管理。

在myNum文件中创建index.js文件将每个模块导出

```
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
export default{
    state,mutations,actions,getters
}
```

在index.js中重新引入

```
import myNum from "./myNum"
export default new Vuex.Store({
    modules:{
     myNum
    }
})
```

现在我们要在前端页面中更改引用路径

```
import {CHANGE_NUM} from "@/store/myNum/const"
```

我们通过state.num没法获取到num值了

![](http://ww1.sinaimg.cn/large/006tNc79ly1g59i9lf6obj30ei07s0t2.jpg)



我们需要在外面再嵌套一层myNum

```
...mapState({
            _num:state => state.myNum.num
        })
```



#### （3）接下来我们就来实现一个购物车的效果

首先在store中创建myCar文件夹，依次创建

1. state.js：存放共享数据

2. actions.js：进行异步请求

3. const.js：常量名称

4. mutations.js：更改状态的方法

5. getters:根据一个状态派发一个新状态

6. index.js：进行汇总



在index.js中将这些文件依次引入

```
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
export default{
    state,mutations,actions,getters
}
```

在store/index.js中引入myCar中的index

```
import myNum from "./myNum"
import myCar from "./myCar"
export default new Vuex.Store({
    modules:{
        myNum,
        myCar
    }
})
```



在state.js中先定义一个空数组cars

```
export default {
    cars:[]//声明一条共享数据
}
```



这样我们就可以在state中拿到cars的数据，默认为空。

![](http://ww3.sinaimg.cn/large/006tNc79ly1g59ibyxlyxj30c008mwey.jpg)

这里我们使用mint-ui中的cell组件来搭建页面,承载每一个购物项。先在main.js中注册一下

```
import { Lazyload, InfiniteScroll, Header, Button, Tabbar, TabItem,Cell} from "mint-ui"
Vue.component("mt-cell", Cell);
```

之后我们就可以通过mt-cell来使用它了

```
<mt-cell
            title = '标题文字'
            value = '带链接'
            label = "描述信息"
        >
        <img slot = "icon" src = "" alt = "">
        </mt-cell>
```

将我们获取到的购物商品数据放到public静态文件夹下的api中的goods.json中

```
{
    "dealList":[
        {
            "firstTitle": "单人",
            "title":"46oz原味爆米花1桶+22oz可乐1杯",
            "price": 33,
            "dealId": 100154273,
            "imageUrl":"https://p0.meituan.net/movie/5c30ed6dc1e3b99345c18454f69c4582176824.jpg@388w_388h_1e_1c",
            "curNumberDesc": "已售379"
        },
        {
            "firstTitle": "单人",
            "title": "46oz原味爆米花1桶+22oz雪碧1杯",
            "price": 33,
            "dealId": 100223426,
            "imageUrl": "https://p0.meituan.net/movie/5c30ed6dc1e3b99345c18454f69c4582176824.jpg@388w_388h_1e_1c",
            "curNumberDesc": "已售12"
        },
        {
            "firstTitle": "单人",
            "title": "进口食品1份",
            "price": 8.89,
            "dealId": 100212615,
            "imageUrl": "https://p1.meituan.net/movie/21f1d203838577db9ef915b980867acc203978.jpg@750w_750h_1e_1c",
            "curNumberDesc": "已售8"
        },
        {
            "firstTitle": "双人",
            "title": "85oz原味爆米花1桶+22oz可乐两杯",
            "price": 44,
            "dealId": 100152611,
            "imageUrl": "https://p0.meituan.net/movie/bf014964c24ca2ef107133eaed75a6e5191344.jpg@388w_388h_1e_1c",
            "curNumberDesc": "已售647"
        },
        {
            "firstTitle": "双人",
            "title": "85oz原味爆米花1桶+22oz雪碧两杯",
            "price": 44,
            "dealId": 100223425,
            "imageUrl": "https://p0.meituan.net/movie/bf014964c24ca2ef107133eaed75a6e5191344.jpg@388w_388h_1e_1c",
            "curNumberDesc": "已售6"
        },
        {
            "firstTitle": "多人",
            "title": "85oz原味爆米花1桶+22oz可乐2杯+冰川时代水1瓶",
            "price": 55,
            "dealId": 100152612,
            "imageUrl": "https://p1.meituan.net/movie/c89df7bf2b1b02cbb326b06ecbbf1ddf203619.jpg@388w_388h_1e_1c",
            "curNumberDesc": "已售89"
        }
        
    ]
}
```

先声明一个数据data存放商品。

```
data(){
        return{
            goods:[],
        }
    }
```

定义方法getGoods异步请求数据

```
methods:{
        getGoods(){
            this.$http.get("/api/goods.json").then(res=>{
                console.log(res)
            })
        }
    },
```

在生命周期钩子函数中调用一下

```
created(){
        this.getGoods()
    }
```

可以拿到res上的数据，赋值给goods

```
getGoods(){
            this.$http.get("/api/goods.json").then(res=>{
                // console.log(res)
                this.goods = res.data.dealList;
            })
        }
```

在mt-cell中循环渲染

```
<mt-cell
            :title="good.title"
            :label="'￥'+good.price"
            v-for="good in goods" 
            :key="good.dealId"
        >
        <mt-button type = "danger" size = "small" @click = "addGoodInCar(good)">购买</mt-button>
        <div class = "firstTitle">{{good.firstTitle}}</div>
        <img width ="70" height = "70" slot="icon" :src="good.imageUrl" alt="">
        </mt-cell>
```

真正请求购物车信息应该是从后台异步请求的，现在我们依靠localstorage作为后台，模拟后台数据库，存储我们的cars数据。

```
function getCar(){
    return JSON.parse(localStorage.cars ? localStorage.cars : "[]")
}
```

现在在action.js中编写添加商品到购物车的方法addGoodInCar

```
addGoodInCar(store,goodInfo){//添加商品到购物车
        setTimeout(()=>{
            //获取后台返回来的购物车
            let cars = getCar();//[{}]
            let isHas = cars.some(item => {//判断原来的购物车是否有这个商品
                if (item.dealId === goodInfo.dealId){//如果相等代表添加进来的是同一个商品
                item.num++//商品数++
                return true;}
            })
            if (!isHas) {//说明购物车没有此商品
                goodInfo.num = 1;//商品数赋值为1
                cars.push(goodInfo)//将商品添加到cars数据中
            }
            //通知后台更改cars
            localStorage.cars = JSON.stringify(cars)
            //前段需要通过mutations具体的方法去更改state里面的cars
            store.commit(SYNC_UPDATE, cars)
        },1000)
    }
```

在const中声明一个常量

```
const SYNC_UPDATE = "SYNC_UPDATE"
export { SYNC_UPDATE }
```

mutations中定义更新数据的方法

```
import { SYNC_UPDATE} from "./const"
export default{
    [SYNC_UPDATE](state,newCar){
        state.cars = newCar;
    }
}
```

在actions中调用这个方法

```
store.commit(SYNC_UPDATE, cars)
```

在前端页面中调用这个方法

```
import {mapActions} from "vuex"

methods:{
        ...mapActions(["addGoodInCar"])
    }
```

在mt-button上添加点击事件，同时将good参数传递过去

```
<mt-button type = "danger" size = "small" @click = "addGoodInCar(good)">购买</mt-button>
```

在页面中点击button，过了一秒钟，cars中获取到一个商品信息，再次点击，num属性++，变成2。

![](http://ww2.sinaimg.cn/large/006tNc79ly1g59icjv4qtj312u0iiq6e.jpg)

在actions中写一个获取购物车的方法

```
initCar(store){
        //获取购物车
        let cars = getCar()
        store.commit(SYNC_UPDATE,cars)
    }
```

在全局App.js中的created钩子函数中调用，这样别的组件就可以拿到cars上的数据了，多组件共享的数据放在vuex中进行管理。

```
created(){
      //让页面走一下首页，触发Header中的router.beforeEach函数，不然头部会重复出现
      this.$router.push("/")
      //初始化购物车
      this.$store.dispatch("initCar")
    }
```

参考list，开始编写car.vue页面，它不需要请求数据了，只需要显示数据，可以通过mapState辅助显示state中的数据。

```
import {mapState} from "vuex"
export default { 
    computed:{
        ...mapState({
            cars:state=>state.myCar.cars
        })
    }
}
```

上面v-for循环就直接从cars中取数据

```
v-for="good in cars" 
```

将button改为"+"和"-"

```
<mt-button type = "danger" size = "small" @click = "addGoodInCar(good)">+</mt-button>
<mt-button type = "danger" size = "small" @click = "addGoodInCar(good)">-</mt-button>
```

引入addGoodInCar方法

```
import {mapState,mapActions} from "vuex"
export default { 
    computed:{
        ...mapState({
            cars:state=>state.myCar.cars
        })
    },
    methods:{
        ...mapActions(["addGoodInCar"]])
    }
}
```

在actions中编写减少商品的方法

```
reduceGoodInCar(store,goodInfo){
        //获取后台返回来的购物车
        let cars = getCar();
        cars = cars.filter(item=>{
            if (item.dealId === goodInfo.dealId){
                item.num--
            }
            return true;
        })
        //通知后台更改cars
        localStorage.cars = JSON.stringify(cars)
        //前段需要通过mutations具体的方法去更改state里面的cars
        store.commit(SYNC_UPDATE, cars)
    }
```

在item--后面添加判断，当数量小于等于0的时候直接return false组织后续操作

```
if(item.num<=0) return false
```

接下来我们再在页面增加一个计算总价的功能，由于我们要依靠于数量和单价的变化来计算总价，所以我们要把这个方法写在getters里面

```
export default{
    computedTotal(state){
        let cars = state.cars;//在同一个module里面可以直接state.cars获取
        let total = {price:0,num:0} //声明一个total对象存放总价和数量
        cars.forEach(item=>{
            total.price += item.price * item.num; //总价等于商品价格乘以数量
            total.num += item.num //总数累加
        })
        return total //返回total对象
    }
}
```

使用mapGetters辅助引入computedTotal方法

```
import {mapState,mapActions,mapGetters} from "vuex"
export default { 
    computed:{
        ...mapState({
            cars:state=>state.myCar.cars
        }),
        ...mapGetters(["computedTotal"])
    },
    methods:{
        ...mapActions(["addGoodInCar","reduceGoodInCar"])
    }
}
```

点击增加商品数量，会发现总数有时候会出现很多位小数的情况,我们需要对获取到的price进行数据处理

```
total.price = total.price.toFixed(2)//向上取整，并保留两位小数
```

在首页我们通过v-if和v-else控制商品信息的显示与隐藏，没有商品的时候显示一个p标签，提示用户没有商品了，并且提供一个router-link跳转回商品列表页。

```
<p v-if = "cars.length === 0">
            没有商品了
            <router-link to = "/mine/list">点击此处购买商品</router-link>
        </p>
        <div v-else>
            <mt-cell
                :title="good.title"
                :label="'￥'+good.price+'*'+good.num" 
                v-for="good in cars" 
                :key="good.dealId"
            >
            <mt-button type = "danger" size = "small" @click = "addGoodInCar(good)">+</mt-button>
            <mt-button type = "danger" size = "small" @click = "reduceGoodInCar(good)">-</mt-button>
            <div class = "firstTitle">{{good.firstTitle}}</div>
            <img width ="70" height = "70" slot="icon" :src="good.imageUrl" alt="">
            </mt-cell>
        </div>
```

购物车运行效果：

![](http://ww3.sinaimg.cn/large/006tNc79ly1g5b7467gvag30pw10w4br.gif)

### 15、打包上线

#### （1） 修改配置文件

找到项目的Vue-config.js配置文件，在module.exports中将publicPath: 改为：'/v-douban/'

![](http://ww1.sinaimg.cn/large/006tNc79ly1g5awjxr1aij30og0asmyq.jpg)

同时本地请求的路径也需要/v-douban

![](http://ww4.sinaimg.cn/large/006tNc79ly1g4a42bsludj30w20b4di3.jpg)

#### （2）打包文件

执行`yarn build `打包成dist文件包

#### （3）连接FTP服务器，修改nginx

进入/usr/local/nginx/conf目录，传输nginx.config文件到本地。

![](http://ww3.sinaimg.cn/large/006tNc79ly1g4a453upi3j30wg0ouwrf.jpg)

修改nginx.config文件，配置数据接口代理。

```
location /api/db {
            proxy_pass http://47.96.0.211:9000/db;
        } 

        location /data/my {
            proxy_pass http://118.31.109.254:8088/my;
        } 

        location /douban/my {
            proxy_pass http://47.111.166.60:9000/my;
        } 
```

上传新的nginx.config文件到服务器，覆盖原文件。

![](http://ww2.sinaimg.cn/large/006tNc79ly1g5awnnfvaoj30xw0jy7ej.jpg)

在终端连接数据库，并且重启nginx服务器。

```
./nginx -s reload
```

![](http://ww4.sinaimg.cn/large/006tNc79ly1g4ab1cyk55j30nc03mq54.jpg)

由于我们这次配置使用了https路径所以要启动SSL功能

可以参考这篇文章：

https://www.cnblogs.com/piscesLoveCc/p/6120875.html

安装完成后查看配置文件是否更新：

![](http://ww1.sinaimg.cn/large/006tNc79ly1g4a4330o43j30vo05k0wg.jpg)

进入/usr/local/nginx/html目录创建一个v-douban文件夹

![](http://ww2.sinaimg.cn/large/006tNc79ly1g5awdaeok2j31af0u0b0x.jpg)

将打包后的dist文件夹中的所有文件上传到服务器

![](http://ww2.sinaimg.cn/large/006tNc79ly1g4a43i2x9cj31ui0ocdz6.jpg)



传输完成后，即可在网页中访问上线项目http://39.96.84.220/v-douban

![](http://ww3.sinaimg.cn/large/006tNc79ly1g5awsm2j85j310i0u07wh.jpg)

线上浏览效果：

![](http://ww4.sinaimg.cn/large/006tNc79ly1g5ayhqkpc5g30pw17u1hz.gif)

![](http://ww4.sinaimg.cn/large/006tNc79ly1g5ayiamqk4g30pw17u7wi.gif)

## 后记

虽然是一个简单的临摹项目，但是在编写的过程中也着实遇到了很多的问题，感谢朋友们的帮助，学习的道路从来就不是一帆风顺，不断的超越自我才能慢慢变强。关于项目中遇到的问题，欢迎大家一起交流探讨，你们的支持是我最大的动力。