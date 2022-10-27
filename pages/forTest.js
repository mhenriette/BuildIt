import React from 'react'
import Layout from '../components/layout'

const ForTest = () => {
  return (
    <Layout>
      <div className='' style={{
          height: "60vh",
          backgroundRepeat: "repeat",
          backgroundImage: "url(pagebg.svg)",
        }}>
            <h1 className='grid place-items-center h-full text-3xl animate-bounce'>Hello Herniette this is the testing one :{")"} your boy ME</h1>
        </div>
    </Layout>
  )
}

export default ForTest
