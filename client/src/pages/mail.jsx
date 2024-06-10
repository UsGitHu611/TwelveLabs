import {CheckOutlined, CopyOutlined, LoadingOutlined, ReloadOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {ThreeDots} from "react-loader-spinner"
import CurrentMail from "../components/CurrentMail.jsx";
import MailBoardLayout from "../components/MailBoardLayout.jsx";
import useGetMailMessage from "../hook/useGetMailMessage.jsx";
import {useState} from "react";
const Mail = () => {
    const [isChecked, setIsChecked] = useState(false);
    const { randomMail, refreshMail, innerMessage } = useGetMailMessage();
    const checkedClipBoard = async () => {
        await navigator.clipboard.writeText(randomMail)
        setIsChecked(true);
    }

    return (
        <div className='gap-6 min-h-full'>
            <div className='flex flex-col'>

                <div className='flex flex-row'>
                    <h1 className='text-2xl'>Ваш Mail</h1>
                    <Button
                        onClick={() => refreshMail()}
                        danger
                        className='rounded-full'
                        style={{background:"transparent"}}
                        title='Сбросить почту и сообщения'
                        icon={<ReloadOutlined/>}
                    />
                </div>

                <pre className='text-[17px] px-3 py-1 flex gap-2
                cursor-pointer rounded-2xl hover:bg-gray-200'
                onClick={checkedClipBoard} title='Копировать'>
                    {!randomMail ? <LoadingOutlined/> : randomMail}
                    { isChecked ? <CheckOutlined style={{color: "green"}}/> : <CopyOutlined/> }
                </pre>

            </div>
            <MailBoardLayout currentMail={innerMessage}>
                {
                    !innerMessage ? (
                        <div>
                            <ThreeDots color='white'/>
                            <p className='text-[15px] font-extralight'>Ждем писем..</p>
                        </div>
                    ) : <CurrentMail currentMail={innerMessage}/>
                }
            </MailBoardLayout>
        </div>
    )
}

export default Mail;