import { useDispatch, useSelector } from "react-redux"
import { fetchUserMiddleware } from "../../middleWare/userMiddleWare"

const UserDataWithRedux = () => {
    const data = useSelector((store) => store.user.data)
    const error = useSelector((store) => store.user.error)
    const isLoading = useSelector((store) => store.user.isLoading)
    const dispatch = useDispatch()
    const helper = () => {
        fetchUserMiddleware(dispatch,'1')
    }
    console.log(data,error,isLoading)

    return (
        <>
            {
                isLoading? (<h1>loading...</h1>):
                    (
                        !data? (""):

                        <>
                            <h2>name: {data.payload.name}</h2>
                        </>
                    )

            }
            <button onClick={helper}>Hello</button>
        </>
    )
}

export default UserDataWithRedux