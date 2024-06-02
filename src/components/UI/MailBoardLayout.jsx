

const MailBoardLayout = ({ children }) => {
    return (
        <ul className='flex flex-col px-3 py-6 min-w-[600px] bg-blue-300 min-h-[250px]
                dark:bg-black dark:text-white text-[12px] relative border'>
            <li className='grid grid-cols-[200px_200px_60px] border py-[2px] break-words gap-2 dark:bg-black
                mb-4 bg-white/60 text-black px-3 dark:border-none dark:text-white'>
                <p>Отправитель</p>
                <p>Тема</p>
                <p className='justify-self-end'>Время</p>
            </li>
            { children }
        </ul>
    )
}

export default MailBoardLayout;