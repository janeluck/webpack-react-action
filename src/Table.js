/**
 * Created by janeluck on 3/26/16.
 */


export default class Td extends React.Component {

    render() {


        return (

            <td></td>
        )
    }
}
export default class Tr extends React.Component {

    render() {


        return (

            <tr></tr>
        )
    }
}
export default class Thead extends React.Component {

    render() {


        return (

            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
        )
    }
}
export default class Tbody extends React.Component {

    render() {


        return (

            <tbody></tbody>
        )
    }
}
export default class Table extends React.Component {
    getInitialState() {
        return {
            rows: this.prop.rows
        };
    }
    render() {


        return (

            <div></div>
        )
    }
}