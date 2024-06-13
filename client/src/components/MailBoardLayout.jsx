const MailBoardLayout = ({children}) => {
    return (
        <ul className='flex justify-center items-center px-10 py-10 min-w-[900px] bg-blue-200 min-h-[630px]
        text-[12px] relative border max-w-[1000px] rounded-[4px]'>
            {children}
        </ul>
    )
}

export default MailBoardLayout;