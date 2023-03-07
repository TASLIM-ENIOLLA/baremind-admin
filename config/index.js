const dev = process.env.NODE_ENV !== 'production'

export const server = {
	domain: {
		url: (
			(dev)
			? 'http://localhost:3000/'
			: 'https://baremind-admin.vercel.app/'
			
		)	
	},
	frontend: {
		url: (
			(dev)
			// ? 'http://localhost:3000/'
			// :'https://baremind-admin.vercel.app/'
			? 'https://api.baremind.co.za/'
			: 'https://api.baremind.co.za/'
		)
	}
}
