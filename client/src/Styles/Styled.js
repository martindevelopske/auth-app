import styled from 'styled-components'

export const StyledHeader=styled.div`

display: flex;
justify-content: space-around;
width:100%;
height:60px;
background-color:grey;
& a{
    margin:22px;
    color:white;
    text-decoration:none;
    font-size: 1.2em;
}
`

export const StyledDiv=styled.div`
height: 400px;
width:100%;
background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
display: flex;
justify-content: center;
align-items:center;
& form{
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    & div{
        margin: 16px;
    }
    & input{
        border: none;
        border-radius:5px;
        height: 25px;
    }
    & button{
        background-color: rgb(6, 129, 245);
        border-radius: 5px;
        border: none;
        height: 25px;
    }
}
`