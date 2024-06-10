import {HomeOutlined} from "@ant-design/icons";

const Home = () => {
    return (
        <div className='text-center'>
            <HomeOutlined className='text-[60px] pb-4'/>
            <h1 className='text-[20px] pb-1'>
                Добро пожаловать в более облегченую версию приложения &nbsp;
                <a className='text-2xl hover:underline' target='_blank' href="https://elevenlabs.io">&laquo;Elevenlabs&raquo;</a>
            </h1>
            <small className='text-[12px] leading-loose'>
                Приложение было созданно в целях автоматизации процесса Дабинга используя API владельца одноименного сайта
            </small>
        </div>
    )
}

export default Home;