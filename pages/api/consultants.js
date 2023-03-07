export default (req, res) => {
    const URL = 'https://bareminds.oracleblocksdapp.xyz/api/consultants'
    const body = {
        "name": "Malhodi Leslie",
        "email": "malhodi@bruiz.dev",
        "phone": "1-470-646-767",
        "category": "meditation",
        "sex": "male"
    }

    res.status(200).json({
        type: 'success',
        data: [
            {
                "id": 1,
                "name": "Malhodi Leslie",
                "phone": "1-470-646-767",
                "email": "malhodi@bruiz.dev",
                "categoryName": "Meditation",
                "categorySlug": "meditation",
                "categoryId": 1,
                "sex": "male",
                "isActive": false,
                "isInActive": false,
                "canDeactivate": true,
                "canActivate": false,
                "createdOn": "2022-06-16 02:23:02"
            },
            {
                "id": 3,
                "name": "Malhodi Leslie",
                "phone": "1-470-646-767",
                "email": "malhodi@bruiz.de",
                "categoryName": "Meditation",
                "categorySlug": "meditation",
                "categoryId": 1,
                "sex": "female",
                "isActive": true,
                "isInActive": false,
                "canDeactivate": true,
                "canActivate": false,
                "createdOn": "2022-06-16 02:24:42"
            },
            {
                "id": 5,
                "name": "Malhodi Leslie",
                "phone": "1-470-646-767",
                "email": "malhodi@bruiz2.de",
                "categoryName": "Meditation",
                "categorySlug": "meditation",
                "categoryId": 1,
                "sex": "male",
                "isActive": true,
                "isInActive": false,
                "canDeactivate": true,
                "canActivate": false,
                "createdOn": "2022-06-23 23:26:15"
            }
        ]
    })
}