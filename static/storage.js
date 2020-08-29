// var storage = {
//     //数据存储封装
//     set (key,value) {
//         localStorage.setItem(key,JSON.stringify(value));
//     },
//     get (key){
//         return JSON.parse(localStorage.getItem(key))
//     },
//     remove (key) {
//         localStorage.removeItem(key)
//     },
// }
// export default storage;

function set(key,value){
    localStorage.setItem(key,JSON.stringify(value));
}
function get(key){
    return JSON.parse(localStorage.getItem(key))
}
function remove(key){
    localStorage.removeItem(key)
}

window.s = {
    set:set,
    get:get,
    remove:remove,
}
