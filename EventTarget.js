/*
Event Target
*/
{/* <div onclick="myFunction(event)"></div> */}
/*
    Click on a paragraph/div. An alert box will alert the element whose eventlistener triggered the event.
    Note:  The currentTarget property does not necessarily return the element that was clicked on, but the element whose eventlistener triggered the event.
    Interaction of User with the dom is known as events. 
    Clicking of buttons, hovering of mouse over an element, pressing of any keys are all events.
    Whenever these events occur we would like to run some JS function which is done using event handlers.
    Now every event goes through three phases of event propagation:
        
    1. From window to the target element phase.
    2. The event target phase and
    3. From the event target back to the window phase.
    
    event.currentTarget -  tells us on which element the event was attached or the element whose eventListener triggered the event.
    event.target -  tells where the event started.
    
    Suppose there’s an event which shows an alert on click of the element. This event has been attached to the body. Now when the user clicks on the strong tag, currentTarget(.nodeName) will show the body whereas target will show strong as the alert output.
*/
function myFunction(event) { 
    alert(event.currentTarget.nodeName); // body
    alert(event.target.nodeName); // strong
}