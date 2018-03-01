import React from 'react'

const Children = ()=>(
    <div>
        <pre>
            <code>
            {`const Button = ({classes, children, props}) => (
            <button {...props} >
                <span className={classes.label}>
                    {() => children}
                </span>
            </button>`}
            </code>
        </pre>
    </div>
)

export default  Children ;