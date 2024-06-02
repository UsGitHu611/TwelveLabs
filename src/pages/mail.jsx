import {LoadingOutlined, ReloadOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {ThreeDots} from "react-loader-spinner"
import {useGetRandomMailQuery, useGetCurrentMessageQuery} from "../api/mailApi.jsx";
import {useEffect, useState} from "react";


const Mail = () => {
    const [targetMail, setTargetMail] = useState([]);

    const {
        data: randomMail,
        isLoading,
        refetch: refreshMail,
    } = useGetRandomMailQuery({}, {
        refetchOnMountOrArgChange: false,
    });

    const {data: currentMail} = useGetCurrentMessageQuery({
        login: randomMail?.login,
        domain: randomMail?.domain
    }, {
        refetchOnMountOrArgChange: false,
        pollingInterval: 6000,
    });

    useEffect(() => {
        currentMail && setTargetMail(prevState =>
            [...prevState, ...currentMail]
        )
        console.log(currentMail)
    }, [currentMail]);


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
                    {isLoading ? <LoadingOutlined/> : randomMail.randomMail}
                </pre>

            </div>

            <ul className='flex flex-col px-3 py-6 min-w-[600px] bg-blue-300 min-h-[250px]
                dark:bg-black dark:text-white text-[12px] relative border'>
                <li className='grid grid-cols-[200px_200px_60px] border py-[2px] break-words gap-2 dark:bg-black
                mb-4 bg-white/60 text-black px-3 dark:border-none dark:text-white'>
                    <p>Отправитель</p>
                    <p>Тема</p>
                    <p className='justify-self-end'>Время</p>
                </li>
                {
                    !currentMail ? (
                        <div className='absolute top-0 right-0 left-0 bottom-0 translate-x-[25%]'>
                            <ThreeDots color='black'/>
                        </div>
                    ) : targetMail?.map(({from, subject, date}, index) => (
                        <li key={index} className='dark:text-white transition-colors duration-300 grid grid-cols-[200px_200px_60px]
                        gap-2 px-3 py-[15px] cursor-pointer hover:bg-white/20'>
                            <p>{from}</p>
                            <p>{subject}</p>
                            <p className='justify-self-end'>{date.match(/\d{2}:.+/g)[0]}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Mail;