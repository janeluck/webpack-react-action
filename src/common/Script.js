/**
 * Created by janeluck on 6/1/16.
 */
var React = require('react');
export default function Script(props){
    let script = document.createElement('script')
    script.src = props.src
    document.body.appendChild(script)
    return null
}
