export default (req, res) => {
    const URL = 'https://bareminds.oracleblocksdapp.xyz/api/category/meditation'
    const body = undefined
    
    res.status(200).json({
        type: 'success',
        data: {
            "id": 1,
            "name": "Meditation",
            "slug": "meditation",
            "isActive": true,
            "isInActive": false,
            "canDeactivate": true,
            "canActivate": false,
            "createdOn": "2022-06-16 01:50:30"
        }
    })
}