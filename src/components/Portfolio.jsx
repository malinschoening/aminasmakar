import React from 'react'
import mohippa1 from './img/food/italienskmohippa1.jpg'
import mohippa2 from './img/food/italienskmohippa2.jpg'
import event1501 from './img/food/event1503.jpg'
import event1502 from './img/food/event1502.jpg'
import asia1 from './img/food/asiatiskasmaratter1.jpg'
import asia2 from './img/food/smorgastarta2.jpg'
import smorgas1 from './img/food/smorgastarta1.jpg'
import smorgas2 from './img/food/smorgastarta2.jpg'
import styled from 'styled-components'

const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">
    <h4>TIDIGARE UPPDRAG</h4>
    <Wrapper>
        <Content>
            <h2><b>Möhippa med italienskt tema</b></h2>
            <p>Sällskapet hyrde privat kock och fick en fast avsmakningsmeny med fem mellanrätter och en efterätt.</p>
            <ReviewBox>
                <h3>"Fantastisk mat och en fantastisk kock! Varierande smaker och nya smakupplevelser jag inte ens trodde vad möjliga!"</h3>
            </ReviewBox>
        </Content>
        <Content>
            <Image src={mohippa1}/><DesktopImage src={mohippa2}/>
        </Content>
    </Wrapper>
    <Wrapper>
        <Content>
            <h2><b>Heldagsevent för 150 personer</b></h2>
            <p>Ett heldagsevent där det levererades vegansk asiatisk nudelsallad till lunch och till middag en buffé med italienskt tema för totalt 150 personer. </p>
            <ReviewBox>
                <h3>"Amina är en fantastisk lyhörd och lättsam person. Hon är serviceinriktad, flexibel, trevlig och går verkligen de extra stegen för att få oss nöjda" </h3>
            </ReviewBox>
        </Content>
        <Content>
            <DesktopImage src={event1501}/><Image src={event1502}/>
        </Content>
    </Wrapper>
    <Wrapper>
        <Content>
            <h2><b>Privat kock</b></h2>
            <p>Privat middag där sällskapet hyrde in en privat kock. Middagens tema var asiatiska smårätter. </p>
            <ReviewBox>
                <h3>"Wowupplevelse! Genomtänkt meny med mycket hjärta!" </h3>
            </ReviewBox>
        </Content>
        <Content>
            <Image src={asia1}/>
            <DesktopImage src={asia2}/>
        </Content>
    </Wrapper>
    <Wrapper>
        <Content>
        <h2><b>Möhippa</b></h2>
        <p>Möhippa med smörgåstårtebuffé där maten levererades till lokalen. </p>
        <ReviewBox>
            <h3>"Trevligt bemötande, bra service, och det viktigaste av allt; FANTASTISK mat!"</h3>
        </ReviewBox>
        </Content>
        <Content>
            <Image src={smorgas1}/><DesktopImage src={smorgas2}/>
        </Content>
    </Wrapper>
    
</PortfolioSection>
  )
}

const PortfolioSection = styled.section`
    width: 100%;
    display: grid;
`;

const Wrapper = styled.div`
    width: 100%;
    min-height: 30vh;
    display: flex;
    padding-right: 2%;
    padding-left: 2%;
    justify-content: center;
    background-color: white;
    flex-direction: column;

    @media only screen and (min-width: 900px){
        flex-direction: row;
    }
`;

const Content = styled.div`
    width: 90%;
    margin-top: 0px;
    margin-bottom: 0px;
    border: none;
    padding: 2%;
    padding-right: 5%;
    margin-left: auto;
    margin-right: auto;


    @media only screen and (min-width: 600px){
        width: 90%;
        margin-top: 0px;
        margin-bottom: 0px;
        border: none;
        padding: 2%;
        padding-right: 5%;
    }
`;

const ReviewBox = styled.div`
    background-color:rgb(214, 214, 214);
    min-height: 15%;
    text-align: center;
    padding: 2%;
    margin-left: 6%;
    width: 70%;
    border-left: 3px solid rgb(105, 105, 105);
`;

const Image = styled.img`
    width: 100%;

    @media only screen and (min-width: 1200px){
        width: 48%;
        margin: 1%;
    }
`;

const DesktopImage = styled.img`
    display: none;

    @media only screen and (min-width: 1200px){
        display: inline-block;
        width: 48%;
        margin: 1%;
    }
`;


export default Portfolio
