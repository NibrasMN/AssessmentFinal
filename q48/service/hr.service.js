var resources = [
    {id:1, name:"Nibras", role:"Lead"},
    {id:2, name:"Mani", role:"Admin"},
    {id:3, name:"Uvan", role:"Admin"},
    {id:4, name:"Gowtham", role:"Trainee"},
    {id:5, name:"Arun", role:"Trainee"}
];

module.exports.getAllResources = async (req,res,next) => {
    res.send(resources);
}

module.exports.getResourceById = async (req,res,next) => {
    var id = parseInt(req.params.id);
    res.send(resources[resources.findIndex(element => element.id === id)]);
}

// module.exports.getResourcesByRole = async (req,res,next) => {
//     var role = req.params.role;
//     let temp = []
//     for (let i=0;i<resources.length;i++)
//         if(resources[i].role == role)
//             temp.push(resources[i]);
//     res.send(temp);
// }

// module.exports.addResource = async (req,res,next) => {
//     let data = req.body;
//     resources.push(data);
//     res.send(resources);
// }

// module.exports.updateResource = async (req,res,next) => {
//     let id = parseInt(req.params.id);
//     resources.splice(resources.findIndex(element => element.id === id),1,req.body);
//     res.send(resources);
// }