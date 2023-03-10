# Front-end test - deadline 13/03 at 13h
As part of the interview process, we would like you to build a small Angular application that makes a REST API call to a provided endpoint. This will allow us to evaluate your understanding of Angular, HTTP requests, and working with external APIs.

**You should send the repository link to team@ninamob.com before the deadline, even if it's incomplete.**

## Dependencies
|  Package   |  Version  |
| :--------: | :-------: |
|   Node.js   |  >= 16.19.0 |
|    npm | >= 9.5.1
|   Angular   | >= 15.1.2 |

## Test

1. Clone this repo and create a new Angular project.

2. Create a new component that will display all the data from a server GET request, the complaints server located at: ``complaints-server`. In order to make the server available, run the following commands in your system:

    ```sh
    cd complaints-server
    npm run start
    ```

    The data provider should now be available at: http://localhost:3000/complaints


    ```typescript
    // Complaint Object description

    {
      _id: string;
      place: string;
      at_moment: boolean;
      datetime: Date;
      modified_at: Date;
      created_at: Date;
      description: string;
      situation: string[];
      type: string[];
    }

    ```

    To query the data, add the filter condition as a query parameter to the request. For example, to retrieve all the **sorted** by datetime occurrences that happened in **parks**, we can make a GET request using the following URL: http://localhost:3000/complaints?place=park&_sort=datetime.


3. Display the complaints data in your component in a visually appealing and user-friendly manner, making sure your application is responsive and can handle different screen sizes.

4. Handle any errors that may occur during the HTTP request and display a meaningful error message to the user.

5. Implement a filtering feature that allows the user to filter the complaints by different attributes (e.g. complaint type, datetime, etc.). The filtering feature should update the list of complaints in real-time as the user interacts with the filters.

6. You must now connect to a WebSocket that sends real-time notifications and displays them to the user in a visually appealing and user-friendly manner. In order to make the websocket available, run the following commands in your system:
    ```sh
    cd websocket-to-test
    npm run start
    ```

    The socket should now be available to connect at: localhost:8080. You can test it by opening the **test-socket.html** and checking the visual response.

    Your application should connect to the websocket and every user connected to it will receive a notification every 5 minutes. Display the notification to the user of your application.

When you have completed the test, please provide us with the following:

1. A link to the code repository (e.g. GitHub, GitLab, etc.) where we can view your code.

2. A brief write-up (no more than one page) explaining your design decisions, any challenges you encountered, and how you overcame them.

We look forward to seeing your work!
