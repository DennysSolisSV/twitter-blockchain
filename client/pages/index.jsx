import { NextPage } from 'next';
import { Sidebar, Feed } from '../components';


const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar/>
        <Feed />
        <h2>Witgets</h2>
      </div>
    </div>
  )
}

export default Home;
