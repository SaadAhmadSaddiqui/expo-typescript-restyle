import { Api } from "../Axios";

class AuthApi extends Api {
	constructor() {
		super({
			baseURL: "http://localhost:3000",
		});
	}

	public async login(email: string, password: string) {
		return await this.post("/auth/login", {
			email,
			password,
		});
	}
}

const authApi = new AuthApi();

export default authApi;
