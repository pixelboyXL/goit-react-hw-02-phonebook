import styled from "styled-components";

export const LabelFilter = styled.label`
    display: block;
    margin: 0 auto;
    text-align: center;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.almostDarkGreen};
`;

export const InputFilter = styled.input`
    display: block;
    margin-top: ${p => p.theme.space[2]}px;
    margin-right: auto;
    margin-left: auto;
    outline: none;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    border-radius: ${p => p.theme.radii.sm};
`;