export default function Tabs({children, buttons, ButtonsContainer="menu"}){
    // in react we cannot use buttonsContainer as <buttonsContainer> because react looks for build in element like div, ul, menu.
    // Thats because is starts with small letter. We need to use extra variable with capital letter -> ButtonContainer
    //const ButtonContainer = buttonsContainer; 
    return (
      <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
      </>
    );
}