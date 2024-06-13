import {Link} from "react-router-dom";
import {MailOutlined, MessageOutlined, UserOutlined} from "@ant-design/icons";

const menuList = [
    {
        key: 1,
        label: "Profile",
        path: "/profile",
        icon : <UserOutlined />
    },
    {
        key: 2,
        label: "Dubbing",
        path: "/dubbing",
        icon :  <MessageOutlined />
    },
    {
        key: 3,
        label: "Mail",
        path: "/mail",
        icon : <MailOutlined />
    }
]


const MenuList = () => {
    return (
        <ul className='flex flex-col gap-3 items-center'>
            {
                menuList.map(({key, label, path, icon}) => (
                    <li className='w-full rounded-[12px] min-w-[100px] h-[50px] flex justify-center items-center border border-black' key={key}>
                        <Link className='w-full h-full flex items-center justify-center gap-2 text-[18px]' to={path}>
                                {icon}
                                {label}
                        </Link>

                    </li>
                ))
            }
        </ul>
    )
}

export default MenuList