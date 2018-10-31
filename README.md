# Rest-API-
A simple  MERN-Stack Rest API ( Mongodb,Express,nodejs,Reactjs). 


MERN Stack: 

-it's a simple full stack app using nodejs(express and concurrenlty)+mongodb and Reactjs.
Server: 
-This api fetches data from mongodb and returns it in a json format.
-the data is about a list of users(name,availabality, rank,distance from us)
to get the list of users directly go to as an exemple : http://localhost:4000/api/users?lng=-70&lat=25&max=10000. 
lng, lat and max(maxdistance) are the parametres that mongodb need to get the correspandant list of users(users who are near to (lng,lat)  dist<max
-try postman to interact with this api for the four http méthodes :get, post,put and delete.:use post first to add data to mongodb . 
-post for exemple : 
 {
  "name":"riya",
  "rank":"junior",
  "available":true,
   "geometry":{ "type":"point","coordinates":[-70,25]}
}


Client:
-the app includes also a frontend using ReactJS.it uses the fetch() méthode to get data from the server and displaying it.


How to install and use: 
1. Clone the project or download the zip
2. After pasting the project and changing the above changes  run **npm install**  to install all the dependencies for the server.
3. cd client and npm install to install all the dependencies for the client(react,react-dom and babel)
4.go to where mongodb is installed and in a cmd type: cd bin then type mongod
5. to run just the server: npm run server. to run just the client: npm run client. to run both server and client:npm run dev



