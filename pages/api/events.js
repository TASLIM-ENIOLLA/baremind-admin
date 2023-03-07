export default (req, res) => {
    const URL = 'https://bareminds.oracleblocksdapp.xyz/api/events'
    const body = {
        "address": "Long Abuja, Wuse zone 5",
        "date": "2022-02-20",
        "time": "12:25:00",
        "name": "TechNuz"
    }

    res.status(200).json({
        type: 'success',
        data: [
            {
                "id": 1,
                "name": "TechNuz1",
                "address": "Long Abuja, Wuse zone 5",
                "date": "2022-02-20",
                "time": "12:25:00",
                "status": "Upcoming",
                "createdOn": "2022-06-16 02:40:55"
            },
            {
                "id": 2,
                "name": "TechNuz2",
                "address": "Long Abuja, Wuse zone 5",
                "date": "2022-02-20",
                "time": "12:25:00",
                "status": "Coming soon",
                "createdOn": "2022-06-16 02:41:14"
            },
            {
                "id": 3,
                "name": "TechNuz3",
                "address": "Long Abuja, Wuse zone 5",
                "date": "2022-02-20",
                "time": "12:25:00",
                "status": "Coming soon",
                "createdOn": "2022-06-23 23:16:49"
            }
        ]
    })
}