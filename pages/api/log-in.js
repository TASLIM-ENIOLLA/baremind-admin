export default (req, res) => {
    const {body, method} = req
    const {email, password} = JSON.parse(body)
    
    if(method === 'POST'){
        if(email === 'malhodi@bruiz.dev' && password === '11111111'){
            res.status(200).json({
                type: 'success',
                data: {
                    id: '1',
                    name: 'Malhodi Leslie',
                    email: 'malhodi@bruiz.dev',
                    phone: '1-470-646-767',
                    status: 'pending',
                }
            })
        }
        else{
            res.status(200).json({
                type: 'error',
                data: 'Login credentials incorrect!'
            })
        }
    }
    else{
        res.status(403).json('FORBIDDEN')
    }
}