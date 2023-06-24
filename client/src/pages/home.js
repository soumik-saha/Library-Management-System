import '../stylesheets/form-elements.css'
import '../stylesheets/alignments.css'
import { Button, Space } from 'antd';

const HomePage = () => {
    return (
        <div className="bg-primary grid justify-center items-center h-screen text-white">
            <div className='homepage'>
                <h1>HomePage</h1>
                <Space direction="vertical">
                    <Space wrap>
                        <Button type="primary" size={'large'}>
                            Log Out
                        </Button>
                    </Space>
                </Space>
            </div>
        </div >
    )
}

export default HomePage;