let Mock =  require('mockjs');
let data = Mock.mock({
    "list|5-10":[{
        "id|+1":0,
        "name":"@cname",
        "tag":false,
        "cont|1-5":[{
            "id|+1":20,
            image:"@image",
            tit:"@ctitle",
            cont:"@ctitle",
            "money|50-300":50,
            "num|1-50":1,
            "tag":false
        }]
    }]
})

module.exports = data;