import {useGetCurrentMessageQuery, useGetRandomMailQuery} from "../api/mailApi.jsx";
import {useEffect, useState} from "react";

const useGetMailMessage = () => {

    const [targetMail, setTargetMail] = useState([]);
    const { data: randomMail, refetch: refreshMail } = useGetRandomMailQuery({}, {
        refetchOnMountOrArgChange: false,
        refetchOnReconnect: true,
    });

    const {data: currentMail, isLoading : awaitingMessage} = useGetCurrentMessageQuery({
        login: randomMail?.login,
        domain: randomMail?.domain
    }, {
        refetchOnMountOrArgChange: false,
        refetchOnReconnect: true,
        pollingInterval: 5000,
        skip: !randomMail
    });

    useEffect(() => {
        currentMail && setTargetMail(prevState => [
            ...prevState,
            ...currentMail
        ])
    }, [currentMail]);

    return {
        currentMail,
        targetMail,
        randomMail,
        awaitingMessage,
        refreshMail
    }
}

export default useGetMailMessage;