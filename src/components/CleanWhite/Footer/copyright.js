import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
display: flex;
justify-content: center;
text-aling: center;
p, p > a{
  font-size: 0.8rem;
  color: var(--dark-3);
  text-align: center;
}

`;


const Copyright = ()=> (
  <Section>
     <p>All Right Reserved. &copy; 2019 <a href="https://yellow-website.com" target="_blank">Yellow-Website.com</a> | Tel: +44 (0) 7828 9913 85</p>
  </Section>
)
export default Copyright;