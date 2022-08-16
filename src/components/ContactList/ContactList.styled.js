import styled from "styled-components";

export const ContactListStyle = styled.ul`
    margin-top: ${p => p.theme.space[4]}px;
`;

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const ButtonForDelete = styled.button`
    padding: ${p => p.theme.space[2]}px;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: ${p => p.theme.shadows.shadow};
    cursor: pointer;
    color: ${p => p.theme.colors.maybeYellow};
    background-color: ${p => p.theme.colors.almostDarkGreen};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        transform: scale(1.15);
        color: ${p => p.theme.colors.almostDarkGreen};
        background-color: ${p => p.theme.colors.maybeYellow};
    }
`;