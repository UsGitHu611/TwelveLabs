import {
    useGetCurrentMessageQuery,
    useGetRandomMailQuery,
    useGetSingleMessageQuery
} from "../api/mailApi.jsx";

const useGetMailMessage = () => {
    const { data: randomMail, refetch: refreshMail } = useGetRandomMailQuery();

    const { data : currentMail } = useGetCurrentMessageQuery({
        login : randomMail?.login,
        domain : randomMail?.domain,
    }, { pollingInterval: 10000 });

    const {  data : innerMessage } = useGetSingleMessageQuery({
        id: currentMail?.at(0)?.id,
        login: randomMail?.login,
        domain: randomMail?.domain,
    });

    return {
        randomMail : randomMail?.randomMail,
        innerMessage,
        refreshMail
    }
}

export default useGetMailMessage;