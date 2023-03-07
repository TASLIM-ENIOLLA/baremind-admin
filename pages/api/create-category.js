export default (req, res) => {
    const URL = 'https://bareminds.oracleblocksdapp.xyz/api/category'
    const body = {
        "name": "Exercise"
    }

    res.status(200).json({
        type: 'success',
        data: {
            "id": 2,
            "name": "Exercise",
            "slug": "exercise",
            "isActive": true,
            "isInActive": false,
            "canDeactivate": true,
            "canActivate": false,
            "createdOn": "2022-06-16 01:51:29"
        }
    })
}