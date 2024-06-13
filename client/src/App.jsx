import {Layout} from "antd";
import {Link, Outlet} from "react-router-dom";
import MenuList from "./menuItem.jsx";
import logo from "../public/logo.svg"
const {
    Header,
    Content,
    Sider
} = Layout;

const App = () => {

    return (
        <Layout className='flex flex-col min-h-[100vh]'>

            <Header className='bg-transparent py-2 flex justify-end'>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </Header>

            <Layout>

                <Sider className='pl-5' style={{background:"transparent"}}>
                    <MenuList/>
                </Sider>

                <Content className='mx-auto my-0 p-16 flex items-center justify-center'>
                    <Outlet/>
                </Content>

            </Layout>

        </Layout>
    )
}

export default App;