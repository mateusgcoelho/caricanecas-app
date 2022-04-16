import styled from "styled-components";

export const FormWrapper = styled.form`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    padding: 1rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input + input {
        margin-top: 1rem;
    }
`;
