<template>
    <div class = "mine">
        <mt-header fixed title="德纳国际影城（卓越大融城店）">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <router-view></router-view>
         <mt-tabbar fixed>
           <mt-tab-item
            v-for="nav in navs"
            :key="nav.id"
           >
            <router-link :to = "{name:nav.name}" active-class = "active">
              <img :src = "nav.src">
              <span>{{nav.title}}</span>
            </router-link>
           </mt-tab-item>
         </mt-tabbar>
        <!-- <Tabbar></Tabbar> -->
    </div>    
</template>

<script>
import Tabbar from "@/components/Tabbar"
export default {
    name:"mine",
    data(){
      return{
        navs:[
          {id:1,title:"购物列表",src:"data:image/png;base64,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",name:"list"},
          {id:2,title:"购物订单",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAB8lBMVEXH211HcEzE213M4GbH2F7E2l7//3/G1GPa2m2/1GrE12L//3/F2V3S4Wm/v3+//3+/31///wDF213F3FzG21zJ21222m3M5WbE2FzF3FzH3F3G1FzQ51zF213M4FvQ53P//6rI2m3E12LP31/f33/G2VzI2FzM/2bH3WPMzGaqqqrMzGbG4nHU1H/I2lzG2l6q/6rM3V3D0lrM3WbG3WDG2V7I2l/K2WHI2mHH31/F2F+q/1XJ1l3H3GB//3/U1FXU/3+/v1/I2mTM/5nG2l3G1lvJ113K3GLI2lvF2F3H2V3H3V7J217H2WHM3WB/f3/J1F/B1lvI2lv//2bD2WHD3V3X12LM2Gb////W5F222lvQ0FzJ1l3C2mHU6WrI2lvH0mPU4mPG2V3D0mmyzGbM2l6/31/J31/D4WnM1lvH2VzG2V7G2lzG2lzF2VzG2l3G21/F2lzG2VvH2l7G2lvI213G21zD2V2q1FXF2GDG2l/I2VzI4GTC2VzF3F7E2l7F2lvG2lzJ3F3F1mLD2F7D2l/H2lvH2lzE117G2lvF2V7I21/H2V3G3WbH11+/2GbI2l7G22DE213D2lvE2V/F2l3I2WHG217I3lzl5WbF2FzD217i4nHK22DI217C2l3a/23J2l3C2lvE2l/R42TG2lwgQR7LAAAApXRSTlOAADkZLiMEEgcMGgKAEQQECAFHFnk5Bwp/fFIkC10ZCwMODRAI2iEFFwUDCgkGjI0DHhEPLTY4IiogKAMmJQIGBggcBX4yNCwqXVIuKzctAhgZHAUiHg0UARMOCxMVDA4XEkQRCiMQGBEZfIfYjXyLiLvpXOxP8VIGNVsvITdZRui+NCxJOO3uTq8+UCktQBRGMk84MDEvVi8KrisJOkE/B0wqUxzEYDRGAAAC/UlEQVRIx+2WZ1MaURSGVxFd9souuMmSGCNVOioK2MWuYO+9995777333v9niJm7AeLAhplM8iHPt50zz8ydu3PP+yJ8PgAivJiSaYQScWRbh987dLRFiiVCjYwqxkUA8PkIPx+EE+aHFo44orGWVLZ3sliYAyxWZ7uSrG2MEHNaHsxEOMjnIxUgDlfwBGXS3auFVxcsXO1KywQ8BR4HKpBEIFKhgiru2fqrG9bPuFUCVCUCiQhQE5RWwiU3X92ySXIlWopQAwTgqbK6ZrJoyL00VEQ218lScYCoCZ2mvhKTvzJAjlXWa3SEGglX8YTShtJ4JlJ8aYNUyFOFIyKFTFKDlUQzkaJLsBqJTCFCcLNWXJ6SkM1Eyk5IKRdrzTiC6wSRpD42nYmUHqsnIwU6HCGSBFJlTFYGHPR0f3CiuwfOMrJilFJBEoEQVHVEgTzHCAcDfV2fHejqG4AzY468IKKaIhBfNIhbGJWZCwf9aWmfHEhL64ez3MyoQm4Q6vsmBbMNJjgI6fV3ojcEzkwGdrCdlOfN5CK882hJaJN8mEk+Nkn4JnH8WMwllh/nr0ohYYgTYSFupVB/Z8k/9M9IHh3vH7/y/z/3947n0SP06Lk7LhZXOCwW+xXmCnqFOS9LV9DLEq7lEffOCL2WYQAMupcG6QCAUTM65s4ZG6WjBoba5PPimitlbfF5kg41GJ8Xq3sBG4Hnc1PDFstXOyyW4am588CNgL3VCzo+YVDvnB5vNa08Hm2PW62Bdlit49tHjytNW8enO3RQw0rQ+nRivL2/a5o/CHDiYL7p7v7WePLUSlcCWD5S5PHX04dLsybvj054m2aXDqev4+UpdPmANYfE9FEJsdHLBp9fMCxHxyZE6TGSrjl0odpXYi/6mBk2u/WLA61s9kyM/gVT7v8sVG/VbQJlVt3QiR/VzaOS6PXdisOJVIqnvdFcBnHeIehSc6PlUamE7Ww2xwvxslmJAKhxQqXQJVEompyczLPD9omiVJJOoSJwNQCJNsfrG/2jwAbQcVC3AAAAAElFTkSuQmCC",name:"car"},
        ]
      }
    },
    components:{
      Tabbar
    },
    created(){
      // console.log(this)
    }
}
</script>

<style lang = "scss" scoped>
    .mine{
        font-size:30px;
        img{
          margin:0 auto;
          width:26px;
          margin-bottom:5px;
        }
    }
    .mint-tabbar{
      /* bottom:60px; */
    }
    .active{
      font-weight:700;
    }
    .mint-header{
      height:0.5rem;
      background:#f03d37;
    }
</style>
