// Write customRender function - It takes 2 parameters - What to inject in root div, Where to inject

function customRender (reactElement, container) {
    /*

    // We are creating dom element using reactElement As we are creating a modular function not a hardcoded function
    const domElement = document.createElement(reactElement.type);   // Created the Element
    domElement.innerHTML = reactElement.children;   // Adding content to the created empty element -> ("Click me to visit google")

    domElement.setAttribute('href', reactElement.props.href);   // Setting attributes to the element
    domElement.setAttribute('target', reactElement.props.target)

    // Now as we have created the element we need to append it to the container
    container.appendChild(domElement);

    */
    
    // This above code is not efficient bcz we are manually writing each and every attributes.

    // So now we create a modular code-
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;     // Condition to check if the property is a children or not.

        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {      // We are defining our react so we tell every element should be made in this format only.
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

// Now there should be a method that should render the element. i.e add the reactElement in root div 
customRender(reactElement, mainContainer)   // It takes 2 parameters - What to inject in root div, Where to inject