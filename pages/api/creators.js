export default (req, res) => {
    const categoryArr = ['meditation', 'stretching', 'exercising']
    const URL = 'https://bareminds.oracleblocksdapp.xyz/api/creators'
    const body = {
        "name": "Malhodi Leslie",
        "email": "malhodi@bruiz.dev",
        "phone": "1-470-646-767",
        "status": "pending"
    }

    res.status(200).json({
        type: 'success',
        data: [
            {
                "id": 5,
                "name": "Taslim Eniolla",
                "email": "taslim.eniolla@bruiz.dev",
                "phone": "1-470-646-767",
                "category_slug": "meditation",
                "isActive": false,
                "isInActive": false,
                "canDeactivate": false,
                "canActivate": false,
                "createdOn": "2022-06-16 00:52:48"
            },
            {
                "id": 10,
                "name": "Malhodi Leslie",
                "email": "malhodi@bruiz1.dev",
                "phone": "1-470-646-767",
                "category_slug": "meditation",
                "isActive": true,
                "isInActive": false,
                "canDeactivate": true,
                "canActivate": false,
                "createdOn": "2022-06-20 08:14:52"
            },
            {
                "id": 12,
                "name": "Malhodi Leslie",
                "email": "malhodi@bruiz43.dev",
                "phone": "1-470-646-767",
                "category_slug": "exercise",
                "isActive": true,
                "isInActive": false,
                "canDeactivate": true,
                "canActivate": false,
                "createdOn": "2022-06-23 23:13:26"
            },
            {
                "id": 8,
                "name": "Malhodi Leslie",
                "email": "malhodi@bruz.dev",
                "phone": "1-470-646-767",
                "category_slug": "exercise",
                "isActive": true,
                "isInActive": false,
                "canDeactivate": true,
                "canActivate": false,
                "createdOn": "2022-06-20 04:11:23"
            }
        ]
    })
}