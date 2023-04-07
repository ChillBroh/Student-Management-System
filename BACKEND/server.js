//assign dependencies to variables.
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();

//specify a port number to run(3000). if that is not available use any available port. ||operator
const PORT = process.env.PORT || 8070;
