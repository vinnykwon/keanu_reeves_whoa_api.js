class KeanuReevesWhoaApi {
	constructor() {
		this.api = "https://whoa.onrender.com/whoas"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getRandomWhoa() {
		const response = await fetch(
			`${this.api}/random`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getWhoaByIndex(index) {
		const response = await fetch(
			`${this.api}/ordered/${index}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAllMovies() {
		const response = await fetch(
			`${this.api}/movies`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAllDirectors() {
		const response = await fetch(
			`${this.api}/directors`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {KeanuReevesWhoaApi}
