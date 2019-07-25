export default (_url) => {
    if (_url !== undefined) {
        let _u = _url.substring(7);
        return 'https://images.weserv.nl/?url=' + _u;
    }
    return true
}

// var util = {
//     getImages: function (_url){
//         if (_url !== undefined) {
//             let _u = _url.substring(7);
//             return 'https://images.weserv.nl/?url=' + _u;
//         }
//     }
// }
// export default util;