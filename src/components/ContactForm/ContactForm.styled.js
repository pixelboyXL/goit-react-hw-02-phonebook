import styled from "styled-components";

export const ContactFormStyle = styled.form`
    max-width: 180px;
    margin: 0 auto;
    padding: ${p => p.theme.space[5]}px;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    border-radius: ${p => p.theme.radii.sm};
`;

export const LabelForm = styled.label`
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.almostDarkGreen};
`;

export const InputForm = styled.input`
    margin-top: ${p => p.theme.space[2]}px;
    outline: none;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    border-radius: ${p => p.theme.radii.sm};
    &:first-child {
        margin-bottom: ${p => p.theme.space[4]}px;
    }
`;

export const ButtonForAdd = styled.button`
    display: block;
	margin: 0 auto;
    padding: ${p => p.theme.space[3]}px;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: ${p => p.theme.shadows.shadow};
    cursor: pointer;
    color: ${p => p.theme.colors.maybeYellow};
    background-color: ${p => p.theme.colors.almostDarkGreen};
    transition: ${p => p.theme.transition.cubicBezier};
    &:hover,
    &:focus {
        transform: ${p => p.theme.transform.scaleThird};
        color: ${p => p.theme.colors.almostDarkGreen};
        background-color: ${p => p.theme.colors.maybeYellow};
    }
`;