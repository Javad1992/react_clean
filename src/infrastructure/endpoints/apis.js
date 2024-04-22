export default async function getUserProfile(uid) {
    // fake api call
    return ({
        data: {
            message: "user data fetched successfuly",
            result: {
                uid: "1",
                name: "Javad",
                family: "Telgerdi",
                age: "32",
                avatar: "https://media.licdn.com/dms/image/D4D03AQFsLAsrCZRJ9w/profile-displayphoto-shrink_200_200/0/1687903774181?e=1719446400&v=beta&t=yxLfKIYs-Ua9YV6xHOLHyv_qhi_QnlgxWxXncxg5X9w"
            }
        }
    })
}