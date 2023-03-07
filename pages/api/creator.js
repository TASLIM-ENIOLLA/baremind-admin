export default (req, res) => {
    const URL = 'https://bareminds.oracleblocksdapp.xyz/api/event'
    const body = {
        "name": "Malhodi Leslie",
        "email": "malhodi@bruiz.dev",
        "phone": "1-470-646-767",
        "status": "pending"
    }

    // ERROR
    res.status(200).json({error: {
        email: 'Email format unacceptable'
    }})
    // SUCCESS
    res.status(200).json({
        "id": 10,
        "name": "Malhodi rgrewgrLeslie",
        "email": "malhodi@bruizdfdg.dev",
        "phone": "1-470-646-767",
        "category_slug": "",
        "isActive": true,
        "isInActive": false,
        "canDeactivate": true,
        "canActivate": false,
        "createdOn": "2022-08-07 23:02:26"
    })
}