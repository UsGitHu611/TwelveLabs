import {Link} from "react-router-dom";

const CurrentMail = ({ from, subject, date, onClick }) => {
    return (
        <Link to={"/mail/:id"} className='hover:text-black'>
            <li className='dark:text-white transition-colors duration-300 grid grid-cols-[200px_200px_60px]
            gap-2 px-3 py-[15px] cursor-pointer hover:bg-white/20' onClick={onClick}>
                <p>{from}</p>
                <p>{subject}</p>
                <p className='justify-self-end'>{date.match(/\d{2}:.+/g)[0]}</p>
            </li>
        </Link>
    )
}

export default CurrentMail;