function Message() {

    const name = "Welcome to Joey's React App!";
    if (name) {
        return <h1>Hello, {name} </h1>;
    
    } else {
        return <h1>Hello, {name}</h1>;
    }
}

export default Message;  