const CurrentMail = ({ currentMail }) => {
    const { body } = currentMail;

    return (
        <iframe
            className='w-full'
            srcDoc={body}
        />
    )
}

export default CurrentMail;