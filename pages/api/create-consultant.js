export default (req, res) => {
    const {body} = req
    const {name, phone, email, category, sex} = JSON.parse(body)
    // const URL = 'https://bareminds.oracleblocksdapp.xyz/api/consultant'
    // const body = {
    //     "name": "Malhodi Leslie",
    //     "email": "malhodi@bruiz2.de",
    //     "phone": "1-470-646-767",
    //     "category": "meditation",
    //     "sex": "male"
    // }

    res.status(200).json({
        type: 'success',
        data: {
            "id": 5,
            "name": name,
            "phone": phone,
            "email": email,
            "categoryName": category,
            "categorySlug": category,
            "categoryId": 1,
            "sex": sex,
            "isActive": true,
            "isInActive": false,
            "canDeactivate": true,
            "canActivate": false,
            "createdOn": "2022-06-23 23:26:15"
        }
    })
}