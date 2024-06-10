import {Link} from "react-router-dom";
import {Button} from "antd";
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


const MenuList = ({ isDark }) => {
    return (
        <ul className='flex gap-4'>
            {
                menuList.map(({key, label, path, icon}) => (
                    <li key={key}>
                        <Link to={path}>
                            <Button icon={icon} className={` ${isDark && 'bg-gray-900 text-white'}`} size={"middle"}>
                                {label}
                            </Button>
                        </Link>

                    </li>
                ))
            }
        </ul>
    )
}

export default MenuList