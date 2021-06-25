import React from 'react';
import Main from '../../templates/Main';

class Terms extends React.Component {
    componentDidMount() {
        const { body } = document;
        body.classList.add('white-background');
    }

    render() {
        return (
            <Main useHeader usePadding title="Terms | Amaroossa Hotels" type="colored" usePromo={false}>
                <div className="container py-4">
                    <h3>Term and Condition</h3>
                    <p>We have made our best efforts to provide you the lowest price possible. Therefore, we regret that any cancellation, amendment or no-show, will charged full amount.</p>
                    <h3>Cancellation Policy</h3>
                    <p>Full payment is required.</p>
                    <p>Any cancellation received prior arrival non-refundable.</p>
                    <p>No Show / Early check out will be charge full stay amount of reservation.</p>
                    <hr />
                    <p>We have made our best efforts to provide you the lowest price possible. Therefore, we regret that any cancellation, amendment or no-show of the reservation will not refunded and will remaind charged full.</p>
                </div>
            </Main>
        );
    }
}

export default Terms;
