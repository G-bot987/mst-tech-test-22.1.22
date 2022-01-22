tech test mst


Full Stack Developer Test
This is a mini project to demonstrate the basic integration of some real-time data into a
front-end application.
In this scenario, you are creating a user interface for a Golf tournament with potentially
hundreds of players. A server has been set up that is sending random data for a player every
10 seconds.
You are free to use any additional frameworks you wish, as long as they do not replace any
specific frameworks listed.
Tasks:
1) Create a new Angular project using the Angular CLI
This application is the client / UI which connects to the server
2) Implement socketIO into your client application to receive data from:
a. https://mst-full-stack-dev-test.herokuapp.com/
If you browse to https://mst-full-stack-dev-test.herokuapp.com/ and view the console
through your browser, you will see examples of the data you will receive.
The server is sending out data on an event called “data-update”. You will therefore need
to make sure your socketIO implementation is ready to receive on this event.
The socketIO documentation (https://socket.io/) and inspecting the client-side code
(source) at https://mst-full-stack-dev-test.herokuapp.com/ should help clarify any
uncertainties.
3) Create a simple user interface that displays the data in a basic tabular layout
a. In the time committed to a test project such as this, we expect your UI to
work, but it does not have to be beautiful (unless you want it to be!) – it’s ok
for it to be “functional only” given the time we expect you to commit to this
test project!
b. Your UI should update in real-time as data is received
You are encouraged to add any additional functionality you think a user might find helpful,
such as sorting, but please do not spend too much time on this – it is only a demo project!
Please be prepared to discuss your code, the implementation, and future functionality.
Please share your application with us through Github.