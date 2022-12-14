import { getCookie } from 'cookies-next'

const Public = () => {
  const token = getCookie('token')
  console.log('token')
  console.log(token)

  return (
    <div>
      <h1>Public</h1>
    </div>
  )
}

export default Public
