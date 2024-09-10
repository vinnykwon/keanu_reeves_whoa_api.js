# keanu_reeves_whoa_api.js
Web-API for [whoa.onrender.com](https://whoa.onrender.com/) free JSON API for every "whoa" said by actor Keanu Reeves in his movies

```JavaScript
async function main() {
	const { KeanuReevesWhoaApi } = require("./keanu_reeves_whoa_api.js")
	const keanuReevesWhoaApi = new KeanuReevesWhoaApi()
	const randomWhoa = await keanuReevesWhoaApi.getRandomWhoa()
	console.log(randomWhoa)
}

main()
```
