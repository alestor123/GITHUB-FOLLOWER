var axios = require('axios'),
followers = [];
module.exports = async username => {
var data = await axios.get(`https://api.github.com/users/${username}/followers`)
data.data.map(uname => followers.push({login:uname.login,id:uname.id}))
return {
uname:username,
no:followers.length,
followers:followers
}
}