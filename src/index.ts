import DatabaseServices from './services/database';
import dotenv from 'dotenv';

dotenv.config()


console.log("starting the service ")
const databaseServices: DatabaseServices = new DatabaseServices();
const isSuccess: boolean = databaseServices.establishConnection();

console.log(isSuccess)


isSuccess ? console.log("connection done") : console.log("failed !")