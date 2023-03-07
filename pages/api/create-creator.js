export default (req, res) => {
    const {body} = req
    const {name, email, phone, category} = JSON.parse(body)
    // const URL = 'https://bareminds.oracleblocksdapp.xyz/api/creator'
    // const body = {
    //     "name": "Malhodi Leslie",
    //     "email": "malhodi@bruiz1.dev",
    //     "phone": "1-470-646-767",
    //     "category": "meditation"
    // }

    res.status(200).json({
        type: 'success',
        data: {
            "id": Math.floor(Math.random() * 100),
            "name": name,
            "email": email,
            "phone": phone,
            "category_slug": category,
            "isActive": true,
            "isInActive": false,
            "canDeactivate": true,
            "canActivate": false,
            "createdOn": "2022-06-20 08:14:52"
        }
    })
}