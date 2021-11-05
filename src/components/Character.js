// Write your Character component here
import React from "react";
import styled from "styled-components";



const Card = styled.div`
display: center;
flex-wrap: wrap;
width: 30%;
justify-content: space-evenly;
margin-top: 30px;
align-items: center;
padding: 20px;
background-color: gold;
color: black;
margin: 5%;
border-radius: 6px;
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
                <p>{props.character.name} has a gender of: {props.character.gender} who has a height of: {props.character.height}. {props.character.name} was born is the year of {props.character.birth_year}. {props.character.name} has made an appearance in film(s): {props.character.films}.</p>
         </Card>
    )

}


export default Character