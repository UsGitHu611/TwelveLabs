const MailBoardLayout = ({children}) => {
    return (
        <ul className='flex items-center justify-center px-10 py-10 min-w-[900px] bg-blue-300 min-h-[450px]
                dark:bg-black dark:text-white text-[12px] relative border max-w-[1000px]'>
            {children}
        </ul>
    )
}

export default MailBoardLayout;