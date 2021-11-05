// Write your Character component here
import React from "react";
import styled from "styled-components";



const Card = styled.div`
margin-top: 20px;
align-items: center;
padding: 20px;
background-color: gold;
color: black;
margin: 7%;
border-radius: 6px;
grid-template-columns: 60px 60px;
`
const H2 = styled.h2`
display: flex;
align-items: center;
justify-content: center;
position: relative;
text-transform: uppercase;
text-shadow: -15px 5px 20px;
font-size: 1.5rem;
`



function Character(props) {
    return (
        <Card>
            <H2>{props.character.name}</H2>
                <p>Has a gender of: {props.character.gender}. Has a height of: {props.character.height}. Born in the year of {props.character.birth_year}. Character has made an appearance in film(s): {props.character.films}.</p>
         </Card>
    )

}


export default Character