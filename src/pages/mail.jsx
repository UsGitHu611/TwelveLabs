import {LoadingOutlined, ReloadOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {ThreeDots} from "react-loader-spinner"
import {Link, Outlet} from "react-router-dom";
import CurrentMail from "../components/CurrentMail.jsx";
import MailBoardLayout from "../components/UI/MailBoardLayout.jsx";
import useGetMailMessage from "../hook/useGetMailMessage.jsx";
import {useLazyGetSingleMessageQuery} from "../api/mailApi.jsx";


const Mail = () => {
    const {
        targetMail, currentMail,
        randomMail, awaitingMessage,
        refreshMail
    } = useGetMailMessage();

    const [trigger, { data, isLoading, isSuccess, isError }] = useLazyGetSingleMessageQuery();

    const handleClick = () => {
        trigger({
            id: targetMail[0]?.id,
            login: randomMail?.login,
            domain: randomMail?.domain,
        })
        console.log(data)
    }

    return (
        <div className='gap-6 min-h-full'>
            <div className='flex flex-col'>

                <div className='flex flex-row'>
                    <h1 className='text-2xl'>Ваш Mail</h1>
                    <Button
                        onClick={() => refreshMail()}
                        className='rounded-full'
                        icon={<ReloadOutlined/>}/>
                </div>

                <pre className='text-[17px]'>
                    {awaitingMessage ? <LoadingOutlined/> : randomMail?.randomMail}
                </pre>

            </div>
            <MailBoardLayout>
                {
                    !currentMail?.length ? (
                        <div className='absolute top-0 right-0 left-0 bottom-0 translate-x-[25%]'>
                            <ThreeDots color='black'/>
                        </div>
                    ) : targetMail?.map(({id, from, subject, date}, index) => (
                        <CurrentMail
                            onClick={handleClick}
                            from={from}
                            subject={subject}
                            date={date}
                            key={index}/>
                    ))
                }
                <Outlet/>
            </MailBoardLayout>
        </div>
    )
}

export default Mail;