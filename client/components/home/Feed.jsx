import { BsStars } from 'react-icons/bs'
import  TweetBox  from './TweetBox'
import Post from '../Post'


const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName:'Qazi',
        username: '0x8Cd390f697ffDc176f1B70D2F3BB3083698434fD',
        avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mrchamba.com%2Fservicios%2Fflor98%2Ffoto-de-perfil-para-tu-ig-facebook-youtube-o-lo-que-quieras%2F&psig=AOvVaw0FMiBECVHHtxMzsQ5-9zJ6&ust=1645899164335000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOj587u6m_YCFQAAAAAdAAAAABAF',
        text:'gm',
        isProfileImageNft: false,
        timestamp:'2020-06-01T12:00:00.000Z',
    },{
        displayName:'Qazi2',
        username: '0x8Cd390f697ffDc176f1B70D2F3BB3083698434fD',
        avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mrchamba.com%2Fservicios%2Fflor98%2Ffoto-de-perfil-para-tu-ig-facebook-youtube-o-lo-que-quieras%2F&psig=AOvVaw0FMiBECVHHtxMzsQ5-9zJ6&ust=1645899164335000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOj587u6m_YCFQAAAAAdAAAAABAF',
        text:'gm',
        isProfileImageNft: false,
        timestamp:'2020-06-01T12:00:00.000Z',
    },{
        displayName:'Qazi3',
        username: '0x8Cd390f697ffDc176f1B70D2F3BB3083698434fD',
        avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mrchamba.com%2Fservicios%2Fflor98%2Ffoto-de-perfil-para-tu-ig-facebook-youtube-o-lo-que-quieras%2F&psig=AOvVaw0FMiBECVHHtxMzsQ5-9zJ6&ust=1645899164335000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOj587u6m_YCFQAAAAAdAAAAABAF',
        text:'gm',
        isProfileImageNft: false,
        timestamp:'2020-06-01T12:00:00.000Z',
    },{
        displayName:'Qazi4',
        username: '0x8Cd390f697ffDc176f1B70D2F3BB3083698434fD',
        avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mrchamba.com%2Fservicios%2Fflor98%2Ffoto-de-perfil-para-tu-ig-facebook-youtube-o-lo-que-quieras%2F&psig=AOvVaw0FMiBECVHHtxMzsQ5-9zJ6&ust=1645899164335000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOj587u6m_YCFQAAAAAdAAAAABAF',
        text:'gm',
        isProfileImageNft: false,
        timestamp:'2020-06-01T12:00:00.000Z',
    },
]

const Feed = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.header}>
            <div className={style.headerTitle}>Home</div>
            <BsStars />
        </div>
        <TweetBox />
        { tweets.map((tweet, index) => (
          <Post 
            key={index}
            displayName={tweet.displayName}
            username={tweet.username}
            avatar={tweet.avatar}
            text={tweet.text}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
          /> 
        ))}
    </div>
  )
}

export default Feed