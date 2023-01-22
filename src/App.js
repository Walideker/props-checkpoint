
import React from 'react'
import Livre from './profile/livre'

export default function test(props) {
  var user = 'walid'
  var adress = 'gouraya'
  return (
    <div>
      <Livre infos={user}  adress={adress}/>
    </div>
  )
}

