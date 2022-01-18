import {useEffect, useState} from "react";
import styled, {useTheme} from "styled-components";

const StyledSquare = styled.div`
  width: 40vw;
  height: 40vw;

  background-color: ${props => props.color};

  :hover {
    filter: brightness(85%);
  }
`;

export function Square() {
    const [color, setColor] = useState();
    const [timesClicked, setTimesClicked] = useState(0);
    const {colors} = useTheme();

    const getColor = () => {
        switch (timesClicked) {
            case 0:
                return colors.lightGray;
            case 1:
                return colors.green;
            case 3:
                return colors.red;
            default:
                return colors.lightGray;
        }
    }

    useEffect(() => {
        const color = getColor();
        setColor(color);

        if (timesClicked) {
            const timer = setTimeout(() => {
                setTimesClicked(0);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [timesClicked]);

    return (
        <StyledSquare color={color} onClick={() => setTimesClicked(timesClicked + 1)}/>
    );
}