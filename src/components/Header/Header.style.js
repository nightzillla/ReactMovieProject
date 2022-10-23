import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 1px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.img`
    width: 500px;
    margin-left: 300px;

    @media screen and (max-width: 500px) {
        width: 300px;
        margin-left: 100px;

    }
`;

// export const TMDBLogoImg = styled.img`
//     width: 100px;

//     @media screen and (max-width: 500px){
//         width: 80px;
//     }
// `;

