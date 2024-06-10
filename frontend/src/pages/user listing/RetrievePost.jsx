import { useState, useEffect } from 'react';
import AxiosInstance from '../../utils/AxiosInstance'
import './create.css'

const RetrievePost = () => {
  const [userPosts, setUserPosts] = useState([])
  
  useEffect(() => {
    AxiosInstance.get(`/api/posts/`)
    .then((response) => {
      setUserPosts(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
  }, [])
 


  return (
    <div className='posts-container'>
      <h1>My Posts</h1>
      {userPosts.length > 0 ? (
        userPosts.map((post)=>(
          <div key={post.id} className='post-container'>
            <img src={post.image} alt={post.title} className='post-img'/>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))
      ): (
        <p>No posts available</p>
      )}
    </div>
  )
}

export default RetrievePost