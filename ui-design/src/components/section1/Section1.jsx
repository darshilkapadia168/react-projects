import Header from './Header'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  return (
    <div className='w-full h-screen bg-white'>
        <Header />
        <Page1Content users={props.users} />
    </div>
  )
}

export default Section1