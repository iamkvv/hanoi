import React  from 'react'

const Articles =({getArticle})=>(
    <ul onClick={getArticle}>
        <li id="th_main">Ханойская башня</li>
        <li id="Children">Children</li>
        <li id='HOC'>HOC</li>
    </ul>
)

export default Articles