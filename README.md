# Instruction
This is project demo how to interactive with bigchaindb server. We make demo base [Reactjs](https://reactjs.org) for client and javascript bigchaindb driver. Your can go in [docs](https://docs.bigchaindb.com/projects/js-driver/en/latest/index.html) for more how to use [js-bigchaindb-driver](https://github.com/bigchaindb/js-bigchaindb-driver). For more about bigchaind go [here](https://docs.bigchaindb.com/en/latest/).

# Installation and Usage
First, make sure you have a recent version of [Docker-compose installed](https://docs.docker.com/compose/install/) in your host.


### Running a Local Node with Docker Compose
Whenever you are ready, fire up a terminal and run:
```
    git clone https://github.com/bigchaindb/bigchaindb.git
    cd bigchaindb
    docker-compose build bigchaindb
```

This might take a few minutes, perfect moment for a coffee :)

Once docker-compose has build. This time to lauched all services.

```
    docker-compose up -d bdb
```

for more instruction go [here](https://docs.bigchaindb.com/projects/contributing/en/latest/dev-setup-coding-and-contribution-process/run-node-with-docker-compose.html).

### Clone and Experiment
You just lauched all services, included bigchaindb server. Then turn new tab of terminal(MacOS/linux) or cmd(windows) and clone example:
```
    git clone https://github.com/CongTran96/bigchaindb_example.git
```

make sure you installed [Node](https://nodejs.org/en/). Now, build the dependencies needed.

```
    cd bigchaindb_example/client
    npm build
```

Then run the web.
```
    npm run
```

The server has in `https://localhost:3000`. Have enjoy !!!