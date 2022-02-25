import React from "react";
import { styled } from '@mui/system';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import {useLocation} from "react-router";

import {PageLinks} from "../../Data";


const Container = styled('div')({
    display: "flex",
    flex: "1",
});
  

export const Navigate:React.FC = ({children}) => {
    const location = useLocation();
    const {previous, next} = PageLinks[location.pathname] || {};

    return (
        <Container>
            <div>
                {previous && <div>
                    <Link to={previous}><ArrowBackIosNewIcon /></Link>
                </div>}
            </div>
            <div>
                {children}
            </div>
            <div>
                {next&& <div>
                    <Link to={next}><ArrowForwardIosIcon /></Link>
                </div>}
            </div>
        </Container>
    )
}