const CurrentMail = ({ currentMail }) => {
    const { body } = currentMail;
    return (
        <html
            dangerouslySetInnerHTML={{__html : body}}
            className='flex justify-center items-center'
        />
    )
}

export default CurrentMail;