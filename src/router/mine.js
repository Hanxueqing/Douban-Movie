export default{
    // name:"mine",
    path:"/mine",
    component:()=>import("@/views/Mine"),
    //配置二级路由
    children:[
        {path:"",redirect:"list"},
        {path:"list",component:()=>import("@/views/Mine/List"),name:"list"},
        {path:"car",component:()=>import("@/views/Mine/Car"),name:"car"},
    ]
}