export const useCookie = () => ({
	getCookie: (name) => {
		return new Promise(
            (res) => {
                decodeURIComponent(document.cookie)
                .split(/\;\s?/)
                .forEach(
                    (eachCookie) => {
                        const [cookieName, cookieValue] = eachCookie.split('=')
                        if(cookieName === name){
                            res({value: cookieValue})
                        }
                    }
                )

                res()
            }
        )
	},
	setCookie: ({name, value, expires, path}) => {
        return new Promise((res) => {
            res(document.cookie = `${name}=${value};expires=${expires};path=${path}`)
        })
	},
})