import styled from '@emotion/styled';
import React from 'react';
import Main from '../../templates/Main';

const NotFoundContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background: #fff;
    padding: 120px 0;
    text-align: center;
`;

class NotFound extends React.Component {
    componentDidMount() {
        const { body } = document;
        body.classList.add('white-background');
    }

    render() {
        return (
            <Main useHeader usePadding title="Page Not Found | Amaroossa Hotels" type="colored" usePromo={false}>
                <NotFoundContainer>
                    <h1>404</h1>
                    <h5>Page Not Found</h5>
                </NotFoundContainer>
            </Main>
        );
    }
}

export default NotFound;
