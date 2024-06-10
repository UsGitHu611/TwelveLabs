const MailBoardLayout = ({children, currentMail}) => {
    let mailDate = new Date().toLocaleString('ru');
    return (
        <ul className='flex items-center justify-center px-3 py-6 min-w-[600px] bg-blue-300 min-h-[250px]
                dark:bg-black dark:text-white text-[12px] relative border'>
            {currentMail?.subject && (
                <li className='absolute top-0 right-0 left-0 flex justify-between items-center border py-[2px] break-words gap-2 dark:bg-black
                mb-4 bg-white/60 text-black px-3 dark:border-none dark:text-white'>
                    <div className='flex flex-row'>
                        <p>{'<' + currentMail?.from +  '>'}</p>
                        <p>{currentMail?.subject}</p>
                    </div>
                    <p className='justify-self-end'>{mailDate}</p>
                </li>
            )}
            {children}
        </ul>
    )
}

export default MailBoardLayout;