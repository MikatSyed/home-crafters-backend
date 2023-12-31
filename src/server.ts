import { v2 as cloudinary } from 'cloudinary';
import { Server } from 'http';
import app from './app';
import config from './config';

async function databaseConnection() {
  const server: Server = app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('Server closed');
      });
    }
    process.exit(1);
  };

  cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret,
  });

  const unexpectedErrorHandler = (error: unknown) => {
    console.log(error);
    exitHandler();
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    if (server) {
      server.close();
    }
  });
}

databaseConnection();
